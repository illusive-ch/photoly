<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Criteria extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function category(): belongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
