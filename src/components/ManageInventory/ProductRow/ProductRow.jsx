import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductRow = ({ product }) => {
  const { _id, img, name, price, quantity, sold } = product;
  const navigate = useNavigate();
  return (
    <tr className="bg-white border-b border-x-2">
      <td className="flex justify-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <img
          src={img}
          className="rounded-full w-7 p-1 bg-green-500"
          alt="Avatar"
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {price}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {quantity}
      </td>
      <td className="text-sm font-bold text-gray-900 px-6 py-4 whitespace-nowrap">
        {sold}
      </td>
      <td className="text-sm font-bold text-gray-900 px-6 py-4 whitespace-nowrap space-x-12">
        <span
          className="font-bold text-blue-600"
          onClick={() => navigate(`/inventory/${_id}`)}
        >
          Edit
        </span>
      </td>
    </tr>
  );
};

export default ProductRow;
