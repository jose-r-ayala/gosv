import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function NotFound() {
    return (
        <>
            <Head  title="Not Found"/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
                <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
                <p className="text-gray-500 mt-2">
                    We're sorry, the page you're trying to access does not exist
                </p>
                <Link
                    href="/"
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Go Back
                </Link>
            </div>
        </>
    );
}
