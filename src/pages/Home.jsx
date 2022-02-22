import React from 'react';
import { Slider } from '../components/Landing/Slider';
import { HomeContent } from '../components/Landing/HomeContent';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="Home-container">
      <Slider />
      <HomeContent />
    </div>
  );
};

export { Home };
