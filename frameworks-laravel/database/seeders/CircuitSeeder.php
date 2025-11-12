<?php

namespace Database\Seeders;

use App\Models\Circuit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CircuitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $circuits = [
            ['name' => 'Monaco Grand Prix', 'location' => 'Monte Carlo, Monaco'],
            ['name' => 'British Grand Prix', 'location' => 'Silverstone, United Kingdom'],
            ['name' => 'Italian Grand Prix', 'location' => 'Monza, Italy'],
            ['name' => 'Belgian Grand Prix', 'location' => 'Spa-Francorchamps, Belgium'],
            ['name' => 'Japanese Grand Prix', 'location' => 'Suzuka, Japan'],
            ['name' => 'Singapore Grand Prix', 'location' => 'Marina Bay, Singapore'],
            ['name' => 'Abu Dhabi Grand Prix', 'location' => 'Yas Marina, UAE'],
            ['name' => 'Brazilian Grand Prix', 'location' => 'Interlagos, Brazil'],
            ['name' => 'Australian Grand Prix', 'location' => 'Melbourne, Australia'],
            ['name' => 'Spanish Grand Prix', 'location' => 'Barcelona, Spain'],
        ];

        foreach ($circuits as $circuit) {
            Circuit::create($circuit);
        }
    }
}
