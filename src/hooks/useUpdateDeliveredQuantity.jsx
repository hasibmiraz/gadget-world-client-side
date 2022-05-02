import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSingleProduct from './useSingleProduct';

const useUpdateDeliveredQuantity = () => {
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useSingleProduct();

  // url
  const updateUrl = `https://mysterious-gorge-16190.herokuapp.com/update-delivered/${productId}`;

  const { quantity, sold } = product;

  const handleUpdateQuantityAndSold = async () => {
    setLoading(true);
    await fetch(updateUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity: quantity - 1,
        sold: sold + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.result);
        setLoading(false);
      });
  };
  return [product, setProduct, handleUpdateQuantityAndSold, loading];
};

export default useUpdateDeliveredQuantity;
