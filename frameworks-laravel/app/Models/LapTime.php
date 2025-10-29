<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LapTime extends Model
{
    protected $fillable = ['driver_id', 'circuit_id', 'lap_number', 'time_ms'];

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function circuit()
    {
        return $this->belongsTo(Circuit::class);
    }
}
