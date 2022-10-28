<?php

namespace App\Listeners;

use App\Events\SubjectCreated;
use App\Services\ImageModerationService;

class ModerateImage
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
    public function handle(SubjectCreated $event)
    {
        $subject = $event->subject;

        $media = $subject->getFirstMedia();

        $moderation = new ImageModerationService($media->getPath(), $media->size);

        $moderation->detectLabels();
        if ($moderation->nudity()) {
            $subject->moderate()->create([
                'reason' => 'found nudity in photo',
            ]);
        }

        $moderation->detectText();
        if ($moderation->words()) {
            $subject->moderate()->create([
                'reason' => 'Text on image',
            ]);
        }
    }
}
