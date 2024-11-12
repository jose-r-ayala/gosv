<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RutaController;
use Illuminate\Foundation\Application;
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

    /* Not found page */

    Route::fallback(function () {
        return Inertia::render('NotFound');
    });


});

require __DIR__ . '/auth.php';
