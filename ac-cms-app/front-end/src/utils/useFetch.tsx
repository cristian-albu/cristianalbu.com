import { useEffect, useState } from "react";

/**
 * Custom React hook for fetching data from an API endpoint.
 * @template T - The type of data fetched from the API.
 * @param {string} uri - The URI of the API endpoint.
 */
function useFetch<T>(uri: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | unknown>(null);
    const [refetchCount, setRefetchCount] = useState(0);

    const refetch = () => {
        setRefetchCount((prev) => prev + 1);
    };

    const fetchData = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_ORIGIN}/api/${uri}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const responseJson = await response.json();
            setData(responseJson);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uri, refetchCount]);

    return { data, loading, error, refetch };
}

export default useFetch;
