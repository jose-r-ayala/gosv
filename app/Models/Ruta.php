<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ruta extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_usuario',
        'direccion_encuentro',
        'direccion_destino',
        'feha_publicado',
        'fecha_hora_salida',
        'precio',
        'descripcion',
    ];

    public $timestamps = false;
}
