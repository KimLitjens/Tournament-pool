import React, { useEffect, useState } from 'react';
import SignOutButton from '../../components/sign-out-button';
import { useAuth } from '../../utils/hooks/useAuth';

const HomePage = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  const welcomeMessage = auth?.currentUser?.displayName
    ? `Welcome ${auth?.currentUser?.displayName}`
    : 'Welcome';

  return (
    <div>

      <div className="page">
        <h1 className="title">
          Homepage
        </h1>
        <div className="message">
          {welcomeMessage}
        </div>

        <SignOutButton />
      </div>
    </div>
  );
};

export default HomePage;
