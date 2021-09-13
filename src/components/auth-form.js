import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useInput from '../utils/hooks/useInput';
import getFirebase from '../firebase';
import './auth-form.css';

const Form = ({ type }) => {
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
    <div>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="form"
      >
        {type === "signUp" && <input placeholder="userName" {...username} className="primaryInput" />}
        {type === "signUp" && <input placeholder="Full Name" {...fullName} className="primaryInput" />}
        <input placeholder="Email" {...email} className="primaryInput" />
        <input placeholder="Password" type="password" {...password} className="primaryInput" />
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <button type="submit" className="primaryButton submit">
          {formDetails[type].buttonName}
        </button>
      </form>
    </div>
  )
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Form;
