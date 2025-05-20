import Hero from '../components/home/Hero';
import AboutQC from '../components/home/AboutQC';
import AdventureCarousel from '../components/home/AdventureCarousel';
import Features from '../components/home/Features';
import Destinations from '../components/home/Destinations';
import Newsletter from '../components/home/Newsletter';
import SocialMedia from '../components/home/SocialMedia';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutQC />
      <AdventureCarousel />
      <Features />
      <Destinations />
      <Newsletter />
      <SocialMedia />
    </div>
  );
};

export default Home;
