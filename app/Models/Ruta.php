<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
        'asientos_disponibles',
        'fecha_hora_salida',
        'precio',
        'latitud',
        'longitud',
        'latitud_destino',
        'longitud_destino',
        'descripcion'
    ];

    public $timestamps = false;

    // rutas ---1...1-> users
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }

    // rutas ---0...n-> comentarios
    public function comentarios(): HasMany
    {
        return $this->hasMany(Comentario::class, 'id_ruta', 'id');
    }

    // rutas ---0...1-> cupos
    public function cupos(): HasOne
    {
        return $this->hasOne(Cupo::class, 'id_ruta', 'id');
    }
}
