<?php

namespace App\Events;

use App\Models\Subject;
use App\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class DepictionReceivedOnSubject implements ShouldQueue
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    use InteractsWithQueue, Queueable;

    public Subject $subject;

    public User $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Subject $subject, User $user)
    {
        $this->subject = $subject;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
//    public function broadcastOn()
//    {
//        return new PrivateChannel('channel-name');
//    }
}
