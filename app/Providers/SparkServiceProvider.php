<?php

namespace App\Providers;

use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\ValidationException;
use Laravel\Cashier\Cashier;
use Spark\Plan;
use Spark\Spark;

class SparkServiceProvider extends ServiceProvider
{
    public function register()
    {
        Spark::ignoreMigrations();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Cashier::useCustomerModel(Team::class);

        // Resolve the current team...
        Spark::billable(Team::class)->resolve(function (Request $request) {
            return $request->user()->currentTeam;
        });

        // Verify that the current user owns the team...
        Spark::billable(Team::class)->authorize(function (Team $billable, Request $request) {
            return $request->user() &&
                $request->user()->id == $billable->user_id;
        });

        Spark::billable(Team::class)->checkPlanEligibility(function (Team $billable, Plan $plan) {
            $currentBalance = $billable->creditBalance();
            $allowedNow = $billable->sparkPlan()->options['depictions'];
            $allowedAfter = $plan->options['depictions'];

            if ($allowedAfter > $allowedNow) {
                return;
            }

            //downgrading plan check if credits have been used
            $difference = $allowedNow - $allowedAfter;
            if (($currentBalance - $difference) < 0) {
                throw ValidationException::withMessages([
                    'plan' => 'You have already used all your credits this month.',
                ]);
            }
        });
    }
}
