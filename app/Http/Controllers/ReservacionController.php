<?php

namespace App\Http\Controllers;

use App\Models\Cupo;
use App\Models\Reservacion;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class ReservacionController extends Controller
{
    public function index(Request $request, ?string $busqueda = null): Response
    {
        
            $reservaciones = Reservacion::with([
                'user',
                'cupo' => function ($query):void{
                    $query->with('ruta');
                },
                
            ])->get();

        

        return Inertia::render('Reservaciones', [
            'reservaciones' => $reservaciones
        ]);
    }
}
