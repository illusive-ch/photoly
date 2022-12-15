<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Moderate;
use App\Models\Subject;
use App\Services\ImageModerationService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ModerationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function a_subject_can_be_moderated()
    {
        $category = Category::factory()->create();

        $subject = Subject::factory()->for($category)->create();

        $subject->moderate()->create([
            'reason' => 'nudes',
        ]);

        $this->assertInstanceOf(Moderate::class, $subject->moderate);

        $this->assertEquals('nudes', $subject->moderate->reason);
    }

    /**
     * @test
     */
    public function a_depiction_on_a_subject_can_be_moderated()
    {
//        $category = Category::factory()->create();
//
//        $subject = Subject::factory()->for($category)->create();

        $comment = Comment::factory()->create();

        $comment->depiction->moderate()->create([
            'reason' => 'bad comment',
        ]);

        $this->assertInstanceOf(Moderate::class, $comment->depiction->moderate);

        $this->assertEquals('bad comment', $comment->depiction->moderate->reason);
    }

    /**
     * @test
     */
    public function an_image_can_be_moderated()
    {
        $url = 'https://media.sciencephoto.com/c0/32/83/80/c0328380-800px-wm.jpg';

        $subject = Subject::factory()->create();

        $subject->addMediaFromUrl($url)->toMediaCollection();

        $media = $subject->getFirstMedia();

        $moderation = new ImageModerationService($media->getPath(), $media->size);

        $moderation->detectLabels();

        $this->assertTrue($moderation->nudity());
    }

    /**
     * @test
     */
    public function an_image_can_be_moderated_fishnet_vagina()
    {
        $url = 'https://erowall.com/wallpapers/large/29233.jpg';

        $subject = Subject::factory()->create();

        $subject->addMediaFromUrl($url)->toMediaCollection();

        $media = $subject->getFirstMedia();

        $moderation = new ImageModerationService($media->getPath(), $media->size);

        $moderation->detectLabels();

        $this->assertTrue($moderation->nudity());
    }

    /**
     * @test
     */
    public function an_image_can_be_moderated_fishnet_no_vagina()
    {
        $url = 'https://di.phncdn.com/videos/202101/05/379709302/thumbs_30/(m=eaAaGwObaaaa)(mh=l9ZISehSTMijOtZ_)15.jpg';

        $subject = Subject::factory()->create();

        $subject->addMediaFromUrl($url)->toMediaCollection();

        $media = $subject->getFirstMedia();

        $moderation = new ImageModerationService($media->getPath(), $media->size);

        $moderation->detectLabels();

        $this->assertTrue($moderation->nudity());
    }

    /**
     * @test
     */
    public function an_image_can_not_be_moderated_bikini()
    {
        $url = 'https://pagesix.com/wp-content/uploads/sites/3/2020/04/padma-lakshmi-bikini-1.jpg?quality=80&strip=all&w=1024';

        $subject = Subject::factory()->create();

        $subject->addMediaFromUrl($url)->toMediaCollection();

        $media = $subject->getFirstMedia();

        $moderation = new ImageModerationService($media->getPath(), $media->size);

        $moderation->detectLabels();

        $this->assertFalse($moderation->nudity());
    }

    /**
     * @test
     */
    public function an_image_with_text_can_be_moderated()
    {
        $url = 'https://res.cloudinary.com/sjm/image/upload/v1630889392/HELLO/Hello_Web_Banner-04.png';

        $subject = Subject::factory()->create();

        $subject->addMediaFromUrl($url)->toMediaCollection();

        $media = $subject->getFirstMedia();

        $moderation = new ImageModerationService($media->getPath(), $media->size);

        $moderation->detectText();

        $this->assertTrue($moderation->words());
    }
}
