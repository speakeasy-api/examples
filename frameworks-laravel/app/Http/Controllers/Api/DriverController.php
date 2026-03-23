<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DriverResource;
use App\Http\Resources\DriverCollection;
use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    /**
     * Get drivers
     *
     * Returns a collection of driver resources, optionally filtered by race.
     */
    public function index(Request $request): DriverCollection
    {
        $query = Driver::query();

        // Filter by race if provided
        if ($request->has('race')) {
            $query->whereHas('races', function ($q) use ($request) {
                $q->where('races.id', $request->race);
            });
        }

        return new DriverCollection($query->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): DriverResource
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'code' => 'required|string',
        ]);

        $driver = Driver::create($validated);

        return new DriverResource($driver);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): DriverResource
    {
        $driver = Driver::findOrFail($id);
        return new DriverResource($driver);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): DriverResource
    {
        $driver = Driver::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string',
            'code' => 'sometimes|required|string',
        ]);

        $driver->update($validated);

        return new DriverResource($driver);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $driver = Driver::findOrFail($id);
        $driver->delete();

        return response()->json(null, 204);
    }
}
