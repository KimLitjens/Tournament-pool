import React, { useState, useEffect } from 'react'
import useInput from '../utils/hooks/useInput';
import { ScoreForm } from '../components'

export default function ScoreFormContainer({ response, error }) {
    const [scorePredictions, setScorePredictions] = useState([])
    const [scoreIsSubmited, setscoreIsSubmited] = useState(false)

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
        setscoreIsSubmited(true)
    };

    return (
        <ScoreForm>
            <ScoreForm.Title>Score Form</ScoreForm.Title>
            {!nextSixTeenGames ? (
                <ScoreForm.Label>Loading...</ScoreForm.Label>
            ) : (
                    <ScoreForm.Form
                        onSubmit={(e) => onSubmitHandler(e)}
                    >
                        {nextSixTeenGames.map(game => <ScoreForm.Games>
                            <ScoreForm.Label htmlFor={game.home_team.name}>
                                {<img src={game.home_team.logo} className="w-8 h-8" alt={game.home_team.name} />}
                                <p className="w-10 mx-2 self-center text-center">{game.home_team.short_code}</p>
                            </ScoreForm.Label>
                            <input type="text" id={game.home_team.name} name={game.match_id}
                                className="shadow appearance-none border rounded w-10 mx-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <p>-</p>
                            <input type="text" id={game.away_team.name} name={game.match_id}
                                className="shadow appearance-none border rounded w-10 mx-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <label htmlFor={game.away_team.name} className=" w-10 flex">
                                <p className="w-10 mx-2 self-center text-center">{game.away_team.short_code}</p>
                                {<img src={game.away_team.logo} className="w-8 h-8" alt={game.away_team.name} />}
                            </label>
                        </ScoreForm.Games>)}

                        <button type="submit" className="relative self-center w-2/3 py-2 px-0 text-white font-bold text-sm cursor-pointer rounded-full bg-gradient-to-r from-blue-800 to-blue-500 border-transparent m-10">Submit</button>
                    </ScoreForm.Form>)}
            <div>
                <div>
                </div>
            </div>
        </ScoreForm>
    )
}
