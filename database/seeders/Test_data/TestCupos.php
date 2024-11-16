<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;

class TestCupos
{

    public function seed_cupos(): void
    {
        DB::table('cupos')->insert([
            'id_ruta' => 1,
            'disponible' => 1
        ]);

        DB::table('cupos')->insert([
            'id_ruta' => 2,
            'disponible' => 1
        ]);

        DB::table('cupos')->insert([
            'id_ruta' => 3,
            'disponible' => 5
        ]);

        DB::table('cupos')->insert([
            'id_ruta' => 4,
            'disponible' => 4
        ]);
    }
}