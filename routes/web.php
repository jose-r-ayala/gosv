<?php

use App\Http\Controllers\CalificacionController;
use App\Http\Controllers\CupoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RutaController;
use App\Http\Controllers\ReservacionController;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function (): RedirectResponse {
    return redirect()->route('inicio');
});

// Aqui van las rutas que requieren iniciar sesión para verlas
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/inicio/{busqueda?}', [RutaController::class, 'index'])->name('inicio');

    /* Get route by id */
    Route::get('/ruta/{id}', [RutaController::class, 'getRouteDestinationById']);

    /* Reservar cupo */
    Route::get('/reservar/{id}', [RutaController::class,'reservarRuta']);

   Route::get('/rutacreate/',[RutaController::class,'crearRuta']);
   Route::post('/rutas/guardar', [RutaController::class, 'guardarRuta']);
   
   Route::resource('cupos', CupoController::class)->only(['store', 'update', 'destroy']);
   Route::post('/ruta/{ruta}/comentarios', [RutaController::class, 'guardarComentario'])->name('ruta.comentarios.guardar');
   Route::get('/reservaciones', [ReservacionController::class,'index'])->name('reservaciones');
   Route::get('/reservacion/aceptar/{id}', [ReservacionController::class,'aceptarReservacion'])->name('aceptarReservacion');
   Route::get('/calificaciones/{idUsuario}', [CalificacionController::class, 'getDriverRatingById']);



    /* Not found page */
    Route::fallback(function () {
        return Inertia::render('NotFound');
    });
});

require __DIR__ . '/auth.php';
