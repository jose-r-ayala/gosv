<?php

namespace Database\Seeders\Test_data;

use Illuminate\Support\Facades\DB;

class TestChats{

    public function seed_chats(): void
    {
        DB::table('chats')->insert([
            'id_usuario1' => 2,
            'id_usuario2' => 4
        ]);

        DB::table('chats')->insert([
            'id_usuario1' => 3,
            'id_usuario2' => 5
        ]);
    }
}