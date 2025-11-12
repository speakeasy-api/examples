<?php

namespace Database\Seeders;

use App\Models\Driver;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $drivers = [
            ['name' => 'Max Verstappen', 'code' => 'VER'],
            ['name' => 'Sergio Perez', 'code' => 'PER'],
            ['name' => 'Lewis Hamilton', 'code' => 'HAM'],
            ['name' => 'George Russell', 'code' => 'RUS'],
            ['name' => 'Charles Leclerc', 'code' => 'LEC'],
            ['name' => 'Carlos Sainz', 'code' => 'SAI'],
            ['name' => 'Lando Norris', 'code' => 'NOR'],
            ['name' => 'Oscar Piastri', 'code' => 'PIA'],
            ['name' => 'Fernando Alonso', 'code' => 'ALO'],
            ['name' => 'Lance Stroll', 'code' => 'STR'],
        ];

        foreach ($drivers as $driver) {
            Driver::create($driver);
        }
    }
}
