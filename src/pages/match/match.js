import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../utils/hooks/useAxios'
import { Link } from "react-router-dom";

export default function Match() {
    const { match_id } = useParams();

    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/matches/${match_id}?apikey=${apiKey}`,
    });

    const data = response?.data
    const homeTeamId = data?.home_team?.team_id
    const awayTeamId = data?.away_team?.team_id

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
                            <Link to={`/clubs/${data.home_team.name}/${data.home_team.team_id}`}
                                className="flex "
                                target="_blank"
                            >
                                <h2 >{data.home_team.name}</h2>
                                <img
                                    src={data.home_team.logo}
                                    alt="Home Team Logo"
                                    className="w-8 h-8 mx-2"
                                />
                            </Link>
                            <h2 className="mx-4">{data.stats.ft_score}</h2>
                            <Link to={`/clubs/${data.home_team.name}/${data.home_team.team_id}`}
                                className="flex "
                                target="_blank"
                            >
                                <img
                                    src={data.away_team.logo}
                                    alt="Away Team Logo"
                                    className="w-8 h-8 mx-2"
                                />
                                <h2>{data.away_team.name}</h2>
                            </Link>
                        </div>
                        <div className="flex">
                            <div>
                                {data.match_events.filter(event =>
                                    event.type === "goal" && event.team_id === homeTeamId).map(event =>
                                        <p> {event.minute}' {event.player_name.split(',').reverse().join(' ')}: {event.result}</p>
                                    )}
                            </div>
                            <div className="w-16">

                            </div>

                            <div>
                                {data.match_events.filter(event => event.type === "goal" && event.team_id === awayTeamId).map(event =>
                                    <p> {event.minute}' {event.player_name.split(',').reverse().join(' ')}: {event.result}</p>
                                )}
                            </div>
                        </div>



                    </div>}
            </div>
        </div>
    )
}
