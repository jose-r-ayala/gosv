<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    // mensajes ---1...1-> users
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }

    // mensajes ---1...1-> users
    public function chat(): BelongsTo
    {
        return $this->belongsTo(Chat::class, 'id_chat', 'id');
    }
}
