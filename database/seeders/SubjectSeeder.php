<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Comment;
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

        User::factory()->withPersonalTeam()->count(5)->create();

        $subjects = Subject::factory(50)
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
        echo 'Populating';
        $subjects->each(function ($subject) {
            dump($subject->id);
            for ($x = 0; $x <= 10; $x++) {
                foreach ($subject->category->criterias as $criteria) {
                    $user = User::all()->random();
                    $subject->criterias()->attach($criteria, [
                        'user_id' => $user->id,
                        'score' => rand(0, 3),
                    ]);
                    Comment::factory()->for($user)->create(['subject_id' => $subject->id]);
                }
            }
        });
    }
}
