import React, { useState } from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';

const Signup = () => {
  //   // Input fields value
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [retypePassword, setRetypePassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const retypePassword = e.target.retypePassword.value;

    if (password.length < 6) {
      setErrorMsg('Password must be atleast 6 characters');
    } else if (password === retypePassword) {
      setErrorMsg("Password didn't match");
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile(updateProfile({ displayName: name }));
    }
    console.log(user);
  };

  if (loading || updating) {
    return <Spinner />;
  }

  return (
    <div>
      <Title title="Signup" />
      <div className="flex min-h-[90vh] bg-white">
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
          <form className="p-0" onSubmit={handleCreateUser}>
            <div className="mt-5">
              {/* <!-- <label for="email" className="sc-bqyKva ePvcBv">Email</label> --> */}
              <input
                name="name"
                type="text"
                className="form-input"
                placeholder="Name"
              />
            </div>
            <div className="mt-5">
              {/* <!-- <label for="email" className="sc-bqyKva ePvcBv">Email</label> --> */}
              <input
                type="text"
                name="email"
                className="form-input"
                placeholder="Email"
              />
            </div>
            <div className="mt-5">
              <input
                name="password"
                type="password"
                className="form-input"
                placeholder="Password"
              />
            </div>
            <div className="mt-5">
              <input
                name="retypePassword"
                type="password"
                className="form-input"
                placeholder="Retype Password"
              />
            </div>

            <p className="text-red-600 text-md">{error || errorMsg}</p>

            <div className="mt-6 flex items-center text-sm md:font-sans text-gray-800">
              <input type="checkbox" className="inline-block border-0" />
              <span display="inline" className="mx-1">
                I agree to the terms & conditions
              </span>
            </div>

            <div className="mt-5">
              <input
                type="submit"
                value="Sign Up"
                className="py-3 bg-green-500 text-white w-full rounded cursor-pointer hover:bg-green-600"
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
