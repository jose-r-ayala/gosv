<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'nombre1',
        'apellido1',
        'telefono',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // users ---0...n-> calificaciones
    public function calificacionesRecibidas(): HasMany
    {
        return $this->hasMany(Calificacion::class, 'id_usuario', 'id');
    }

    // users ---0...n-> calificaciones
    public function calificacionesHechas(): HasMany
    {
        return $this->hasMany(Calificacion::class, 'id_usuario_calificador', 'id');
    }

    // users ---0...n-> comentarios
    public function comentarios(): HasMany
    {
        return $this->hasMany(Comentario::class, 'id_usuario', 'id');
    }

    // users ---0...n-> rutas
    public function rutas(): HasMany
    {
        return $this->hasMany(Ruta::class, 'id_usuario', 'id');
    }

    // users ---0...n-> reservaciones
    public function reservaciones(): HasMany
    {
        return $this->hasMany(Reservacion::class, 'id_usuario', 'id');
    }
}
