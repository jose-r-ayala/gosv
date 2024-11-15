<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TestUsers{

    public function seed_users(): void
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'nombre1' => 'Gustavo',
            'apellido1' => 'Fring',
            'email' => 'admin@email.com',
            'password' => Hash::make('12345678'),
            'telefono' => '12345678',
        ]);

        DB::table('users')->insert([
            'name' => 'conductor123',
            'nombre1' => 'Mario',
            'apellido1' => 'Hernandez',
            'email' => 'conductor1@email.com',
            'password' => Hash::make('12345678'),
            'telefono' => '22770001',
        ]);

        DB::table('users')->insert([
            'name' => 'taxista123',
            'nombre1' => 'Jose',
            'nombre2' => 'Roberto',
            'apellido1' => 'Ayala',
            'apellido2' => 'Rosales',
            'email' => 'conductor2@email.com',
            'password' => Hash::make('12345678'),
            'telefono' => '22770001',
        ]);

        DB::table('users')->insert([
            'name' => 'cliente123',
            'nombre1' => 'Pedro',
            'nombre2' => 'Juan',
            'apellido1' => 'Torres',
            'email' => 'cliente1@email.com',
            'password' => Hash::make('12345678'),
            'telefono' => '01230456',
        ]);

        DB::table('users')->insert([
            'name' => 'viajero99',
            'nombre1' => 'Gloria',
            'nombre2' => 'Maria',
            'apellido1' => 'Gustamante',
            'apellido2' => 'Flor',
            'email' => 'cliente2@email.com',
            'password' => Hash::make('12345678'),
            'telefono' => '01230456',
        ]);
    }
}