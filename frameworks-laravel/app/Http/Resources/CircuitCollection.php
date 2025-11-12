<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CircuitCollection extends ResourceCollection
{
    public $collects = CircuitResource::class;

    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }

    public function with(Request $request): array
    {
        return [
            'meta' => [
                'count' => $this->collection->count(),
            ],
        ];
    }
}
