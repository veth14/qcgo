import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineItem {
  year: string;
  date: string;
  event: string;
  description?: string;
  image?: string;
}

interface InteractiveTimelineProps {
  timelineData: TimelineItem[];
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ timelineData }) => {
  const [selectedYear, setSelectedYear] = useState(timelineData[0].year);
  const [sliderValue, setSliderValue] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);
  
  // Find the selected event
  const selectedEvent = timelineData.find(item => item.year === selectedYear) || timelineData[0];
  
  // Update slider when year changes
  useEffect(() => {
    const index = timelineData.findIndex(item => item.year === selectedYear);
    if (index >= 0) {
      setSliderValue(index);
      if (sliderRef.current) {
        sliderRef.current.value = index.toString();
      }
    }
  }, [selectedYear, timelineData]);
  
  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);
    setSliderValue(index);
    setSelectedYear(timelineData[index].year);
  };
  
  // Handle year button click
  const handleYearClick = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-[#0047AB] mb-6">INTERACTIVE TIMELINE</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore key events in Quezon City's history by sliding through the timeline or clicking on specific years
        </p>
      </div>
      
      {/* Timeline Slider */}
      <div className="mb-12">
        <div className="relative">
          <input
            ref={sliderRef}
            type="range"
            min="0"
            max={timelineData.length - 1}
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          
          {/* Year Markers */}
          <div className="absolute w-full flex justify-between -mt-2 px-1">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`relative ${index === 0 || index === timelineData.length - 1 || index % 5 === 0 ? 'block' : 'hidden md:block'}`}
              >
                <div 
                  className={`absolute -mt-1 transform -translate-x-1/2 w-1 h-4 ${
                    selectedYear === item.year ? 'bg-blue-600' : 'bg-blue-400'
                  }`}
                />
                <button
                  onClick={() => handleYearClick(item.year)}
                  className={`absolute mt-4 transform -translate-x-1/2 text-xs font-medium ${
                    selectedYear === item.year 
                    ? 'text-blue-600 scale-110 font-bold' 
                    : 'text-gray-500 hover:text-blue-500'
                  }`}
                >
                  {item.year}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Selected Event Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            {selectedEvent.image && (
              <div className="md:w-1/2">
                <div className="h-full relative overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src={selectedEvent.image || "https://via.placeholder.com/600x400?text=Event+Image"}
                    alt={selectedEvent.event}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x400?text=Event+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                      {selectedEvent.date}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className={`p-8 ${selectedEvent.image ? 'md:w-1/2' : 'w-full'}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedEvent.year}</h3>
                <p className="text-xl font-semibold text-blue-600 mb-4">{selectedEvent.event}</p>
                {selectedEvent.description && (
                  <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Timeline Navigation */}
      <div className="mt-12 flex justify-between">
        <button
          onClick={() => {
            const currentIndex = timelineData.findIndex(item => item.year === selectedYear);
            if (currentIndex > 0) {
              setSelectedYear(timelineData[currentIndex - 1].year);
            }
          }}
          disabled={selectedYear === timelineData[0].year}
          className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-200 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous Event
        </button>
        
        <button
          onClick={() => {
            const currentIndex = timelineData.findIndex(item => item.year === selectedYear);
            if (currentIndex < timelineData.length - 1) {
              setSelectedYear(timelineData[currentIndex + 1].year);
            }
          }}
          disabled={selectedYear === timelineData[timelineData.length - 1].year}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          Next Event
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InteractiveTimeline; 