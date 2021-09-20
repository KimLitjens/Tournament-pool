import React, { useEffect, useState } from 'react'
import { SidebarLeft } from '../components'


export default function SidebarLeftContainer({ response }) {
    const [lastSixGames, setlastSixGames] = useState()


    useEffect(() => {
        const playedGames = response.data.filter(game => game.status === 'finished')
        const lastSixGames = playedGames.slice(-16)
        setlastSixGames(lastSixGames)
        console.log(lastSixGames[0])
    }, [response])

    return (
        <SidebarLeft>
            <SidebarLeft.Title>Left Sidebar</SidebarLeft.Title>
            {lastSixGames ? <div>
                {lastSixGames.map(game => <p className="text-center">{game.home_team.short_code} - {game.away_team.short_code} {game.stats.ft_score}</p>)}
            </div> : null}
        </SidebarLeft>
    )
}
