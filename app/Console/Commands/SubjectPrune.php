<?php

namespace App\Console\Commands;

use App\Models\Subject;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Builder;

class SubjectPrune extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'subject:prune';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'If a user has not logged in x days prune the status from active';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $subjects = Subject::query()
            ->active()
            ->whereHas('team', function (Builder $query) {
                $query->where('last_seen', '<=', now()->subDays(config('photoly.auto_prune_days')));
            })
            ->update(['status' => false]);

        return Command::SUCCESS;
    }
}
