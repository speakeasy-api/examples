<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Driver extends Model
{
    protected $fillable = ['name', 'code'];

    public function races(): BelongsToMany
    {
        return $this->belongsToMany(Race::class)
            ->withPivot('position')
            ->withTimestamps();
    }
}
