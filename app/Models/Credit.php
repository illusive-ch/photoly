<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Credit extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'note',
        'provider_id',
    ];

    public function team(): belongsTo
    {
        return $this->belongsTo(Team::class);
    }
}
