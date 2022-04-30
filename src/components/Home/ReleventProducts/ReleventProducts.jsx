import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const ReleventProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://mysterious-gorge-16190.herokuapp.com/homePageProducts`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1 className="home-products-title">Relevant Products</h1>
      {loading ? (
        <div className="flex justify-center items-center space-x-2 my-28">
          <div
            className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-green-700"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="home-products-cards">
          {products.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReleventProducts;
