import React, { useState, useEffect } from 'react'
import { SidebarLeft } from '../components'
import { useAllMatches } from '../utils/hooks/allMatches'
import MatchDetailsContainer from '../containers/matchDetails';

export default function MatchesContainer({
    teamId = null,
    matchStatus,
    Title,
    numGames = 16,
    showDate
}) {
    const { response: matchesResponse, error: matchesError } = useAllMatches()
    const [matches, setMatches] = useState()

    const findPlayersMatches = () => {
        const playersMatches = matchesResponse.data.filter(match => match.away_team.team_id == teamId || match.home_team.team_id == teamId)
        const matchesByStatus = playersMatches.filter(match => match.status_code == matchStatus)
        setMatches(matchesByStatus)
    }

    const getAllMatches = () => {
        const playedGames = matchesResponse.data.filter(match => match.status === 'finished')
        const lastXGames = playedGames.slice(-numGames).reverse()
        setMatches(lastXGames)
    }

    useEffect(() => {
        matchesResponse && teamId && findPlayersMatches()
        matchesResponse && !teamId && getAllMatches()
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
                        {matches.map(game =>
                            <MatchDetailsContainer
                                key={game.match_id}
                                game={game}
                                matchStatus={matchStatus}
                                showDate={showDate}
                            />
                        )}
                    </SidebarLeft.Games>)
            }
        </SidebarLeft>
    )
}