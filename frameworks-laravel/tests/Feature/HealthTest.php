<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('GET /api/health', function () {
    
    beforeEach(function () {
        $this->seed();
    });

    test('returns success status', function () {
        $response = $this->getJson('/api/health');

        $response->assertStatus(200)
            ->assertJsonStructure(['status']);
    });
});
