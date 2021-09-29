import React, { useEffect, useState } from 'react'
import { SidebarLeft } from '../components'


export default function SidebarLeftContainer({ response, error }) {
    const [lastSixTeenGames, setlastSixTeenGames] = useState()

    function getLastSixTeenGames() {
        const playedGames = response.data.filter(game => game.status === 'finished')
        const lastSixTeenGames = playedGames.slice(-16).reverse()
        setlastSixTeenGames(lastSixTeenGames)
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
                        {lastSixTeenGames.map(game => <SidebarLeft.Game key={game.match_id}>
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
