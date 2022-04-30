import React from 'react';
import { Link } from 'react-router-dom';
import inventory1 from '../../../images/carouselImages/inventory-1.jpg';
import inventory2 from '../../../images/carouselImages/inventory-2.jpg';

const Banner = () => {
  return (
    <>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner relative  h-1/2 overflow-hidden">
          {/* <!-- Single item --> */}
          <div className="carousel-item active relative float-left w-full">
            <img
              src={inventory1}
              className="block w-full"
              alt="Motorbike Smoke"
            />
            <div className="carousel-caption absolute text-center">
              <h5 className="text-lg md:text-3xl text-white py-3">
                Gadget World
              </h5>
              <p className="text-white text-sm md:text-xl">
                Keeps you updated with your inventory count.
              </p>
              <Link to="/signup">
                <button className="text-white bg-green-500 my-1 md:my-3 px-5 md:px-10 py-2 md:py-4 rounded hover:bg-green-700 hover:scale-105 ease-in duration-200 ">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <img src={inventory2} className="block w-full" alt="Mountaintop" />
            <div className="carousel-caption absolute text-center">
              <h5 className="text-lg md:text-3xl text-white py-3">
                Gadget World inventory
              </h5>
              <p className="text-white text-sm md:text-xl">
                Helps you to keep track on all of your products and their prices
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
