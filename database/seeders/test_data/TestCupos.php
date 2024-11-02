<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;

class TestCupos
{

    public function seed_cupos(): void
    {
        DB::table('cupos')->insert([
            'id_ruta' => 1,
            'disponible' => false
        ]);

        DB::table('cupos')->insert([
            'id_ruta' => 1,
            'disponible' => true
        ]);

        DB::table('cupos')->insert([
            'id_ruta' => 2,
            'disponible' => false
        ]);

        DB::table('cupos')->insert([
            'id_ruta' => 2,
            'disponible' => true
        ]);
    }
}