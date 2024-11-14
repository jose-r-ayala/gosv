import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { mdiCalendar, mdiCar, mdiComment, mdiMagnify, mdiMap } from '@mdi/js';
import Icon from '@mdi/react';
import { split } from 'postcss/lib/list';

export default function Inicio({ rutas,message }) {

    let rutasLista = rutas.map(function (ruta) {
        return (
            <div key={ruta.id} className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-8">
                <div className="p-6 text-gray-900">

                    {/* INFORMACION DEL USUARIO Y FECHA DE PUBLICACION */}
                    <div className='flex flex-row gap-4 w-full'>
                        <img
                            src="/avatar.svg"
                            alt="Driver Avatar"
                            className="w-fit h-12 rounded-full"
                        />

                        <div className=''>
                            <div className='flex flex-row gap-2'>
                                <div className='flex flex-row gap-1 font-bold'>
                                    <div>{ruta.user.nombre1}</div>
                                    <div>{ruta.user.nombre2}</div>
                                    <div>{ruta.user.apellido1}</div>
                                    <div>{ruta.user.apellido2}</div>
                                </div>
                                <div className='text-gray-500'>
                                    @{ruta.user.name}
                                </div>
                            </div>
                            <div>
                                {fechaHoraTxt(ruta.feha_publicado, 1)}
                            </div>
                        </div>

                        <a
                            href={'/ruta/' + ruta.id}
                            className='border-2 rounded-lg border-gray-400 hover:bg-gray-300 ml-auto px-8 my-auto py-2'
                        >
                            Ver
                        </a>
                    </div>

                    <div className='border-b-2 my-2 border-gray-300'></div>

                    {/* INFORMACION DEL VIAJE */}
                    <div className='grid grid-flow-col'>
                        <div>
                            <div className='text-xl'>
                                {ruta.descripcion}
                            </div>

                            <div className='my-2 flex flex-row gap-2 font-bold'>
                                <Icon path={mdiMap} size={1} />
                                <div>{ruta.direccion_encuentro}</div>
                                <div>{"->"}</div>
                                <div>{ruta.direccion_destino}</div>
                            </div>

                            <div className='my-2 flex flex-row gap-2'>
                                <Icon path={mdiCalendar} size={1} />
                                <div>Fecha de salida:</div>
                                <div>{fechaHoraTxt(ruta.fecha_hora_salida, 1)}</div>
                                <div>Hora:</div>
                                <div>{fechaHoraTxt(ruta.fecha_hora_salida, 2)}</div>
                            </div>

                            <div className='text-green-600 flex flex-row gap-2'>
                                <Icon path={mdiCar} size={1} />
                                {"Asientos disponibles: " + ruta.cupos.disponible}
                            </div>
                        </div>

                        <div className='text-green-600 flex flex-col w-fit place-self-center justify-self-end'>
                            <div className='p-4 rounded-lg'>
                                <div className='text-center text-3xl'>${Number(ruta.precio).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>

                    <div className='border-b-2 my-2 border-gray-300'></div>

                    {/* COMENTARIOS */}
                    <a
                        href={'/ruta/' + ruta.id}
                        title='Comentarios'
                        className='flex flex-row gap-2 hover:bg-gray-300 w-fit rounded-lg p-2'
                    >
                        <Icon path={mdiComment} size={1} />
                        <div>{ruta.comentarios.length}</div>
                    </a>
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

    // buscar
    function buscar(e) {
        e.preventDefault();
        var busqueda = document.getElementById('busqueda').value;
        open(route('inicio', busqueda), '_self');
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

        {/* Mensaje de éxito */}
        {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mx-auto w-[90%] my-4">
                <strong className="font-bold block">¡Éxito!</strong>
                <span>{message}</span>
            </div>
        )}

            <div className="py-4 my-2 sticky top-0 bg-gray-200/80 flex flex-row place-items-center justify-center">
                <a
                    href=""
                    className="hover:bg-white mx-2 p-2 rounded-lg"
                    onClick={(e) => {
                        buscar(e);
                    }}
                >
                    <Icon path={mdiMagnify} size={1.2} />
                </a>

                <form
                    onSubmit={(e) => {
                        buscar(e);
                    }}
                    className="w-full max-w-5xl"
                >
                    <input
                        id="busqueda"
                        placeholder="Buscar una ruta..."
                        className="w-full border-0 text-gray-900 bg-white rounded-lg"
                        value={undefined}
                        onChange={undefined}
                    />
                </form>

                <a
                    href="/rutacreate/"
                    className="text-white mx-2 py-2 px-4 rounded-lg bg-blue-700 hover:bg-blue-500"
                >
                    + Nueva ruta
                </a>
            </div>

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {!rutasLista.length ? (
                   <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative rounded mx-auto w-[90%]" role="alert">
                   <strong class="font-bold block text-xl">No encontrado</strong>
                   <span class="block sm:inline">La búsqueda que ingresaste no fue encontrada :(</span>
                 </div>
                ) : (
                    rutasLista
                )}
            </div>
        </AuthenticatedLayout>
    );
}
