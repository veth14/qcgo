import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] bg-gray-900 text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/src/assets/images/qc-bg.jpg')", 
          filter: "brightness(0.6)" 
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">EXPLORE<br />QUEZON CITY</h1>
        <p className="text-xl mb-8 max-w-lg">Discover the vibrant culture and hidden gems of the city</p>
        <div>
          <button className="bg-accent hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
