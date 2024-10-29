<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cupo extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_ruta',
    ];

    public $timestamps = false;
}
