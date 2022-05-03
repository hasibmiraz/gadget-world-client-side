import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useUpdateDeliveredQuantity from '../../../hooks/useUpdateDeliveredQuantity';

const ProductUpdateForm = () => {
  const [product, setProduct] = useUpdateDeliveredQuantity();
  const { productId } = useParams();

  const { img, name, description, price, quantity, sold } = product;
  const [productName, setProductName] = useState('');
  const updateUrl = `http://localhost:5000/update-product/${productId}`;

  const handleProductName = (e) => {
    setProductName(name);
    setProductName(e.target.productName.value);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    await fetch(updateUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity:
          e.target.quantity.value !== '' ? e.target.quantity.value : quantity,
        sold: +e.target.sold.value ? +e.target.sold.value : +sold,
        name: e.target.productName.value ? e.target.productName.value : name,
        img: e.target.img.value ? e.target.img.value : img,
        price: +e.target.price.value ? +e.target.price.value : +price,
        description: e.target.description.value
          ? e.target.description.value
          : description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setProduct(data.result);
      });
  };

  return (
    <div className="my-5 col-span-1 md:col-span-2 mx-6 md:mx-20">
      <div className="w-full mx-auto bg-green-300 rounded-md p-8">
        <form>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="productName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={handleProductName}
                id="productName"
                name="productName"
                className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Product"
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Price"
              />
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Quantity"
              />
            </div>

            <div>
              <label
                htmlFor="sold"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Sold
              </label>
              <input
                type="number"
                id="sold"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Sold"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="img"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              type="url"
              id="img"
              name="img"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="url.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              style={{ resize: 'none' }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Description"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleUpdateProduct}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdateForm;
