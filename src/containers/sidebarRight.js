import React, { useEffect, useState } from 'react'
import { SidebarRight } from '../components'
import { Link } from 'react-router-dom'


export default function SidebarLeftContainer({ response, error }) {
    const [nextSixTeenGames, setNextSixTeenGames] = useState()

    function getNextSixteenGames() {
        const playedGames = response.data.filter(game => game.status === 'notstarted')
        const nextSixTeenGames = playedGames.slice(0, 16)
        setNextSixTeenGames(nextSixTeenGames)
    }

    useEffect(() => {
        response && getNextSixteenGames()
    }, [response])

    return (
        <SidebarRight>
            <SidebarRight.Title>Next Games</SidebarRight.Title>
            {!nextSixTeenGames ? (
                <div>Loading...</div>
            ) : (<SidebarRight.Games >
                {error && error.message}
                {nextSixTeenGames.map(game => <SidebarRight.Game key={game.match_id}>
                    <Link to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`} className="flex">
                        <SidebarRight.Logo src={game.home_team.logo} alt="Home Team Logo" />
                        <SidebarRight.ShortName>{game.home_team.short_code}</SidebarRight.ShortName>
                    </Link >
                    <p > - </p>
                    <Link to={`/clubs/${game.away_team.name}/${game.away_team.team_id}`} className="flex">
                        <SidebarRight.ShortName>{game.away_team.short_code}</SidebarRight.ShortName>
                        <SidebarRight.Logo src={game.away_team.logo} alt="Away Team Logo" />
                    </Link >
                </SidebarRight.Game>)}
            </SidebarRight.Games>)}
        </SidebarRight>
    )
}