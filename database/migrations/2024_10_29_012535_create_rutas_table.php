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
        Schema::create('rutas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_usuario')->references('id')->on('users')->restrictOnDelete();
            $table->string('direccion_encuentro');
            $table->string('direccion_destino');
            $table->timestamp('feha_publicado')->useCurrent();
            $table->dateTime('fecha_hora_salida');
            $table->decimal('precio');
            $table->text('descripcion')->nullable();
            $table->string('latitud');
            $table->string('longitud');
            $table->string('latitud_destino');
            $table->string('longitud_destino');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rutas');
    }
};
