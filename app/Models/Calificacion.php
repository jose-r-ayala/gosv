<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    // calificaciones ---1...1-> users
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }

    // calificaciones ---1...1-> users
    public function userCalificador(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_usuario_calificador', 'id');
    }
}
