<?php

namespace App\Actions\Subject;

use App\Events\SubjectCreated;
use App\Models\Subject;
use Auth;

class CreateNewSubject
{
    /**
     * Create a new step for a test.
     */
    public function __invoke($subjectForm, $team = false): Subject
    {
        $team = $team ?: Auth::user()->currentTeam;

        $media = $subjectForm['media'] ?? false;

        $upload = $subjectForm['upload'] ?? false;

        unset($subjectForm['media']);

        unset($subjectForm['upload']);

        $subject = $team->subjects()->create($subjectForm);

        if ($upload) {
            $subject
                ->addFromMediaLibraryRequest($media)
                ->toMediaCollection();
        } else {
            $subject->addMedia($media['path'])->preservingOriginal()->toMediaCollection();
        }

        SubjectCreated::dispatch($subject);

        return $subject;
    }
}
