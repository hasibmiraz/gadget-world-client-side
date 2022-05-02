import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Facebook from './Logos/Facebook';
import Github from './Logos/Github';
import Linkedin from './Logos/Linkedin';
import Twitter from './Logos/Twitter';

const Footer = () => {
  return (
    <div>
      <footer className="text-center lg:text-left bg-green-700 text-white">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-green-200 ">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with Gadget World:</span>
          </div>
          <div className="flex justify-center">
            <Facebook />
            <Twitter />
            <Linkedin />
            <Github />
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-3 gap-8">
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                About Gadget World
              </h6>
              <p>
                Gadget world is an inventory management site. Where you can keep
                track of your business products and so on. You can keep track of
                your product, price and newly arrived products
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Products
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-100">
                  Mobile
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-100">
                  Headphone
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-100">
                  Neckband
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-100">
                  True Wireless Earbuds
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <FontAwesomeIcon className="text-lg mr-3" icon={faHome} />
                Dhaka, Bangladesh.
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <FontAwesomeIcon icon={faMailBulk} className="text-lg mr-3" />
                gadget@world.email.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <FontAwesomeIcon className="text-lg mr-3" icon={faPhone} />+ 880
                234 567 88
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-green-800">
          <span> &copy; 2021 Copyright: </span>
          <a
            className="text-gray-100 font-semibold"
            href="https://github.com/hasibmiraz"
          >
            Md. Hasibul Alam Miraz
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
