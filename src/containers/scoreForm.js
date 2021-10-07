import React, { useState, useEffect } from 'react'
import { ScoreForm } from '../components'
import { Link } from "react-router-dom";

export default function ScoreFormContainer({ response, error }) {
    const [nextSixTeenGames, setNextSixTeenGames] = useState()
    const [matchPredictions, setMatchPredictions] = useState([])
    const [predictionsMade, setPredictionsMade] = useState(false)

    // console.log(watch("example"))

    function getNextSixteenGames() {
        const playedGames = response.data.filter(game => game.status === 'notstarted')
        const nextSixTeenGames = playedGames.slice(0, 16)
        setNextSixTeenGames(nextSixTeenGames)
        console.log(nextSixTeenGames)
    }

    useEffect(() => {
        response && getNextSixteenGames()
    }, [response])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        await setPredictionsMade(false)
        console.log("submitted")
        setPredictionsMade(true)
    };

    const onChange = (e) => {
        const matchIndex = nextSixTeenGames.findIndex(game => game.match_id == e.target.name)
        console.log(nextSixTeenGames[matchIndex].stats)
        const teamPrediction = e.target.id
        const valuePrediction = e.target.value
        const prediction = { [teamPrediction]: valuePrediction }
        Object.assign(nextSixTeenGames[matchIndex].stats, prediction)
        console.log(nextSixTeenGames[matchIndex].stats)
        console.log(nextSixTeenGames)
    }


    return (
        <ScoreForm>
            <ScoreForm.Title>Score Form</ScoreForm.Title>
            {!nextSixTeenGames ? (
                <ScoreForm.Label>Loading...</ScoreForm.Label>
            ) : (
                    <ScoreForm.Form
                        onSubmit={(e) => onSubmitHandler(e)}
                        className="form">
                        {nextSixTeenGames.map(game => game.stats.home_prediction && game.stats.away_prediction ? null : (<ScoreForm.Games key={game.match_id}>
                            <Link to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`} className="flex">
                                <ScoreForm.Label htmlFor={game.home_team.name} >
                                    {<ScoreForm.Logo src={game.home_team.logo} alt={game.home_team.name} />}
                                    <ScoreForm.ShortName >{game.home_team.short_code}</ScoreForm.ShortName>
                                </ScoreForm.Label>
                            </Link>
                            <ScoreForm.Input type="text" id={"home_prediction"} name={game.match_id} onChange={onChange}
                            />
                            <p>-</p>
                            <ScoreForm.Input type="text" id={"away_prediction"} name={game.match_id} onChange={onChange}
                            />
                            <Link to={`/clubs/${game.away_team.name}/${game.away_team.team_id}`} className="flex">
                                <ScoreForm.Label htmlFor={game.away_team.name} >
                                    <ScoreForm.ShortName >{game.away_team.short_code}</ScoreForm.ShortName>
                                    {<ScoreForm.Logo src={game.away_team.logo} alt={game.away_team.name} />}
                                </ScoreForm.Label>
                            </Link>
                        </ScoreForm.Games>))}
                        <ScoreForm.Button type="submit">Submit</ScoreForm.Button>
                    </ScoreForm.Form>)}
            <section>
                <h2 className="text-center">Predictions</h2>
                {predictionsMade && nextSixTeenGames.map(game => game.stats.home_prediction && game.stats.away_prediction ? (<ScoreForm.Games key={game.match_id}>
                    <Link to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`} className="flex">
                        {<ScoreForm.Logo src={game.home_team.logo} alt={game.home_team.name} />}
                        <ScoreForm.ShortName >{game.home_team.short_code}</ScoreForm.ShortName>
                    </Link>
                    <p className="self-center">{game.stats.home_prediction}</p>
                    <p className="self-center">-</p>
                    <p className="self-center">{game.stats.away_prediction}</p>
                    <Link to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`} className="flex">
                        <ScoreForm.ShortName >{game.away_team.short_code}</ScoreForm.ShortName>
                        {<ScoreForm.Logo src={game.away_team.logo} alt={game.away_team.name} />}
                    </Link>
                </ScoreForm.Games>) : (null))}
            </section>

        </ScoreForm>
    )
}
