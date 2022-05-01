import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const GoogleSignInBtn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  return (
    <>
      <hr className="border-black" />
      <p className="text-center mt-3">Or</p>
      <p className="text-center mt-3 text-red-600">{googleError?.message}</p>
      <div className="mt-5">
        <input
          disabled={googleLoading}
          onClick={() => signInWithGoogle()}
          type="submit"
          value={googleLoading ? 'Signing in...' : 'Sign in with google'}
          className={`py-3 text-white w-full rounded cursor-pointer ${
            googleLoading
              ? 'bg-gray-600 cursor-default'
              : 'bg-yellow-500 hover:bg-yellow-600'
          }`}
        />
      </div>
    </>
  );
};

export default GoogleSignInBtn;
