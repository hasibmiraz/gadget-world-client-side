import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  const { _id, img, name, description, price, quantity, supplierName } =
    product;
  const navigate = useNavigate();
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="500"
      className="h-1/2"
    >
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img className="home-product-card-img" src={img} alt="" />
          <div className="flex flex-col justify-between px-2">
            <div className="p-6 flex flex-col justify-start space-y-3">
              <h5 className="home-product-card-name">
                <span className="text-gray-600 font-bold">Name: </span>
                {name}
              </h5>
              <hr className="mb-3" />
              <p className="home-product-card-info">
                <span className="text-gray-600 font-bold">Description: </span>
                {description}
              </p>
              <p className="home-product-card-info">
                <span className="text-gray-600 font-bold">Price: </span>${price}
              </p>
              <p className="home-product-card-info">
                <span className="text-gray-600 font-bold">Quantity: </span>
                {quantity}
              </p>
              <p className="home-product-card-info">
                <span className="text-gray-600 font-bold">Supplier: </span>
                {supplierName}
              </p>
            </div>
            <div>
              <button
                onClick={() => navigate(`/inventory/${_id}`)}
                className="home-product-card-btn"
              >
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
