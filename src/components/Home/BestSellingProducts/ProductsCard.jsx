import React from 'react';

const ProductsCard = ({ product }) => {
  const { img, name, price, description, supplierName, sold } = product;
  return (
    <div
      className="mx-auto max-w-sm bg-gray-100 py-auto rounded-lg shadow-lg px-4"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <img className="p-8 rounded-full shadow-md" src={img} alt="" />

      <div className="px-5 pb-5">
        <h5 className="text-lg mt-6 mb-3 font-semibold tracking-tight text-gray-600">
          {name}
        </h5>
        <p className="home-product-card-info">
          <span className="text-gray-600 font-bold">Description: </span>
          {description}
        </p>
        <p className="home-product-card-info">
          <span className="text-gray-600 font-bold">Price: </span>${price}
        </p>
        <p className="home-product-card-info">
          <span className="text-gray-600 font-bold">Units sold: </span>
          {sold}
        </p>
        <p className="home-product-card-info">
          <span className="text-gray-600 font-bold">Supplier: </span>
          {supplierName}
        </p>
      </div>
    </div>
  );
};

export default ProductsCard;
