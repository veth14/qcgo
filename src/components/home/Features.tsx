import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';

const Features = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced parallax values
  const patternY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const patternOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const patternScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  
  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (focusedIndex === null) return;

    switch (e.key) {
      case 'ArrowRight':
        setFocusedIndex((prev) => (prev === null || prev === features.length - 1) ? 0 : prev + 1);
        break;
      case 'ArrowLeft':
        setFocusedIndex((prev) => (prev === null || prev === 0) ? features.length - 1 : prev - 1);
        break;
      case 'Enter':
      case ' ':
        setHovered(focusedIndex);
        break;
      default:
        break;
    }
  }, [focusedIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (focusedIndex !== null && featureRefs.current[focusedIndex]) {
      featureRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  const features = [
    {
      id: 1,
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 16V32L43 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" strokeLinecap="round" />
        </svg>
      ),
      title: 'We help you save time',
      description: 'Plan your Quezon City adventures efficiently with our curated guides and smart itinerary suggestions.',
      bgGradient: 'from-blue-50 to-indigo-50',
      iconBg: 'from-blue-500/20 to-indigo-500/20',
      accentColor: 'rgb(59, 130, 246)'
    },
    {
      id: 2,
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="29" cy="29" r="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M52 52L40 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="29" cy="29" r="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" strokeLinecap="round" />
        </svg>
      ),
      title: 'Explore different places',
      description: 'Discover hidden gems and popular spots across Quezon City\'s diverse districts and neighborhoods.',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 3,
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 32C36 32 39 29 39 25C39 21 36 18 32 18C28 18 25 21 25 25C25 29 28 32 32 32Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 25C48 44 32 54 32 54C32 54 16 44 16 25C16 20 18 15 22 11C26 7 31 5 36 5C41 5 46 7 50 11C54 15 56 20 56 25Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="32" cy="25" r="22" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" strokeLinecap="round" />
        </svg>
      ),
      title: 'Accessible location',
      description: 'Find the best routes and transportation options to reach your desired destinations in Quezon City.',
      bgGradient: 'from-green-50 to-teal-50',
      iconBg: 'from-green-500/20 to-teal-500/20'
    }
  ];

  // Enhanced container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Enhanced item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.9
      }
    }
  };

  // Enhanced icon animation
  const iconHoverAnimation = {
    rest: { 
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Enhanced Pattern component with 3D effect
  const Pattern = () => (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden perspective-1000"
      style={{ 
        y: patternY, 
        opacity: patternOpacity,
        scale: patternScale,
      }}
    >
      <div className="absolute w-full h-full transform-style-3d">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gray-100"
            initial={{ opacity: 0, scale: 0, rotateX: -30 }}
            animate={{ 
              opacity: Math.random() * 0.07,
              scale: Math.random() * 0.5 + 0.5,
              rotateX: 0,
              transition: { 
                delay: i * 0.1,
                duration: 1,
                type: "spring",
                stiffness: 100
              }
            }}
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              transform: 'translate(-50%, -50%)',
              transformStyle: 'preserve-3d'
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-32 bg-white relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <Pattern />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ 
          rotateX: mousePosition.y * 0.1,
          rotateY: mousePosition.x * 0.1,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Enhanced section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          >
            <motion.div 
              className="w-12 h-[2px]"
              style={{
                background: `linear-gradient(to right, rgba(59, 130, 246, 0) 0%, rgb(59, 130, 246) 100%)`
              }}
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="mx-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">Features</span>
            <motion.div 
              className="w-12 h-[2px]"
              style={{
                background: `linear-gradient(to left, rgba(59, 130, 246, 0) 0%, rgb(59, 130, 246) 100%)`
              }}
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-navy-900 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            WHY USE QCGO?
            <motion.div 
              className="absolute -bottom-3 left-0 w-full h-1"
              style={{
                background: 'linear-gradient(to right, rgba(59, 130, 246, 0), rgb(59, 130, 246), rgba(59, 130, 246, 0))'
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { 
                scaleX: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.5
                }
              } : {}}
            />
          </motion.h2>
        </motion.div>

        {/* Enhanced features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 gap-y-12 lg:gap-y-16 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              ref={(el) => { featureRefs.current[index] = el; }}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => {
                setHovered(feature.id);
                setFocusedIndex(index);
              }}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              tabIndex={0}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <AnimatePresence>
                {(hovered === feature.id || focusedIndex === index) && (
                  <motion.div
                    className="absolute -inset-4 bg-white rounded-3xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.05, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>

              {/* Enhanced feature card */}
              <motion.div 
                className={`h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${feature.bgGradient} relative overflow-hidden group`}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: mousePosition.x * 0.05
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Enhanced decorative elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent" />
                  <motion.div 
                    className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full blur-2xl transform"
                    style={{
                      background: `linear-gradient(to bottom right, ${feature.iconBg.split(' ')[0].replace('from-', '')} 0%, ${feature.iconBg.split(' ')[1].replace('to-', '')} 100%)`
                    }}
                    animate={{
                      scale: hovered === feature.id ? [1, 1.2, 1] : 1,
                      rotate: hovered === feature.id ? [45, 90, 45] : 45,
                      y: mousePosition.y * 0.5
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>

                {/* Enhanced icon container */}
                <motion.div 
                  className="relative mb-8 w-20 h-20"
                  initial="rest"
                  animate={hovered === feature.id ? "hover" : "rest"}
                  variants={iconHoverAnimation}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-white shadow-lg"
                    animate={{
                      rotateZ: hovered === feature.id ? -6 : 0,
                      y: mousePosition.y * 0.1
                    }}
                  />
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.iconBg} backdrop-blur-sm`}
                    animate={{
                      rotateZ: hovered === feature.id ? -3 : 0,
                      y: mousePosition.y * 0.05
                    }}
                  />
                  <motion.div 
                    className="relative h-full flex items-center justify-center text-navy-900"
                    animate={{
                      rotateZ: hovered === feature.id ? [0, -5, 5, 0] : 0,
                      y: mousePosition.y * 0.02
                    }}
                  >
                    <motion.div
                      animate={hovered === feature.id ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0],
                      } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Enhanced content */}
                <motion.h3 
                  className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-navy-900"
                  animate={{ 
                    scale: hovered === feature.id ? 1.05 : 1,
                    y: hovered === feature.id ? -2 : 0,
                    z: hovered === feature.id ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  animate={{
                    opacity: hovered === feature.id ? 1 : 0.8,
                    y: hovered === feature.id ? -1 : 0,
                    z: hovered === feature.id ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.description}
                </motion.p>

                {/* Enhanced accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(to right, ${feature.iconBg.split(' ')[0].replace('/20', '')} 0%, ${feature.iconBg.split(' ')[1].replace('/20', '')} 100%)`
                  }}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: hovered === feature.id ? '100%' : '0%',
                    boxShadow: hovered === feature.id ? '0 0 20px rgba(59, 130, 246, 0.3)' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
