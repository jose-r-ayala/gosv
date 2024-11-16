import React, { useEffect } from 'react';

const Show = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Redirigir a la ruta '/inicio' después de 3 segundos
            window.location.href = '/inicio';
        }, 3000); // 3000 ms = 3 segundos

        // Limpiar el temporizador cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Ruta creada correctamente</h1>
                <div className="mt-8">
                    <p className="text-gray-600">Redirigiendo al inicio en 3 segundos...</p>
                </div>
            </div>
        </div>
    );
};

export default Show;
