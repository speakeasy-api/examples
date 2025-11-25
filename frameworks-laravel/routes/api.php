<?php

use App\Http\Controllers\Api\CircuitController;
use App\Http\Controllers\Api\DriverController;
use App\Http\Controllers\Api\HealthController;
use App\Http\Controllers\Api\RaceController;
use Illuminate\Support\Facades\Route;

// API routes (no version prefix, base /api is automatic)

// Health check
Route::get('/health', [HealthController::class, 'show']);

// Drivers
Route::get('/drivers', [DriverController::class, 'index']);
Route::get('/drivers/{id}', [DriverController::class, 'show']);

// Circuits
Route::get('/circuits', [CircuitController::class, 'index']);
Route::get('/circuits/{id}', [CircuitController::class, 'show']);

// Races
Route::get('/races', [RaceController::class, 'index']);
Route::get('/races/{id}', [RaceController::class, 'show']);
Route::post('/races', [RaceController::class, 'store']);
