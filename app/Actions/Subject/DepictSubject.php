<?php

namespace App\Actions\Subject;

use App\Events\DepictionReceivedOnSubject;
use App\Models\Subject;
use Auth;

class DepictSubject
{
    /**
     * Create a new step for a test.
     */
    public function __invoke($depictionForm, Subject $subject, $user = false): Subject
    {
        $user = $user === false ? Auth::user() : $user;

        collect($depictionForm['vote'])->each(function ($vote, $key) use ($subject) {
            $subject->criterias()->attach($key, [
                'user_id' => Auth::user()->id,
                'score' => $vote['score'],
            ]);
        });

        if ($depictionForm['comment']) {
            $subject->comments()->create([
                'user_id' => Auth::user()->id,
                'body' => $depictionForm['comment'],
            ]);
        }

        DepictionReceivedOnSubject::dispatch($subject, $user);

        return $subject;
    }
}
