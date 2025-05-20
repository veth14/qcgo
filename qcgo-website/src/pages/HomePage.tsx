import React from 'react';
import Hero from '../components/home/Hero';
import AboutQC from '../components/home/AboutQC';
import AdventureCarousel from '../components/home/AdventureCarousel';
import Features from '../components/home/Features';
import Destinations from '../components/home/Destinations';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutQC />
      <AdventureCarousel />
      <Features />
      <Destinations />
      <Newsletter />
    </div>
  );
};

export default HomePage;
