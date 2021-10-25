import React, { useEffect, useState } from 'react'
import { SidebarLeft } from '../components'
import { Link } from "react-router-dom";

import { collection, getDocs, updateDoc, doc } from "firebase/firestore"
import { db } from '../firebase';


export default function SidebarLeftContainer({ response, error, userId, numGames = 16 }) {
    const [lastSixTeenGames, setlastSixTeenGames] = useState([])
    const [gamesWithPrediction, setGamesWithPredicition] = useState([])

    function getLastSixTeenGames() {
        const playedGames = response.data.filter(game => game.status === 'finished')
        const lastSixTeenGames = playedGames.slice(-numGames).reverse()
        setlastSixTeenGames(lastSixTeenGames)
    }

    const getMyPredictions = async () => {
        const querySnapshot = await getDocs(collection(db, "users", userId, "predictions"));
        const predictedGames = []
        querySnapshot.forEach((document) => {
            predictedGames.push(document.data())
        })
        const lastSixTeenWithPrediction = predictedGames.filter(game => lastSixTeenGames.some(id => game.match_id === id.match_id))
        console.log(lastSixTeenWithPrediction)
        setGamesWithPredicition(lastSixTeenWithPrediction)
    };
    useEffect(() => {
        response && getLastSixTeenGames()
    }, [response])

    useEffect(() => {
        lastSixTeenGames.length && getMyPredictions()
    }, [])

    return (
        <SidebarLeft>
            <SidebarLeft.Title>Last Games</SidebarLeft.Title>
            {!gamesWithPrediction.length ? (
                <div>Loading...</div>
            ) : (
                    <SidebarLeft.Games>
                        {error && error.message}
                        {gamesWithPrediction.map(game => <SidebarLeft.Game key={game.match_id}>
                            <Link to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
                                className="flex"
                                target="_blank"
                            >
                                <SidebarLeft.Logo src={game.home_team.logo} alt="Home Team Logo" />
                                <SidebarLeft.ShortName>{game.home_team.short_code}</SidebarLeft.ShortName>
                            </Link>
                            <div>
                                <SidebarLeft.Score>{game.stats.ft_score}</SidebarLeft.Score>
                                <p className="text-red-500">{game.stats.home_prediction} - {game.stats.away_prediction}</p>
                            </div>
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
        </SidebarLeft >
    )
}
