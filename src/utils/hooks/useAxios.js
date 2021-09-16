import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${apiKey}&season_id=1959&date_from=2021-09-11`;

const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        setLoading(true);
        try {
            console.log(params)
            const res = await axios.request(params);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { response, error, loading };
};

export default useAxios;