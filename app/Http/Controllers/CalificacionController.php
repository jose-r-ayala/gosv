<?php

namespace App\Http\Controllers;

use App\Models\Calificacion;
use Illuminate\Http\Request;
use Inertia\Inertia;



class CalificacionController extends Controller
{

    public function rateDriver(Request $request, $idUsuario)
    {
        // Validar la entrada
        $data = $request->validate([
            'calificacion' => 'required|integer|min:1|max:5',
            'comentario' => 'nullable|string|max:255',
        ]);

        // Guardar la nueva calificación
        Calificacion::create([
            'id_usuario' => $idUsuario,
            'id_usuario_calificador' => auth()->id(),
            'puntaje' => $data['calificacion'],
            'comentario' => $data['comentario'] ?? null,
        ]);

        // Calcular el nuevo promedio de calificaciones
        $promedio = Calificacion::where('id_usuario', $idUsuario)->avg('puntaje');


        // Obtener todas las calificaciones del conductor
        $calificaciones = Calificacion::where('id_usuario', $idUsuario)
            ->orderBy('created_at', 'desc')
            ->get();

        // Retornar una respuesta con las calificaciones actualizadas
        return response()->json([
            'message' => 'Calificación registrada con éxito.',
            'calificaciones' => $calificaciones,
            'promedio' => $promedio,
        ]);

    }
    public function getDriverRatingById(Request $request, $idUsuario)
    {
        // Obtener todas las calificaciones del usuario (conductor) por ID

        // Obtener todas las calificaciones del usuario (conductor) por ID con información de los usuarios relacionados
        $calificaciones = Calificacion::where('id_usuario', $idUsuario)
            ->with(['user:id,name,nombre1,nombre2,apellido1,apellido2',
            'userCalificador'
            ])
            ->orderBy('puntaje', 'desc')
            ->get();



        if (!$calificaciones) {
            return Inertia::render('NotFound', ['message' => 'Este usuario no ha sido calificado aun']);
        }
        // Calcular el promedio de las calificaciones
        $promedio = $calificaciones->avg('puntaje');

        return Inertia::render('Calificaciones', [
            'calificaciones' => $calificaciones,
            'promedio' => $promedio,
        ]);
    }

}

