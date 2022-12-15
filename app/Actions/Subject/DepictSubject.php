<?php

namespace App\Actions\Subject;

use App\Events\DepictionReceivedOnSubject;
use App\Models\Depiction;
use App\Models\Subject;
use Auth;

class DepictSubject
{
    /**
     * Create a new step for a test.
     */
    public function __invoke($depictionForm, Subject $subject, $user = false, $spamScore = 0): Depiction
    {
        $user = $user === false ? Auth::user() : $user;

        //create new depiction
        $depiction = $user->depictions()->create([
            'subject_id' => $subject->id,
            'recaptcha_key' => $depictionForm['recaptcha'],
        ]);

        $data = collect($depictionForm['vote'])->map(function ($vote, $key) {
            return $key = ['score' => $vote['score']];
        });

        $depiction->criterias()->sync($data);

        $depiction->tags()->sync(
            collect($depictionForm['tags'])->pluck('id')
        );

        if ($depictionForm['comment']) {
            $depiction->comment()->create([
                'body' => $depictionForm['comment'],
            ]);
        }

        DepictionReceivedOnSubject::dispatch($depiction);

        return $depiction;
    }
}
