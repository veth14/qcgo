import React from 'react';

const Destinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      image: '/src/assets/images/up-diliman.jpg',
      title: 'UNIVERSITY OF THE PHILIPPINES',
      category: 'EDUCATION'
    },
    {
      id: 2,
      image: '/src/assets/images/wildlife.jpg',
      title: 'WILDLIFE',
      category: 'NATURE'
    },
    {
      id: 3,
      image: '/src/assets/images/sunken-garden.jpg',
      title: 'SUNKEN GARDEN',
      category: 'LANDMARK'
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">VISIT NOW</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="relative group overflow-hidden rounded-lg">
              <img 
                src={destination.image} 
                alt={destination.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-sm font-semibold bg-accent px-3 py-1 rounded-full">{destination.category}</span>
                <h3 className="text-xl font-bold mt-2">{destination.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
