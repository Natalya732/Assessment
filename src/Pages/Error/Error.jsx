import React from "react"
import Button from "../../Components/Button/Button"

export default function Error() {
    return (
        <div className="flex flex-col items-center w-full justify-center h-screen bg-orange-50 rounded-2xl">
            <div className="text-center flex flex-col gap-5">

                <h1 className="text-4xl font-bold text-gray-800">Oops! Page not found</h1>
                <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>

                <Button
                    onClick={() => window.history.back()}
                    className="mt-6 px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Go Back
                </Button>
            </div>
        </div>
    )
}