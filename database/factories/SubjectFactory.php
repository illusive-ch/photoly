<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Subject;
use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subject>
 */
class SubjectFactory extends Factory
{
    public function configure()
    {
        return $this->afterCreating(function (Subject $subject) {
            $files = Storage::allFiles('/seed/');
            $randomFile = $files[rand(0, count($files) - 1)];

            $subject
                ->addMedia(Storage::path($randomFile))
                ->preservingOriginal()
                ->toMediaCollection();
        });
//        return $this->afterCreating(function (Subject $subject) {
//            $rand = $this->faker->randomNumber();
//            $url = "https://source.unsplash.com/random/?people&cache={$rand}";
//            $subject
//                ->addMediaFromUrl($url)
//                ->toMediaCollection();
//        });
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => Category::factory(),
            'team_id' => Team::factory(),
            'status' => $this->faker->boolean(90),
        ];
    }
}
