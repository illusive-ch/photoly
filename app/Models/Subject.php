<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Subject extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'category_id',
        'status',
        'options',
    ];

    protected $casts = [
        'status' => 'boolean',
        'options' => 'array',
    ];

    public function category(): belongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function team(): belongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function criterias(): belongsToMany
    {
        return $this->belongsToMany(Criteria::class)->withPivot(['score'])->withTimestamps();
    }

    public function comments(): hasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function moderate()
    {
        return $this->morphOne(Moderate::class, 'model');
    }
}
