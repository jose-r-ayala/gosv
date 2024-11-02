<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;

class TestMensajes{

    public function seed_mensajes(): void
    {
        DB::table('mensajes')->insert([
            'id_chat' => 1,
            'id_usuario' => 4,
            'fecha' => '2024-10-02 14:01:36',
            'contenido' => 'Hola, me interesa el viaje que publicaste, te puedo escribir por whatsapp?'
        ]);

        DB::table('mensajes')->insert([
            'id_chat' => 1,
            'id_usuario' => 2,
            'fecha' => '2024-10-02 14:11:36',
            'contenido' => 'Claro, mi numero está en mi perfil'
        ]);

        DB::table('mensajes')->insert([
            'id_chat' => 2,
            'id_usuario' => 5,
            'fecha' => '2024-09-13 12:01:24',
            'contenido' => 'Buenos dias, estos interesado en tu viaje, me podrias dar mas detalles?'
        ]);

        DB::table('mensajes')->insert([
            'id_chat' => 2,
            'id_usuario' => 3,
            'fecha' => '2024-09-13 12:13:45',
            'contenido' => 'Buenos dias, ok escribeme por whatsapp'
        ]);
    }
}