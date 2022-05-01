import React from 'react';
import Footer from '../Footer/Footer';

const Login = () => {
  return (
    <div>
      <div class="flex min-h-screen bg-white">
        <div
          class="w-1/2 bg-cover md:block hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
          }}
        ></div>

        <div class="md:w-1/2 max-w-lg mx-auto my-auto px-4 py-5 shadow-none">
          <div class="text-left p-0 font-sans">
            <h1 class=" text-gray-800 text-3xl font-medium">
              Login To Gadget World
            </h1>
          </div>
          <form action="#" class="p-0">
            <div class="mt-5">
              {/* <!-- <label for="email" class="sc-bqyKva ePvcBv">Email</label> --> */}
              <input
                type="text"
                class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent "
                placeholder="Email"
              />
            </div>
            <div class="mt-5">
              <input
                type="password"
                class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent  "
                placeholder="Password"
              />
            </div>

            <div class="mt-10">
              <input
                type="submit"
                value="Sign up with email"
                class="py-3 bg-green-500 text-white w-full rounded cursor-pointer hover:bg-green-600"
              />
            </div>
          </form>
          <a class="" href="/login" data-test="Link">
            <span class="block  p-5 text-center text-gray-800  text-xs ">
              Already have an account?
            </span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
