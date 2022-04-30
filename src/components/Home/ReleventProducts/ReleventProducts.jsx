import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const ReleventProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://mysterious-gorge-16190.herokuapp.com/homePageProducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  }, []);
  return (
    <div>
      <h1 className="home-products-title">Relevant Products</h1>
      <div className="home-products-cards">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ReleventProducts;
