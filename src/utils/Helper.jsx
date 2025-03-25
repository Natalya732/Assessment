import { toast } from "react-toastify";

export default async function makeApiCall({
    path,
    payload,
    method = "GET",
    headers = {},
}) {
    try {
        const BASE_URL = "https://mamun-reza-freeshops-backend.vercel.app";
        const response = await fetch(`${BASE_URL}${path}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();


        if (!response.ok) {
            const errorMessage = data?.message || `Error status is ${response.status}`;
            throw new Error(errorMessage);
        }

        return data;
    } catch (error) {

        const errorMessage = error instanceof (Error) ? error.message : "Something went wrong";

        console.log("error", errorMessage);

        toast.error(errorMessage);
    }
}