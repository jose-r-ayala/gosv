import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { mdiComment } from '@mdi/js';
import Icon from '@mdi/react';
import { split } from 'postcss/lib/list';

export default function Inicio({ rutas }) {

    let rutasLista = rutas.map(function (ruta) {
        return (
            <div key={ruta.id} className="overflow-hidden bg-white shadow-sm sm:rounded-lg my-8">
                <div className="p-6 text-gray-900">

                    {/* INFORMACION DEL USUARIO Y FECHA DE PUBLICACION */}
                    <div className='font-bold'>
                        {ruta.user.name}
                    </div>
                    <div className='flex flex-row gap-1'>
                        <div>{ruta.user.nombre1}</div>
                        <div>{ruta.user.nombre2}</div>
                        <div>{ruta.user.apellido1}</div>
                        <div>{ruta.user.apellido2}</div>
                    </div>
                    <div>
                        {fechaHoraTxt(ruta.feha_publicado, 1)}
                    </div>

                    <div className='border-b-2 my-2 border-gray-300'></div>

                    {/* INFORMACION DEL VIAJE */}
                    <div className='grid grid-flow-col'>
                        <div>
                            <div className='text-xl'>
                                {ruta.descripcion}
                            </div>
                            <div className='mt-2 flex flex-row gap-2 font-bold'>
                                <div>{ruta.direccion_encuentro}</div>
                                <div>{"->"}</div>
                                <div>{ruta.direccion_destino}</div>
                            </div>
                            <div className='mb-2 flex flex-row gap-2'>
                                <div>Fecha de salida:</div>
                                <div>{fechaHoraTxt(ruta.fecha_hora_salida, 1)}</div>
                                <div>Hora:</div>
                                <div>{fechaHoraTxt(ruta.fecha_hora_salida, 2)}</div>
                            </div>
                            <div className='text-green-600'>
                                {cuposDisponibles(ruta.cupos)}
                            </div>
                        </div>

                        <div className='text-green-600 flex flex-col w-fit place-self-center justify-self-end'>
                            <a href='#' className='border-2 p-4 rounded-lg border-gray-300 hover:bg-gray-200'>
                                <div className='text-center text-2xl'>${Number(ruta.precio).toFixed(2)}</div>
                                <div>Reservar asiento</div>
                            </a>
                        </div>
                    </div>

                    <div className='border-b-2 my-2 border-gray-300'></div>

                    {/* COMENTARIOS */}
                    <div title='Comentarios' className='flex flex-row gap-2'>
                        <Icon path={mdiComment} size={1} />
                        <div>{ruta.comentarios.length}</div>
                    </div>
                </div>
            </div>
        );
    });

    // parte = 1, devuelve fecha
    // parte = 2, devuelve hora
    function fechaHoraTxt(fecha, parte) {
        // fecha 2024-12-31 24:59:59
        var fechaSplit = split(fecha, " ");
        var fechaFecha = fechaSplit[0]; // 2024-12-31
        var fechaHora = fechaSplit[1];  // 24:59:59

        var fechaPartes = split(fechaFecha, "-");
        var f = new Date(fechaPartes[0], fechaPartes[1] - 1, fechaPartes[2]);
        var dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var fechaTxt = f.toLocaleDateString("es", dateFormat);

        if (parte === 1) return fechaTxt;

        return fechaHora;
    }

    // calcular cupos disponibles
    function cuposDisponibles(cupos) {
        var disponibles = 0;
        cupos.forEach(cupo => {
            disponibles += cupo.disponible;
        });

        return "Asientos disponibles: " + disponibles + " de " + cupos.length;
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Inicio
                </h2>
            }
        >
            <Head title="Inicio" />

            <div className="py-2">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {rutasLista}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
