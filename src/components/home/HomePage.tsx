import Hero from './Hero';
import AboutQC from './AboutQC';
import AdventureCarousel from './AdventureCarousel';
import Features from './Features';
import Destinations from './Destinations';
import CommunityConnect from './Newsletter';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutQC />
      <AdventureCarousel />
      <Features />
      <Destinations />
      <CommunityConnect />
    </div>
  );
};

export default HomePage;
