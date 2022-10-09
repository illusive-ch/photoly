<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (env('local')) {
            $this->call([
                ClearStorageSeeder::class,
            ]);
        }

        $user = User::factory()
            ->withPersonalTeam()
            ->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);

        $subjects = Subject::factory(10)
            ->for($user->currentTeam)
            ->state(new Sequence(
                fn ($sequence) => ['category_id' => Category::all()->random()->id],
            ))
            ->create();

        $subjects->each(function ($subject) {
            $criterias = $subject->category->criterias;
            for ($x = 0; $x <= 10; $x++) {
                foreach ($criterias as $criteria) {
                    $user = User::factory()->create();
                    $subject->criterias()->attach($criteria, [
                        'user_id' => $user->id,
                        'score' => rand(0, 3),
                    ]);
                    Comment::factory()->for($user)->create(['subject_id' => $subject->id]);
                }
            }
        });

        User::factory(10)->withPersonalTeam()->create();
    }
}
