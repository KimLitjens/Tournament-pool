import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { AuthForm } from '../../components'
import * as ROUTES from '../../constants/routes'
import Form from '../../containers/auth-form';
import { useAuth } from '../../utils/hooks/useAuth';

export default function SignIn() {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  useEffect(() => {
    document.title = "Pool - Sign in";
  }, []);

  if (auth.currentUser && Object.keys(auth.currentUser).length) {
    return <Redirect to="/" />
  }

  return (
    <AuthForm.Page className="page">
      <AuthForm.Title className="title">Sign In</AuthForm.Title>
      <Form type="signIn" />
      <AuthForm.Formlink to={ROUTES.SIGN_UP} className="primaryLink">
        Don't have an account? Sign up here
      </AuthForm.Formlink>
    </AuthForm.Page>
  );
};
