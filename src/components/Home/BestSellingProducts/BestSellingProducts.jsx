import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import ProductsCard from './ProductsCard';

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://mysterious-gorge-16190.herokuapp.com/best-selling`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data.result);
      });
  }, []);

  return (
    <div>
      <h1 className="font-bold text-green-800 text-center text-2xl md:text-5xl mt-7 mb-5">
        Best Selling Products
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mt-4 mb-8">
          {products.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSellingProducts;
