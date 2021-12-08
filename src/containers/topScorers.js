import React, { useEffect, useState } from 'react'
import useAxios from '../utils/hooks/useAxios'
import { TopScorers } from '../components'
import { Link } from "react-router-dom";

export default function TopScorersContainer({ team_id }) {
    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY
    const [players, setPlayers] = useState([])

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=${apiKey}&season_id=1959`,
    });
    console.log(team_id);

    const getTheRightPlayers = () => {
        const players = team_id ? response.data.filter(player => player.team.team_id === +team_id) : response.data
        const topPlayers = players.slice(0, 20)
        setPlayers(topPlayers)
        console.log(topPlayers)
    }

    useEffect(() => {
        !loading && getTheRightPlayers()
    }, [loading])
    return (
        <TopScorers>
            {!players.length ? <p>...Loading</p> :
                <TopScorers.List>
                    {error && error.message}
                    {players.map(topScorer =>
                        <TopScorers.TopScorer key={topScorer.player.player_id}>
                            {!team_id ? `${topScorer.pos}: ` : null}
                            <Link
                                to={`/players/${topScorer.player.player_name}/${topScorer.player.player_id}/${topScorer.team.team_id}`}
                                target="_blank"
                            >
                                {topScorer.player.player_name}
                            </Link>
                            {` - ${topScorer.goals.overall}`}
                        </TopScorers.TopScorer>)}
                </TopScorers.List>
            }
        </TopScorers>
    )
}
