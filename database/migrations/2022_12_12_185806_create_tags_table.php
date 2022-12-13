<?php

use App\Models\Category;
use App\Models\Tag;
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
        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id');
            $table->string('name');
            $table->timestamps();
        });
        $this->seed();
    }

    private function seed()
    {
        $seed = [
            'Business' => [
                'great photo',
                'amazing background',
                'nice smile',
                'professional',
                'aggressive',
                'arrogant',
                'bland',
                'fake',
                'forced smile',
                'intense',
                'timid',
                'sad',
                'tired',
                'too flirty',
                'uncomfortable',
                'unprofessional',
                'young',
            ],
            'Social' => [
                'great photo',
                'amazing background',
                'nice smile',
                'aggressive',
                'arrogant',
                'bland',
                'fake',
                'forced smile',
                'intense',
                'timid',
                'sad',
                'tired',
                'uncomfortable',
                'young',
            ],
            'Dating' => [
                'great photo',
                'amazing background',
                'nice smile',
                'would date',
                'beautiful',
                'aggressive',
                'arrogant',
                'bland',
                'fake',
                'forced smile',
                'intense',
                'timid',
                'sad',
                'tired',
                'uncomfortable',
                'young',
            ],
        ];

        collect($seed)->each(function ($category, $key) {
            $cat = Category::firstWhere(['name' => $key]);
            collect($category)->each(function ($name) use ($cat) {
                Tag::create([
                    'category_id' => $cat->id,
                    'name' => $name,
                ]);
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
        Schema::dropIfExists('tags');
    }
};
