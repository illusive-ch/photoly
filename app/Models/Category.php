<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function subjects(): hasMany
    {
        return $this->hasMany(Subject::class);
    }

    public function criterias(): hasMany
    {
        return $this->hasMany(Criteria::class);
    }

    public function tags(): hasMany
    {
        return $this->hasMany(Tag::class);
    }
}
