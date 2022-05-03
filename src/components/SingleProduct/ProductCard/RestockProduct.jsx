import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestockProduct = ({ handleRestockQuantity, stockLoading }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-300 rounded-xl mx-4 my-auto">
      <form onSubmit={handleRestockQuantity}>
        <div className="flex justify-center px-1 md:px-3 my-3">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Restock the item
            </label>
            <input
              required
              name="restockQuantity"
              type="number"
              className="stock-update-input"
              id="exampleFormControlInput1"
              placeholder="Quantity"
            />
          </div>
        </div>
        <div className="w-4/5 mx-auto pb-3">
          {!stockLoading && (
            <button
              disabled={stockLoading}
              type="submit"
              className="stock-update-btn bg-green-700 hover:bg-green-800 cursor-pointer hover:scale-95 duration-200"
            >
              Update Quantity
            </button>
          )}
          {stockLoading && (
            <button
              disabled
              className="stock-update-btn bg-gray-700 cursor-default"
            >
              Updating{' '}
              <span>
                <div
                  className="spinner-border animate-spin inline-block border-white w-3 h-3 border-1 rounded-full"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </span>
            </button>
          )}
        </div>
      </form>
      <hr className="border-gray-600" />
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/manage')}
          className="w-3/5 bg-green-700 px-5 py-2 text-md text-white rounded-md mx-auto hover:bg-green-800 cursor-pointer hover:scale-95 duration-200 my-5"
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default RestockProduct;
