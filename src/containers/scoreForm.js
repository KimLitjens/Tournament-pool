import React, { useState, useEffect } from 'react'
import { ScoreForm } from '../components'

export default function ScoreFormContainer({ response, error }) {

    const [nextSixTeenGames, setNextSixTeenGames] = useState()

    function getNextSixteenGames() {
        const playedGames = response.data.filter(game => game.status === 'notstarted')
        const nextSixTeenGames = playedGames.slice(0, 16)
        setNextSixTeenGames(nextSixTeenGames)
    }

    useEffect(() => {
        response && getNextSixteenGames()
    }, [response])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log()
    };

    return (
        <ScoreForm>
            <ScoreForm.Title>Score Form</ScoreForm.Title>
            {!nextSixTeenGames ? (
                <ScoreForm.Label>Loading...</ScoreForm.Label>
            ) : (
                    <ScoreForm.Form
                        onSubmit={(e) => onSubmitHandler(e)}
                        className="form">
                        {nextSixTeenGames.map(game => <ScoreForm.Games>
                            <ScoreForm.Label htmlFor={game.home_team.name} >
                                {<ScoreForm.Logo src={game.home_team.logo} alt={game.home_team.name} />}
                                <ScoreForm.ShortName >{game.home_team.short_code}</ScoreForm.ShortName>
                            </ScoreForm.Label>
                            <ScoreForm.Input type="text" id={game.home_team.name} name={game.match_id}
                            />
                            <p>-</p>
                            <ScoreForm.Input type="text" id={game.away_team.name} name={game.match_id}
                            />
                            <ScoreForm.Label htmlFor={game.away_team.name} >
                                <ScoreForm.ShortName >{game.away_team.short_code}</ScoreForm.ShortName>
                                {<ScoreForm.Logo src={game.away_team.logo} alt={game.away_team.name} />}
                            </ScoreForm.Label>
                        </ScoreForm.Games>)}

                        <ScoreForm.Button type="submit">Submit</ScoreForm.Button>
                    </ScoreForm.Form>)}
        </ScoreForm>
    )
}
