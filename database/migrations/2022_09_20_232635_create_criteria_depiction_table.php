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
        Schema::create('criteria_depiction', function (Blueprint $table) {
            $table->id();
            $table->foreignId('criteria_id')->constrained()->cascadeOnDelete();
            $table->foreignId('depiction_id')->constrained()->cascadeOnDelete();
            $table->tinyInteger('score');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('criteria_subject');
    }
};
