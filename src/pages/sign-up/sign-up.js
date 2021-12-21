import React, { useEffect } from 'react';
import Form from '../../containers/auth-form';
import { AuthForm } from '../../components'
import * as ROUTES from '../../constants/routes'

export default function SignUp() {
  useEffect(() => {
    document.title = "Pool - Sign up";
  }, []);
  return (
    <AuthForm.Page className="page">
      <AuthForm.Title className="title">Sign Up</AuthForm.Title>
      <Form type="signUp" />
      <AuthForm.Formlink
        to={ROUTES.SIGN_IN}
        className="primaryLink"
      >
        Back to Sign In
      </AuthForm.Formlink>
    </AuthForm.Page>
  );

}