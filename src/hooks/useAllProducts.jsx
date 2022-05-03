import { useEffect, useState } from 'react';

const useAllProducts = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://mysterious-gorge-16190.herokuapp.com/all-products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
        setLoading(false);
      });
  }, []);
  return [products, setProducts, loading];
};

export default useAllProducts;
