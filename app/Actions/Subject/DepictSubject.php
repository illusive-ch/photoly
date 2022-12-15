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
        $depiction = $user->depictions()->create(['subject_id' => $subject->id]);

        collect($depictionForm['vote'])->each(function ($vote, $key) use ($depiction) {
            $depiction->criterias()->attach($key, [
                'score' => $vote['score'],
            ]);
        });

        $depiction->tags()->sync(
            collect($depictionForm['tags'])->pluck('id')
        );
//        collect($depictionForm['tags'])->each(function ($tag, $key) use ($depiction) {
//            $depiction->tags()->attach($tag['id']);
//        });

        if ($depictionForm['comment']) {
            $depiction->comment()->create([
                'body' => $depictionForm['comment'],
            ]);
        }

        //moderate user if needed
        if ($spamScore <= 0.5) {
            $user->moderate()->create([
                'reason' => 'possible spammer',
            ]);
            $depiction->moderate()->create([
                'reason' => 'possible spam',
            ]);
        }

        DepictionReceivedOnSubject::dispatch($depiction);

        return $depiction;
    }
}
