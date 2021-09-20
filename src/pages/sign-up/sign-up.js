import React from 'react';
import Form from '../../containers/auth-form';
import { AuthForm } from '../../components'


const SignUp = () => (
  <AuthForm.Page className="page">
    <AuthForm.Title className="title">Sign Up</AuthForm.Title>
    <Form type="signUp" />
    <AuthForm.Formlink
      to="/sign-in"
      className="primaryLink"
    >
      Back to Sign In
    </AuthForm.Formlink>
  </AuthForm.Page>
);

export default SignUp;
