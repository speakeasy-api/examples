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
     * Display a listing of the resource.
     */
    public function index(): DriverCollection
    {
        return new DriverCollection(Driver::all());
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
