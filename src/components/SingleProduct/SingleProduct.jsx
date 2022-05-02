import React from 'react';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import ProductCard from './ProductCard/ProductCard';

const SingleProduct = () => {
  return (
    <>
      <Title title="Manage Product" />
      <ProductCard />
      <Footer />
    </>
  );
};

export default SingleProduct;
