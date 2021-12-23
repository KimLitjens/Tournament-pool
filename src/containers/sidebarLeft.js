import React from 'react'
import MatchesContainer from '../containers/matches';

export default function SidebarLeftContainer({ response, error, userId, numGames = 16 }) {

    return (
        <MatchesContainer
            Title="Last Games"
            numGames={numGames}
        />
    )
}
