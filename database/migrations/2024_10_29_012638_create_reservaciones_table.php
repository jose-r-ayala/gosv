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
        Schema::create('reservaciones', function (Blueprint $table) {
            $table->id();

            // Foreign Keys, not defined as such because i need to create a unique index with these columns
            $table->integer('id_cupo');
            $table->integer('id_usuario');
            $table->unique(['id_cupo', 'id_usuario']);

            $table->boolean('aceptado')->default(false);

            $table->timestamp('fecha')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservaciones');
    }
};
