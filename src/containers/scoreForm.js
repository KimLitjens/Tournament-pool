import React, { useState, useEffect } from 'react'
import { ScoreForm } from '../components'


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

    const onSubmitHandler = (e) => {
        setPredictionsMade(false)
        e.preventDefault()
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
                        {nextSixTeenGames.map(game => <ScoreForm.Games key={game.match_id}>
                            <ScoreForm.Label htmlFor={game.home_team.name} >
                                {<ScoreForm.Logo src={game.home_team.logo} alt={game.home_team.name} />}
                                <ScoreForm.ShortName >{game.home_team.short_code}</ScoreForm.ShortName>
                            </ScoreForm.Label>
                            <ScoreForm.Input type="text" id={"home_prediction"} name={game.match_id} onChange={onChange}
                            />
                            <p>-</p>
                            <ScoreForm.Input type="text" id={"away_prediction"} name={game.match_id} onChange={onChange}
                            />
                            <ScoreForm.Label htmlFor={game.away_team.name} >
                                <ScoreForm.ShortName >{game.away_team.short_code}</ScoreForm.ShortName>
                                {<ScoreForm.Logo src={game.away_team.logo} alt={game.away_team.name} />}
                            </ScoreForm.Label>
                        </ScoreForm.Games>)}

                        <ScoreForm.Button type="submit">Submit</ScoreForm.Button>
                    </ScoreForm.Form>)}
            <section>
                <h2 className="text-center">Predictions</h2>
                {predictionsMade && nextSixTeenGames.map(game => <ScoreForm.Games key={game.match_id}>
                    <div className="flex">
                        {<ScoreForm.Logo src={game.home_team.logo} alt={game.home_team.name} />}
                        <ScoreForm.ShortName >{game.home_team.short_code}</ScoreForm.ShortName>
                    </div>
                    <p>{game.stats.home_prediction}</p>
                    <p>-</p>
                    <p>{game.stats.away_prediction}</p>
                    <div className="flex">
                        <ScoreForm.ShortName >{game.away_team.short_code}</ScoreForm.ShortName>
                        {<ScoreForm.Logo src={game.away_team.logo} alt={game.away_team.name} />}
                    </div>
                </ScoreForm.Games>)}
            </section>

        </ScoreForm>
    )
}
