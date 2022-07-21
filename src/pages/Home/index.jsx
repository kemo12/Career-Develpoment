import React from 'react';
import Hero from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Reservation from '../../components/Reservation';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Reservation />
    </div>
  );
};

export default Home;
