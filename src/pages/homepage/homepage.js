import React, { useEffect, useState } from 'react';
import { Homepage } from '../../components'
import SidebarLeftContainer from '../../containers/sidebarLeft'
import HeaderContainer from '../../containers/header'
import FooterContainer from '../../containers/footer'
import TopScorersContainer from '../../containers/topScorers'
import ScoreForm from '../../containers/scoreForm'
import { useAuth } from '../../utils/hooks/useAuth';
import { useAllMatches } from '../../utils/hooks/allMatches';

const HomePage = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  const { response, error } = useAllMatches();

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  const userId = auth?.currentUser?.uid

  return (
    <Homepage.Page>
      <HeaderContainer />
      <Homepage.MainPart >
        <SidebarLeftContainer response={response} numGames={8} userId={userId} />
        <Homepage.MiddlePart>
          <ScoreForm response={response} error={error} userId={userId} />
        </Homepage.MiddlePart>
        <TopScorersContainer />
      </Homepage.MainPart>
      <FooterContainer />
    </Homepage.Page>
  );
};

export default HomePage;
