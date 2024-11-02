<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Seeders\Test_data\TestCalificaciones;
use Database\Seeders\Test_data\TestChats;
use Database\Seeders\Test_data\TestComentarios;
use Database\Seeders\Test_data\TestCupos;
use Database\Seeders\Test_data\TestMensajes;
use Database\Seeders\Test_data\TestReservaciones;
use Database\Seeders\Test_data\TestRutas;
use Database\Seeders\Test_data\TestUsers;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = new TestUsers();
        $calificaciones = new TestCalificaciones();
        $rutas = new TestRutas();
        $comentarios = new TestComentarios();
        $cupos = new TestCupos();
        $reservaciones = new TestReservaciones();
        $chats = new TestChats();
        $mensajes = new TestMensajes();

        $user->seed_users();
        $calificaciones->seed_calificaciones();
        $rutas->seed_rutas();
        $comentarios->seed_comentarios();
        $cupos->seed_cupos();
        $reservaciones->seed_reservaciones();
        $chats->seed_chats();
        $mensajes->seed_mensajes();
        
    }
}
