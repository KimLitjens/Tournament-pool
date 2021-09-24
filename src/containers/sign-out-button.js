import React from 'react';
import { getAuth, signOut } from "firebase/auth";


const SignOutButton = () => {
  const auth = getAuth();

  const signUserOut = async () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  return (
    <button onClick={signUserOut} type="submit" className="primaryButton">
      Sign Out
    </button>
  );
};

export default SignOutButton;