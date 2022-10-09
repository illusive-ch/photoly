<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'body',
        'user_id',
    ];

    public function subject(): belongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function user(): belongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function moderate()
    {
        return $this->morphOne(Moderate::class, 'model');
    }
}
