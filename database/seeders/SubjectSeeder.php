<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Depiction;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::factory()->withPersonalTeam()->count(10)->create();

        $subjects = Subject::factory(10)
            ->state(new Sequence(
                fn ($sequence) => ['category_id' => Category::all()->random()->id],
            ))
            ->state(new Sequence(
                fn ($sequence) => ['team_id' => User::find(1)->currentTeam->id],
            ))
            ->create();

        $this->populate($subjects);

        $subjects = Subject::factory(100)
            ->state(new Sequence(
                fn ($sequence) => ['category_id' => Category::all()->random()->id],
            ))
            ->state(new Sequence(
                fn ($sequence) => ['team_id' => $users->random()->currentTeam->id],
            ))
            ->create();
    }

    public function populate(Collection $subjects): void
    {
        $subjects->each(function ($subject) {
            for ($x = 0; $x <= 10; $x++) {
                $depiction = Depiction::factory()->for($subject)->state(new Sequence(
                    fn ($sequence) => ['user_id' => User::all()->random()->id],
                ))->hasComment(1)->create();
                foreach ($subject->category->criterias as $criteria) {
                    $depiction->criterias()->attach($criteria, [
                        'score' => rand(0, 3),
                    ]);
                }
                $tags = $depiction->subject->category->tags;
                for ($t = 0; $t <= 3; $t++) {
                    $depiction->tags()->attach($tags->random()->id);
                }
            }
        });
    }
}
