import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            <div className="grid justify-items-center">
                {usersPredictions.length ? matchDates.map(date => <div className="text-center my-4">
                    <h2>
                        {new Date(date).toLocaleDateString().replaceAll("/", "-")}
                    </h2>
                    <h3>
                        {new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </h3>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th >Match</th>
                                <th className="px-2">Predicted <br /> Result</th>
                                <th >Match <br />Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersPredictions.map(match => match.match_start_iso == date ?
                                <tr className="py-2">
                                    <td className="flex ">
                                        <Link to={`/clubs/${match.home_team.name}/${match.home_team.team_id}`}
                                            className="flex "
                                            target="_blank"
                                        >
                                            <img
                                                src={match.home_team.logo}
                                                alt={match.home_team.name}
                                                className="w-8 h-8 mx-2" />
                                            <p className="mx-3 w-7 self-center">{match.home_team.short_code}</p>
                                            <p className="self-center"> - </p>
                                            <p className="mx-3 w-7 self-center">{match.away_team.short_code}</p>
                                            <img src={match.away_team.logo} alt={match.away_team.name} className="w-12 h-8 px-2" />
                                        </Link>
                                    </td>
                                    <td>
                                        <p>{match.stats.home_prediction ?? "x"} - {match.stats.away_prediction ?? "x"}</p>
                                    </td>
                                    <td>
                                        <p className=""> {match.stats.ft_score}</p>
                                    </td>
                                </tr> : null)}
                        </tbody>
                    </table>
                </div>) : <p>Loading...</p>}
            </div>
        </>
    )
}