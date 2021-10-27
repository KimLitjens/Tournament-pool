import React, { useEffect, useState } from 'react';
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
    <div>
      <div className="pag w-full">
        <HeaderContainer />
        <div className="mainPart md:flex flex-row justify-between w-full" >
          <SidebarLeftContainer response={response} numGames={8} userId={userId} />
          <div className="middle justify-center" >
            <ScoreForm response={response} error={error} userId={userId} />
          </div>
          {/* <TopScorersContainer /> */}
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default HomePage;
