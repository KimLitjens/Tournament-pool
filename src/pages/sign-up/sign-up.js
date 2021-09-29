import React from 'react';
import Form from '../../containers/auth-form';
import { AuthForm } from '../../components'
import * as ROUTES from '../../constants/routes'

const SignUp = () => (
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

export default SignUp;
