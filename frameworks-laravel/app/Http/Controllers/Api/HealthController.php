<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class HealthController extends Controller
{
    public function show(): JsonResponse
    {
        return response()->json([
            'status' => 'healthy',
            'version' => 'unversioned',
            'timestamp' => now()->toIso8601String(),
        ]);
    }
}
