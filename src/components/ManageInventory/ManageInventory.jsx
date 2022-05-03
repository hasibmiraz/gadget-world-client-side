import React from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import Title from '../Title/Title';
import ProductRow from './ProductRow/ProductRow';

const ManageInventory = () => {
  const [products] = useAllProducts();

  return (
    <>
      <Title title="Manage Inventory" />
      <div>
        <div className="my-5 px-5">
          <h2 className="text-3xl text-center font-bold text-gray-500">
            Manage Inventory
          </h2>
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
