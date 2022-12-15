<?php

namespace App\Listeners;

use App\Events\DepictionReceivedOnSubject;
use Illuminate\Contracts\Queue\ShouldQueue;

class RemoveCreditFromBalance implements ShouldQueue
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
        $team = $event->depiction->subject->team;
        $team->debitCredit(1, 'Vote Received', 'depiction_'.$event->depiction->id);
    }
}
