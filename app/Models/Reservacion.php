<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
        'aceptado'
    ];

    protected $table = 'reservaciones';
    public $timestamps = false;

    // reservaciones ---1...1-> users
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }

    // reservaciones ---1...1-> cupos
    public function cupo(): BelongsTo
    {
        return $this->belongsTo(Cupo::class, 'id_cupo', 'id');
    }
}
