import {
  faDollarSign,
  faHeadphonesAlt,
  faListNumeric,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Statistics = () => {
  return (
    <div className="bg-gray-200 w-full my-2 md:my-5 py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 px-2 md:px-24">
        <div className="flex flex-col items-center my-5 mx-3">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="h-28 my-4 text-black"
          />
          <p className="text-black font-bold text-xl text-center">
            Total sales till now
          </p>
          <p className="text-black font-medium text-lg text-center">
            We have almost $435,500 revenue till now. Which is growing day by
            day regularly.
          </p>
        </div>
        <div className="flex flex-col items-center my-5 mx-3">
          <FontAwesomeIcon
            icon={faHeadphonesAlt}
            className="h-28 my-4 text-black"
          />
          <p className="text-black font-bold text-xl text-center">
            Products we sell
          </p>
          <p className="text-black font-medium text-lg text-center">
            We sell almost about 700 types of gadgets and we are trying to bring
            more varieties.
          </p>
        </div>
        <div className="flex flex-col items-center my-5 mx-3">
          <FontAwesomeIcon
            icon={faListNumeric}
            className="h-28 my-4 text-black"
          />
          <p className="text-black font-bold text-lg text-center">
            Quantity Sold
          </p>
          <p className="text-black font-medium text-lg text-center">
            Till now we have sold almost about 100,000 units of gadgets.
          </p>
        </div>
        <div className="flex flex-col items-center my-5 mx-3">
          <FontAwesomeIcon
            icon={faStopwatch}
            className="h-28 my-4 text-black"
          />
          <p className="text-black font-bold text-lg text-center">
            Warranty policy
          </p>
          <p className="text-black font-medium text-lg text-center">
            All of our products have international and authentic warranty
            provided by the merchants
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
