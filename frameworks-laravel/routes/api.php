<?php

use App\Http\Controllers\Api\V1\CircuitController;
use App\Http\Controllers\Api\V1\DriverController;
use App\Http\Controllers\Api\V1\LapTimeController;
use App\Http\Controllers\Api\V1\HealthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// API v1 routes
Route::prefix('api')->prefix('v1')->group(function () {
    // Health check
    Route::get('/health', [HealthController::class, 'show']);

    // Drivers
    Route::get('/drivers', [DriverController::class, 'index']);
    Route::post('/drivers', [DriverController::class, 'store']);

    // Circuits
    Route::get('/circuits', [CircuitController::class, 'index']);
    Route::post('/circuits', [CircuitController::class, 'store']);

    // Lap times
    Route::get('/lap_times', [LapTimeController::class, 'index']);
    Route::post('/lap_times', [LapTimeController::class, 'store']);
    Route::get('/drivers/{driverId}/lap_times', [LapTimeController::class, 'byDriver']);
    Route::get('/circuits/{circuitId}/lap_times', [LapTimeController::class, 'byCircuit']);
});
