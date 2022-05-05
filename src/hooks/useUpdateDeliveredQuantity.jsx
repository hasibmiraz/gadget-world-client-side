import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
    if (quantity === 'Sold Out') {
      toast('This product is currently out of stock!');
      setLoading(false);
    } else {
      await fetch(updateUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quantity: quantity > 1 ? +quantity - 1 : 'Sold Out',
          sold: sold + 1,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.result);
          setLoading(false);
          toast('Product delivered successfully!');
        });
    }
  };
  return [product, setProduct, handleUpdateQuantityAndSold, loading];
};

export default useUpdateDeliveredQuantity;
