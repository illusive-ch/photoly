<?php

namespace Database\Factories;

use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TeamFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Team::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->company(),
            'user_id' => User::factory(),
            'personal_team' => true,
        ];
    }

    public function withSubscription($planId = null)
    {
        return $this->afterCreating(function ($user) use ($planId) {
            $subscription = $user->subscriptions()->create([
                'name' => 'default',
                'stripe_id' => Str::random(10),
                'stripe_status' => 'active',
                'stripe_price' => $planId,
                'quantity' => 1,
                'trial_ends_at' => null,
                'ends_at' => null,
            ]);

            $subscription->items()->create([
                'stripe_id' => Str::random(10),
                'stripe_product' => Str::random(10),
                'stripe_price' => $planId,
                'quantity' => 1,
            ]);
        });
    }
}
