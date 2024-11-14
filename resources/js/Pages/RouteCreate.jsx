import { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const MapComponent = ({ data, setData }) => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const query = e.target.value;
        if (query.length < 3) {
            setSearchResults([]); // No buscamos si la longitud de la consulta es menor que 3
            return;
        }

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: query }, (results, status) => {
            if (status === "OK") {
                setSearchResults(results);
            } else {
                setSearchResults([]);
            }
        });
    };

    const handleSelectLocation = (address, lat, lng) => {
        // Si ya hay una dirección de encuentro, asignamos la dirección seleccionada a "direccion_destino"
        if (data.direccion_encuentro) {
            setData({
                ...data,
                direccion_destino: address,
                latitud_destino: lat,
                longitud_destino: lng,
            });
        } else {
            // Si no hay una dirección de encuentro, asignamos a "direccion_encuentro"
            setData({
                ...data,
                direccion_encuentro: address,
                latitud: lat,
                longitud: lng,
            });
        }

        setSearchResults([]); // Limpiar los resultados después de seleccionar una ubicación
    };

    return (
        <div className="space-y-4 bg-gray-100 rounded shadow flex items-center justify-center">
            <APIProvider apiKey="AIzaSyCE2kxKOIZmllBgqq032Qj4DW6-qVvshpc">
                <div>
                    {/* Búsqueda de direcciones */}
                    <input
                        type="text"
                        placeholder="Buscar dirección"
                        className="w-full p-2"
                        onChange={handleSearch}
                    />
                    {searchResults.length > 0 && (
                        <ul className="bg-white border rounded shadow-md mt-2 max-h-60 overflow-y-auto">
                            {searchResults.map((result, index) => (
                                <li
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() =>
                                        handleSelectLocation(
                                            result.formatted_address,
                                            result.geometry.location.lat(),
                                            result.geometry.location.lng()
                                        )
                                    }
                                >
                                    {result.formatted_address}
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Mapa */}
                    <Map
                        style={{ width: '550px', height: '300px' }}
                        center={{ lat: data.latitud, lng: data.longitud }}
                        zoom={12}
                    >
                        <Marker
                            position={{ lat: data.latitud, lng: data.longitud }}
                            draggable
                            onDragEnd={(e) => {
                                const latLng = e.latLng;
                                if (latLng) {
                                    const lat = latLng.lat();
                                    const lng = latLng.lng();
                                    setData({
                                        ...data,
                                        latitud: lat,
                                        longitud: lng,
                                    });
                                }
                            }}
                        />
                    </Map>
                </div>
            </APIProvider>
        </div>
    );
};

const RouteCreate = ({ id_usuario }) => {
    const { data, setData, post, processing, errors } = useForm({
        id_usuario: id_usuario,
        direccion_encuentro: "",
        direccion_destino: "",
        asientos_disponibles: "",
        fecha_hora_salida: "",
        precio: 0,
        latitud: 13.7942,  // Coordenadas iniciales
        longitud: -88.8965,
        latitud_destino: 0,
        longitud_destino: 0,
        descripcion: "", // Nuevo campo de descripción
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/rutas/guardar');
    };

    return (
        <AuthenticatedLayout>
            <Head title="Crear Ruta" />
            <div className="p-6 max-w-6xl mx-auto">
                <Link href="/inicio">
                    <img
                        src="/go-back.svg"
                        alt="goback_icon"
                        className="h-8 mb-3"
                    />
                </Link>

                {/* Formulario para Crear Ruta */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    <div className="space-y-4">
                        <h2 className="font-semibold text-2xl">Descripción</h2>
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <div className="mb-2">
                                <label className="block font-bold">
                                    Punto de encuentro
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full p-2" 
                                    value={data.direccion_encuentro} 
                                    onChange={e => setData('direccion_encuentro', e.target.value)}
                                    placeholder="Ingrese punto de encuentro" 
                                />
                                {errors.direccion_encuentro && <p className="text-red-500">{errors.direccion_encuentro}</p>}
                            </div>
                            <div className="mb-2">
                                <label className="block font-bold">
                                    Punto de destino
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full p-2" 
                                    value={data.direccion_destino} 
                                    onChange={e => setData('direccion_destino', e.target.value)}
                                    placeholder="Ingrese punto de destino" 
                                />
                                {errors.direccion_destino && <p className="text-red-500">{errors.direccion_destino}</p>}
                            </div>
                            <div className="mb-2">
                                <label className="block font-bold">
                                    Descripción
                                </label>
                                <textarea
                                    className="w-full p-2"
                                    value={data.descripcion}
                                    onChange={e => setData('descripcion', e.target.value)}
                                    placeholder="Ingrese una descripción"
                                    rows={4}
                                />
                                {errors.descripcion && <p className="text-red-500">{errors.descripcion}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">
                                        Asientos disponibles
                                    </label>
                                    <input 
                                        type="number" 
                                        className="w-full p-2" 
                                        value={data.asientos_disponibles} 
                                        onChange={e => setData('asientos_disponibles', e.target.value)}
                                        placeholder="Número de asientos" 
                                    />
                                    {errors.asientos_disponibles && <p className="text-red-500">{errors.asientos_disponibles}</p>}
                                </div>
                                <div>
                                    <label className="block font-bold">
                                        Fecha
                                    </label>
                                    <input 
                                        type="datetime-local" 
                                        className="w-full p-2" 
                                        value={data.fecha_hora_salida} 
                                        onChange={e => setData('fecha_hora_salida', e.target.value)}
                                    />
                                    {errors.fecha_hora_salida && <p className="text-red-500">{errors.fecha_hora_salida}</p>}
                                </div>
                                <div>
                                    <label className="block font-bold">
                                        Precio
                                    </label>
                                    <input 
                                        type="number" 
                                        className="w-full p-2" 
                                        value={data.precio} 
                                        onChange={e => setData('precio', e.target.value)}
                                        placeholder="Precio" 
                                    />
                                    {errors.precio && <p className="text-red-500">{errors.precio}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="space-y-4 bg-gray-100 rounded shadow flex items-center justify-center">
                        <MapComponent data={data} setData={setData} />
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="text-white px-4 py-2 rounded hover:bg-blue-700"
                            style={{ backgroundColor: "#3159BE" }}
                            disabled={processing}
                        >
                            Guardar Ruta
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

export default RouteCreate;
