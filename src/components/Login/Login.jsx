import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex min-h-[90vh] bg-white">
          <Title title="Login" />

          <div
            className="w-1/2 bg-cover md:block hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
            }}
          ></div>

          <div className="md:w-1/2 max-w-lg mx-auto my-auto px-4 py-5 shadow-none">
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium">
                Login To Gadget World
              </h1>
            </div>
            <form onSubmit={handleLogin} className="p-0">
              <div className="mt-5">
                <input
                  name="email"
                  type="text"
                  className="form-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mt-5">
                <input
                  name="password"
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  required
                />
              </div>

              <p className="text-red-600 text-md">{error?.message}</p>

              <div className="mt-10">
                <input
                  type="submit"
                  value="Login"
                  className="py-3 bg-green-500 text-white w-full rounded cursor-pointer hover:bg-green-600"
                />
              </div>
            </form>
            <p className="" href="/login" data-test="Link">
              <span className="block  p-5 text-center text-gray-800  text-md">
                Don't have an account?{' '}
                <Link className="text-blue-500" to="/signup">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Login;
