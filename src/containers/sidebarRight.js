import React, { useEffect, useState } from 'react'
import { SidebarRight } from '../components'


export default function SidebarLeftContainer({ response, error }) {
    const [nextSixTeenGames, setNextSixTeenGames] = useState()

    function getNextSixteenGames() {
        const playedGames = response.data.filter(game => game.status === 'notstarted')
        const nextSixTeenGames = playedGames.slice(0, 16)
        setNextSixTeenGames(nextSixTeenGames)
        console.log(nextSixTeenGames[0])
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
                    <SidebarRight.Logo src={game.home_team.logo} alt="Home Team Logo" />
                    <SidebarRight.ShortName>{game.home_team.short_code}</SidebarRight.ShortName>
                    <p > - </p>
                    <SidebarRight.ShortName>{game.away_team.short_code}</SidebarRight.ShortName>
                    <SidebarRight.Logo src={game.away_team.logo} alt="Away Team Logo" />
                </SidebarRight.Game>)}
            </SidebarRight.Games>)}
        </SidebarRight>
    )
}