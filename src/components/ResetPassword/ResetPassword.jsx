import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleEmailReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    toast('Email sent.');
  };

  return (
    <>
      {sending ? (
        <Spinner />
      ) : (
        <div className="flex min-h-[90vh] bg-white">
          <Title title="Reset Password" />

          <div
            className="w-1/2 bg-cover md:block hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
            }}
          ></div>

          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="md:w-1/2 max-w-lg mx-auto my-auto px-4 py-5 bg-gray-300 rounded-lg shadow-md"
          >
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium">
                Reset your password
              </h1>
            </div>
            <form onSubmit={handleEmailReset} className="p-0">
              <div className="mt-5">
                <input
                  name="email"
                  type="text"
                  className="form-input"
                  placeholder="Email"
                  required
                />
              </div>
              <p className="text-red-600 text-md">{error?.message}</p>

              <div className="mt-10">
                <input
                  disabled={sending}
                  type="submit"
                  value="Send Email"
                  className="py-3 bg-green-700 text-white w-full rounded cursor-pointer hover:bg-green-600"
                />
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ResetPassword;
