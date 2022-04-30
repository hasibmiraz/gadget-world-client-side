import React from 'react';

const ProductsCard = ({ product }) => {
  const { img, name, description, price, quantity, supplierName } = product;
  return (
    <div className="h-1/2">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img className="home-product-card-img" src={img} alt="" />
          <div className="flex flex-col justify-between px-2">
            <div className="p-6 flex flex-col justify-start space-y-3">
              <h5 className="home-product-card-name">Name: {name}</h5>
              <hr className="mb-3" />
              <p className="home-product-card-info">
                Description: {description}
              </p>
              <p className="home-product-card-info">Price: {price}</p>
              <p className="home-product-card-info">Quantity: {quantity}</p>
              <p className="home-product-card-info">Supplier: {supplierName}</p>
            </div>
            <div>
              <button className="home-product-card-btn">
                Update Inventory
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
