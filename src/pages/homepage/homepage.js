import React, { useEffect, useState } from 'react';
import SignOutButton from '../../components/sign-out-button';
import { useAuth } from '../../utils/hooks/useAuth';
import useAxios from '../../utils/hooks/useAxios'

const HomePage = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  const { response, error, loading } = useAxios();

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  const welcomeMessage = auth?.currentUser?.displayName
    ? `Welcome ${auth?.currentUser?.displayName}`
    : 'Welcome';

  console.log(response, loading)
  return (
    <div>

      <div className="page">
        <h1 className="title">
          Homepage
        </h1>
        <div className="message">
          {welcomeMessage}
        </div>
        <div className="app">
          {loading ? (
            <div>Loading...</div>
          ) : (
              <div>
                {error && error.message}
                {response.data && response?.data?.map((item) => <div>{item.match_id}</div>)}
              </div>
            )}
        </div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default HomePage;
