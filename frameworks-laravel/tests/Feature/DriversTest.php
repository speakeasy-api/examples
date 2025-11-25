<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('GET /api/drivers', function () {
    
    beforeEach(function () {
        $this->seed();
    });

    test('returns list of all drivers', function () {
        $response = $this->getJson('/api/drivers');

        $response->assertStatus(200)
            ->assertJsonStructure(['data', 'meta']);

        $data = $response->json('data');
        expect($data)->toBeArray()->not->toBeEmpty();
    });

    test('returns correct data structure', function () {
        $response = $this->getJson('/api/drivers');
        
        $data = $response->json('data');
        expect($data)->toBeArray();
        
        if (count($data) > 0) {
            $driver = $data[0];
            expect($driver)->toHaveKeys(['id', 'name', 'code']);
        }
    });
});

describe('GET /api/drivers/{id}', function () {
    
    beforeEach(function () {
        $this->seed();
    });

    test('returns a specific driver by id', function () {
        $response = $this->getJson('/api/drivers');
        $drivers = $response->json('data');
        expect($drivers)->toBeArray()->not->toBeEmpty();

        $firstDriver = $drivers[0];

        $response = $this->getJson("/api/drivers/{$firstDriver['id']}");

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['id', 'name', 'code']])
            ->assertJson([
                'data' => [
                    'id' => $firstDriver['id'],
                    'name' => $firstDriver['name'],
                    'code' => $firstDriver['code'],
                ],
            ]);
    });

    test('returns 404 for non-existent driver', function () {
        $response = $this->getJson('/api/drivers/99999');
        $response->assertStatus(404);
    });
});
