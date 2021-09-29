import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../utils/hooks/useAuth';
import * as ROUTES from '../constants/routes'


export default function PrivateRoute({ children, ...rest }) {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    setAuth(userInfo);
  }, [userInfo]);

  if (!auth.currentUser) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={() => (auth.currentUser && Object.keys(auth.currentUser).length ? (
        children
      ) : (
          <Redirect to={ROUTES.SIGN_IN} />
        ))}
    />
  )
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


