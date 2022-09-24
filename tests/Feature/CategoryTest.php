<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Criteria;
use App\Models\Subject;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function if_a_category_is_deleted_subjects_get_deleted()
    {
        $category = Category::factory()->create();
        $subject = Subject::factory()->for($category)->create();

        $this->assertCount(1, $category->subjects);

        $category->delete();

        $this->assertDatabaseCount('subjects', 0);
    }

    /**
     * @test
     */
    public function a_category_has_criteria()
    {
        $category = Category::factory()->create();
        $criterias = Criteria::factory()->for($category)->create();
        $this->assertInstanceOf(Criteria::class, $category->fresh()->criterias->first());
    }

    /**
     * @test
     */
    public function a_category_has_many_criteria()
    {
        $category = Category::factory()->create();
        $criterias = Criteria::factory(3)->for($category)->create();
        $this->assertCount(3, $category->criterias);
    }
}
