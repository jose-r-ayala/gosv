<?php

namespace App\Http\Controllers;

use App\Models\Cupo;
use App\Models\Reservacion;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class ReservacionController extends Controller
{
    public function index(Request $request): Response
    {
            $reservaciones = Reservacion::with([
                'user',
                'cupo' => function ($query):void{
                    $query->with(['ruta' => function ($query){
                        $query->where('id_usuario',auth()->id());
                    }]);   
                },
            ])->get();
            
        return Inertia::render('Reservaciones', [
            'reservaciones' => $reservaciones
        ]);
    }

    public function aceptarReservacion(Request $request): Response
    {
        $referencia = Reservacion::where('id','=',$request->id)->first();
        $referencia->aceptado = 1;
        $referencia->save();
        $cupo = Cupo::find($referencia->id_cupo);
        $cupo::decrement('disponible', 1);
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
