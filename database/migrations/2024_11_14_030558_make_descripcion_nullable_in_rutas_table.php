<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('rutas', function (Blueprint $table) {
            $table->text('descripcion')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('rutas', function (Blueprint $table) {
            $table->text('descripcion')->nullable(false)->change();
        });
    }
};
