import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react"; // Importa useForm para enviar el comentario
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function RouteDetails({ ruta }) {
    console.log(ruta);

    const { data, setData, post, reset } = useForm({
        contenido: "",
    });

    const convertDate = (date) => {
        const currentDate = new Date(date);
        const dateParameters = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        const dateConverted = currentDate.toLocaleString(
            "es-ES",
            dateParameters
        );
        return dateConverted;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Envía el formulario usando Inertia
        post(`/ruta/${ruta.id}/comentarios`, {
            onSuccess: () => reset(), // Limpia el campo después de enviar
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Route Details" />
            <div className="p-6 max-w-6xl mx-auto">
                <Link href="/inicio">
                    <img
                        src="/go-back.svg"
                        alt="goback_icon"
                        className="h-8 mb-3"
                    />
                </Link>
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">Detalle de ruta</h1>
                    <button
                        className="text-white px-4 py-2 rounded hover:bg-blue-700"
                        style={{ backgroundColor: "#3159BE" }}
                    >
                        <a href={"/reservar/" + ruta.id}>Reservar Viaje</a>
                    </button>
                </div>
                <div className="flex-1 border-b border-gray-300 mb-3"></div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 ">
                    {/* Description */}
                    <div className="space-y-4">
                        <h2 className="font-semibold text-2xl">Descripción</h2>
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <div className="mb-2">
                                <label className="block font-bold">
                                    Punto de encuentro
                                </label>
                                <p>{ruta.direccion_encuentro}</p>
                            </div>
                            <div className="mb-2">
                                <label className="block font-bold">
                                    Punto de destino
                                </label>
                                <p>{ruta.direccion_destino}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">
                                        Asientos disponibles
                                    </label>
                                    <p>{ruta.cupos.disponible}</p>
                                </div>
                                <div>
                                    <label className="block font-bold">
                                        Fecha
                                    </label>
                                    <p>{convertDate(ruta.fecha_hora_salida)}</p>
                                </div>
                                <div>
                                    <label className="block font-bold">
                                        Precio
                                    </label>
                                    <p>$ {ruta.precio}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="space-y-4 bg-gray-100 rounded shadow flex items-center justify-center">
                        <APIProvider
                            apiKey={"AIzaSyCE2kxKOIZmllBgqq032Qj4DW6-qVvshpc"}
                        >
                            <Map
                                style={{ width: "550px", height: "300px" }}
                                defaultCenter={{
                                    lat: Number(ruta.latitud),
                                    lng: Number(ruta.longitud),
                                }}
                                defaultZoom={16}
                                gestureHandling={"greedy"}
                                disableDefaultUI={true}
                            >
                                <Marker
                                    position={{
                                        lat: Number(ruta.latitud),
                                        lng: Number(ruta.longitud),
                                    }}
                                    draggable
                                />
                            </Map>
                        </APIProvider>
                    </div>
                </div>

                {/* Driver Information and Additional Notes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Driver Info */}
                    <div className="h-[200px] bg-gray-100 rounded shadow overflow-auto">
                        <h2 className="font-semibold text-2xl mb-4 p-4">
                            Conductor
                        </h2>
                        <div className="flex items-center justify-between space-x-4 p-4">
                            <a href={"/calificaciones/" + ruta.user.id}>
                                <div className="flex gap-3">
                                    <img
                                        src="/avatar.svg"
                                        alt="Driver Avatar"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold">
                                            @ {ruta.user.name}
                                        </p>
                                        <p>{ruta.user.nombre1}</p>
                                        <p className="text-neutral-900 font-medium">
                                            4.7 ⭐
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <button
                                className="ml-auto text-white px-5 py-2 rounded hover:bg-green-600 text-sm"
                                style={{ backgroundColor: "#158E5A" }}
                            >
                                <a
                                    href={`https://wa.me/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    Enviar mensaje
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="h-[200px] bg-gray-100 rounded shadow overflow-auto">
                        <h2 className="font-semibold text-2xl mb-4 p-4">
                            Notas
                        </h2>
                        <div className="p-4"></div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="mt-8">
                    <h2 className="font-semibold text-2xl mb-4">Comentarios</h2>
                    <div className="bg-gray-100 p-4 rounded shadow h-[200px] overflow-auto">
                        {ruta.comentarios.map(
                            ({ contenido, fecha, user, id }) => (
                                <div key={id} className="flex gap-4 mb-6">
                                    <img
                                        src="/avatar.svg"
                                        alt="Driver Avatar"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <div className="flex flex-col">
                                            <span className="font-bold">
                                                @ {user.name} -{" "}
                                                {convertDate(fecha)}
                                            </span>
                                            <span className="font-bold">
                                                {user.nombre1} {user.apellido1}
                                            </span>
                                        </div>
                                        <p>{contenido}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* Comment Form */}
                    <form onSubmit={handleSubmit} className="mt-4">
                        <textarea
                            value={data.contenido}
                            onChange={(e) =>
                                setData("contenido", e.target.value)
                            }
                            placeholder="Escribe tu comentario aquí..."
                            className="w-full p-3 border rounded"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Agregar comentario
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
