<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class HealthController extends Controller
{
    /**
     * Healthcheck
     *
     * Check that the service is up. If everything is okay, you'll get a 200 OK response.
     *
     * Otherwise, the request will fail with a 400 error, and a response listing the failed services.
     */
    public function show(): JsonResponse
    {
        return response()->json([
            'status' => 'healthy',
            'version' => 'unversioned',
            'timestamp' => now()->toIso8601String(),
        ]);
    }
}
