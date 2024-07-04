import { useEffect, useState } from "react";


function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                const result = response.json();
                setData(result);
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchData();
    }, [url]);
    return {data, loading, error}
}

export default useFetch;
