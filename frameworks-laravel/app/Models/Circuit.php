<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Circuit extends Model
{
    protected $fillable = ['name', 'location'];

    public function races(): HasMany
    {
        return $this->hasMany(Race::class);
    }
}
