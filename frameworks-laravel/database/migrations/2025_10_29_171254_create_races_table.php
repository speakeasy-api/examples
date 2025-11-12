<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('races', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('circuit_id')->constrained()->onDelete('cascade');
            $table->date('race_date');
            $table->string('season')->nullable();
            $table->timestamps();
        });

        // Create pivot table for race-driver relationship
        Schema::create('driver_race', function (Blueprint $table) {
            $table->id();
            $table->foreignId('driver_id')->constrained()->onDelete('cascade');
            $table->foreignId('race_id')->constrained()->onDelete('cascade');
            $table->integer('position')->nullable();
            $table->timestamps();

            $table->unique(['driver_id', 'race_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('driver_race');
        Schema::dropIfExists('races');
    }
};
