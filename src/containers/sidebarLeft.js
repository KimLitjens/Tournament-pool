import React, { useEffect, useState } from 'react'
import { SidebarLeft } from '../components'
import { Link } from "react-router-dom";

import { collection, getDocs, updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from '../firebase';


export default function SidebarLeftContainer({ response, error, userId, numGames = 16 }) {
    const [lastGamesFromApi, setLastGamesFromApi] = useState([])
    const [gamesWithPrediction, setGamesWithPredicition] = useState([])

    function getLastGamesFromApi() {
        const playedGames = response.data.filter(game => game.status === 'finished')
        const lastXGames = playedGames.slice(-numGames).reverse()
        setLastGamesFromApi(lastXGames)
    }

    const getMyPredictions = async () => {
        const querySnapshot = await getDocs(collection(db, "users", userId, "predictions"));
        const predictedGames = []
        querySnapshot.forEach((document) => {
            predictedGames.push(document.data())
        })
        const lastSixTeenWithPrediction = predictedGames.filter(game => lastGamesFromApi.some(id => game.match_id === id.match_id))
        setGamesWithPredicition(lastSixTeenWithPrediction)
    };

    const updateFireStore = async () => {
        lastGamesFromApi.forEach(async (game) => {
            const matchId = '' + game.match_id
            const docRef = doc(db, "users", userId, "predictions", matchId);
            try {
                updateDoc(docRef, {
                    "stats.away_score": game.stats.away_score,
                    "stats.ft_score": game.stats.ft_score,
                    "stats.home_score": game.stats.home_score,
                    "stats.ht_score": game.stats.ht_score,
                    "status": game.status,
                    "status_code": game.status_code
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })
    }

    useEffect(() => {
        response && getLastGamesFromApi()
    }, [response])

    useEffect(() => {
        lastGamesFromApi.length && getMyPredictions()
        lastGamesFromApi && updateFireStore()
    }, [lastGamesFromApi])

    return (
        <SidebarLeft>
            <SidebarLeft.Title>Last Games</SidebarLeft.Title>
            {!gamesWithPrediction.length ? (
                <div>Loading...</div>
            ) : (
                    <SidebarLeft.Games>
                        {error && error.message}
                        {gamesWithPrediction.map(game =>
                            <SidebarLeft.Game
                                key={game.match_id}
                            >
                                <Link to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
                                    className="flex "
                                    target="_blank"
                                >
                                    <SidebarLeft.Logo src={game.home_team.logo} alt="Home Team Logo" />
                                    <SidebarLeft.ShortName>{game.home_team.short_code}</SidebarLeft.ShortName>
                                </Link>
                                <div className="ml-2">
                                    <SidebarLeft.Score>{game.stats.home_score} - {game.stats.away_score}</SidebarLeft.Score>
                                    {/* <p className="text-center" >{game.stats.home_prediction} - {game.stats.away_prediction}</p> */}
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
