<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Subject;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function a_comment_belongs_to_a_subject()
    {
        $subject = Subject::factory()->create();

        $comment = Comment::factory()->for($subject)->create();

        $this->assertInstanceOf(Subject::class, $comment->subject);
    }

    /**
     * @test
     */
    public function a_subject_can_have_many_comments()
    {
        $subject = Subject::factory()->create();

        $comment = Comment::factory(3)->for($subject)->create();

        $this->assertCount(3, $subject->comments);
    }
}
