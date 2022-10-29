<?php

namespace Tests\Feature;

use App\Models\Subject;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SubjectPruneTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function if_a_user_log_in_14_days_keeps_subject()
    {
        $subject = Subject::factory()->create([
            'status' => true,
        ]);

        $subject->team->last_seen = now();

        $subject->team->save();

        $this->assertTrue($subject->fresh()->status);

        $this->artisan('subject:prune')->assertExitCode(0);

        $this->assertTrue($subject->fresh()->status);
    }

    /**
     * @test
     */
    public function if_a_user_not_log_in_14_days_deactivates_subject()
    {
        $subject = Subject::factory()->create([
            'status' => true,
        ]);

        $subject->team->last_seen = now()->subDays(config('photoly.auto_prune_days') + 1);

        $subject->team->save();

        $this->assertTrue($subject->fresh()->status);

        $this->artisan('subject:prune')->assertExitCode(0);

        $this->assertFalse($subject->fresh()->status);
    }
}
