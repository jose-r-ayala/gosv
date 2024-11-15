<?php

namespace App\Http\Controllers;

use App\Models\Cupo;
use Illuminate\Http\Request;

class CupoController extends Controller
{
    /**
     * Crear un nuevo cupo.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_ruta' => 'required|exists:rutas,id',
            'disponible' => 'required|integer|min:0',
        ]);

        $cupo = Cupo::create($validatedData);

        return response()->json($cupo, 201);
    }

    /**
     * Actualizar la disponibilidad de un cupo.
     */
    public function update(Request $request, Cupo $cupo)
    {
        $validatedData = $request->validate([
            'disponible' => 'required|integer|min:0',
        ]);

        $cupo->update($validatedData);

        return response()->json($cupo);
    }

    /**
     * Eliminar un cupo.
     */
    public function destroy(Cupo $cupo)
    {
        $cupo->delete();

        return response()->json(['message' => 'Cupo eliminado correctamente']);
    }
}
