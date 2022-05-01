import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';

const SingleProduct = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const url = `https://mysterious-gorge-16190.herokuapp.com/${productId}`;
  const updateUrl = `https://mysterious-gorge-16190.herokuapp.com/update-delivered/${productId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data.product));
  }, [url]);

  let { _id, img, name, supplierName, description, price, quantity, sold } =
    product;

  const updateQuantity = async () => {
    setLoading(true);
    await fetch(updateUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity: quantity - 1,
        sold: sold + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.result);
        setLoading(false);
      });
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
                onClick={updateQuantity}
                className={`text-white  focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 ${
                  loading ? 'bg-gray-700' : 'bg-blue-700 hover:bg-blue-800'
                }`}
              >
                {loading ? 'Updating...' : 'Delivered'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
