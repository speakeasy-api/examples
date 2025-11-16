<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RaceResource;
use App\Http\Resources\RaceCollection;
use App\Models\Race;
use Illuminate\Http\Request;
use Knuckles\Scribe\Attributes\{Authenticated, Group, BodyParam, QueryParam};

#[Group(name: 'Races', description: 'A series of endpoints that allow programmatic access to managing F1 races.', authenticated: true)]
class RaceController extends Controller
{
    /**
     * Get races
     *
     * A collection of race resources, newest first, optionally filtered by circuit or season query parameters.
     */
    #[Authenticated]
    #[QueryParam(name: 'season', type: 'string', description: 'Filter the results by season year', required: false, example: '2024')]
    #[QueryParam(name: 'circuit', type: 'string', description: 'Filter the results by circuit name', required: false, example: 'Monaco')]
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
     * Create a race
     *
     * Allows authenticated users to submit a new Race resource to the system.
     */
    #[Authenticated]
    #[BodyParam(name: 'name', type: 'string', description: 'The name of the race.', required: true, example: 'Monaco Grand Prix')]
    #[BodyParam(name: 'race_date', type: 'string', description: 'The date and time the race takes place, RFC 3339 in local timezone.', required: true, example: '2024-05-26T14:53:59')]
    #[BodyParam(name: 'circuit_id', type: 'string', description: 'The Unique Identifier for the circuit where the race will be held.', required: true, example: '1234-1234-1234-1234')]
    #[BodyParam(name: 'season', type: 'string', description: 'The season year for this race.', required: true, example: '2024')]
    #[BodyParam(name: 'driver_ids', type: 'array', description: 'An array of Unique Identifiers for drivers participating in the race.', required: false, example: [ "5678-5678-5678-5678", "6789-6789-6789-6789" ])]
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
