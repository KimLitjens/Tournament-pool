import React from 'react'
import { MatchDetails } from '../components'
import { Link } from "react-router-dom";


export default function MatchDetailsContainer({
    deletePrediction,
    ftScore = true,
    game,
    matchStatus,
    prediction = false,
    showDate = false
}) {
    return (
        <MatchDetails.Game
            key={game.match_id}
        >
            {showDate && <div className="text-center">
                <p className="font-bold text-center">
                    {new Date(game.match_start).toLocaleDateString().replaceAll("/", "-")}
                </p>
                <p >
                    {new Date(game.match_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
            </div>}

            <div className="flex">
                <Link to={`/clubs/${game.home_team.name}/${game.home_team.team_id}`}
                    className="flex "
                    target="_blank"
                >
                    <MatchDetails.Logo src={game.home_team.logo} alt="Home Team Logo" />
                    <MatchDetails.ShortName>{game.home_team.short_code}</MatchDetails.ShortName>
                </Link>
                <Link to={`/match/${game.match_id}`}
                    className="flex "
                    target="_blank"
                >
                    {matchStatus === 0 ? <p className="self-center">-</p> : ftScore &&
                        <div className="ml-2 self-center">
                            <MatchDetails.Score>{game.stats.home_score} - {game.stats.away_score}</MatchDetails.Score>
                        </div>}

                    {prediction &&
                        <div className="text-blue-500 ml-2 self-center">
                            <MatchDetails.Score>{game.stats.home_prediction} - {game.stats.away_prediction}</MatchDetails.Score>
                        </div>}
                </Link>

                <Link to={`/clubs/${game.away_team.name}/${game.away_team.team_id}`}
                    target="_blank"
                    className="flex"
                >
                    <MatchDetails.ShortName>{game.away_team.short_code}</MatchDetails.ShortName>
                    <MatchDetails.Logo src={game.away_team.logo} alt="Away Team Logo" />
                </Link>
                <MatchDetails.DeleteButton onClick={() => deletePrediction(game.match_id)}>X</MatchDetails.DeleteButton>

            </div>
        </MatchDetails.Game>
    )
}
