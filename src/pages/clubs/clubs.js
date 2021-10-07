import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../utils/hooks/useAxios'
export default function Clubs() {
    const { club, id } = useParams()
    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/teams/${id}?apikey=${apiKey}`,
    });

    return (
        <div>
            <h2 className="text-center">{club}</h2>
            {loading ? (
                <div>Loading...</div>
            ) : <div>
                    {error && error.message}
                    <p className="text-center my-2">Short code: {response.data.short_code}</p>
                    <div className="flex justify-center">
                        <p className="text-center self-center">Logo: </p>
                        <img src={response.data.logo} alt={response.data.name} className="w-10 h-10 justify-center" />
                    </div>
                    <p className="text-center my-2">Country: {response.data.country.name}</p>
                </div>}
        </div>
    )
}