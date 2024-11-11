import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function RouteDetails({ ruta }) {
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
                    <h1 className="text-3xl font-bold">Route Details</h1>
                    <button
                        className="text-white px-4 py-2 rounded hover:bg-blue-700"
                        style={{ backgroundColor: "#3159BE" }}
                    >
                        Book trip
                    </button>
                </div>
                <div className="flex-1 border-b border-gray-300 mb-3"></div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Description */}
                    <div className="space-y-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <div className="mb-2">
                                <label className="block font-medium">
                                    Starting Point
                                </label>
                                <p>{ruta.direccion_encuentro}</p>
                            </div>
                            <div className="mb-2">
                                <label className="block font-medium">
                                    Destination Point
                                </label>
                                <p>{ruta.direccion_destino}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-medium">
                                        Available seats
                                    </label>
                                    <p>{ruta.cupos[0].disponible}</p>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        Date
                                    </label>
                                    <p>{convertDate(ruta.fecha_hora_salida)}</p>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        Price
                                    </label>
                                    <p>$ {ruta.precio}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full h-64 bg-gray-200 rounded shadow">
                        {/* Placeholder for map */}
                        <p className="text-center pt-28">Map View</p>
                    </div>
                </div>

                {/* Driver Information and Additional Notes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Driver Info */}
                    <div className="h-[200px] bg-gray-100 rounded shadow overflow-auto">
                        <h2 className="font-semibold text-2xl mb-4 p-4">
                            Driver
                        </h2>
                        <div className="flex items-center justify-between space-x-4 p-4">
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
                            <button
                                className="ml-auto text-white px-5 py-2 rounded hover:bg-green-600 text-sm"
                                style={{ backgroundColor: "#158E5A" }}
                            >
                                Send a message
                            </button>
                        </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="h-[200px] bg-gray-100 rounded shadow overflow-auto">
                        <h2 className="font-semibold text-2xl mb-4 p-4">
                            Additional Notes
                        </h2>
                        <div className="p-4"></div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="mt-8">
                    <h2 className="font-semibold text-2xl mb-4">Comments</h2>
                    <div className="bg-gray-100 p-4 rounded shadow h-32"></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
