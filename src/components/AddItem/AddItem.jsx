import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://mysterious-gorge-16190.herokuapp.com/`;
    if (+e.target.sold.value < 0) {
      setError('Sold items cannot be less than zero');
    } else {
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.productName.value,
          description: e.target.description.value,
          img: e.target.img.value,
          price: +e.target.price.value,
          quantity: +e.target.quantity.value,
          supplierName: user.displayName,
          supplierEmail: user.email,
          sold: +e.target.sold.value,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          e.target.reset();
          toast('Product created successfully');
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Title title="Add Product" />
      <h2 className="text-4xl mt-5 text-gray-600 text-center">Add Item</h2>
      <div className="w-4/5 md:w-3/5 mx-auto my-6 bg-gray-300 rounded-md p-8">
        <form onSubmit={handleCreateProduct}>
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
                id="productName"
                name="productName"
                className="add-item-input"
                placeholder="Product"
                required
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
                className="add-item-input"
                placeholder="Price"
                required
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
                className="add-item-input"
                placeholder="Quantity"
                required
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
                className="add-item-input"
                placeholder="Sold"
                required
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
              className="add-item-input"
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
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-300 focus:ring-green-500 focus:border-green-500 focus:outline-none"
              placeholder="Description"
            ></textarea>
          </div>
          <p className="text-red-600">{error}</p>
          {!loading && (
            <button type="submit" className="add-item-btn">
              Add Product
            </button>
          )}
          {loading && (
            <button
              type="submit"
              className="text-white bg-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Loading{' '}
              <span>
                <div
                  className="spinner-border animate-spin inline-block border-white w-3 h-3 border-1 rounded-full"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </span>
            </button>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddItem;
