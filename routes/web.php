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

    Route::get('/inicio', [RutaController::class, 'index'])
    ->name('inicio');
});

require __DIR__.'/auth.php';
