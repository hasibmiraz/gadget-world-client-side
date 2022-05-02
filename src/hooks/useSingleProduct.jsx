import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useSingleProduct = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const url = `https://mysterious-gorge-16190.herokuapp.com/${productId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data.product));
  }, [url]);
  return [product, setProduct];
};

export default useSingleProduct;
