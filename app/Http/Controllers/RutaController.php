<?php

namespace App\Http\Controllers;

use App\Models\Ruta;
use App\Models\Cupo;
use App\Models\Reservacion;
use App\Models\Comentario;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Log;

class RutaController extends Controller
{
    /**
     * Mostrar rutas publicadas
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    public function index(Request $request, ?string $busqueda = null): Response
    {
        if ($busqueda != null) {
            $busqueda = str_replace("%20"," ", $busqueda);
            $rutas = Ruta::with([
                'user:id,name,nombre1,nombre2,apellido1,apellido2',
                'cupos',
                'comentarios:id,id_ruta'
            ])
                ->whereAny(['direccion_encuentro', 'direccion_destino', 'descripcion'], 'like', '%'.$busqueda)
                ->orWhereAny(['direccion_encuentro', 'direccion_destino', 'descripcion'], 'like', $busqueda.'%')
                ->orWhereAny(['direccion_encuentro', 'direccion_destino', 'descripcion'], 'like', '%'.$busqueda.'%')
                ->get();

        } else {
            $rutas = Ruta::with([
                'user:id,name,nombre1,nombre2,apellido1,apellido2',
                'cupos',
                'comentarios:id,id_ruta'
            ])->get();

        }

        return Inertia::render('Inicio', [
            'rutas' => $rutas
        ]);
    }

    public function getRouteDestinationById(Request $request, $id): Response
    {
        $ruta = Ruta::with([
            'user:id,name,nombre1,nombre2,apellido1,apellido2',
            'cupos',
            'comentarios' => function ($query) {
                $query->with('user:id,name,nombre1,nombre2,apellido1,apellido2');
            }
        ])->find($id);

        if (!$ruta) {
            return Inertia::render('NotFound', ['message' => 'Route not found']);
        }

        return Inertia::render('RouteDetails', [
            'ruta' => $ruta,
        ]);
    }

    public function reservarRuta(Request $request, $id): Response
    {
        // busca la ruta para la cual se va realizar la reservacion
        $ruta = Ruta::with([
            'user:id,name,nombre1,nombre2,apellido1,apellido2',
            'cupos',
            'comentarios' => function ($query) {
                $query->with('user:id,name,nombre1,nombre2,apellido1,apellido2');
            }
        ])->find( $id );

        // busca el cupo con el cual se hará la reservacion
        $cupo= Cupo::where('id_ruta','=',$ruta->id )->first();

        // crea la reservacion y retorna la vista con el objeto actualizado
        $reservacion = new Reservacion();
        $reservacion->id_cupo = $cupo->id;
        $reservacion->id_usuario = $ruta->id_usuario;
        $reservacion->save();

        Log::info($reservacion);
        if (!$ruta) {
            return Inertia::render('NotFound', ['message' => 'Route not found']);
        }

        return Inertia::render('RouteDetails', [
            'ruta' => $ruta,
        ]);
    }
    public function crearRuta(Request $request): Response
    {
        $userId = auth()->id();
        return Inertia::render('RouteCreate',['id_usuario'=>$userId,]);
    }
    public function guardarRuta(Request $request)
    {
        $validatedData = $request->validate([
            'id_usuario' => 'required|integer|exists:users,id',
            'direccion_encuentro' => 'required|string|max:255',
            'direccion_destino' => 'nullable|string|max:255',
            'fecha_hora_salida' => 'required|date',
            'precio' => 'nullable|numeric|min:0',
            'latitud' => 'required|numeric',
            'longitud' => 'required|numeric',
            'latitud_destino'=> 'required|numeric',
            'longitud_destino' => 'required|numeric',
            'descripcion' => 'nullable|string', // Ahora es opcional
        ]);
    
        // Crear la ruta
        $ruta = Ruta::create($validatedData);
    
        // Guardar asientos_disponibles en la tabla relacionada, si existe
        if ($request->has('asientos_disponibles')) {
            $ruta->cupos()->create([
                'disponible' => $request->input('asientos_disponibles', 1), // valor por defecto en caso de que esté ausente
            ]);
        }
    
        return Inertia::render('Show', [
            'ruta' => $ruta,
            'message' => 'Ruta creada correctamente.',
        ]);
        
    }
    public function guardarComentario(Request $request, $rutaId)
    {
        // Validar los datos
        $request->validate([
            'contenido' => 'required|string|max:500'
        ]);
    
        // Crear el comentario con los campos correctos
        $comentario = new Comentario();
        $comentario->contenido = $request->contenido;
        $comentario->fecha = now();
        $comentario->id_usuario = auth()->id(); // Asocia el comentario con el usuario actual
        $comentario->id_ruta = $rutaId;
    
        // Guardar el comentario
        $comentario->save();
    
        // Redirigir o devolver respuesta adecuada
        return redirect()->back()->with('success', 'Comentario agregado correctamente.');
    }
}