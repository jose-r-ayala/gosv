<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Calificacion extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_usuario',
        'id_usuario_calificador',
        'puntaje',
        'comentario'
    ];

    protected $table = 'calificaciones';
    public $timestamps = false;
}
