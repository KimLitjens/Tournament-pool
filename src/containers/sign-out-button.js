import React from 'react';
import { getAuth, signOut } from "firebase/auth";


const SignOutButton = () => {
  const auth = getAuth();

  // Sign out function
  const signUserOut = async () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  return (
    <button
      onClick={signUserOut}
      type="submit"
      className="px-8 py-2 text-white font-bold text-m 
      cursor-pointer 
      rounded-full bg-gradient-to-r from-blue-800 to-blue-500 border-transparent "
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;