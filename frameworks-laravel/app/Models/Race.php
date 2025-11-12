<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Race extends Model
{
    protected $fillable = [
        'name',
        'circuit_id',
        'race_date',
        'season',
    ];

    protected $casts = [
        'race_date' => 'date',
    ];

    public function circuit(): BelongsTo
    {
        return $this->belongsTo(Circuit::class);
    }

    public function drivers(): BelongsToMany
    {
        return $this->belongsToMany(Driver::class)
            ->withPivot('position')
            ->withTimestamps();
    }
}
