import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import './adventureCarousel.css'; // Import custom CSS for animations

// Custom hook for parallax effect
const useParallax = (speed = 0.1) => {
  const [position, setPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top } = ref.current.getBoundingClientRect();
      const offset = window.innerHeight - top;
      if (offset > 0) {
        setPosition(offset * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, position };
};

const AdventureCarousel = () => {
  const controls = useAnimation();
  const { ref: parallaxRef, position: parallaxY } = useParallax(0.15);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // District data with unique images for each district
  const slides = [
    {
      id: 1,
      image: '/Landing Page Pics/eastwood.png',
      district: 'District 1',
      title: 'Eastwood City',
      description: 'Home to modern lifestyle hubs, shopping centers, and business districts.',
      color: 'from-blue-600/80 to-indigo-700/80'
    },
    {
      id: 2,
      image: '/Landing Page Pics/gateway.jpg',
      district: 'District 2',
      title: 'Cubao Area',
      description: 'The commercial and entertainment center featuring Gateway Mall and Araneta City.',
      color: 'from-purple-600/80 to-pink-700/80'
    },
    {
      id: 3,
      image: '/Landing Page Pics/quezon_city_memorial_circle.jpg',
      district: 'District 3',
      title: 'Quezon Memorial Circle',
      description: 'Historical landmark and urban park honoring President Manuel L. Quezon.',
      color: 'from-green-600/80 to-emerald-700/80'
    },
    {
      id: 4,
      image: '/Landing Page Pics/up_diliman.jpg',
      district: 'District 4',
      title: 'UP Diliman & Maginhawa',
      description: 'Home to the University of the Philippines and the famous food street Maginhawa.',
      color: 'from-red-600/80 to-rose-700/80'
    },
    {
      id: 5,
      image: '/Landing Page Pics/fairview.jpg',
      district: 'District 5',
      title: 'Fairview & Lagro',
      description: 'Residential areas with shopping centers and parks in the northern part of the city.',
      color: 'from-amber-600/80 to-orange-700/80'
    },
    {
      id: 6,
      image: '/Landing Page Pics/batasan.jpg',
      district: 'District 6',
      title: 'Batasan Hills',
      description: 'Location of the Batasang Pambansa Complex, the seat of the House of Representatives.',
      color: 'from-cyan-600/80 to-blue-700/80'
    }
  ];

  // Handle touch/mouse events for swipe functionality
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = 'changedTouches' in e
      ? e.changedTouches[0].clientX
      : (e as React.MouseEvent).clientX;

    const diff = startX - clientX;

    if (diff > 50) { // Swiped left - go to next slide
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (diff < -50) { // Swiped right - go to previous slide
      setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    setIsDragging(false);
  };

  // Auto-advance slides when not hovering or dragging
  useEffect(() => {
    if (isHovering || isDragging) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, isDragging, slides.length]);

  // Function to navigate to next slide
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Trigger animations when section comes into view
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section
      ref={parallaxRef}
      className="relative py-12 overflow-hidden bg-gradient-to-b from-white to-gray-50 md:py-16"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="container relative z-10 max-w-6xl px-4 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y: parallaxY }}>
        {/* Premium section heading with elegant animation */}
        <div className="relative mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center -z-10"
          >
            <span className="text-[120px] sm:text-[150px] md:text-[200px] font-black text-blue-600 opacity-10">QC</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full"
          >
            Discover Quezon City
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-5xl text-navy-900"
          >
            START YOUR ADVENTURE NOW!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-600 mr-3"></div>
              <p className="text-sm font-medium text-gray-700 md:text-base">Here are the 6 districts of Quezon City</p>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-600 ml-3"></div>
            </div>
            <div className="w-24 h-[3px] bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full"></div>
          </motion.div>
        </div>

        {/* Premium carousel with 3D effect and glass morphism */}
        <div className="relative mx-auto">
          {/* Decorative elements */}
          <div className="absolute w-40 h-40 bg-blue-500 rounded-full -top-10 -left-10 mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute w-40 h-40 bg-purple-500 rounded-full -bottom-10 -right-10 mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full top-1/2 left-1/2 mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

          <div
            ref={carouselRef}
            className="relative z-10 mx-auto overflow-visible"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={(e) => {
              setIsHovering(false);
              handleDragEnd(e);
            }}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
          {/* Premium navigation arrows with glass effect */}
          <motion.button
            onClick={prevSlide}
            className="absolute z-20 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 border rounded-full left-4 top-1/2 glass-dark hover-lift border-white/10 group"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: -3 }}
              className="flex items-center justify-center"
            >
              <svg className="w-5 h-5 transition-all duration-300 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.div>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute z-20 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 border rounded-full right-4 top-1/2 glass-dark hover-lift border-white/10 group"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              className="flex items-center justify-center"
            >
              <svg className="w-5 h-5 transition-all duration-300 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.button>

          {/* Premium card design with 3D effect and glass morphism */}
          <motion.div
            className="overflow-hidden shadow-2xl rounded-xl"
            initial={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              {/* Main image slider with premium transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* Premium image treatment */}
                  <img
                    src={slides[currentSlide].image}
                    alt={`Quezon City ${slides[currentSlide].district}`}
                    className="object-cover w-full h-full"
                  />

                  {/* Dynamic gradient overlay with animated particles */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${slides[currentSlide].color} opacity-70`}>
                    {/* Animated particles */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                      <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
                      <div className="absolute w-2 h-2 bg-white rounded-full top-3/4 left-1/3 animate-pulse animation-delay-2000"></div>
                      <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-2/3 animate-pulse animation-delay-4000"></div>
                      <div className="absolute w-2 h-2 bg-white rounded-full top-1/3 left-3/4 animate-pulse"></div>
                      <div className="absolute w-2 h-2 bg-white rounded-full top-2/3 left-1/4 animate-pulse animation-delay-2000"></div>
                    </div>
                  </div>

                  {/* Premium glass effect content container */}
                  <div className="absolute inset-0 flex flex-col justify-end">
                    {/* District badge with premium glass effect */}
                    <div className="absolute z-10 top-6 left-6">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                      >
                        <span className="flex items-center px-4 py-2 text-sm font-bold text-white border rounded-full shadow-lg bg-black/30 backdrop-blur-md border-white/20 hover-lift">
                          <span className="inline-block w-2 h-2 mr-2 bg-white rounded-full"></span>
                          {slides[currentSlide].district}
                        </span>
                      </motion.div>
                    </div>

                    {/* Premium content with advanced glass effect */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="p-6 border-t md:p-8 lg:p-10 bg-gradient-to-t from-black/70 via-black/40 to-black/20 backdrop-blur-md border-white/10"
                    >
                      <div className="relative max-w-3xl mx-auto">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-10">
                          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
                            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" />
                            <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" />
                          </svg>
                        </div>

                        {/* Premium metadata badges */}
                        <motion.div
                          className="flex flex-wrap items-center gap-3 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <div className="flex items-center px-3 py-1.5 rounded-full glass border border-white/20 shadow-lg">
                            <svg className="w-4 h-4 mr-1.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-medium text-white">Top Attraction</span>
                          </div>
                          <div className="flex items-center px-3 py-1.5 rounded-full glass border border-white/20 shadow-lg">
                            <svg className="w-4 h-4 mr-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm font-medium text-white">Quezon City</span>
                          </div>
                        </motion.div>

                        {/* Premium title with animation */}
                        <motion.h3
                          className="mb-3 text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <span className="gradient-text">{slides[currentSlide].title}</span>
                        </motion.h3>

                        {/* Premium description with animation */}
                        <motion.p
                          className="max-w-2xl mb-6 text-sm leading-relaxed text-white/90 sm:text-base md:text-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          {slides[currentSlide].description}
                        </motion.p>

                        {/* Premium button with animation */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <Link
                            to={`/districts/${currentSlide + 1}`}
                            className="relative inline-flex items-center px-6 py-3 overflow-hidden text-sm font-bold text-white transition-all duration-300 border rounded-lg group hover-lift bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20"
                          >
                            <span className="relative z-10 flex items-center">
                              EXPLORE DISTRICT {currentSlide + 1}
                              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Premium pagination indicators */}
          <div className="flex flex-col items-center mt-8">
            <motion.div
              className="flex justify-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {slides.map((slide, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative transition-all duration-500 rounded-full group ${
                    currentSlide === index
                      ? 'w-10 h-3 bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {currentSlide !== index && (
                    <span className="absolute top-0 px-2 py-1 text-xs font-medium text-white transition-opacity duration-300 -translate-x-1/2 -translate-y-full rounded opacity-0 pointer-events-none left-1/2 bg-black/70 group-hover:opacity-100">
                      {slide.title}
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.div>

            <motion.p
              className="mt-4 text-xs text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Swipe or use arrows to navigate
            </motion.p>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AdventureCarousel;
