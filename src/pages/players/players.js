import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useAxios from '../../utils/hooks/useAxios'
import { Player } from '../../components'

import MatchesContainer from '../../containers/matches'
import FooterContainer from '../../containers/footer'
import HeaderContainer from '../../containers/header'



export default function Players() {
    const { player, id, team_id } = useParams();
    const lastGames = 3
    const nextGames = 0

    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/players/${id}?apikey=${apiKey}`,
    });

    useEffect(() => {
        document.title = "Pool - Player";
    }, []);
    return (
        <div>
            <HeaderContainer />
            <Player>
                <Player.Name>{player}</Player.Name>
                <Player.Info>
                    {/* Last games */}
                    <MatchesContainer teamId={team_id} matchStatus={lastGames} Title="Last Games" />
                    <Player.Middle id="middel">
                        {loading ? (
                            // Player Info
                            <Player.Loading>Loading...</Player.Loading>
                        ) : <Player.Personal>
                            {error && error.message}
                            <p className="text-center">Age: {response.data.age}</p>
                            <p className="text-center">Birthday: {response.data.birthday.split('-').reverse().join("-")} </p>
                            <p className="text-center">Height: {response.data.height}cm</p>
                            <p className="text-center">Weight: {response.data.weight}kg</p>
                            <p className="text-center">Country: {response.data.country.name}</p>
                        </Player.Personal>}
                    </Player.Middle>
                    {/* Next games  */}
                    <MatchesContainer teamId={team_id} matchStatus={nextGames} Title="Next Games" showDate={true} />
                </Player.Info>
            </Player >
            <FooterContainer />
        </div>

    )
}
