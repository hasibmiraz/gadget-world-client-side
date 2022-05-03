import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import ProductRow from './ProductRow/ProductRow';

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/all-products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Title title="Manage Inventory" />
          <div data-aos="fade-right" data-aos-duration="1200">
            <div className="my-5 px-5">
              <h2 className="text-3xl text-center font-bold text-gray-500">
                Manage Inventory
              </h2>
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-6 lg:mx-8">
                  <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-center">
                        <thead class="border-b bg-green-800">
                          <tr>
                            <th scope="col" className="inventory-thead">
                              Image
                            </th>
                            <th
                              scope="col"
                              className="inventory-thead text-left"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="inventory-thead text-left"
                            >
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
      )}
    </>
  );
};

export default ManageInventory;
