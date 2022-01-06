import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useAuth } from '../utils/hooks/useAuth';

export default function PredictionsContainer() {
    const userInfo = useAuth();

    const [usersPredictions, setUsersPredictions] = useState([])
    const [matchDates, setMatchDates] = useState([])
    const [auth, setAuth] = useState({});
    const [totalPoints, settotalPoints] = useState()

    const userId = auth?.currentUser?.uid

    const getUsersPredictions = async () => {
        const querySnapshot = await getDocs(collection(db, "users", userId, "predictions"));
        const usersInfo = []
        querySnapshot.forEach((doc) => {
            usersInfo.push(doc.data())
        })
        setUsersPredictions(usersInfo.sort((firstItem, secondItem) => firstItem.match_id - secondItem.match_id));
    }

    const getAllDates = () => {
        const dates = []
        usersPredictions.map(match => new Date(match.match_start_iso).valueOf() < new Date().valueOf() ?
            dates.push(match.match_start_iso) :
            null)
        setMatchDates([...new Set(dates.reverse())])
    }

    const getTotalPoints = async () => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            settotalPoints(docSnap.data().pointsScored)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const getPointsScoredColor = (points) => {
        let color = ""
        switch (points) {
            case 4:
                color = "bg-green-500";
                break;
            case 3:
                color = "bg-yellow-200";
                break;
            case 2:
                color = "bg-yellow-500";
                break;
            case 0:
                color = "bg-red-500";
                break;
        }
        return color
    }

    useEffect(() => {
        setAuth(userInfo)
    }, [userInfo]);

    useEffect(() => {
        userId && getUsersPredictions()
        userId && getAllDates()
        userId && getTotalPoints()
    }, [userId])

    useEffect(() => {
        usersPredictions && getAllDates()
    }, [usersPredictions])

    return (
        <>
            <div>
                <h1 className="text-center">Predictions page</h1>
            </div>
            <div><h3>Total Points: {totalPoints}</h3></div>
            <div className="grid justify-items-center">
                {usersPredictions.length ? matchDates.map(date => <div key={date} className="text-center my-4">
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
                                <th >Match  <br />Result</th>
                                <th className="px-2">Points  <br />Scored</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersPredictions.map(match => match.match_start_iso === date ?
                                <tr
                                    key={match.match_id}
                                    className={`
                                py-2 ${getPointsScoredColor(match.stats.points)}
`}>
                                    <td className="flex ">
                                        <Link to={`/ clubs / ${match.home_team.name} / ${match.home_team.team_id}`}
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
                                    <td>
                                        {match.stats.points}
                                    </td>
                                </tr> : null)}
                        </tbody>
                    </table>
                </div>) : <p>Loading...</p>}
            </div>
        </>
    )
}

