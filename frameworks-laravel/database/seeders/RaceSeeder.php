<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Race;
use App\Models\Circuit;
use App\Models\Driver;

class RaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $circuits = Circuit::all();
        $drivers = Driver::all();

        $races = [
            [
                'name' => '2024 Monaco Grand Prix',
                'circuit_id' => $circuits->where('name', 'Monaco Grand Prix')->first()->id,
                'race_date' => '2024-05-26',
                'season' => '2024',
            ],
            [
                'name' => '2024 British Grand Prix',
                'circuit_id' => $circuits->where('name', 'British Grand Prix')->first()->id,
                'race_date' => '2024-07-07',
                'season' => '2024',
            ],
            [
                'name' => '2024 Italian Grand Prix',
                'circuit_id' => $circuits->where('name', 'Italian Grand Prix')->first()->id,
                'race_date' => '2024-09-01',
                'season' => '2024',
            ],
            [
                'name' => '2024 Belgian Grand Prix',
                'circuit_id' => $circuits->where('name', 'Belgian Grand Prix')->first()->id,
                'race_date' => '2024-07-28',
                'season' => '2024',
            ],
            [
                'name' => '2024 Japanese Grand Prix',
                'circuit_id' => $circuits->where('name', 'Japanese Grand Prix')->first()->id,
                'race_date' => '2024-04-07',
                'season' => '2024',
            ],
        ];

        foreach ($races as $raceData) {
            $race = Race::create($raceData);

            // Attach random drivers to each race (5-8 drivers per race)
            $raceDrivers = $drivers->random(rand(5, 8));
            foreach ($raceDrivers as $index => $driver) {
                $race->drivers()->attach($driver->id, [
                    'position' => $index + 1,
                ]);
            }
        }
    }
}
