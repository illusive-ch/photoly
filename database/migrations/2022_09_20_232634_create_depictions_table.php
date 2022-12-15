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
        Schema::create('depictions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subject_id');
            $table->foreignId('user_id');
            $table->string('recaptcha_key', 1000)->nullable();
            $table->float('recaptcha_score')->nullable();
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
        Schema::dropIfExists('depictions');
    }
};
