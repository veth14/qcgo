import { motion } from 'framer-motion';
import { useState } from 'react';

const Features = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  // Premium quality icons with consistent styling
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
      description: 'Lorem Ipsum is simply dummy text'
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
      description: 'Lorem Ipsum is simply dummy text'
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
      description: 'Lorem Ipsum is simply dummy text'
    }
  ];

  // Container animation with enhanced staggering
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

  // Item animation with spring physics
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.9
      }
    }
  };

  // Professional hover effect for icons
  const iconHoverAnimation = {
    rest: { 
      scale: 1,
      opacity: 1,
      filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] // Cubic bezier for smooth animation
      }
    },
    hover: { 
      scale: 1.08,
      opacity: 1,
      filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))",
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  // Professional heading animation with accent
  const headingVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <section className="py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Enhanced background elements with refined positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-50 to-transparent opacity-30 blur-xl"></div>
        <div className="absolute bottom-[10%] -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-blue-50 to-transparent opacity-30 blur-xl"></div>
        <div className="absolute top-[40%] left-[25%] w-24 h-24 rounded-full bg-blue-50 opacity-20 blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium section header with accent */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={headingVariants}
          className="text-center mb-24"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-6 h-0.5 bg-blue-400"></div>
              <span className="text-xs font-medium tracking-wider text-blue-500 uppercase">Features</span>
              <div className="w-6 h-0.5 bg-blue-400"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 relative inline-block">
              WHY USE QCGO?
              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
              />
            </h2>
          </div>
        </motion.div>

        {/* Features Grid with enhanced layout and spacing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-20 max-w-7xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
              onMouseEnter={() => setHovered(feature.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Premium circular icon container */}
              <div className="relative mb-8">
                {/* Background accent circle */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-50"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                />

                {/* Icon container with premium hover effect */}
                <motion.div 
                  className="relative w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center z-10"
                  initial="rest"
                  animate={hovered === feature.id ? "hover" : "rest"}
                  variants={iconHoverAnimation}
                >
                  {/* Subtle decorative ring */}
                  <div className="absolute inset-0 rounded-full border border-gray-200"></div>
                  
                  {/* Icon wrapper with enhanced animation */}
                  <motion.div
                    className="text-gray-800 relative"
                    animate={{ 
                      rotate: hovered === feature.id ? [0, 5, 0, -5, 0] : 0
                    }}
                    transition={{ 
                      duration: hovered === feature.id ? 0.6 : 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {feature.icon}
                    
                    {/* Subtle accent dot */}
                    <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-blue-500 opacity-70"></div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Feature content with refined typography */}
              <div className="relative">
                {/* Title with animated underline */}
                <motion.h3 
                  className="text-xl font-bold mb-3 text-navy-900 inline-block relative"
                  animate={{ 
                    y: hovered === feature.id ? -3 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                  
                  {/* Professional animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                    initial={{ width: 0, left: '50%' }}
                    animate={{ 
                      width: hovered === feature.id ? '100%' : '0%',
                      left: hovered === feature.id ? '0%' : '50%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h3>
                
                {/* Description with enhanced styling */}
                <motion.p 
                  className="text-gray-600 max-w-xs mx-auto"
                  animate={{
                    opacity: hovered === feature.id ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium decorative element */}
        <div className="flex justify-center mt-20">
          <div className="w-32 h-1.5 bg-gray-100 rounded-full flex overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ width: '25%' }}
              animate={{ 
                x: [0, 60, 0],
                width: ['25%', '50%', '25%']
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 5,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
