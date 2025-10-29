<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class LapTimeCollection extends ResourceCollection
{
    /**
     * The resource that this resource collects.
     *
     * This ensures each item is transformed by LapTimeResource.
     */
    public $collects = LapTimeResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // By default, ResourceCollection will map each item using $collects
        // Returning parent::toArray preserves Laravel's standard shape
        return parent::toArray($request);
    }

    /**
     * Get additional data that should be returned with the resource array.
     *
     * @return array<string, mixed>
     */
    public function with(Request $request): array
    {
        return [
            'meta' => [
                'count' => $this->collection->count(),
            ],
        ];
    }
}
