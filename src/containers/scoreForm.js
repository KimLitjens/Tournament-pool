import React, { useState, useEffect } from 'react'
import { ScoreForm } from '../components'
import { Link } from "react-router-dom";

export default function ScoreFormContainer({ response, error }) {
    const [nextSixTeenGames, setNextSixTeenGames] = useState()
    const [predictionsMade, setPredictionsMade] = useState(false)

    function getNextSixteenGames() {
        const playedGames = response.data.filter(game => game.status === 'notstarted')
        const nextSixTeenGames = playedGames.slice(0, 16)
        setNextSixTeenGames(nextSixTeenGames)
        console.log(nextSixTeenGames)
    }

    function arePredictionsMade() {
        if (nextSixTeenGames.some(obj => obj.stats.away_prediction && obj.stats.home_prediction)) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        response && getNextSixteenGames()
    }, [response])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        await setPredictionsMade(false)
        setPredictionsMade(arePredictionsMade())
    };


    const deletePrediction = async (matchId) => {
        await setPredictionsMade(false)
        const matchIndex = nextSixTeenGames.findIndex(game => game.match_id == matchId)
        delete nextSixTeenGames[matchIndex].stats.away_prediction
        delete nextSixTeenGames[matchIndex].stats.home_prediction
        setPredictionsMade(arePredictionsMade())
    }

    const onChange = (e) => {
        const matchIndex = nextSixTeenGames.findIndex(game => game.match_id == e.target.name)
        const teamPrediction = e.target.id
        const valuePrediction = e.target.value
        const prediction = { [teamPrediction]: valuePrediction }

        Object.assign(nextSixTeenGames[matchIndex].stats, prediction)
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
                        <ScoreForm.List>
                            {nextSixTeenGames.map(game =>
                                game.stats.home_prediction && game.stats.away_prediction ? null
                                    : (<ScoreForm.ListItem key={game.match_id}>
                                        <Link
                                            to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
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
                                            type="number"
                                            id={"home_prediction"}
                                            name={game.match_id}
                                            onChange={onChange}
                                            min="0"
                                            max="99"
                                        />
                                        <p>-</p>
                                        <ScoreForm.Input
                                            type="number"
                                            id={"away_prediction"}
                                            name={game.match_id}
                                            onChange={onChange}
                                            min="0"
                                            max="99"
                                        />
                                        <Link
                                            to={`/clubs/${game.away_team.name}/${game.away_team.team_id}`}
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
                    {nextSixTeenGames.map(game =>
                        game.stats.home_prediction && game.stats.away_prediction ? (
                            <ScoreForm.ListItem key={game.match_id}>
                                <Link
                                    to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
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
                </ScoreForm.List>}
            </section>
        </ScoreForm>
    )
}
