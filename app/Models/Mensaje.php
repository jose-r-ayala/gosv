<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mensaje extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_chat',
        'id_usuario',
        'fecha',
        'contenido',
    ];
    
    public $timestamps = false;
}
