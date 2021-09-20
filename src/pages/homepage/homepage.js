import React, { useEffect, useState } from 'react';
import SignOutButton from '../../containers/sign-out-button';
import SidebarLeftContainer from '../../containers/sidebarLeft'
import SidebarRightContainer from '../../containers/sidebarRight'
import { useAuth } from '../../utils/hooks/useAuth';
import useAxios from '../../utils/hooks/useAxios'

const HomePage = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

  // const { response, error, loading } = useAxios({
  //   url: `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${apiKey}&season_id=1959&date_from=2021-09-11`,
  // });

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  const welcomeMessage = auth?.currentUser?.displayName
    ? `Welcome ${auth?.currentUser?.displayName}`
    : 'Welcome';

  console.log(userInfo)
  return (
    <div>
      <div className="pag w-full">
        <nav className="nav flex justify-center">
          <div>
            <h1 className="title text-center">
              Homepage
          </h1>
            <div className="message">
              {welcomeMessage}
            </div>
          </div>

        </nav>
        <div className="mainPart flex flex-row justify-between w-full">
          <SidebarLeftContainer />
          <div className="middle flex justify-center">
            <h2 className="">Middle Part</h2>
            {/* <div className="app">
            {loading ? (
              <div>Loading...</div>
            ) : (
                <div>
                  {error && error.message}
                  {response.data && response?.data?.map((item) => <div>{item.match_id}</div>)}
                </div>
              )}
          </div> */}
          </div>
          <SidebarRightContainer />
        </div>
      </div>
      <SignOutButton />
    </div>
  );
};

export default HomePage;
