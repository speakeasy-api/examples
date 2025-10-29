<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    protected $fillable = ['name', 'code'];

    public function lapTimes()
    {
        return $this->hasMany(LapTime::class);
    }
}
