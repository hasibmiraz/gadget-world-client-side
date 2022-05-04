import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventoryBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center"
      data-aos="flip-left"
      data-aos-duration="800"
    >
      <button
        onClick={() => navigate('/manage')}
        className="bg-green-700 px-7 py-4 my-5 text-white rounded-lg hover:scale-105 duration-200 hover:bg-green-800"
      >
        Manage Inventories
      </button>
    </div>
  );
};

export default ManageInventoryBtn;
