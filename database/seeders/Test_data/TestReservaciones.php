<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;

class TestReservaciones{

    public function seed_reservaciones(): void
    {
        DB::table('reservaciones')->insert([
            'id_cupo' => 1,
            'id_usuario' => 4,
            'fecha' => '2024-10-02 17:03:11',
            'aceptado' => true
        ]);

        DB::table('reservaciones')->insert([
            'id_cupo' => 3,
            'id_usuario' => 5,
            'fecha' => '2024-09-13 16:31:24',
            'aceptado' => true
        ]);
    }
}