<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Jetstream\Events\TeamCreated;
use Laravel\Jetstream\Events\TeamDeleted;
use Laravel\Jetstream\Events\TeamUpdated;
use Laravel\Jetstream\Team as JetstreamTeam;
use Spark\Billable;

class Team extends JetstreamTeam
{
    use HasFactory;
    use Billable;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'personal_team' => 'boolean',
        'trial_ends_at' => 'datetime',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'personal_team',
    ];

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => TeamCreated::class,
        'updated' => TeamUpdated::class,
        'deleted' => TeamDeleted::class,
    ];

    public function stripeEmail()
    {
        return $this->owner->email;
    }

    public function subjects(): hasMany
    {
        return $this->hasMany(Subject::class);
    }

    public function credits(): hasMany
    {
        return $this->hasMany(Credit::class);
    }

    public function addCredit(float $amount, $note = null, $invoice = null)
    {
        return $this->credits()->firstOrCreate([
            'amount' => $amount,
            'note' => $note,
            'provider_id' => $invoice,
        ]);
    }

    public function debitCredit(float $amount, $note = null, $invoice = null)
    {
        return $this->addCredit($amount * -1, $note, $invoice);
    }

    public function creditBalance()
    {
        return $this->credits()->sum('amount');
    }
}
