<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
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

        $this->call([
            SubjectSeeder::class,
        ]);
    }
}
