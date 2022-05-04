import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';

const ManageInventory = () => {
  const [products, setProducts] = useAllProducts();
  const navigate = useNavigate();

  const handleDeleteProduct = async (id) => {
    const url = `https://mysterious-gorge-16190.herokuapp.com/delete-product/${id}`;
    const confirmDelete = window.confirm(
      'Are you sure you want to delete the item?'
    );
    if (confirmDelete) {
      await fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restProducts = products.filter((product) => product._id !== id);
          setProducts(restProducts);
        });
    }
  };

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
                      {products.map(
                        ({
                          _id,
                          img,
                          name,
                          supplierName,
                          price,
                          quantity,
                          sold,
                        }) => (
                          <tr
                            className="bg-white border-b border-x-2"
                            key={_id}
                          >
                            <td className="inventory-img">
                              <img
                                src={img}
                                className="rounded-full w-7 p-1 bg-green-500"
                                alt="Avatar"
                              />
                            </td>
                            <td className="inventory-td text-left font-light">
                              {name}
                            </td>
                            <td className="inventory-td text-left font-light">
                              {supplierName}
                            </td>
                            <td className="inventory-td font-light">{price}</td>
                            <td className="inventory-td font-light">
                              {quantity}
                            </td>
                            <td className="inventory-td font-bold">{sold}</td>
                            <td className="inventory-td space-x-12 font-light">
                              <span
                                className="font-bold text-blue-600 cursor-pointer"
                                onClick={() => navigate(`/inventory/${_id}`)}
                              >
                                Edit
                              </span>
                            </td>
                            <td className="inventory-td space-x-12">
                              <span
                                onClick={() => handleDeleteProduct(_id)}
                                className="font-bold text-red-600 cursor-pointer"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCenter"
                              >
                                Delete
                              </span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageInventory;
