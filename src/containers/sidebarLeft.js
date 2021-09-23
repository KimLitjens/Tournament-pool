import React, { useEffect, useState } from 'react'
import { SidebarLeft } from '../components'


export default function SidebarLeftContainer({ response, error }) {
    const [lastSixTeenGames, setlastSixTeenGames] = useState()

    function getLastSixTeenGames() {
        const playedGames = response.data.filter(game => game.status === 'finished')
        const lastSixTeenGames = playedGames.slice(-16)
        setlastSixTeenGames(lastSixTeenGames)
        console.log(lastSixTeenGames[0])
    }
    useEffect(() => {
        response && getLastSixTeenGames()
    }, [response])

    return (
        <SidebarLeft>
            <SidebarLeft.Title>Last Games</SidebarLeft.Title>
            {!lastSixTeenGames ? (
                <div>Loading...</div>
            ) : (
                    <SidebarLeft.Games>
                        {error && error.message}
                        {lastSixTeenGames.map(game => <SidebarLeft.Game className="flex justify-center">
                            <SidebarLeft.Logo src={game.home_team.logo} alt="Home Team Logo" />
                            <SidebarLeft.ShortName>{game.home_team.short_code}</SidebarLeft.ShortName>
                            <SidebarLeft.Score>{game.stats.ft_score}</SidebarLeft.Score>
                            <SidebarLeft.ShortName>{game.away_team.short_code}</SidebarLeft.ShortName>
                            <SidebarLeft.Logo src={game.away_team.logo} alt="Away Team Logo" />
                        </SidebarLeft.Game>)}
                    </SidebarLeft.Games>)}
        </SidebarLeft>
    )
}
