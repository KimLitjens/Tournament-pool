import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Clubs } from '../../components'

import MatchesContainer from '../../containers/matches'
import GroupStandingContainer from '../../containers/groupStanding'
import TopScorersContainer from '../../containers/topScorers'
import HeaderContainer from '../../containers/header'
import FooterContainer from '../../containers/footer'

import useAxios from '../../utils/hooks/useAxios'

export default function ClubsPage() {
    const { club, team_id } = useParams()
    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY
    const nextGames = 0
    const lastGames = 3

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/teams/${team_id}?apikey=${apiKey}`,
    });

    useEffect(() => {
        document.title = "Pool - Club";
    }, []);

    return (
        <>
            <HeaderContainer />
            <Clubs.Title>{club}</Clubs.Title>
            <Clubs.MainDiv>
                {/* Show last games and Topscorers */}
                <Clubs.LeftDiv>
                    <MatchesContainer teamId={team_id} matchStatus={lastGames} Title="Last Games" />
                    <TopScorersContainer team_id={team_id} />
                </Clubs.LeftDiv>

                {loading ? (
                    <Clubs.Loading>Loading...</Clubs.Loading>
                ) : <Clubs.FinishedLoading>
                    {/* Club info */}
                    <Clubs.MiddleDiv>
                        {error && error.message}
                        <Clubs.CenterText>Short code: {response.data.short_code}</Clubs.CenterText>
                        <Clubs.LogoDiv>
                            <Clubs.LogoText>Logo: </Clubs.LogoText>
                            <Clubs.LogoImg
                                src={response.data.logo}
                                alt={response.data.name} />
                        </Clubs.LogoDiv>
                        <Clubs.CenterText>Country: {response.data.country.name}</Clubs.CenterText>
                    </Clubs.MiddleDiv>
                    {/* Group standings */}
                    <GroupStandingContainer teamId={team_id} />

                </Clubs.FinishedLoading>
                }
                {/* Next Games */}
                <MatchesContainer teamId={team_id} matchStatus={nextGames} Title="Next Games" showDate={true} />
            </Clubs.MainDiv>
            <FooterContainer />

        </>
    )
}
