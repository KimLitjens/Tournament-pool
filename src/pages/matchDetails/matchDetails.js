import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../utils/hooks/useAxios'
import { Link } from "react-router-dom";
import HeaderContainer from '../../containers/header'
import FooterContainer from '../../containers/footer'
import EventsContainer from '../../containers/events'

export default function Match() {
    const { match_id } = useParams();
    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY
    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/matches/${match_id}?apikey=${apiKey}`,
    });

    const data = response?.data
    const homeTeamId = data?.home_team?.team_id
    const awayTeamId = data?.away_team?.team_id
    const eventTypes = ["goal", "substitution", "yellowcard", "redcard"]

    useEffect(() => {
        document.title = "Pool - Match";
    }, []);

    return (
        <div >
            <HeaderContainer />
            <h1 className="text-center">
                Match
            </h1>
            <div className="grid justify-items-center">
                {loading ? <p>Loading...</p>
                    : <div className="grid p-2 border rounded border-yellow-500">
                        <div className="text-center">
                            <h3 >Group: {data?.group?.group_name}</h3>
                            <h2 >{new Date(data.match_start).toLocaleDateString().replaceAll("/", "-")}</h2>
                            <h3> {new Date(data.match_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>
                        </div>
                        <div className="flex m-2">
                            <Link to={`/clubs/${data.home_team.name}/${data.home_team.team_id}`}
                                className="flex "
                                target="_blank"
                            >
                                <h2 className="font-bold">{data.home_team.name}</h2>
                                <img
                                    src={data.home_team.logo}
                                    alt="Home Team Logo"
                                    className="w-8 h-8 mx-2"
                                />
                            </Link>
                            <h2 className="mx-4">{data.stats.ft_score}</h2>
                            <Link to={`/clubs/${data.away_team.name}/${data.away_team.team_id}`}
                                className="flex "
                                target="_blank"
                            >
                                <img
                                    src={data.away_team.logo}
                                    alt="Away Team Logo"
                                    className="w-8 h-8 mx-2"
                                />
                                <h2 className="font-bold">{data.away_team.name}</h2>
                            </Link>
                        </div>
                        {data.match_events && eventTypes.map(eventType => data.match_events.some(event => event.type === eventType) ? <EventsContainer
                            data={data}
                            type={eventType}
                            homeTeamId={homeTeamId}
                            awayTeamId={awayTeamId}
                        /> : null)}

                    </div>}
            </div>
            <FooterContainer />
        </div>
    )
}
