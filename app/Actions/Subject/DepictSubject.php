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
    public function __invoke($depictionForm, Subject $subject, $user = false, $spamScore = 0): Subject
    {
        $user = $user === false ? Auth::user() : $user;

        collect($depictionForm['vote'])->each(function ($vote, $key) use ($subject) {
            $subject->criterias()->attach($key, [
                'user_id' => Auth::user()->id,
                'score' => $vote['score'],
            ]);
        });

        collect($depictionForm['tags'])->each(function ($tag, $key) use ($subject) {
            $subject->tags()->attach($tag['id'], [
                'user_id' => Auth::user()->id,
            ]);
        });

        if ($depictionForm['comment']) {
            $subject->comments()->create([
                'user_id' => Auth::user()->id,
                'body' => $depictionForm['comment'],
            ]);
        }

        //moderate user if needed
        if ($spamScore <= 0.5) {
            $user = Auth::user();
            $user->moderate()->create([
                'reason' => 'possible spammer',
            ]);
        }

        DepictionReceivedOnSubject::dispatch($subject, $user);

        return $subject;
    }
}
