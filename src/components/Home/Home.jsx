import React from 'react';
import Title from '../Title/Title';
import Banner from './Banner/Banner';
import ReleventProducts from './ReleventProducts/ReleventProducts';

const Home = () => {
  return (
    <div>
      <Title title="Home" />
      <Banner />
      <ReleventProducts />
    </div>
  );
};

export default Home;
