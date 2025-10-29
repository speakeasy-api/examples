<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LapTimeResource;
use App\Http\Resources\LapTimeCollection;
use App\Models\LapTime;
use Illuminate\Http\Request;

class LapTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): LapTimeCollection
    {
        $query = LapTime::query();

        if ($request->has('driver_id')) {
            $query->where('driver_id', $request->driver_id);
        }

        if ($request->has('circuit_id')) {
            $query->where('circuit_id', $request->circuit_id);
        }

        if ($request->has('lap_min')) {
            $query->where('lap_number', '>=', $request->lap_min);
        }

        if ($request->has('lap_max')) {
            $query->where('lap_number', '<=', $request->lap_max);
        }

        return new LapTimeCollection($query->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): LapTimeResource
    {
        $validated = $request->validate([
            'driver_id' => 'required|integer|exists:drivers,id',
            'circuit_id' => 'required|integer|exists:circuits,id',
            'lap_number' => 'required|integer',
            'time_ms' => 'required|integer',
        ]);

        $lapTime = LapTime::create($validated);

        return new LapTimeResource($lapTime);
    }

    /**
     * Get lap times for a specific driver.
     */
    public function byDriver(string $driverId): LapTimeCollection
    {
        $lapTimes = LapTime::where('driver_id', $driverId)->get();
        return new LapTimeCollection($lapTimes);
    }

    /**
     * Get lap times for a specific circuit.
     */
    public function byCircuit(string $circuitId): LapTimeCollection
    {
        $lapTimes = LapTime::where('circuit_id', $circuitId)->get();
        return new LapTimeCollection($lapTimes);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Not implemented
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Not implemented
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Not implemented
    }
}
