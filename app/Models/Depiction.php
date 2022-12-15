<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Depiction extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_id',
        'recaptcha',
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

    public function comment()
    {
        return $this->hasOne(Comment::class);
    }

    public function criterias(): belongsToMany
    {
        return $this->belongsToMany(Criteria::class)->withPivot(['score'])->withTimestamps();
    }

    public function tags(): belongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function scopeRecent($query)
    {
        return $query->where('created_at', '>=', now()->subHours(12));
    }
}
