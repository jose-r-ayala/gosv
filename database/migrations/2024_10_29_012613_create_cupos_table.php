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
        Schema::create('cupos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_ruta')->references('id')->on('rutas')->restrictOnDelete();
            $table->integer('disponible');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cupos');
    }
};
