<?php

namespace App\Actions\Subject;

use App\Models\Subject;

class PauseSubject
{
    /**
     * Create a new step for a test.
     */
    public function __invoke(Subject $subject): Subject
    {
        $subject->status = false;

        $subject->save();

        return $subject;
    }
}
