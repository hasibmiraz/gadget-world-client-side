import React, { useState } from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import GoogleSignInBtn from '../GoogleSignInBtn/GoogleSignInBtn';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';

const Signup = () => {
  const [agree, setAgree] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || '/';

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const retypePassword = e.target.retypePassword.value;

    if (password.length < 6) {
      setErrorMsg('Password must be atleast 6 characters');
    } else if (password !== retypePassword) {
      setErrorMsg("Password didn't match");
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile(updateProfile({ displayName: name }));
      toast('User created successfully!');
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <Title title="Signup" />
      {loading || updating ? (
        <Spinner />
      ) : (
        <div className="flex min-h-[90vh] bg-white">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="md:w-1/2 max-w-lg mx-auto my-auto px-4 py-5 bg-gray-300 rounded-lg shadow-md"
          >
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium">
                Login To Gadget World
              </h1>
            </div>
            <form className="p-0" onSubmit={handleCreateUser}>
              <div className="mt-5">
                {/* <!-- <labelhtmlFor="email" className="sc-bqyKva ePvcBv">Email</label> --> */}
                <input
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mt-5">
                {/* <!-- <labelhtmlFor="email" className="sc-bqyKva ePvcBv">Email</label> --> */}
                <input
                  type="text"
                  name="email"
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
              <div className="mt-5">
                <input
                  name="retypePassword"
                  type="password"
                  className="form-input"
                  placeholder="Retype Password"
                  required
                />
              </div>

              <p className="text-red-600 text-md">{error || errorMsg}</p>

              <div className="mt-6 flex items-center text-sm md:font-sans text-gray-800">
                <input
                  onClick={() => setAgree(!agree)}
                  type="checkbox"
                  id="Terms"
                  className="inline-block border-0 cursor-default"
                />
                <label display="inline" className="mx-1" htmlFor="Terms">
                  I agree to the terms & conditions
                </label>
              </div>

              <div className="mt-5">
                <input
                  disabled={!agree}
                  type="submit"
                  value="Sign Up"
                  className={`py-3 bg-green-700 text-white w-full rounded cursor-pointer  ${
                    !agree ? 'bg-gray-600 cursor-default' : 'hover:bg-green-600'
                  }`}
                />
              </div>
            </form>
            <p>
              <span className="block  p-5 text-center text-gray-800  text-md">
                Already have an account?{' '}
                <Link className="text-blue-500" to="/login">
                  Login
                </Link>
              </span>
            </p>
            <GoogleSignInBtn />
          </div>
          <div
            className="w-1/2 bg-cover md:block hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
            }}
          ></div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Signup;
