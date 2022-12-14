<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class TopUpCreditBalance implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $lineItems = $event->invoice->invoiceItems();
        $team = $event->billable;
        $invoiceId = $event->invoice->id;
        Log::debug($event->invoice);

        if ($event->invoice->billing_reason === 'subscription_create') {
            Log::debug('Adding credits for plan');
            $team->addCredit($team->sparkPlan()->options['depictions'], "Plan Top Up: {$team->sparkPlan()->name}", $invoiceId);

            return;
        }

        collect($lineItems)->each(function ($lineItem) use ($team, $invoiceId) {
            $package = collect(config('credit.billables.team.plans'))
                        ->firstWhere('gateway_id', $lineItem->price->id);

            if ($package) {
                Log::debug('Adding credits for one time');
                $team->addCredit($package['options']['credits'], 'One time purchase '.$package['name'], $invoiceId);
            }
        });
    }
}
