<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('criterias', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('description');
            $table->timestamps();
        });
        $this->seed();
    }

    private function seed()
    {
        $criterias = [
            'Business' => [
                ['name' => 'Competent', 'description' => 'Having the necessary ability, knowledge, or skill to do something successfully.'],
                ['name' => 'Likable', 'description' => 'Pleasant, friendly, and easy to like.'],
                ['name' => 'Influential', 'description' => 'Having great influence on someone or something.'],
            ],
            'Social' => [
                ['name' => 'Confident', 'description' => 'Feeling or showing confidence in oneself; self-assured.'],
                ['name' => 'Authentic', 'description' => 'Does this person look real & genuine from their photo?'],
                ['name' => 'Fun', 'description' => 'Do they look like they would be fun to be around?'],
            ],
            'Dating' => [
                ['name' => 'Smart', 'description' => 'Does this person look like they are insightful and/or Perceptive'],
                ['name' => 'Trustworthy', 'description' => 'Able to be relied on as honest or truthful.'],
                ['name' => 'Attractive', 'description' => 'Appealing to look at and easy on the eyes.'],
            ],
        ];

        collect($criterias)->each(function ($criterias, $categoryName) {
            $category = \App\Models\Category::where('name', $categoryName)->first();
            collect($criterias)->each(function ($criteria) use ($category) {
                $category->criterias()->create($criteria);
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('criterias');
    }
};
