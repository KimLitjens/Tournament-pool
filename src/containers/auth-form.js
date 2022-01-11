import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { setDoc, doc } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

import { AuthForm } from '../components'
import { firebaseApp, db } from '../firebase';
import useInput from '../utils/hooks/useInput';

export default function Form({ type }) {
  const username = useInput('')
  const fullName = useInput('')
  const email = useInput('');
  const password = useInput('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const auth = getAuth()

  const formDetails = {
    // Handle Sign Up
    signUp: {
      handler: async () => {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: username.value
            })

            setDoc(doc(db, 'users', user.uid), {
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
    // Handle Sign In 
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
        {type === "signUp" && <AuthForm.Input
          placeholder="userName" {...username}
          className="primaryInput"
        />}
        {type === "signUp" && <AuthForm.Input
          placeholder="Full Name" {...fullName}
          className="primaryInput"
        />}
        <AuthForm.Input
          placeholder="Email" {...email}
          className="primaryInput"
        />
        <AuthForm.Input
          placeholder="Password"
          type="password" {...password}
          className="primaryInput"
        />
        {errorMessage && <AuthForm.ErrorMessage
          className="errorMessage">
          {errorMessage}
        </AuthForm.ErrorMessage>}
        <AuthForm.Submit type="submit">
          {formDetails[type].buttonName}
        </AuthForm.Submit>
      </AuthForm.Form>
    </AuthForm>
  )
};


