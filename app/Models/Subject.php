<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Subject extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('default')
            ->singleFile();
    }

    protected $fillable = [
        'category_id',
        'status',
        'options',
    ];

    protected $casts = [
        'status' => 'boolean',
        'options' => 'array',
    ];

    public function scopeNotOwner($query)
    {
        return $query->where('team_id', '!=', Auth::user()->currentTeam->id);
    }

    public function scopeNotFlagged($query)
    {
        return $query->doesntHave('moderate');
    }

    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    public function scopeNotVotedOnByUser($query)
    {
        return $query->whereDoesntHave('depictions', function ($query) {
            $query->where('user_id', '=', Auth::user()->id);
        });
    }

    public function category(): belongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function team(): belongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function depictions(): hasMany
    {
        return $this->hasMany(Depiction::class);
    }

    public function moderate()
    {
        return $this->morphOne(Moderate::class, 'model');
    }
}
