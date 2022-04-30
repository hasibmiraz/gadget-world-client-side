import { faMobileAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
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
          <li className="nav-btn">Home</li>
          <li className="nav-btn">Service</li>
          <li className="nav-btn">Blogs</li>
          <li className="nav-btn">Login</li>
          <li className="nav-btn">Signup</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
