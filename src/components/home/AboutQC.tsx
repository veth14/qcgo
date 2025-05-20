'use client';

import Image from 'next/image';

const AboutQC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">GET TO KNOW<br />QUEZON CITY</h2>
            <p className="text-gray-700 mb-6">
              Quezon City stands as the largest city in Metro Manila, renowned for its vibrant culture and rich history. With its diverse neighborhoods, educational institutions, and entertainment hubs, the city offers a unique blend of urban energy and green spaces. From the iconic Quezon Memorial Circle to the bustling Cubao district, there's always something new to discover in this dynamic metropolis.
            </p>
            <div className="flex items-center">
              <div className="w-24 h-24 mr-4 relative">
                {/* Replace with actual image when available */}
                <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                  QC Seal
                </div>
                {/* Uncomment when you have the actual image */}
                {/* <Image 
                  src="/images/qc-seal.png" 
                  alt="Quezon City Seal" 
                  fill
                  style={{ objectFit: 'contain' }}
                /> */}
              </div>
              <div>
                <h3 className="font-bold">QUEZON CITY GOVERNMENT</h3>
                <p className="text-sm text-gray-600">Official Tourism Partner</p>
              </div>
            </div>
            <button className="mt-6 bg-primary hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300">
              LEARN MORE
            </button>
          </div>
          <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full">
            {/* Replace with actual image when available */}
            <div className="absolute inset-0 bg-gray-300 rounded-lg"></div>
            {/* Uncomment when you have the actual image */}
            {/* <Image 
              src="/images/qc-landmark.jpg" 
              alt="Quezon City Landmark" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQC;
