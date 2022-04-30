import { faMobileAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

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
            <FontAwesomeIcon icon={faX} className="text-2xl text-green-700" />
          ) : (
            <FontAwesomeIcon
              className="text-2xl text-green-700"
              icon={faMobileAlt}
            />
          )}
        </div>
        <ul
          className={`navbar-ul ${open ? 'top-10 opacity-100' : 'top-[-100%]'}`}
        >
          {/* <NavLink to="/" className={`nav-btn ${isActive ? 'bg-green-700 text-white' :"" }`}> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-btn bg-green-700 text-white' : 'nav-btn'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'nav-btn bg-green-700 text-white' : 'nav-btn'
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? 'nav-btn bg-green-700 text-white' : 'nav-btn'
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'nav-btn bg-green-700 text-white' : 'nav-btn'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? 'nav-btn bg-green-700 text-white' : 'nav-btn'
            }
          >
            Signup
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
