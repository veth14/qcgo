import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutQC = () => {
  const [hovered, setHovered] = useState(false);
  
  // Text variants for staggered animations
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content: Text with scroll animations */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-navy-900"
                variants={textItem}
              >
              <span className="block">GET TO KNOW</span>
              <span className="block text-navy-900 font-extrabold">QUEZON CITY</span>
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="w-0 h-1 bg-blue-600 mb-6"
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-gray-700 mb-4 leading-relaxed"
                variants={textItem}
              >
                Quezon City, the largest city in Metro Manila, serves as a vibrant hub of culture, education, and governance in the Philippines. Named after President Manuel L. Quezon, it was established in 1939 and originally planned as the country's capital city.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 mb-4 leading-relaxed"
                variants={textItem}
              >
                Home to prestigious educational institutions like the University of the Philippines Diliman and Ateneo de Manila University, Quezon City is a center for learning and innovation. The city is also known for its diverse neighborhoods, from the bustling commercial centers of Cubao and Eastwood to the tranquil green spaces of Quezon Memorial Circle and La Mesa Eco Park.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 mb-8 leading-relaxed"
                variants={textItem}
              >
                With a rich cultural tapestry, modern infrastructure, and a forward-looking vision, Quezon City continues to evolve as one of the Philippines' most progressive urban centers while preserving its historical significance.
              </motion.p>
            </motion.div>
            
            <motion.button 
              className="bg-navy-900 hover:bg-blue-800 text-white font-bold py-3 px-10 rounded transition duration-300 uppercase text-sm shadow-md hover:shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered && (
                <motion.span 
                  className="absolute inset-0 bg-blue-700 opacity-30"
                  layoutId="buttonHighlight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              Learn More
            </motion.button>
          </motion.div>
          
          {/* Right content: Image with scroll animation */}
          <motion.div 
            className="md:w-2/5 flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-50 rounded-full opacity-20 transform scale-90 -z-10"></div>
              <motion.div
                initial={{ scale: 0.9, y: 10 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
              <img
                src="/Landing Page Pics/qc logo.png"
                alt="Quezon City Seal"
                  className="w-full h-auto max-w-md mx-auto drop-shadow-lg"
              />
              </motion.div>
              <motion.p 
                className="text-center text-sm mt-4 text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Quezon City Seal
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutQC;
