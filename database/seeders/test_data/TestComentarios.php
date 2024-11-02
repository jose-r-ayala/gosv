<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;

class TestComentarios{

    public function seed_comentarios(): void
    {
        DB::table('comentarios')->insert([
            'id_ruta' => 1,
            'id_usuario' => 4,
            'fecha' => '2024-10-02 13:45:45',
            'contenido' => 'Hola, me interesa este viaje, te escribí por whatsapp'
        ]);

        DB::table('comentarios')->insert([
            'id_ruta' => 2,
            'id_usuario' => 5,
            'fecha' => '2024-09-13 11:24:13',
            'contenido' => 'Este viaje se ve interesante, voy a reservar! :)'
        ]);
    }
}