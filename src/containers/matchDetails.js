import React, { useEffect, useState } from 'react'
import { MatchDetails } from '../components'
import { Link } from "react-router-dom";


export default function MatchDetailsContainer({ game, prediction = false, ftScore = true }) {
    return (
        <MatchDetails.Game
            key={game.match_id}
        >
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
                {ftScore &&
                    <div className="ml-2">
                        <MatchDetails.Score>{game.stats.home_score} - {game.stats.away_score}</MatchDetails.Score>
                    </div>}

                {prediction &&
                    <div className="text-blue-500">
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
        </MatchDetails.Game>
    )
}
