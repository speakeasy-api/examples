<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('GET /api/races', function () {
    
    beforeEach(function () {
        $this->seed();
    });

    test('returns list of all races', function () {
        $response = $this->getJson('/api/races');

        $response->assertStatus(200)
            ->assertJsonStructure(['data', 'meta']);

        $data = $response->json('data');
        expect($data)->toBeArray()->not->toBeEmpty();
    });

    test('returns correct data structure', function () {
        $response = $this->getJson('/api/races');
        
        $data = $response->json('data');
        expect($data)->toBeArray();
        
        if (count($data) > 0) {
            $race = $data[0];
            expect($race)->toHaveKeys(['id', 'name', 'season']);
        }
    });
});

describe('GET /api/races/{id}', function () {
    
    beforeEach(function () {
        $this->seed();
    });

    test('returns a specific race by id', function () {
        $response = $this->getJson('/api/races');
        $races = $response->json('data');
        expect($races)->toBeArray()->not->toBeEmpty();

        $firstRace = $races[0];

        $response = $this->getJson("/api/races/{$firstRace['id']}");
        
        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['id', 'name', 'season', 'race_date', 'links']]);
    });

    test('returns 404 for non-existent race', function () {
        $response = $this->getJson('/api/races/99999');
        $response->assertStatus(404);
    });
});
