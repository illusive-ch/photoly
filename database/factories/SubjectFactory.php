<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Subject;
use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subject>
 */
class SubjectFactory extends Factory
{
    public function configure()
    {
        return $this->afterCreating(function (Subject $subject) {
            $rand = $this->faker->randomNumber();
            $url = "https://source.unsplash.com/random/?people&cache={$rand}";
            $subject
                ->addMediaFromUrl($url)
                ->toMediaCollection();
        });
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
            'status' => $this->faker->boolean(),
        ];
    }
}
