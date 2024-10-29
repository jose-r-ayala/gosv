<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservacion extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_cupo',
        'id_usuario',
    ];

    protected $table = 'reservaciones';
    public $timestamps = false;
}
