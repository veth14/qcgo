import Hero from '../components/home/Hero';
import AboutQC from '../components/home/AboutQC';
import AdventureCarousel from '../components/home/AdventureCarousel';
import Features from '../components/home/Features';
import Destinations from '../components/home/Destinations';
import CommunityConnect from '../components/home/Newsletter';

const Home = () => {
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

export default Home;
