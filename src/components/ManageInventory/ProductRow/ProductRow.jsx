import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../../hooks/useAllProducts';
import Spinner from '../../Spinner/Spinner';

const ProductRow = ({ product }) => {
  const [products, setProducts, loading] = useAllProducts();

  const { _id, img, name, supplierName, price, quantity, sold } = product;
  const navigate = useNavigate();

  const handleDeleteProduct = async (id) => {
    const url = `https://mysterious-gorge-16190.herokuapp.com/delete-product/${id}`;

    await fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const restProducts = products.filter((product) => product._id !== id);
        setProducts(restProducts);
      });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <tr className="bg-white border-b border-x-2">
          <td className="inventory-img">
            <img
              src={img}
              className="rounded-full w-7 p-1 bg-green-500"
              alt="Avatar"
            />
          </td>
          <td className="inventory-td text-left font-light">{name}</td>
          <td className="inventory-td text-left font-light">{supplierName}</td>
          <td className="inventory-td font-light">{price}</td>
          <td className="inventory-td font-light">{quantity}</td>
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
              className="font-bold text-red-600 cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              Delete
            </span>
          </td>
        </tr>
      )}
      {/* Modal */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-bold leading-normal text-red-800"
                id="exampleModalScrollableLabel"
              >
                Delete Product
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <p>Are you sure you want to delete "{name}"?</p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => handleDeleteProduct(_id)}
                type="button"
                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Yes, Delete!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRow;
