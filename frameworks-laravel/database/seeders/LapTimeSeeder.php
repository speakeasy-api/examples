<?php

namespace Database\Seeders;

use App\Models\LapTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LapTimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample lap times for various driver/circuit combinations
        // Times are in milliseconds (realistic F1 lap times)

        $lapTimes = [
            // Monaco (Circuit ID: 1) - Verstappen (Driver ID: 1)
            ['driver_id' => 1, 'circuit_id' => 1, 'lap_number' => 1, 'time_ms' => 73456],
            ['driver_id' => 1, 'circuit_id' => 1, 'lap_number' => 2, 'time_ms' => 72891],
            ['driver_id' => 1, 'circuit_id' => 1, 'lap_number' => 3, 'time_ms' => 72345],

            // Monaco - Hamilton (Driver ID: 3)
            ['driver_id' => 3, 'circuit_id' => 1, 'lap_number' => 1, 'time_ms' => 73678],
            ['driver_id' => 3, 'circuit_id' => 1, 'lap_number' => 2, 'time_ms' => 72567],
            ['driver_id' => 3, 'circuit_id' => 1, 'lap_number' => 3, 'time_ms' => 72234],

            // Silverstone (Circuit ID: 2) - Verstappen
            ['driver_id' => 1, 'circuit_id' => 2, 'lap_number' => 1, 'time_ms' => 88567],
            ['driver_id' => 1, 'circuit_id' => 2, 'lap_number' => 2, 'time_ms' => 87234],
            ['driver_id' => 1, 'circuit_id' => 2, 'lap_number' => 3, 'time_ms' => 86891],

            // Silverstone - Hamilton
            ['driver_id' => 3, 'circuit_id' => 2, 'lap_number' => 1, 'time_ms' => 88123],
            ['driver_id' => 3, 'circuit_id' => 2, 'lap_number' => 2, 'time_ms' => 87456],
            ['driver_id' => 3, 'circuit_id' => 2, 'lap_number' => 3, 'time_ms' => 86789],

            // Monza (Circuit ID: 3) - Leclerc (Driver ID: 5)
            ['driver_id' => 5, 'circuit_id' => 3, 'lap_number' => 1, 'time_ms' => 82456],
            ['driver_id' => 5, 'circuit_id' => 3, 'lap_number' => 2, 'time_ms' => 81891],
            ['driver_id' => 5, 'circuit_id' => 3, 'lap_number' => 3, 'time_ms' => 81234],

            // Monza - Verstappen
            ['driver_id' => 1, 'circuit_id' => 3, 'lap_number' => 1, 'time_ms' => 82678],
            ['driver_id' => 1, 'circuit_id' => 3, 'lap_number' => 2, 'time_ms' => 81567],
            ['driver_id' => 1, 'circuit_id' => 3, 'lap_number' => 3, 'time_ms' => 81345],

            // Spa (Circuit ID: 4) - Verstappen
            ['driver_id' => 1, 'circuit_id' => 4, 'lap_number' => 1, 'time_ms' => 106234],
            ['driver_id' => 1, 'circuit_id' => 4, 'lap_number' => 2, 'time_ms' => 105678],
            ['driver_id' => 1, 'circuit_id' => 4, 'lap_number' => 3, 'time_ms' => 105123],

            // Spa - Norris (Driver ID: 7)
            ['driver_id' => 7, 'circuit_id' => 4, 'lap_number' => 1, 'time_ms' => 106891],
            ['driver_id' => 7, 'circuit_id' => 4, 'lap_number' => 2, 'time_ms' => 105456],
            ['driver_id' => 7, 'circuit_id' => 4, 'lap_number' => 3, 'time_ms' => 105234],

            // Suzuka (Circuit ID: 5) - Verstappen
            ['driver_id' => 1, 'circuit_id' => 5, 'lap_number' => 1, 'time_ms' => 91456],
            ['driver_id' => 1, 'circuit_id' => 5, 'lap_number' => 2, 'time_ms' => 90891],
            ['driver_id' => 1, 'circuit_id' => 5, 'lap_number' => 3, 'time_ms' => 90345],

            // Suzuka - Russell (Driver ID: 4)
            ['driver_id' => 4, 'circuit_id' => 5, 'lap_number' => 1, 'time_ms' => 91678],
            ['driver_id' => 4, 'circuit_id' => 5, 'lap_number' => 2, 'time_ms' => 90567],
            ['driver_id' => 4, 'circuit_id' => 5, 'lap_number' => 3, 'time_ms' => 90123],
        ];

        foreach ($lapTimes as $lapTime) {
            LapTime::create($lapTime);
        }
    }
}
