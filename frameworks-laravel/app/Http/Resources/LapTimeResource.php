<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LapTimeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'driver_id' => $this->driver_id,
            'circuit_id' => $this->circuit_id,
            'lap_number' => $this->lap_number,
            'time_ms' => $this->time_ms,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
