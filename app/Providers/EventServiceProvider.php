<?php

namespace App\Providers;

use App\Events\DepictionReceivedOnSubject;
use App\Listeners\GiveCreditToDepictor;
use App\Listeners\RemoveCreditFromBalance;
use App\Listeners\TopUpCreditBalance;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Spark\Events\PaymentSucceeded;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        PaymentSucceeded::class => [
            TopUpCreditBalance::class,
        ],
        DepictionReceivedOnSubject::class => [
            RemoveCreditFromBalance::class,
            GiveCreditToDepictor::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
