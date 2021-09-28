import React, { useEffect, useState } from 'react';
import SidebarLeftContainer from '../../containers/sidebarLeft'
import SidebarRightContainer from '../../containers/sidebarRight'
import HeaderContainer from '../../containers/header'
import FooterContainer from '../../containers/footer'
import TopScorersContainer from '../../containers/topScorers'
import { useAuth } from '../../utils/hooks/useAuth';
import useAxios from '../../utils/hooks/useAxios'
import { object } from 'prop-types';

const HomePage = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});
  const [teams, setTeams] = useState({})

  const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

  const { response, error, loading } = useAxios({
    url: `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${apiKey}&season_id=1959&date_from=2021-09-11`,
  });

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  useEffect(() => {
    const clubs = []
    response && response.data.slice(0, 16).map(match => clubs.push(match.home_team, match.away_team))
    setTeams(clubs)
  }, [response])

  const welcomeMessage = auth?.currentUser?.displayName
    ? `Welcome ${auth?.currentUser?.displayName}`
    : 'Welcome';

  return (
    <div>
      <div className="pag w-full">
        <HeaderContainer welcomeMessage={welcomeMessage} error={error} loading={loading} />
        <div className="mainPart flex flex-row justify-between w-full">
          <SidebarLeftContainer response={response} />
          <div className="middle  justify-center">
            <h2 className="text-center">TopScorers</h2>
            <TopScorersContainer />
          </div>
          <SidebarRightContainer response={response} error={error} loading={loading} />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default HomePage;
