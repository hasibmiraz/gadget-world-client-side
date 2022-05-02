import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import useUpdateDeliveredQuantity from '../../hooks/useUpdateDeliveredQuantity';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';

const SingleProduct = () => {
  const [stockLoading, setStockLoading] = useState(false);
  const [product, setProduct, handleUpdateQuantityAndSold, loading] =
    useUpdateDeliveredQuantity();
  const { productId } = useParams();

  const updateQtyUrl = `http://localhost:5000/update-stock/${productId}`;

  let { _id, img, name, supplierName, description, price, quantity, sold } =
    product;

  const handleRestockQuantity = async (e) => {
    e.preventDefault();
    if (e.target.restockQuantity.value < 1) {
      toast('Stock item must be a positive number!');
      e.target.reset();
    } else {
      setStockLoading(true);
      await fetch(updateQtyUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quantity: e.target.restockQuantity.value
            ? +quantity + +e.target.restockQuantity.value
            : +quantity,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.result);
          e.target.reset();
          setStockLoading(false);
          toast('Stock updated successfully!');
        });
    }
  };

  return (
    <>
      <Title title="Manage Product" />
      <div className="min-h-[80vh]" data-aos="fade-up" data-aos-duration="1200">
        <div className="max-w-sm bg-green-200 rounded-lg shadow-md my-5 mx-6">
          <a href="!#">
            <img className="p-3 rounded-lg" src={img} alt="" />
          </a>
          <div className="px-5 pb-2">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {name}
            </h5>
            <p className="text-md">
              By <span className="text-blue-800 font-bold">{supplierName}</span>
            </p>
            <p className="text-md my-2">
              <span className="font-bold text-gray-700">Product ID:</span> {_id}
            </p>
            <p className="text-md my-2">
              <span className="font-bold text-gray-700">Description:</span>{' '}
              {description}
            </p>
            <p className="text-md my-2">
              <span className="font-bold text-gray-700">Quantity:</span>{' '}
              {quantity}
            </p>
            <p className="text-md my-2">
              <span className="font-bold text-gray-700">Sold:</span> {sold}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900">${price}</span>
              <button
                disabled={loading}
                onClick={handleUpdateQuantityAndSold}
                className={`text-white  focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 ${
                  loading ? 'bg-gray-700' : 'bg-blue-700 hover:bg-blue-800'
                }`}
              >
                {loading ? 'Updating...' : 'Delivered'}
              </button>
            </div>
          </div>

          <hr className="m-3 border-gray-500" />

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
                  name="restockQuantity"
                  type="number"
                  className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                  id="exampleFormControlInput1"
                  placeholder="Quantity"
                />
              </div>
            </div>
            <div className="w-4/5 mx-auto pb-3">
              <input
                disabled={stockLoading}
                type="submit"
                value={stockLoading ? 'Stock updating...' : 'Update Quantity'}
                className={`text-white w-full  focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 ${
                  stockLoading
                    ? 'bg-gray-700 cursor-default'
                    : 'bg-blue-700 hover:bg-blue-800 cursor-pointer'
                }`}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
