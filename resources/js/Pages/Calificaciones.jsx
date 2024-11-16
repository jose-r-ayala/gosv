import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react"; // Importa useForm para enviar el comentario

import React from "react";

function Calificaciones({ calificaciones, promedio }) {
    console.log(calificaciones)
    return (
        <AuthenticatedLayout>
            <Head title="Calificacion conductor" />

            <div className="p-6 max-w-6xl mx-auto">
                <Link href="/inicio">
                    <img
                        src="/go-back.svg"
                        alt="goback_icon"
                        className="h-8 mb-3"
                    />
                </Link>

                <div className="h-[200px] bg-gray-100 rounded shadow overflow-auto">
                    <h2 className="font-semibold text-2xl mb-4 p-4">
                        Conductor
                    </h2>
                    <div className="flex items-center justify-between space-x-4 p-4">
                        <div className="flex gap-3">
                            <img
                                src="/avatar.svg"
                                alt="Driver Avatar"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="font-bold">@ {calificaciones[0].user.name}</p>
                            <p>{`${calificaciones[0].user.nombre1||''} ${calificaciones[0].user.nombre2||''} ${calificaciones[0].user.apellido1||''} ${calificaciones[0].user.apellido2||''}`}</p>
                                <p className="text-neutral-900 font-medium">
                                    {promedio.toFixed(1)} ⭐
                                </p>
                            </div>
                        </div>
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
                <div className="mt-8">
                    <h2 className="font-semibold text-2xl mb-4">Comentarios</h2>
                    <div className="bg-gray-100 p-4 rounded shadow h-[200px] overflow-auto">
                        {calificaciones.map(
                            ({ comentario, id, user_calificador }) => (
                                <div key={id} className="flex gap-4 mb-6">
                                    <img
                                        src="/avatar.svg"
                                        alt="Driver Avatar"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <div className="flex flex-col">
                                            <span className="font-bold">
                                            @ {user_calificador.name}
                                            </span>
                                            <span className="font-bold">
                                            {`${user_calificador.nombre1||''} ${user_calificador.nombre2||''} ${user_calificador.apellido1||''} ${calificaciones[0].user.apellido2||''}`}
                                            </span>
                                        </div>
                                        <p>{comentario}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}

export default Calificaciones;
