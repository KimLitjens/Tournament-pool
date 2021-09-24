import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useInput from '../utils/hooks/useInput';
import { firebaseApp, db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"
import { AuthForm } from '../components'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

export default function Form({ type }) {
  const username = useInput('')
  const fullName = useInput('')
  const email = useInput('');
  const password = useInput('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const auth = getAuth()

  const formDetails = {
    signUp: {
      handler: async () => {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: username.value
            })

            addDoc(collection(db, 'users'), {
              userId: user.uid,
              username: username.value.toLowerCase(),
              fullName: fullName.value,
              emailAddress: email.value.toLowerCase(),
              dateCreated: Date.now()
            })
          })
          .catch((error) => {
            username('')
            fullName('')
            email('')
            password('')
          });
      },
      buttonName: 'Sign Up',
    },
    signIn: {
      handler: () => signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(`${user} is signed in`)
        }),
      buttonName: 'Sign In',
    },
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if (firebaseApp) {
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


