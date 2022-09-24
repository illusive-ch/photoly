<?php

namespace App\Listeners;

use App\Events\DepictionReceivedOnSubject;

class RemoveCreditFromBalance
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
     * @param  \App\Events\DepictionReceivedOnSubject  $event
     * @return void
     */
    public function handle(DepictionReceivedOnSubject $event)
    {
        $team = $event->subject->team;
        $team->debitCredit(1, 'Vote Received');
    }
}
