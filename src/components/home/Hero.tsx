import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideTimerRef = useRef<number | null>(null);

  const slides = [
    {
      id: 1,
      image: '/Landing Page Pics/gateway.jpg',
      title: 'Gateway Mall',
      description: 'General Aguinaldo Ave, Cubao, Quezon City, Metro Manila',
      link: '/destinations/gateway-mall'
    },
    {
      id: 2,
      image: '/Landing Page Pics/eastwood.png',
      title: 'Eastwood City',
      description: 'Libis, Quezon City, Metro Manila',
      link: '/destinations/eastwood-city'
    },
    {
      id: 3,
      image: '/Landing Page Pics/quezon_city_memorial_circle.jpg',
      title: 'Quezon Memorial',
      description: 'Elliptical Rd, Diliman, Quezon City, Metro Manila',
      link: '/destinations/quezon-memorial-circle'
    }
  ];

  // Reset and start the slide timer
  const resetSlideTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }

    slideTimerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
  }, [slides.length]);

  useEffect(() => {
    resetSlideTimer();
    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [slides.length, resetSlideTimer]);

  const changeSlide = (index: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide(index);
    resetSlideTimer();

    // Reset animation lock after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const nextSlide = () => {
    changeSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    changeSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="/Landing Page Pics/circle.png"
            alt="Quezon City Background"
            className="absolute inset-0 object-cover w-full h-full origin-center transform scale-110"
            style={{
              filter: 'brightness(0.7)',
              transition: 'transform 10s ease-in-out',
              animation: 'subtle-zoom 20s infinite alternate'
            }}
          />
          {/* Modern gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%), linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
              backdropFilter: 'blur(2px)'
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 flex flex-col justify-center h-full px-6 mx-auto md:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left side - Text with animations */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block px-3 py-1 mb-3 text-sm font-medium tracking-wider bg-blue-600 rounded-full animate-pulse">
              DISCOVER QC
            </div>
            <h1 className="mb-4 text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl">
              <span className="block transition-transform duration-700 transform hover:translate-x-2">EXPLORE</span>
              <span className="block text-transparent transition-transform duration-700 transform bg-clip-text bg-gradient-to-r from-white to-blue-300 hover:translate-x-2">
                QUEZON CITY
              </span>
            </h1>
            <p className="max-w-xl mb-8 text-xl leading-relaxed text-gray-200 md:text-2xl">
              Where Culture, Nature, and Adventure Meet in the Heart of Metro Manila
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/destinations"
                className="flex items-center px-8 py-3 font-medium text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
              >
                Explore Destinations
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/travel-guide"
                className="px-8 py-3 font-medium text-white transition-all duration-300 bg-transparent border-2 border-white rounded-full hover:border-blue-300 hover:text-blue-300"
              >
                Travel Guide
              </Link>
            </div>
          </div>

          {/* Right side - Enhanced Carousel */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {/* Carousel with improved styling */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl h-[450px] w-full transform hover:scale-[1.02] transition-transform duration-500"
              style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 transform scale-100'
                      : 'opacity-0 transform scale-110'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 object-cover w-full h-full"
                    style={{
                      transition: 'transform 6s ease-in-out',
                      transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />

                  {/* Enhanced gradient overlay */}
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)'
                    }}
                  ></div>

                  {/* Content overlay with improved typography */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white transition-transform duration-700 transform">
                    <div className="flex items-center mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm font-medium tracking-wider text-blue-300 uppercase">Featured Destination</span>
                    </div>
                    <h3 className="mb-2 text-3xl font-bold transition-transform duration-500 transform hover:translate-x-2">
                      {slide.title}
                    </h3>
                    <p className="max-w-md mb-4 text-base text-gray-300">{slide.description}</p>
                    <Link
                      to={slide.link}
                      className="inline-flex items-center text-sm font-medium text-blue-300 transition-colors duration-300 hover:text-white"
                    >
                      Discover More
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Improved navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute z-20 p-3 transition-all duration-300 transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/30 hover:bg-blue-600 backdrop-blur-sm focus:outline-none hover:scale-110"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute z-20 p-3 transition-all duration-300 transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/30 hover:bg-blue-600 backdrop-blur-sm focus:outline-none hover:scale-110"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Enhanced dots indicator */}
            <div className="flex justify-center mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`mx-1.5 focus:outline-none group transition-all duration-300 ${
                    currentSlide === index ? 'scale-100' : 'scale-90 opacity-70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`h-1 w-8 rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? 'bg-blue-500 w-10'
                      : 'bg-gray-400 group-hover:bg-gray-300'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 z-10 w-full h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
    </div>
  );
};

export default Hero;
