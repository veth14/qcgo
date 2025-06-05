import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaLandmark } from 'react-icons/fa';

interface DistrictData {
  name: string;
  description: string;
  historicalFacts: string[];
  landmarks: string[];
  image: string;
}

interface DistrictExplorerProps {
  districtData: DistrictData[];
}

const DistrictExplorer: React.FC<DistrictExplorerProps> = ({ districtData }) => {
  const [activeDistrict, setActiveDistrict] = useState(0);
  const [showMap, setShowMap] = useState(false);
  
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0047AB] mb-4">DISTRICT HISTORY</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the unique history and landmarks of Quezon City's six districts that together form this diverse metropolis
          </p>
        </div>
        
        {/* District Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {districtData.map((district, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveDistrict(index)}
              className={`px-5 py-3 rounded-lg font-medium transition-all ${
                activeDistrict === index 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
              whileHover={{ scale: activeDistrict === index ? 1.05 : 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {district.name}
            </motion.button>
          ))}
        </div>
        
        {/* Toggle between Map and Details */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                !showMap ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setShowMap(false)}
            >
              District Details
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                showMap ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setShowMap(true)}
            >
              District Map
            </button>
          </div>
        </div>
        
        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDistrict}-${showMap}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {showMap ? (
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-gray-400 mb-4">
                        <FaMapMarkerAlt className="inline-block text-5xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-600">{districtData[activeDistrict].name} Map</h3>
                      <p className="text-gray-500 mt-2">Interactive map would be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full relative overflow-hidden">
                      <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7 }}
                        src={districtData[activeDistrict].image}
                        alt={districtData[activeDistrict].name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/600x400?text=District+Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-600 p-3 rounded-full">
                            <FaLandmark className="text-white" />
                          </div>
                          <h3 className="text-white text-xl font-bold">{districtData[activeDistrict].name}</h3>
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
                      <h3 className="text-2xl font-bold text-gray-900">{districtData[activeDistrict].name}</h3>
                      <p className="text-gray-600 leading-relaxed">{districtData[activeDistrict].description}</p>
                      
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-800">Historical Significance</h4>
                        <ul className="space-y-3">
                          {districtData[activeDistrict].historicalFacts.map((fact, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + (i * 0.1) }}
                              className="flex items-start"
                            >
                              <span className="text-blue-600 mr-3 mt-1">•</span>
                              <span className="text-gray-700">{fact}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Notable Landmarks</h4>
                        <div className="flex flex-wrap gap-2">
                          {districtData[activeDistrict].landmarks.map((landmark, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + (i * 0.1) }}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {landmark}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <button
                          onClick={() => setShowMap(true)}
                          className="text-blue-600 font-medium flex items-center gap-2 hover:underline"
                        >
                          <FaMapMarkerAlt />
                          View on map
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between">
          <button
            onClick={() => setActiveDistrict(prevState => (prevState > 0 ? prevState - 1 : districtData.length - 1))}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg flex items-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous District
          </button>
          
          <button
            onClick={() => setActiveDistrict(prevState => (prevState < districtData.length - 1 ? prevState + 1 : 0))}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors"
          >
            Next District
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DistrictExplorer; 