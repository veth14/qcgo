import Hero from './Hero';
import AboutQC from './AboutQC';
import AdventureCarousel from './AdventureCarousel';
import Features from './Features';
import Destinations from './Destinations';
import Newsletter from './Newsletter';
import DestinationShowcase from './DestinationShowcase';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutQC />
      <AdventureCarousel />
      <Features />
      <DestinationShowcase />
      <Newsletter />
    </div>
  );
};

export default HomePage;
