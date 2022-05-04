import React from 'react';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import Banner from './Banner/Banner';
import ManageInventoryBtn from './ManageInventoryBtn/ManageInventoryBtn';
import ReleventProducts from './ReleventProducts/ReleventProducts';

const Home = () => {
  return (
    <div>
      <Title title="Home" />
      <Banner />
      <ReleventProducts />
      <ManageInventoryBtn />
      <Footer />
    </div>
  );
};

export default Home;
