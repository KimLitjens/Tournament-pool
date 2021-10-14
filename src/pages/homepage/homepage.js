import React, { useEffect, useState } from 'react';
import SidebarLeftContainer from '../../containers/sidebarLeft'
import SidebarRightContainer from '../../containers/sidebarRight'
import HeaderContainer from '../../containers/header'
import FooterContainer from '../../containers/footer'
import TopScorersContainer from '../../containers/topScorers'
import ScoreForm from '../../containers/scoreForm'
import { useAuth } from '../../utils/hooks/useAuth';
import { useAllMatches } from '../../utils/hooks/allMatches';

const HomePage = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  const { response, error, loading } = useAllMatches();

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  const welcomeMessage = auth?.currentUser?.displayName
    ? `Welcome ${auth?.currentUser?.displayName}`
    : 'Welcome';

  return (
    <div>
      <div className="pag w-full">
        <HeaderContainer welcomeMessage={welcomeMessage} error={error} loading={loading} />
        <div className="mainPart md:flex flex-row justify-between w-full">
          <SidebarLeftContainer response={response} />
          <div className="middle justify-center">
            <ScoreForm response={response} error={error} loading={loading} />
          </div>
          <TopScorersContainer />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default HomePage;
