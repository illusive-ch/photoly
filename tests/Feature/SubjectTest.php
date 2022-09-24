<?php

namespace Tests\Feature;

use App\Actions\Subject\CreateNewSubject;
use App\Actions\Subject\DepictSubject;
use App\Models\Category;
use App\Models\Criteria;
use App\Models\Subject;
use App\Models\Team;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SubjectTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function a_subject_belongs_to_a_category()
    {
        $category = Category::factory()->create();

        $subject = Subject::factory()->for($category)->create();

        $this->assertInstanceOf(Category::class, $subject->category);
    }

    /**
     * @test
     */
    public function a_subject_can_be_created()
    {
        $category = Category::factory()->create();

        $subjectForm = Subject::factory()->for($category)->make()->toArray();

        (new CreateNewSubject)($subjectForm, Team::factory()->create());

        $this->assertCount(1, $category->subjects);
    }

    /**
     * @test
     */
    public function a_subject_belongs_to_a_team()
    {
        $team = Team::factory()->create();

        $subject = Subject::factory()->for($team)->create();

        $this->assertInstanceOf(Team::class, $subject->team);
    }

    /**
     * @test
     */
    public function a_user_can_create_a_new_subject()
    {
        $this->actingAs($user = User::factory()->withPersonalTeam()->create());

        $subjectForm = Subject::factory()->make();

        (new CreateNewSubject)($subjectForm->toArray());

        $this->assertCount(1, $user->currentTeam->subjects);
    }

    /**
     * @test
     */
    public function a_user_can_create_a_new_subject_with_image()
    {
        $image = file_get_contents('https://logos-download.com/wp-content/uploads/2016/09/Laravel_logo.png');

        $path = storage_path('app/public/a.png');

        file_put_contents($path, $image);

        $this->actingAs($user = User::factory()->withPersonalTeam()->create());

        $subjectForm = Subject::factory()->make();

        $subjectForm['media'] = $path;

        $subject = (new CreateNewSubject)($subjectForm->toArray());

        $this->assertCount(1, $subject->fresh()->getMedia());
    }

    /**
     * @test
     */
    public function a_subject_can_be_depicted()
    {
        $user = User::factory()->withPersonalTeam()->create();

        $this->actingAs($user);

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

        $subject = (new DepictSubject())($depictionForm, $subject);

        $this->assertCount(1, $subject->criterias);
    }
}
