<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DumpEnv extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:env';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Dump enviroment variables';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        dump($_ENV);

        return Command::SUCCESS;
    }
}
