import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../utils/hooks/useAxios'
import ClubsStyle from './clubs.styles'
import MatchesContainer from '../../containers/matches'
import GroupStandingContainer from '../../containers/groupStanding'
import TopScorersContainer from '../../containers/topScorers'

export default function Clubs() {
    const { club, team_id } = useParams()
    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY
    const nextGames = 0
    const lastGames = 3

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/teams/${team_id}?apikey=${apiKey}`,
    });

    return (
        <div>
            <ClubsStyle.Title>{club}</ClubsStyle.Title>
            <ClubsStyle.MainDiv>
                <ClubsStyle.LeftDiv>
                    <MatchesContainer teamId={team_id} matchStatus={lastGames} Title="Last Games" />
                    <TopScorersContainer team_id={team_id} />
                </ClubsStyle.LeftDiv>

                {loading ? (
                    <ClubsStyle.Loading>Loading...</ClubsStyle.Loading>
                ) : <ClubsStyle.FinishedLoading>
                    <ClubsStyle.MiddleDiv>
                        {error && error.message}
                        <ClubsStyle.CenterText>Short code: {response.data.short_code}</ClubsStyle.CenterText>
                        <ClubsStyle.LogoDiv>
                            <ClubsStyle.LogoText>Logo: </ClubsStyle.LogoText>
                            <ClubsStyle.LogoImg
                                src={response.data.logo}
                                alt={response.data.name} />
                        </ClubsStyle.LogoDiv>
                        <ClubsStyle.CenterText>Country: {response.data.country.name}</ClubsStyle.CenterText>
                    </ClubsStyle.MiddleDiv>
                    <GroupStandingContainer teamId={team_id} />

                </ClubsStyle.FinishedLoading>
                }
                <MatchesContainer teamId={team_id} matchStatus={nextGames} Title="Next Games" />
            </ClubsStyle.MainDiv>
        </div>
    )
}
