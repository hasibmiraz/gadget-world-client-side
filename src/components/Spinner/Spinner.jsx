import React from 'react';
import Title from '../Title/Title';

const Spinner = () => {
  return (
    <>
      <Title title="Loading" />
      <div className="flex justify-center items-center space-x-2 my-[20vh]">
        <div
          className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-green-600"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
