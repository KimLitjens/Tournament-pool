import React, { useEffect, useState } from 'react'
import { SidebarLeft } from '../components'


export default function SidebarLeftContainer({ response }) {
    const [lastSixTeenGames, setlastSixTeenGames] = useState()


    useEffect(() => {
        const playedGames = response.data.filter(game => game.status === 'finished')
        const lastSixTeenGames = playedGames.slice(-16)
        setlastSixTeenGames(lastSixTeenGames)
        console.log(lastSixTeenGames[0])
    }, [response])

    return (
        <SidebarLeft>
            <SidebarLeft.Title>Last Games</SidebarLeft.Title>
            {lastSixTeenGames ? <div>
                {lastSixTeenGames.map(game => <p className="text-center">{game.home_team.short_code} - {game.away_team.short_code} {game.stats.ft_score}</p>)}
            </div> : null}
        </SidebarLeft>
    )
}
