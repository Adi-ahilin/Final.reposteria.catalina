import React from 'react';
import HomeCarousel from '../common/HomeCarousel';
import FeaturedProducts from '../common/FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <>
      <HomeCarousel />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;