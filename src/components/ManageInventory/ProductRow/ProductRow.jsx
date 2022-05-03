import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductRow = ({ product }) => {
  const { _id, img, name, supplierName, price, quantity, sold } = product;
  const navigate = useNavigate();
  return (
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
        <span className="font-bold text-red-600">Delete</span>
      </td>
    </tr>
  );
};

export default ProductRow;
