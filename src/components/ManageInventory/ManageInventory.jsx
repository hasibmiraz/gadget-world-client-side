import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts';
import Title from '../Title/Title';
import ProductRow from './ProductRow/ProductRow';

const ManageInventory = () => {
  const [products] = useAllProducts();
  const navigate = useNavigate();

  return (
    <>
      <Title title="Manage Inventory" />
      <div>
        <div className="my-5 px-5">
          <div className="flex flex-col md:flex-row justify-between items-center sm:mx-6 lg:mx-8">
            <h2 className="text-3xl text-center font-bold mx-0 md:mx-10 text-gray-500">
              Manage Inventory
            </h2>
            <button
              onClick={() => navigate('/additem')}
              className="bg-green-700 hover:bg-green-600 hover:scale-95 duration-300 float-right text-white px-5 py-3 mx-0 md:mx-10 my-4 rounded-lg"
            >
              Add New Item
            </button>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-6 lg:mx-8">
              <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-green-800">
                      <tr>
                        <th scope="col" className="inventory-thead">
                          Image
                        </th>
                        <th scope="col" className="inventory-thead text-left">
                          Name
                        </th>
                        <th scope="col" className="inventory-thead text-left">
                          Supplier
                        </th>
                        <th scope="col" className="inventory-thead">
                          Unit Price
                        </th>
                        <th scope="col" className="inventory-thead">
                          Quantity
                        </th>
                        <th scope="col" className="inventory-thead">
                          Sold
                        </th>
                        <th scope="col" className="inventory-thead">
                          Edit
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-0 py-4"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <ProductRow key={product._id} product={product} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageInventory;
