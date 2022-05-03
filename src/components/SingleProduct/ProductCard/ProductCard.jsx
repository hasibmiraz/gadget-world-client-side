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
    <div>
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
              {loading && (
                <button disabled className="delivered-form-btn bg-gray-700">
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
                  className="delivered-form-btn bg-blue-700 hover:bg-blue-800"
                >
                  Delivered
                </button>
              )}
            </div>
          </div>

          <hr className="m-3 border-gray-500" />
          <RestockProduct
            handleRestockQuantity={handleRestockQuantity}
            stockLoading={stockLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
