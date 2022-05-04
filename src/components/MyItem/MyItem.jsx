import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Title from '../Title/Title';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signOut } from 'firebase/auth';

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myProducts, setMyProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMyProducts = async () => {
      const url = `http://localhost:5000/products?email=${user.email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        console.log(data);
        setMyProducts(data.result);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getMyProducts();
  }, [user.email]);

  const handleDeleteProduct = async (id) => {
    const url = `https://mysterious-gorge-16190.herokuapp.com/delete-product/${id}`;

    const confirm = window.confirm('Are you sure you want to delete?');
    if (confirm) {
      await fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(() => {
          setMyProducts(myProducts.filter((product) => product._id !== id));
        });
    }
  };

  return (
    <>
      <Title title="My Items" />
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
                      {myProducts.map(
                        ({ _id, img, name, price, quantity, sold }) => (
                          <tr
                            key={_id}
                            className="bg-white border-b border-x-2"
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
    </>
  );
};

export default MyItem;
