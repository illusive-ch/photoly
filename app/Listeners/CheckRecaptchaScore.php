<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class CheckRecaptchaScore implements ShouldQueue
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
        $depiction = $event->depiction;

        $args = [
            'secret' => config('google.recaptcha_key'),
            'response' => $depiction->recaptcha_key,
        ];

        $response = Http::get('https://www.google.com/recaptcha/api/siteverify', $args);

        if (! $response->json('success')) {
            Log::error('Invalid response from google recaptcha');

            return;
        }

        $spamScore = $response->json('score');

        //        //moderate user if needed
        Log::debug('Spam Score For Depiction: '.$depiction->id.' | '.$spamScore);

        $depiction->recaptcha_score = $spamScore;
        $depiction->save();

        if ($spamScore <= 0.5) {
            $depiction->user->moderate()->create([
                'reason' => 'possible spammer',
            ]);
            $depiction->moderate()->create([
                'reason' => 'possible spam',
            ]);
        }
    }
}
