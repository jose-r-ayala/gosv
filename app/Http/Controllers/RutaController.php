<?php

namespace App\Http\Controllers;

use App\Models\Ruta;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RutaController extends Controller
{
    /**
     * Mostrar rutas publicadas
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    public function index(Request $request): Response
    {
        $rutas = Ruta::with([
            'user:id,name,nombre1,nombre2,apellido1,apellido2',
            'cupos',
            'comentarios:id,id_ruta'
        ])->get();

        return Inertia::render('Inicio', [
            'rutas' => $rutas
        ]);
    }

    public function getRouteDestinationById(Request $request, $id): Response
    {
        $ruta = Ruta::with([
            'user:id,name,nombre1,nombre2,apellido1,apellido2',
            'cupos',
            'comentarios:id,id_ruta'
        ])->find($id);
    
        if (!$ruta) {
            return Inertia::render('NotFound', ['message' => 'Route not found']);
        }
    
        return Inertia::render('RouteDetails', [
            'ruta' => $ruta,
        ]);
    }
}
