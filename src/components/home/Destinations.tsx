import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Keyframe animations
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const glitch1 = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

const glitch2 = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(2px); }
  40% { transform: translateX(-2px); }
  60% { transform: translateX(2px); }
  80% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

interface FloatingDotProps {
  delay: string;
  duration: string;
}

// Styled components
const FloatingDot = styled.div<FloatingDotProps>`
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  animation: ${float} ${(props: FloatingDotProps) => props.duration} linear infinite;
  animation-delay: ${(props: FloatingDotProps) => props.delay};
`;

interface GlitchTextProps {
  variant: 'blue' | 'pink';
}

const GlitchText = styled.span<GlitchTextProps>`
  position: absolute;
  inset: 0;
  display: none;
  color: ${(props: GlitchTextProps) => props.variant === 'blue' ? '#93c5fd' : '#f9a8d4'};
  clip-path: ${(props: GlitchTextProps) => props.variant === 'blue' 
    ? 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
    : 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)'};
  transform: ${(props: GlitchTextProps) => props.variant === 'blue' ? 'translate(-2px)' : 'translate(2px)'};
  animation: ${(props: GlitchTextProps) => props.variant === 'blue' ? glitch1 : glitch2} 0.5s infinite;
  .group:hover & {
    display: block;
  }
`;

// Global styles
const GlobalStyles = createGlobalStyle`
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
  .clip-path-glitch-1 {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-2px);
  }
  .clip-path-glitch-2 {
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(2px);
  }
  @keyframes glitch-1 {
    0% { transform: translateX(0); }
    20% { transform: translateX(-2px); }
    40% { transform: translateX(2px); }
    60% { transform: translateX(-2px); }
    80% { transform: translateX(2px); }
    100% { transform: translateX(0); }
  }
  @keyframes glitch-2 {
    0% { transform: translateX(0); }
    20% { transform: translateX(2px); }
    40% { transform: translateX(-2px); }
    60% { transform: translateX(2px); }
    80% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }
  .animate-glitch-1 {
    animation: glitch-1 0.5s infinite;
  }
  .animate-glitch-2 {
    animation: glitch-2 0.5s infinite;
  }
`;

  const destinations = [
    {
      id: 1,
      image: '/Landing Page Pics/UPD.png',
      title: 'UNIVERSITY OF THE PHILIPPINES DILIMAN',
    description: 'The nation\'s premier university for academic excellence',
    stars: 5,
    location: 'DILIMAN, QUEZON CITY',
    link: '/destinations/up-diliman',
    },
    {
      id: 2,
      image: '/Landing Page Pics/Wildlife.png',
      title: 'WILDLIFE',
    description: 'A sanctuary of Philippine flora and fauna',
    stars: 5,
    location: 'DILIMAN, QUEZON CITY, METRO MANILA',
    link: '/destinations/wildlife',
    },
    {
      id: 3,
      image: '/Landing Page Pics/Sunken Garden.png',
      title: 'SUNKEN GARDEN',
    description: 'An iconic landmark for culture and recreation',
    stars: 5,
    location: 'UP DILIMAN CAMPUS',
    link: '/destinations/sunken-garden',
  },
];

const Destinations = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Helper function to get normalized index
  const normalizeIndex = (idx: number) => {
    // Ensure the index is within bounds using modulo
    const len = destinations.length;
    return ((idx % len) + len) % len;
  };

  // Calculate carousel items with proper order
  const getOrderedItems = () => {
    return [
      destinations[normalizeIndex(activeIndex - 1)],
      destinations[normalizeIndex(activeIndex)],
      destinations[normalizeIndex(activeIndex + 1)],
    ];
  };

  // Move to the next slide
  const nextSlide = () => {
    setActiveIndex((prev) => normalizeIndex(prev + 1));
  };

  // Move to the previous slide
  const prevSlide = () => {
    setActiveIndex((prev) => normalizeIndex(prev - 1));
  };

  // Smooth transition helper
  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 0.5
  };

  // Animation control
  useEffect(() => {
    if (!isPaused) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = window.setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, isPaused]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#0B1221] text-white relative overflow-hidden">
      <GlobalStyles />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221] via-[#141B2D] to-[#0B1221] opacity-80"></div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <FloatingDot
              key={i}
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(255,255,255,${Math.random() * 0.3 + 0.1})`
              }}
              delay={`${Math.random() * 5}s`}
              duration={`${Math.random() * 10 + 10}s`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2B4B]/10 via-[#2A3B6B]/10 to-[#1B2B4B]/10"></div>
      </div>

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-16 md:mb-24 relative">
        <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex items-center">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#4B6BFF]/50 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-[#4B6BFF]/30"></div>
            </div>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#4B6BFF]/30"></div>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#4B6BFF]/50 to-transparent"></div>
            </div>

            <div className="relative inline-block group">
              <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E2E8FF] to-[#B8C7FF] relative drop-shadow-[0_2px_8px_rgba(75,107,255,0.3)]">
                VISIT NOW
                <GlitchText variant="blue">VISIT NOW</GlitchText>
                <GlitchText variant="pink">VISIT NOW</GlitchText>
              </h1>
              <div className="absolute -inset-1 border border-[#4B6BFF]/20 rounded-lg -z-10"></div>
              <div className="absolute -inset-[3px] bg-gradient-to-r from-[#4B6BFF]/20 via-[#6B8BFF]/20 to-[#4B6BFF]/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-20"></div>
            </div>
        </motion.div>

          <motion.div
            className="relative mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 flex items-center gap-2">
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#4B6BFF]/30 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-[#4B6BFF]/20"></div>
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#4B6BFF]/30 to-transparent"></div>
            </div>

            <p className="text-lg md:text-xl text-[#B8C7FF]/90 font-medium tracking-[0.2em] uppercase relative inline-block">
              Experience Quezon City
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B6BFF] to-[#6B8BFF]">
                &nbsp;like never before
              </span>
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-[10px] text-[#4B6BFF]/40 font-mono">
                01
              </span>
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-[10px] text-[#4B6BFF]/40 font-mono">
                10
              </span>
            </p>
          </motion.div>
        </div>

        <div className="relative w-full max-w-[1920px] mx-auto px-4 mb-12 overflow-hidden">
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center">
              <AnimatePresence mode="popLayout">
                {getOrderedItems().map((destination, idx) => {
                  const isCenter = idx === 1;
                  
                  let xPosition;
                  if (idx === 0) {
                    xPosition = "-120%";
                  } else if (idx === 1) {
                    xPosition = "0%";
                  } else {
                    xPosition = "120%";
                  }

                  return (
            <motion.div
              key={destination.id}
                      initial={{ 
                        x: idx === 0 ? "-240%" : (idx === 2 ? "240%" : "0%"),
                        opacity: 0,
                        scale: 0.8
                      }}
                      animate={{ 
                        x: xPosition,
                        opacity: isCenter ? 1 : 0.6,
                        scale: isCenter ? 1 : 0.8,
                        zIndex: isCenter ? 30 : 10
                      }}
                      exit={{ 
                        x: idx === 0 ? "-240%" : (idx === 2 ? "240%" : "0%"),
                        opacity: 0,
                        scale: 0.8
                      }}
                      transition={{
                        ...transition,
                        opacity: { duration: 0.3 }
                      }}
                      style={{
                        position: 'absolute',
                        width: isCenter ? '900px' : '550px',
                        height: isCenter ? '600px' : '450px'
                      }}
                      className={`
                        rounded-2xl overflow-hidden cursor-pointer shadow-2xl
                        transform-gpu
                      `}
                      onClick={() => isCenter ? null : destination.id === destinations[normalizeIndex(activeIndex - 1)].id ? prevSlide() : nextSlide()}
                    >
                      <div className="absolute inset-0">
                        <motion.div
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 6, ease: "easeOut" }}
                          className="w-full h-full"
                        >
                    <img
                      src={destination.image}
                      alt={destination.title}
                            className="w-full h-full object-cover transform-gpu"
                          />
                        </motion.div>
                        <div className={`absolute inset-0 ${isCenter ? 'bg-black/40' : 'bg-black/60'}`}></div>
                      </div>
                      
                      {isCenter && (
                        <div className="absolute inset-0 p-12 flex flex-col">
                          <motion.h3 
                            className="text-6xl md:text-7xl font-bold text-white leading-tight mb-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {destination.title}
                          </motion.h3>
                          
                          <div className="space-y-6">
                            <motion.p 
                              className="text-white/90 text-xl md:text-2xl"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              {destination.description}
                            </motion.p>
                            
                            <motion.div 
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                            >
                              {[...Array(destination.stars)].map((_, i) => (
                                <svg 
                                  key={i}
                                  className="w-6 h-6 text-yellow-400" 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </motion.div>
                            
                            <motion.p 
                              className="text-white/90 text-lg md:text-xl uppercase tracking-wide"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                            >
                              {destination.location}
                            </motion.p>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 }}
                            >
                              <Link 
                                to={destination.link} 
                                className="inline-flex items-center gap-2 text-white text-lg font-medium hover:text-white/80 transition-colors group"
                              >
                                <span className="relative">
                                  Explore More
                                  <div className="absolute -bottom-1 left-0 w-full h-px bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </span>
                                <svg 
                                  className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                                  stroke="currentColor" 
                                  fill="none" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </Link>
                            </motion.div>
                    </div>
                  </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <button 
              className="absolute left-[5%] top-1/2 -translate-y-1/2 text-white z-40 p-2 hover:text-white/70 transition-all hover-lift"
              onClick={() => {
                prevSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 1000);
              }}
              aria-label="Previous slide"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <button 
              className="absolute right-[5%] top-1/2 -translate-y-1/2 text-white z-40 p-2 hover:text-white/70 transition-all hover-lift"
              onClick={() => {
                nextSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 1000);
              }}
              aria-label="Next slide"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
                </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 1000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Destinations;