<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;

class TestCalificaciones{

    public function seed_calificaciones(): void
    {
        DB::table('calificaciones')->insert([
            'id_usuario' => 2,
            'id_usuario_calificador' => 4,
            'puntaje' => 4,
            'comentario' => 'Buen conductor, lo recomiendo'
        ]);

        DB::table('calificaciones')->insert([
            'id_usuario' => 2,
            'id_usuario_calificador' => 5,
            'puntaje' => 5,
            'comentario' => 'No tengo quejas, buen servicio'
        ]);

        DB::table('calificaciones')->insert([
            'id_usuario' => 3,
            'id_usuario_calificador' => 5,
            'puntaje' => 5,
            'comentario' => 'Excelente servicio'
        ]);

        DB::table('calificaciones')->insert([
            'id_usuario' => 3,
            'id_usuario_calificador' => 4,
            'puntaje' => 3,
            'comentario' => 'El servicio podría ser mejor'
        ]);
    }
}