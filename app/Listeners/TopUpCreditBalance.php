<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Log;

class TopUpCreditBalance
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
        Log::debug($event);

        $depictions = $event->billable->sparkPlan()->options['depictions'];

        $event->billable->addCredit($depictions, "Plan Top Up: {$event->billable->sparkPlan()->name}");
    }
}
