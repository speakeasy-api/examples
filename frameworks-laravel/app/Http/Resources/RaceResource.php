<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RaceResource extends JsonResource
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
            'name' => $this->name,
            'race_date' => $this->race_date->format('Y-m-d'),
            'season' => $this->season,
            'created_at' => $this->created_at->toIso8601String(),
            'updated_at' => $this->updated_at->toIso8601String(),
            'links' => [
                'self' => url("/api/races/{$this->id}"),
                'circuit' => url("/api/circuits/{$this->circuit_id}"),
                'drivers' => url("/api/drivers?race={$this->id}"),
            ],
        ];
    }
}
