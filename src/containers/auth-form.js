import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useInput from '../utils/hooks/useInput';
import getFirebase from '../firebase';
import { AuthForm } from '../components'

export default function Form({ type }) {
  const username = useInput('')
  const fullName = useInput('')
  const email = useInput('');
  const password = useInput('');
  const firebaseInstance = getFirebase();
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const formDetails = {
    signUp: {
      handler: async () => {
        try {
          const createdUserResult = await firebaseInstance
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)

          await createdUserResult.user.updateProfile({
            displayName: username.value
          })

          await firebaseInstance.firestore().collection('users').add({
            userId: createdUserResult.user.uid,
            username: username.value.toLowerCase(),
            fullName: fullName.value,
            emailAddress: email.value.toLowerCase(),
            dateCreated: Date.now()
          })
        } catch (error) {
          username('')
          fullName('')
          email('')
          password('')
        }
      },
      buttonName: 'Sign Up',
    },
    signIn: {
      handler: () => firebaseInstance
        .auth()
        .signInWithEmailAndPassword(email.value, password.value),
      buttonName: 'Sign In',
    },
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if (firebaseInstance) {
        await formDetails[type].handler();
        history.push('/');
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  };

  return (
    <AuthForm>
      <AuthForm.Form
        onSubmit={(e) => onSubmitHandler(e)}
        className="form"
      >
        {type === "signUp" && <AuthForm.Input placeholder="userName" {...username} className="primaryInput" />}
        {type === "signUp" && <AuthForm.Input placeholder="Full Name" {...fullName} className="primaryInput" />}
        <AuthForm.Input placeholder="Email" {...email} className="primaryInput" />
        <AuthForm.Input placeholder="Password" type="password" {...password} className="primaryInput" />
        {errorMessage && <AuthForm.ErrorMessage className="errorMessage">{errorMessage}</AuthForm.ErrorMessage>}
        <AuthForm.Submit type="submit">
          {formDetails[type].buttonName}
        </AuthForm.Submit>
      </AuthForm.Form>
    </AuthForm>
  )
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
};


