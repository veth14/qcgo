import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaBook, FaPalette, FaTheaterMasks, FaDrum, FaUtensils } from 'react-icons/fa';

interface CulturalItem {
  title: string;
  description: string;
  icon: string;
  details: string[];
  image: string;
}

interface CulturalHeritageSectionProps {
  culturalItems: CulturalItem[];
}

const iconMap: Record<string, React.ComponentType> = {
  FaMusic,
  FaBook,
  FaPalette,
  FaTheaterMasks,
  FaDrum,
  FaUtensils,
};

const CulturalHeritageSection: React.FC<CulturalHeritageSectionProps> = ({ culturalItems }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setExpandedItem(null);
  };
  
  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };
  
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">CULTURAL HERITAGE</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the rich cultural tapestry that makes Quezon City a vibrant center of Filipino heritage and artistic expression
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {culturalItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-5 py-3 rounded-full flex items-center gap-2 transition-all ${
                activeTab === index 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {iconMap[item.icon] ? React.createElement(iconMap[item.icon]) : null}
              <span className="font-medium">{item.title}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full relative overflow-hidden">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      src={culturalItems[activeTab].image}
                      alt={culturalItems[activeTab].title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/600x400?text=Cultural+Heritage";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-3 rounded-full">
                          {iconMap[culturalItems[activeTab].icon] ? React.createElement(iconMap[culturalItems[activeTab].icon]) : null}
                        </div>
                        <h3 className="text-white text-xl font-bold">{culturalItems[activeTab].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">{culturalItems[activeTab].title}</h3>
                    <p className="text-gray-600 leading-relaxed">{culturalItems[activeTab].description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-800">Key Elements</h4>
                      <ul className="space-y-3">
                        {culturalItems[activeTab].details.map((detail, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="flex items-start"
                          >
                            <span className="text-blue-600 mr-3 mt-1">•</span>
                            <span className="text-gray-700">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Interactive Cards Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Explore Cultural Elements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {culturalItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all ${
                      expandedItem === index ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
                    }`}
                    onClick={() => toggleExpand(index)}
                    whileHover={{ y: -5 }}
                    layout
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/400x300?text=Cultural+Element";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <h4 className="text-white text-lg font-bold">{item.title}</h4>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedItem === index && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-4"
                        >
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <ul className="space-y-2">
                            {item.details.map((detail, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 text-right">
                            <button 
                              className="text-blue-600 font-medium"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTab(index);
                                window.scrollTo({
                                  top: document.getElementById('cultural-section')?.offsetTop || 0,
                                  behavior: 'smooth'
                                });
                              }}
                            >
                              Learn more →
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CulturalHeritageSection; 