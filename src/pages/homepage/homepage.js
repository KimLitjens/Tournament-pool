import React, { useEffect, useState } from 'react';
import Styles from './homepage.styles'
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
    <Styles.Page>
      <HeaderContainer />
      <Styles.MainPart >
        <SidebarLeftContainer response={response} numGames={8} userId={userId} />
        <Styles.MiddlePart>
          <ScoreForm response={response} error={error} userId={userId} />
        </Styles.MiddlePart>
        <TopScorersContainer />
      </Styles.MainPart>
      <FooterContainer />
    </Styles.Page>
  );
};

export default HomePage;
