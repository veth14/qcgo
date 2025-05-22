import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import './adventureCarousel.css';

const AdventureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0); // -1 for left, 1 for right
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // District data with unique images for each district
  const slides = [
    {
      id: 1,
      image: './Landing Page Pics/eastwood.png',
      district: 'District 1',
      title: 'Eastwood City',
      description: 'Home to modern lifestyle hubs, shopping centers, and business districts.',
      color: 'from-blue-500 to-blue-600',
      accent: 'bg-blue-500',
      highlight: 'Shopping & Entertainment'
    },
    {
      id: 2,
      image: './Landing Page Pics/gateway.jpg',
      district: 'District 2',
      title: 'Cubao Area',
      description: 'The commercial and entertainment center featuring Gateway Mall and Araneta City.',
      color: 'from-blue-500 to-blue-600',
      accent: 'bg-blue-500',
      highlight: 'Culture & Commerce'
    },
    {
      id: 3,
      image: './Landing Page Pics/quezon_city_memorial_circle.jpg',
      district: 'District 3',
      title: 'Quezon Memorial Circle',
      description: 'Historical landmark and urban park honoring President Manuel L. Quezon.',
      color: 'from-blue-500 to-blue-600',
      accent: 'bg-blue-500',
      highlight: 'History & Recreation'
    },
    {
      id: 4,
      image: './Landing Page Pics/UPD.png',
      district: 'District 4',
      title: 'UP Diliman & Maginhawa',
      description: 'Home to the University of the Philippines and the famous food street Maginhawa.',
      color: 'from-blue-500 to-blue-600',
      accent: 'bg-blue-500',
      highlight: 'Education & Food'
    },
    {
      id: 5,
      image: './Landing Page Pics/Wildlife.png',
      district: 'District 5',
      title: 'Fairview & Lagro',
      description: 'Residential areas with shopping centers and parks in the northern part of the city.',
      color: 'from-blue-500 to-blue-600',
      accent: 'bg-blue-500',
      highlight: 'Parks & Leisure'
    },
    {
      id: 6,
      image: './Landing Page Pics/circle.png',
      district: 'District 6',
      title: 'Batasan Hills',
      description: 'Location of the Batasang Pambansa Complex, the seat of the House of Representatives.',
      color: 'from-blue-500 to-blue-600',
      accent: 'bg-blue-500',
      highlight: 'Government & Heritage'
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
      goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1, 1);
    } else if (diff < -50) { // Swiped right - go to previous slide
      goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1, -1);
    }

    setIsDragging(false);
  };
  
  // Function to change slide with direction for animation
  const goToSlide = (index: number, direction: number) => {
    setSlideDirection(direction);
    setCurrentSlide(index);
  };

  // Auto-advance slides when not hovering or dragging - slower pace (7 seconds)
  useEffect(() => {
    if (isHovering || isDragging) return;

    const interval = setInterval(() => {
      goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1, 1);
    }, 7000);

    return () => clearInterval(interval);
  }, [isHovering, isDragging, slides.length, currentSlide]);

  // Animation effect on mount
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  // Functions to navigate slides
  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1, -1);
  };

  const nextSlide = () => {
    goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1, 1);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 rounded-full opacity-20 bg-blue-500 blur-3xl -top-48 -left-48 animate-blob"></div>
        <div className="absolute w-96 h-96 rounded-full opacity-20 bg-purple-500 blur-3xl -bottom-48 -right-48 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 rounded-full opacity-15 bg-pink-500 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        {/* Interactive section heading */}
        <motion.div 
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="inline-block px-4 py-1 mb-3 text-sm font-semibold tracking-wider text-black uppercase rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 shadow-glow">
              Discover Quezon City
            </span>
          </motion.div>
          
          <motion.h2 
            className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            EXPLORE THE DISTRICTS
          </motion.h2>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg text-gray-300">Immerse yourself in the diverse experiences Quezon City has to offer</p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-1 rounded-full bg-blue-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* District Selection Navigation - Horizontal Strip Design */}
        <div className="mb-6">
          <h3 className="text-center text-white text-lg font-medium mb-4">Select a District</h3>
          <div className="grid grid-cols-6 gap-2">
            {slides.map((slide, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index, index > currentSlide ? 1 : -1)}
                className={`py-3 px-2 rounded transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center">
                  <span className="font-medium">{slide.district}</span>
                  <span className="text-xs opacity-80 truncate max-w-full">{slide.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Immersive carousel container */}
        <div 
          ref={carouselRef}
          className="relative perspective-1000"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {/* Main slide container with 3D effect */}
          <motion.div 
            className="overflow-hidden rounded-2xl card-glass-dark shadow-2xl"
            initial={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            whileHover={{ boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.6)" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative max-w-full h-[600px] md:h-[550px] carousel-container">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ 
                    opacity: 0,
                    x: slideDirection > 0 ? 300 : -300
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: slideDirection > 0 ? -300 : 300,
                    transition: { 
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20,
                    duration: 0.6 
                  }}
                  className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 overflow-hidden"
                >
                  {/* Image section */}
                  <div className="relative overflow-hidden image-reveal">
                    <motion.div
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 6, ease: "easeOut" }}
                      className="absolute inset-0 z-0"
                    >
                      <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="object-cover w-full h-full"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${slides[currentSlide].color} opacity-50 mix-blend-multiply`}></div>
                    </motion.div>
                    
                    {/* Pulsing district badge */}
                    <motion.div 
                      className="absolute top-6 left-6 z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="relative">
                        <div className={`absolute inset-0 ${slides[currentSlide].accent} rounded-full animate-ping opacity-75`}></div>
                        <div className={`relative flex items-center px-5 py-2 space-x-2 text-sm font-bold text-white rounded-full ${slides[currentSlide].accent} shadow-glow`}>
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>{slides[currentSlide].district}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content section */}
                  <div className="relative z-10 flex flex-col justify-center p-8 md:p-10 backdrop-blur-sm bg-black/30">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mb-3"
                    >
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${slides[currentSlide].accent} text-white`}>
                        {slides[currentSlide].highlight}
                      </span>
                    </motion.div>
                    
                    <motion.h3
                      className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {slides[currentSlide].title}
                    </motion.h3>
                    
                    <motion.div
                      className="w-20 h-1 mb-6 rounded-full bg-white/50"
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    ></motion.div>
                    
                    <motion.p
                      className="mb-8 text-lg leading-relaxed text-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    
                    {/* Interactive feature icons */}
                    <motion.div
                      className="grid grid-cols-3 gap-4 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <div className="flex flex-col items-center p-3 transition-all rounded-lg bg-white/10 hover:bg-white/20">
                        <svg className="w-6 h-6 mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-xs text-white/80">Visit</span>
                      </div>
                      <div className="flex flex-col items-center p-3 transition-all rounded-lg bg-white/10 hover:bg-white/20">
                        <svg className="w-6 h-6 mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-white/80">Hours</span>
                      </div>
                      <div className="flex flex-col items-center p-3 transition-all rounded-lg bg-white/10 hover:bg-white/20">
                        <svg className="w-6 h-6 mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-white/80">Events</span>
                      </div>
                    </motion.div>
                    
                    {/* Animated CTA button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <Link
                        to={`/districts/${slides[currentSlide].id}`}
                        className={`inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all rounded-lg bg-gradient-to-r ${slides[currentSlide].color} shadow-glow hover-button btn-shine`}
                      >
                        <span>Explore District {slides[currentSlide].id}</span>
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Simple dot indicators (smaller now) */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index, index > currentSlide ? 1 : -1)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-blue-500'
                    : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
            
          {/* Slide count indicator */}
          <motion.p
            className="mt-2 text-xs text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Swipe to navigate • {currentSlide + 1}/{slides.length}
          </motion.p>
            
          {/* Minimal side controls outside the main content */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/4 h-1/2 p-0 w-20 opacity-0"
            aria-label="Previous slide"
          />
            
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/4 h-1/2 p-0 w-20 opacity-0"
            aria-label="Next slide"
          />
        </div>
      </div>
    </section>
  );
};

export default AdventureCarousel;