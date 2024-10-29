<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

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

    // cupos ---1...1-> rutas
    public function user(): BelongsTo
    {
        return $this->belongsTo(Ruta::class, 'id_ruta', 'id');
    }

    // cupos ---0...1-> reservaciones
    public function reservacion(): HasOne
    {
        return $this->hasOne(Reservacion::class, 'id_cupo', 'id');
    }
}
