<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RaceResource;
use App\Http\Resources\RaceCollection;
use App\Models\Race;
use Illuminate\Http\Request;

class RaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): RaceCollection
    {
        $query = Race::query();

        if ($request->has('circuit')) {
            $query->where('circuit_id', $request->circuit);
        }

        if ($request->has('season')) {
            $query->where('season', $request->season);
        }

        return new RaceCollection($query->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RaceResource
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'circuit_id' => 'required|integer|exists:circuits,id',
            'race_date' => 'required|date',
            'season' => 'nullable|string',
            'driver_ids' => 'sometimes|array',
            'driver_ids.*' => 'integer|exists:drivers,id',
        ]);

        $race = Race::create([
            'name' => $validated['name'],
            'circuit_id' => $validated['circuit_id'],
            'race_date' => $validated['race_date'],
            'season' => $validated['season'] ?? null,
        ]);

        if (isset($validated['driver_ids'])) {
            $race->drivers()->attach($validated['driver_ids']);
        }

        return new RaceResource($race);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): RaceResource
    {
        $race = Race::findOrFail($id);
        return new RaceResource($race);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RaceResource
    {
        $race = Race::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string',
            'circuit_id' => 'sometimes|required|integer|exists:circuits,id',
            'race_date' => 'sometimes|required|date',
            'season' => 'sometimes|nullable|string',
            'driver_ids' => 'sometimes|array',
            'driver_ids.*' => 'integer|exists:drivers,id',
        ]);

        $race->update($validated);

        if (isset($validated['driver_ids'])) {
            $race->drivers()->sync($validated['driver_ids']);
        }

        return new RaceResource($race);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $race = Race::findOrFail($id);
        $race->delete();

        return response()->json(null, 204);
    }
}
