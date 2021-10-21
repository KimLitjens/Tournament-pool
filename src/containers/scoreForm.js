import React, { useState, useEffect } from 'react'
import { ScoreForm } from '../components'
import { Link } from "react-router-dom";
import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, } from "firebase/firestore"

export default function ScoreFormContainer({ response, error, userId }) {
    const [currentRound, setCurrentRound] = useState([])
    const [predictionsMade, setPredictionsMade] = useState(false)
    const [myPredictions, setMyPredictions] = useState([])

    const getCurrentRound = async () => {
        console.log(response.data)
        const currentRound = response.data.filter(game => game.round.is_current === 1)
        console.log()
        setCurrentRound(currentRound)
        console.log(currentRound)
    }

    const saveGamesInFS = () => {
        currentRound.forEach(async function (match) {
            const matchId = '' + match.match_id
            const docRef = doc(db, "users", userId, "predictions", matchId);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                try {
                    setDoc(docRef, match);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
        })
    }

    const getMyPredictions = async () => {
        const querySnapshot = await getDocs(collection(db, "users", userId, "predictions"));
        const predictedGames = []
        querySnapshot.forEach((doc) => {
            predictedGames.push(doc.data())
        });
        setMyPredictions(predictedGames)
    };

    const arePredictionsMade = () => {
        if (myPredictions.some(obj => obj.stats.away_prediction && obj.stats.home_prediction)) {
            return true
        } else {
            return false
        }
    }

    const onChange = (e) => {
        const matchIndex = myPredictions.findIndex(game => game.match_id == e.target.name)
        const teamPrediction = e.target.id
        const valuePrediction = e.target.value
        const prediction = { [teamPrediction]: valuePrediction }

        Object.assign(myPredictions[matchIndex].stats, prediction)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        await setPredictionsMade(false)
        myPredictions.map(game => Object.assign(game.stats, { "prediction_made": game.stats.home_prediction && game.stats.away_prediction }))
        setPredictionsMade(arePredictionsMade())
    };

    const savePredictions = async () => {

        for (let k = 0; k < myPredictions.length; k++) {
            const matchId = '' + myPredictions[k].match_id
            const matchDocRef = doc(db, "users", userId, "predictions", matchId)

            try {
                if (myPredictions[k].stats.prediction_made) {
                    setDoc(matchDocRef, myPredictions[k]);
                } else if (myPredictions[k].stats.prediction_made === false) {

                    await updateDoc(matchDocRef, {
                        "stats.away_prediction": null,
                        "stats.home_prediction": null,
                        "stats.prediction_made": false
                    })
                }
                console.log("predictions Saved")
            } catch (e) {
                console.error("Error adding document: ", e);

            }
        }
    }

    const deletePrediction = async (matchId) => {
        await setPredictionsMade(false)
        const matchIndex = myPredictions.findIndex(game => game.match_id == matchId)
        myPredictions[matchIndex].stats.away_prediction = null
        myPredictions[matchIndex].stats.home_prediction = null
        myPredictions[matchIndex].stats.prediction_made = false
        setPredictionsMade(arePredictionsMade())
    }

    const checkMatchStarted = (game) => {
        const timeFiveMinLater = Date.parse(new Date(Date.now() + 1000 * (60 * 5)).toISOString())
        const matchStart = Date.parse(game.match_start_iso)
        if (matchStart > timeFiveMinLater) {
            return true
        }

    }

    useEffect(() => {
        userId && getMyPredictions()
    }, [userId])

    useEffect(() => {
        response && getCurrentRound()
    }, [response])

    useEffect(() => {
        currentRound && saveGamesInFS()
    }, [currentRound])

    useEffect(() => {
        setPredictionsMade(arePredictionsMade())
    });

    return (
        <ScoreForm>
            <ScoreForm.Title>Score Form</ScoreForm.Title>
            {!currentRound ? (
                <ScoreForm.Label>Loading...</ScoreForm.Label>
            ) : (
                    <ScoreForm.Form
                        onSubmit={(e) => onSubmitHandler(e)}
                        className="form">
                        <ScoreForm.List>
                            {currentRound.map(game =>
                                game.stats.prediction_made && game.stats.away_prediction ? null
                                    : (<ScoreForm.ListItem key={game.match_id}>
                                        <Link
                                            to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
                                            target="_blank"
                                            className="flex"
                                        >
                                            <ScoreForm.Label htmlFor={game.home_team.name} >
                                                {<ScoreForm.Logo
                                                    src={game.home_team.logo}
                                                    alt={game.home_team.name}
                                                />}
                                                <ScoreForm.ShortName >
                                                    {game.home_team.short_code}
                                                </ScoreForm.ShortName>
                                            </ScoreForm.Label>
                                        </Link>
                                        <ScoreForm.Input
                                            type="tel"
                                            id={"home_prediction"}
                                            name={game.match_id}
                                            onChange={onChange}
                                            maxLength="2"
                                            pattern="[0-9]*"
                                        />
                                        <p>-</p>
                                        <ScoreForm.Input
                                            type="tel"
                                            id={"away_prediction"}
                                            name={game.match_id}
                                            onChange={onChange}
                                            maxLength="2"
                                            pattern="[0-9]*"
                                        />
                                        <Link
                                            to={`/clubs/${game.away_team.name}/${game.away_team.team_id}`}
                                            target="_blank"
                                            className="flex"
                                        >
                                            <ScoreForm.Label htmlFor={game.away_team.name}>
                                                <ScoreForm.ShortName >
                                                    {game.away_team.short_code}
                                                </ScoreForm.ShortName>
                                                {<ScoreForm.Logo
                                                    src={game.away_team.logo}
                                                    alt={game.away_team.name}
                                                />}
                                            </ScoreForm.Label>
                                        </Link>
                                    </ScoreForm.ListItem>))}
                        </ScoreForm.List>
                        <ScoreForm.Button type="submit">Submit</ScoreForm.Button>
                    </ScoreForm.Form>)}
            <section>
                {predictionsMade && <h2 className="text-center">Predictions</h2>}
                {predictionsMade && <ScoreForm.List>
                    {myPredictions.map(game =>
                        game.stats.home_prediction && checkMatchStarted(game) ? (
                            <ScoreForm.ListItem key={game.match_id}>
                                <Link
                                    to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
                                    target="_blank"
                                    className="flex"
                                >
                                    {<ScoreForm.Logo
                                        src={game.home_team.logo}
                                        alt={game.home_team.name}
                                    />}
                                    <ScoreForm.ShortName>
                                        {game.home_team.short_code}
                                    </ScoreForm.ShortName>
                                </Link>
                                <p className="self-center">{game.stats.home_prediction}</p>
                                <p className="self-center">-</p>
                                <p className="self-center">{game.stats.away_prediction}</p>
                                <Link
                                    to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
                                    target="_blank"
                                    className="flex"
                                >
                                    <ScoreForm.ShortName>
                                        {game.away_team.short_code}
                                    </ScoreForm.ShortName>
                                    {<ScoreForm.Logo
                                        src={game.away_team.logo}
                                        alt={game.away_team.name}
                                    />}
                                </Link>
                                <ScoreForm.DeleteButton onClick={() => deletePrediction(game.match_id)}>X</ScoreForm.DeleteButton>
                            </ScoreForm.ListItem>)
                            : (null))}
                    <ScoreForm.Button onClick={savePredictions}>save Predictions</ScoreForm.Button>
                </ScoreForm.List>}
            </section>
        </ScoreForm>
    )
}
