<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('GET /api/circuits', function () {
    
    beforeEach(function () {
        $this->seed();
    });

    test('returns list of all circuits', function () {
        $response = $this->getJson('/api/circuits');

        $response->assertStatus(200)
            ->assertJsonStructure(['data', 'meta']);

        $data = $response->json('data');
        expect($data)->toBeArray()->not->toBeEmpty();
    });

    test('returns correct data structure', function () {
        $response = $this->getJson('/api/circuits');
        
        $data = $response->json('data');
        expect($data)->toBeArray();
        
        if (count($data) > 0) {
            $circuit = $data[0];
            expect($circuit)->toHaveKeys(['id', 'name', 'location']);
        }
    });
});

describe('GET /api/circuits/{id}', function () {
    
    beforeEach(function () {
        $this->seed();
    });

    test('returns a specific circuit by id', function () {
        $response = $this->getJson('/api/circuits');
        $circuits = $response->json('data');
        expect($circuits)->toBeArray()->not->toBeEmpty();

        $firstCircuit = $circuits[0];

        $response = $this->getJson("/api/circuits/{$firstCircuit['id']}");

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['id', 'name', 'location']])
            ->assertJson([
                'data' => [
                    'id' => $firstCircuit['id'],
                    'name' => $firstCircuit['name'],
                    'location' => $firstCircuit['location'],
                ],
            ]);
    });

    test('returns 404 for non-existent circuit', function () {
        $response = $this->getJson('/api/circuits/99999');
        $response->assertStatus(404);
    });
});
