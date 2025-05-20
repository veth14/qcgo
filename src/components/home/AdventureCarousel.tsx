'use client';

import { useState } from 'react';
import Image from 'next/image';

const AdventureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/images/adventure1.jpg',
      title: 'Eastwood City',
      description: 'Modern lifestyle hub with shopping, dining, and entertainment options'
    },
    {
      id: 2,
      image: '/images/adventure2.jpg',
      title: 'Art in Island',
      description: '3D art museum with interactive installations'
    },
    {
      id: 3,
      image: '/images/adventure3.jpg',
      title: 'La Mesa Eco Park',
      description: 'Nature reserve with hiking trails and recreational activities'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">START YOUR ADVENTURE NOW!</h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-[400px] bg-gray-300">
              {/* Replace with actual image when available */}
              <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
              {/* Uncomment when you have the actual image */}
              {/* <Image 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                style={{ objectFit: 'cover' }}
              /> */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h3>
                <p>{slides[currentSlide].description}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none z-20"
            aria-label="Previous slide"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none z-20"
            aria-label="Next slide"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 mx-1 rounded-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-accent hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition duration-300">
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdventureCarousel;
