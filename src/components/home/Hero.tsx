'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gray-900 text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {/* We'll use a placeholder color until the actual image is added */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative h-full w-full">
          {/* Replace with actual image when available */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900"></div>
          {/* Uncomment when you have the actual image */}
          {/* <Image 
            src="/images/qc-bg.jpg"
            alt="Quezon City"
            fill
            style={{ objectFit: 'cover' }}
            priority
          /> */}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">EXPLORE<br />QUEZON CITY</h1>
        <p className="text-xl mb-8 max-w-lg">Discover the vibrant culture and hidden gems of the city</p>
        <div>
          <button className="bg-accent hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
