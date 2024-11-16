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
        Schema::create('calificaciones', function (Blueprint $table) {
            $table->id();

            // Foreign Keys, not defined as such because i need to create a unique index with these columns
            $table->integer('id_usuario');
            $table->integer('id_usuario_calificador');
            $table->unique(['id_usuario', 'id_usuario_calificador']);

            $table->integer('puntaje');
            $table->string('comentario');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calificaciones');
    }
};
