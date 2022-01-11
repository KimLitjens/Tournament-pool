import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { collection, doc, getDocs, setDoc, updateDoc, } from "firebase/firestore"

import { db } from '../firebase';
import { ScoreForm } from '../components'
import MatchDetailsContainer from '../containers/matchDetails'

export default function ScoreFormContainer({ response, error, userId }) {
    const [currentRound, setCurrentRound] = useState([])
    const [predictionsMade, setPredictionsMade] = useState(false)
    const [myPredictions, setMyPredictions] = useState([])
    const [savePredictionsMessage, setsavePredictionsMessage] = useState("")

    const getCurrentRound = async () => {
        const currentRound = response.data.filter(game => game.status_code === 0).slice(0, 8)
        setCurrentRound(currentRound)
    }

    const getMyPredictionsFromFS = async () => {
        const querySnapshot = await getDocs(collection(db, "users", userId, "predictions"));
        const predictedGames = []
        querySnapshot.forEach((doc) => {
            predictedGames.push(doc.data())
        });
        const predictedCurrentRound = predictedGames.filter(game => currentRound.some(id => game.match_id === id.match_id))
        setMyPredictions(predictedCurrentRound)
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

    const savePredictionsAfterClick = async () => {
        setsavePredictionsMessage("")
        try {
            for (let k = 0; k < myPredictions.length; k++) {
                const matchId = '' + myPredictions[k].match_id
                const matchDocRef = doc(db, "users", userId, "predictions", matchId)

                if (myPredictions[k].stats.prediction_made) {

                    setDoc(matchDocRef, myPredictions[k]);

                } else if (myPredictions[k].stats.prediction_made === false) {

                    await updateDoc(matchDocRef, {
                        "stats.away_prediction": null,
                        "stats.home_prediction": null,
                        "stats.prediction_made": false

                    })
                }
            }
            setsavePredictionsMessage("Predictions Saved")
        } catch (e) {
            console.log("Error adding document: ", e)
            alert("Something went wrong with saving!");
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

    useEffect(() => {
        response && getCurrentRound()
    }, [response])

    useEffect(() => {
        currentRound.length && getMyPredictionsFromFS()
    }, [currentRound])

    useEffect(() => {
        setPredictionsMade(arePredictionsMade())
    });

    return (
        <ScoreForm>
            <ScoreForm.Title>Score Form</ScoreForm.Title>
            {!myPredictions.length ? (
                <ScoreForm.Loading>Loading...</ScoreForm.Loading>
            ) : (
                // Show not predicted matches:
                <ScoreForm.Form
                    onSubmit={(e) => onSubmitHandler(e)}
                    className="form">
                    <ScoreForm.List>
                        {myPredictions.map(game =>
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
            <ScoreForm.Section>
                {/* Code after submitting predictions */}
                <h3 className="text-center text-white bg-green-500">{savePredictionsMessage}</h3>
                {/* show predicted matches */}
                <h2 className="text-center">Predictions</h2>
                {<ScoreForm.List>
                    {predictionsMade ? myPredictions.map(game =>
                        game.stats.prediction_made &&
                        <MatchDetailsContainer
                            key={game.match_id}
                            game={game}
                            prediction={true}
                            ftScore={false}
                            deletePrediction={deletePrediction}
                        />
                    )
                        : <p className="text-center">No prediction made</p>}
                    <ScoreForm.Button onClick={savePredictionsAfterClick}>Save Predictions</ScoreForm.Button>
                </ScoreForm.List>}
            </ScoreForm.Section>
        </ScoreForm>
    )
}