import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Programs from './Programs';
import Reviews from './Reviews';
import SuccessHistory from './SuccessHistory';

const Home = () => {
  return (
    <div>
      <Banner />
      <SuccessHistory />
      <Programs />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
