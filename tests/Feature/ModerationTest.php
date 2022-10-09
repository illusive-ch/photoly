<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Moderate;
use App\Models\Subject;
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
    public function a_comment_on_a_subject_can_be_moderated()
    {
        $category = Category::factory()->create();

        $subject = Subject::factory()->for($category)->create();

        $comment = Comment::factory()->for($subject)->create();

        $comment->moderate()->create([
            'reason' => 'bad comment',
        ]);

        $this->assertInstanceOf(Moderate::class, $comment->moderate);

        $this->assertEquals('bad comment', $comment->moderate->reason);
    }
}
