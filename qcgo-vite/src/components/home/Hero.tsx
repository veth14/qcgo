import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/Landing Page Pics/Pic.png',
      title: 'Gateway Mall',
      description: 'General Aguinaldo Ave, Cubao, Quezon City, Metro Manila'
    },
    {
      id: 2,
      image: '/Landing Page Pics/eastwood.png',
      title: 'Eastwood City',
      description: 'Libis, Quezon City, Metro Manila'
    },
    {
      id: 3,
      image: '/Landing Page Pics/Sunken Garden.png',
      title: 'Quezon Memorial',
      description: 'Elliptical Rd, Diliman, Quezon City, Metro Manila'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Background image - Quezon Memorial Circle */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Dark background with city image */}
          <img
            src="/Landing Page Pics/circle.png"
            alt="Quezon Memorial Circle"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Add a dark overlay to match the Figma design */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-16">
          {/* Left side - Text */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4">
              EXPLORE<br />QUEZON CITY
            </h1>
            <p className="text-xl mb-8">Where Culture, Nature, and Adventure Meet</p>
          </div>

          {/* Right side - Carousel */}
          <div className="relative">
            {/* Carousel */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-[400px] w-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <h3 className="text-2xl font-bold mb-1">{slide.title}</h3>
                    <p className="text-sm opacity-80">{slide.description}</p>
                  </div>
                </div>
              ))}

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none z-20"
                aria-label="Previous slide"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none z-20"
                aria-label="Next slide"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    currentSlide === index ? 'bg-white' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
