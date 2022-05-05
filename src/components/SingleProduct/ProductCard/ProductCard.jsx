import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUpdateDeliveredQuantity from '../../../hooks/useUpdateDeliveredQuantity';
import RestockProduct from './RestockProduct';

const ProductCard = () => {
  const [stockLoading, setStockLoading] = useState(false);
  const [product, setProduct, handleUpdateQuantityAndSold, loading] =
    useUpdateDeliveredQuantity();
  const { productId } = useParams();

  const updateQtyUrl = `https://mysterious-gorge-16190.herokuapp.com/update-stock/${productId}`;

  let { _id, img, name, supplierName, description, price, quantity, sold } =
    product;

  const handleRestockQuantity = async (e) => {
    e.preventDefault();
    if (+e.target.restockQuantity.value < 1) {
      toast('Stock item must be a positive number!');
      e.target.reset();
    } else {
      setStockLoading(true);
      await fetch(updateQtyUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quantity:
            quantity === 'Sold Out'
              ? e.target.restockQuantity.value
              : +e.target.restockQuantity.value + +quantity,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.result);
          e.target.reset();
          toast('Stock updated successfully!');
          setStockLoading(false);
        });
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center my-12 mx-4">
        <div className="flex flex-col md:flex-row mx-auto my-4 md:w-3/5 rounded-lg bg-gray-200 p-1 md:p-3 shadow-lg">
          <img
            className="h-96 w-auto object-cover md:w-96 rounded-md"
            src={img}
            alt=""
          />
          <div className="w-full">
            <div className="flex flex-col items-between">
              <div className="px-2 py-4 md:p-4 space-y-3">
                <h5 className="px-5 text-gray-900 font-bold text-xl mb-2 underline">
                  Product Details
                </h5>
                <div className="px-5 pb-2">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {name}
                  </h5>
                  <p className="text-md">
                    By{' '}
                    <span className="text-blue-800 font-bold">
                      {supplierName}
                    </span>
                  </p>
                  <p className="text-md my-2">
                    <span className="font-bold text-gray-700">Product ID:</span>{' '}
                    {_id}
                  </p>
                  <p className="text-md my-2">
                    <span className="font-bold text-gray-700">
                      Description:
                    </span>{' '}
                    {description}
                  </p>
                  <p className="text-md my-2">
                    <span className="font-bold text-gray-700">Quantity:</span>{' '}
                    <span
                      className={quantity === 'Sold Out' ? 'text-red-700' : ''}
                    >
                      {quantity}
                    </span>
                  </p>
                  <p className="text-md my-2">
                    <span className="font-bold text-gray-700">Sold:</span>{' '}
                    {sold}
                  </p>
                </div>
                <div className="px-2 py-4 md:p-6 flex justify-between items-center">
                  <span className="text-3xl font-bold text-gray-900">
                    ${price}
                  </span>
                  {loading && (
                    <button
                      disabled
                      className="delivered-form-btn w-3/5 bg-gray-700"
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
                  {!loading && (
                    <button
                      onClick={handleUpdateQuantityAndSold}
                      className="delivered-form-btn w-3/5 hover:scale-95 duration-200 bg-green-700 hover:bg-green-800"
                    >
                      Delivered
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <RestockProduct
          handleRestockQuantity={handleRestockQuantity}
          stockLoading={stockLoading}
        />
      </div>
    </>
  );
};

export default ProductCard;
