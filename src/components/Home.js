import React from 'react';

// component
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/footer/Footer';
// styles
import { HomeContainer } from '../styles/styles';
const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
