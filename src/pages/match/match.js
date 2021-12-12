import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../utils/hooks/useAxios'


export default function Match() {
    const { match_id } = useParams();

    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/matches/${match_id}?apikey=${apiKey}`,
    });

    const data = response?.data
    console.log(data)
    return (
        <div >
            <h1 className="text-center">
                Match
            </h1>
            <div className="grid justify-items-center">
                {loading ? <p>Loading...</p>
                    : <div className="grid justify-items-center  p-2 border-2">
                        <div>
                            <h3>Group: {data.group.group_name}</h3>
                        </div>
                        <div className="flex">
                            <h2 >{data.home_team.name}</h2>
                            <h2 className="mx-4">{data.stats.ft_score}</h2>
                            <h2>{data.away_team.name}</h2>
                        </div>
                        <div>
                            {data.match_events.filter(event => event.type === "goal").map(event =>
                                <p>{event.player_name} - {event.result}</p>
                            )}
                        </div>

                    </div>}
            </div>
        </div>
    )
}
