<?php

namespace Tests\Feature;

use App\Actions\Subject\DepictSubject;
use App\Models\Category;
use App\Models\Criteria;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class CreditTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function a_team_can_be_given_credits()
    {
        $user = User::factory()->withPersonalTeam()->create();

        $this->actingAs($user);

        $team = Auth::user()->currentTeam;

        $team->addCredit(1);

        $this->assertEquals(1, $team->creditBalance());
    }

    /**
     * @test
     */
    public function a_team_can_have_credits_taken_away()
    {
        $user = User::factory()->withPersonalTeam()->create();

        $this->actingAs($user);

        $team = Auth::user()->currentTeam;

        $team->addCredit(10);

        $this->assertEquals(10, $team->creditBalance());

        $team->debitCredit(5);

        $this->assertEquals(5, $team->creditBalance());
    }

    /**
     * @test
     */
    public function when_a_user_votes_they_get_credits()
    {
        $user = User::factory()->withPersonalTeam()->create();

        $this->actingAs($user);

        $team = Auth::user()->currentTeam;
        dump($team->id);
        $category = Category::factory()->create();

        $subject = Subject::factory()->for($category)->create();

        $criterias = Criteria::factory(3)
            ->for($category)
            ->create();

        $depictionForm['vote'] = [
            1 => [
                'name' => 'Very',
                'score' => 3,
            ],
            2 => [
                'name' => 'Yes',
                'score' => 2,
            ],
            3 => [
                'name' => 'Very',
                'score' => 3,
            ],
        ];

        $depictionForm['comment'] = null;

        $this->assertEquals(0, $team->creditBalance());

        $subject = (new DepictSubject())($depictionForm, $subject);

        $this->assertEquals(config('photoly.credit_per_depiction'), $team->fresh()->creditBalance());
    }
}
