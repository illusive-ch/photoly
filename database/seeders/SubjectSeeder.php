<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Depiction;
use App\Models\Subject;
use App\Models\Team;
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
        $user = User::find(1);

        User::factory()->withPersonalTeam()->count(20)->create();

        $subjects = Subject::factory(200)
            ->state(new Sequence(
                fn ($sequence) => ['category_id' => Category::all()->random()->id],
            ))
            ->state(new Sequence(
                fn ($sequence) => ['team_id' => Team::all()->random()->id],
            ))
            ->create();

        $this->populate($subjects);
    }

    public function populate(Collection $subjects): void
    {
        $subjects->each(function ($subject) {
            for ($x = 0; $x <= 10; $x++) {
                $depiction = Depiction::factory()->for($subject)->state(new Sequence(
                    fn ($sequence) => ['user_id' => User::all()->random()->id],
                ))->create();
                foreach ($subject->category->criterias as $criteria) {
                    $depiction->criterias()->attach($criteria, [
                        'score' => rand(0, 3),
                    ]);
                }
                Comment::factory()->for($depiction)->create();
                $tags = $depiction->subject->category->tags;
                for ($t = 0; $t <= 3; $t++) {
                    $depiction->tags()->attach($tags->random()->id);
                }
            }
        });
    }
}
