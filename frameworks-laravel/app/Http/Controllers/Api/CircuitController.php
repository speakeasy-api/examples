<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CircuitResource;
use App\Http\Resources\CircuitCollection;
use App\Models\Circuit;
use Illuminate\Http\Request;

class CircuitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): CircuitCollection
    {
        return new CircuitCollection(Circuit::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): CircuitResource
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
        ]);

        $circuit = Circuit::create($validated);

        return new CircuitResource($circuit);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): CircuitResource
    {
        $circuit = Circuit::findOrFail($id);
        return new CircuitResource($circuit);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): CircuitResource
    {
        $circuit = Circuit::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string',
            'location' => 'sometimes|required|string',
        ]);

        $circuit->update($validated);

        return new CircuitResource($circuit);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $circuit = Circuit::findOrFail($id);
        $circuit->delete();

        return response()->json(null, 204);
    }
}
