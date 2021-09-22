import React, { useEffect, useState } from 'react'
import { SidebarRight } from '../components'


export default function SidebarLeftContainer({ response }) {
    const [nextSixTeenGames, setNextSixTeenGames] = useState()


    useEffect(() => {
        const playedGames = response.data.filter(game => game.status === 'notstarted')
        const nextSixTeenGames = playedGames.slice(0, 15)
        setNextSixTeenGames(nextSixTeenGames)
        console.log(nextSixTeenGames[0])
    }, [response])

    return (
        <SidebarRight>
            <SidebarRight.Title>Next Games</SidebarRight.Title>
            {nextSixTeenGames ? <div className="content-center">
                {nextSixTeenGames.map(game => <div className="flex m-4 ">
                    <img src={game.home_team.logo} alt="Home Team Logo" width="25" height="25"></img> - <img src={game.away_team
                        .logo} alt="Home Team Logo" width="25" height="25"></img> {game.stats.ft_score} </div>)}
            </div> : null}
        </SidebarRight>
    )
}