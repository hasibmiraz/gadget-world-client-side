import { faAllergies, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[90vh] my-auto bg-gray-200">
        <div>
          <div className="text-center">
            <FontAwesomeIcon
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              className="h-1/6 md:h-1/5 text-gray-400"
              icon={faAllergies}
            />
            <h1
              className="text-4xl font-bold mt-4 text-red-500"
              data-aos="zoom-out-right"
            >
              Error 404 <FontAwesomeIcon icon={faSadCry} />
            </h1>
            <p className="text-red-400" data-aos="zoom-out-left">
              We don't have this page in our inventory!
            </p>
            <div className="mt-6" data-aos="fade-up" data-aos-duration="800">
              <Link to="/">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
