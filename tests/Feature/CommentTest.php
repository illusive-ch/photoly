<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Depiction;
use App\Models\Subject;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function a_comment_belongs_to_a_depiction()
    {
        $subject = Subject::factory()->create();
        $depiction = Depiction::factory()->create();
        $comment = Comment::factory()->for($depiction)->create();

        $this->assertInstanceOf(Depiction::class, $comment->depiction);
    }
}
