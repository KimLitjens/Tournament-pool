import React, { useState, useEffect } from 'react'
import { SidebarLeft } from '../components'
import { useAllMatches } from '../utils/hooks/allMatches'
import { Link } from "react-router-dom";

export default function MatchesContainer({ teamId, matchStatus, Title }) {
    const { response: matchesResponse, error: matchesError } = useAllMatches()

    const [matches, setMatches] = useState()

    const findPlayersMatches = () => {
        const playersMatches = matchesResponse.data.filter(match => match.away_team.team_id == teamId || match.home_team.team_id == teamId)
        const matchesByStatus = playersMatches.filter(match => match.status_code == matchStatus)
        console.log(teamId, matchStatus)
        setMatches(matchesByStatus)
    }

    useEffect(() => {
        matchesResponse && findPlayersMatches()
    }, [matchesResponse])


    return (
        <SidebarLeft>
            <SidebarLeft.Title>
                {Title}
            </SidebarLeft.Title>
            {!matches ? <p>Loading...</p>
                : (
                    <SidebarLeft.Games>
                        {matchesError && matchesError.message}
                        {matches.map(game => <SidebarLeft.Game key={game.match_id}>
                            <Link to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
                                className="flex"
                                target="_blank"
                            >
                                <SidebarLeft.Logo src={game.home_team.logo} alt="Home Team Logo" />
                                <SidebarLeft.ShortName>{game.home_team.short_code}</SidebarLeft.ShortName>
                            </Link>
                            <SidebarLeft.Score>{game.stats.ft_score || <p>-</p>}</SidebarLeft.Score>
                            <Link to={`/clubs/${game.away_team.name}/${game.away_team.team_id}`}
                                target="_blank"
                                className="flex"
                            >
                                <SidebarLeft.ShortName>{game.away_team.short_code}</SidebarLeft.ShortName>
                                <SidebarLeft.Logo src={game.away_team.logo} alt="Away Team Logo" />
                            </Link>
                        </SidebarLeft.Game>)}
                    </SidebarLeft.Games>)
            }
        </SidebarLeft>
    )
}
