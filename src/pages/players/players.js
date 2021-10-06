import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../utils/hooks/useAxios'

export default function Players() {
    const { player, id } = useParams();

    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/players/${id}?apikey=${apiKey}`,
    });

    console.log('The player id is:', id);

    return (
        <div>
            <h1 className="text-center">{player}</h1>
            {loading ? (
                <div>Loading...</div>
            ) : <div>
                    {error && error.message}
                    <p className="text-center">Age: {response.data.age}</p>
                    <p className="text-center">Birthday: {response.data.birthday}</p>
                    <p className="text-center">Height: {response.data.height}</p>
                    <p className="text-center">Weight: {response.data.weight}</p>
                    <p className="text-center">Country: {response.data.country.name}</p>
                </div>}
        </div>
    )
}
