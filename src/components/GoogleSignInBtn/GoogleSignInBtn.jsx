import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSignInBtn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || '/';

  if (googleUser) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <hr className="border-black" />
      <p className="text-center mt-3">Or</p>
      <p className="text-center mt-3 text-red-600">{googleError?.message}</p>
      <div className="mt-5">
        {!googleLoading && (
          <button
            onClick={() => signInWithGoogle()}
            type="submit"
            className="google-btn cursor-pointer bg-yellow-500 hover:bg-yellow-600"
          >
            Sign in with google
          </button>
        )}
        {googleLoading && (
          <button disabled className="google-btn bg-gray-600 cursor-default">
            Signing in{' '}
            <span>
              <div
                className="spinner-border animate-spin inline-block border-white w-3 h-3 border-1 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default GoogleSignInBtn;
