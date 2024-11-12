<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;

class TestRutas{

    public function seed_rutas(): void
    {
        DB::table('rutas')->insert([
            'id_usuario' => 2,
            'direccion_encuentro' => 'Calle nueva, San salvador, San salvador',
            'direccion_destino' => 'Puerto de La Libertad, La Libertad',
            'feha_publicado' => '2024-10-01 15:00:00',
            'fecha_hora_salida' => '2024-10-15 10:30:00',
            'precio' => 15.75,
            'descripcion' => 'Viaje de San Salvador al puerto de la libertad',
            'latitud'=> '13.701775469545996',
            'longitud'=> '-89.22586403793673',
            'latitud_destino' => '13.486568200763436',
            'longitud_destino' => '-89.32235215502915'
        ]);

        DB::table('rutas')->insert([
            'id_usuario' => 3,
            'direccion_encuentro' => 'Ciudad de Zaragoza, La Libertad',
            'direccion_destino' => 'Ciudad de San Miguel, San Miguel',
            'feha_publicado' => '2024-09-11 16:30:25',
            'fecha_hora_salida' => '2024-09-21 09:00:00',
            'precio' => 49.99,
            'descripcion' => 'Viaje de Zaragoza a San Miguel',
            'latitud'=> '13.58794633181693',
            'longitud'=> '-89.28768670395786',
            'latitud_destino' => '13.472540737043873',
            'longitud_destino' => '-88.17741315977884'
        ]);
    }
}