import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useAuth } from '../utils/hooks/useAuth';

export default function PredictionsContainer() {
    const userInfo = useAuth();

    const [usersPredictions, setUsersPredictions] = useState([])
    const [matchDates, setMatchDates] = useState([])
    const [auth, setAuth] = useState({});

    const userId = auth?.currentUser?.uid

    const getUsersPredictions = async () => {
        const querySnapshot = await getDocs(collection(db, "users", userId, "predictions"));
        const usersInfo = []
        querySnapshot.forEach((doc) => {
            usersInfo.push(doc.data())
        })
        setUsersPredictions(usersInfo.sort((firstItem, secondItem) => firstItem.match_id - secondItem.match_id));
        console.log(usersInfo)
    }

    const getAllDates = () => {
        const dates = []
        usersPredictions.map(match => new Date(match.match_start_iso).valueOf() < new Date().valueOf() ? dates.push(match.match_start_iso) : null)
        setMatchDates([...new Set(dates.reverse())])
    }

    useEffect(() => {
        setAuth(userInfo)
    }, [userInfo]);

    useEffect(() => {
        userId && getUsersPredictions()
        userId && getAllDates()
    }, [userId])

    useEffect(() => {
        usersPredictions && getAllDates()
    }, [usersPredictions])

    return (
        <>
            <div>
                <h1 className="text-center">Predictions page</h1>
            </div>
            <div>
                {usersPredictions.length && matchDates.map(date => <div className="text-center my-4">
                    <h2>{new Date(date).toLocaleDateString().replaceAll("/", "-")}</h2>
                    <h3>{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>
                    {usersPredictions.map(match => match.match_start_iso == date ? <div className="flex justify-center">
                        <img src={match.home_team.logo} alt={match.home_team.name} className="w-8 h-8 mx-2" />
                        <p className="mx-3 w-7 text-center">{match.home_team.short_code}</p>
                        <div className="flex mx-2">
                            <p>{match.stats.home_prediction ?? "x"}</p>
                            <p> - </p>
                            <p>{match.stats.away_prediction ?? "x"}</p>
                        </div>
                        <p className="mx-3 w-7 text-center">{match.away_team.short_code}</p>
                        <img src={match.away_team.logo} alt={match.away_team.name} className="w-8 h-8 mx-2" />
                    </div> : null)}
                </div>)}




                {/*                 
                usersPredictions.map(match => <div className="flex justify-center">
                        <img src={match.home_team.logo} alt={match.home_team.name} className="w-8 h-8 mx-2" />
                        <p className="mx-3 w-7 text-center">{match.home_team.short_code}</p>
                        <div className="flex mx-2">
                            <p>{match.stats.home_prediction ? match.stats.home_prediction : "x"}</p>
                            <p> - </p>
                            <p>{match.stats.away_prediction ? match.stats.away_prediction : "x"}</p>
                        </div>
                        <p className="mx-3 w-7 text-center">{match.away_team.short_code}</p>
                        <img src={match.away_team.logo} alt={match.away_team.name} className="w-8 h-8 mx-2" />
                    </div>) */}
            </div>
        </>
    )
}



// .replace(/T.*/, '').split('-').reverse().join('-')