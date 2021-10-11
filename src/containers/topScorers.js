import React from 'react'
import useAxios from '../utils/hooks/useAxios'
import { TopScorers } from '../components'
import { Link } from "react-router-dom";

export default function TopScorersContainer() {
    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=${apiKey}&season_id=1959`,
    });

    return (
        <TopScorers>
            {loading ? <p>...Loading</p> :
                <TopScorers.List>
                    {error && error.message}
                    {response.data.slice(0, 20).map(topScorer =>
                        <TopScorers.TopScorer key={topScorer.player.player_id}>
                            {`${topScorer.pos}: `}
                            <Link to={`/players/${topScorer.player.player_name}/${topScorer.player.player_id}`}>
                                {topScorer.player.player_name}
                            </Link>
                            {` - ${topScorer.goals.overall}`}
                        </TopScorers.TopScorer>)}
                </TopScorers.List>
            }
        </TopScorers>
    )
}
