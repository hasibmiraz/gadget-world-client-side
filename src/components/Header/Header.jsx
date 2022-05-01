import { faMobileAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const activeLink = (active) =>
    active ? 'nav-btn bg-green-700 text-white' : 'nav-btn';

  return (
    <div className="shadow-md w-full">
      <div className="bg-white items-center justify-between py-4 px-7 md:px-10 md:flex">
        <div className="font-bold text-2xl inline-block text-green-700 cursor-pointer">
          GADGET WORLD
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-5 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <FontAwesomeIcon icon={faX} className="nav-cross-icon" />
          ) : (
            <FontAwesomeIcon className="nav-mobile-icon" icon={faMobileAlt} />
          )}
        </div>
        <ul
          className={`navbar-ul ${open ? 'top-10 opacity-100' : 'top-[-70%]'}`}
        >
          <NavLink to="/" className={({ isActive }) => activeLink(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => activeLink(isActive)}
          >
            Service
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => activeLink(isActive)}
          >
            Blogs
          </NavLink>
          {user ? (
            <div className="flex items-center">
              <button
                className="nav-btn text-left md:text-center"
                onClick={() => signOut(auth)}
              >
                Logout
              </button>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  className="rounded-full w-8 mx-3 hidden md:block"
                  alt="Avatar"
                />
              ) : (
                <div class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mx-3">
                  <svg
                    class="absolute w-10 h-10 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) => activeLink(isActive)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => activeLink(isActive)}
              >
                Signup
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
