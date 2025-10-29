<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Circuit extends Model
{
    protected $fillable = ['name', 'location'];

    public function lapTimes()
    {
        return $this->hasMany(LapTime::class);
    }
}
