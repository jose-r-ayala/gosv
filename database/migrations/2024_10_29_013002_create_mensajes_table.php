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
        Schema::create('mensajes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_chat')->references('id')->on('chats')->restrictOnDelete();
            $table->foreignId('id_usuario')->references('id')->on('users')->restrictOnDelete();
            $table->timestamp('fecha')->useCurrent();
            $table->string('contenido');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mensajes');
    }
};
