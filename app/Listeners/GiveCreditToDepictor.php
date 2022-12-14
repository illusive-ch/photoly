<?php

namespace App\Listeners;

class GiveCreditToDepictor
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
        $team = $event->depiction->user->currentTeam;
        $team->addCredit((float) config('photoly.credit_per_depiction'), 'Voted', 'depiction_'.$event->depiction->id);
    }
}
