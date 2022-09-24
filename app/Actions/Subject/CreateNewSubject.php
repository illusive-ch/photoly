<?php

namespace App\Actions\Subject;

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
//        dd($subjectForm);
//        dd($subjectForm);
        $subject = $team->subjects()->create($subjectForm);

        if ($upload) {
            $subject
                ->addFromMediaLibraryRequest($media)
                ->toMediaCollection();
        } else {
            $subject->addMedia($media['path'])->preservingOriginal()->toMediaCollection();
        }

        return $subject;
    }
}
