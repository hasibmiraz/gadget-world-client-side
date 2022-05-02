import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUpdateDeliveredQuantity from '../../../hooks/useUpdateDeliveredQuantity';

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
                      class="spinner-border animate-spin inline-block border-white w-3 h-3 border-1 rounded-full"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
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
                  className="stock-update-btn bg-blue-700 hover:bg-blue-800 cursor-pointer hover:scale-95 duration-200"
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
                      class="spinner-border animate-spin inline-block border-white w-3 h-3 border-1 rounded-full"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
