<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class UnsplashImageStealer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:images {amount=10}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed images for profile pictures';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $url = 'https://source.unsplash.com/random/?people&cache=';

        for ($x = 0; $x < $this->argument('amount'); $x++) {
            $cache[$x] = $x;
        }

        $images = $this->withProgressBar($cache, function ($int) use ($url) {
            $response = Http::get($url.$int);
            Storage::put('/seed/'.strtotime('now').'.jpg', $response->body());
            sleep(1);
        });

        return Command::SUCCESS;
    }
}
