import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      image: '/Landing Page Pics/UPD.png',
      title: 'UNIVERSITY OF THE PHILIPPINES DILIMAN',
      description: 'Lorem ipsum is simply dummy text',
      stars: 5,
      link: '/destinations/up-diliman'
    },
    {
      id: 2,
      image: '/Landing Page Pics/Wildlife.png',
      title: 'WILDLIFE',
      description: 'Lorem ipsum is simply dummy text',
      stars: 5,
      location: 'DILIMAN, QUEZON CITY, METRO MANILA',
      link: '/destinations/wildlife'
    },
    {
      id: 3,
      image: '/Landing Page Pics/Sunken Garden.png',
      title: 'SUNKEN GARDEN',
      description: 'Lorem ipsum is simply dummy text',
      stars: 5,
      link: '/destinations/sunken-garden'
    }
  ];

  return (
    <section className="relative py-16 bg-black text-white overflow-hidden">
      {/* Background overlay effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-900/30 to-purple-900/10"></div>
      
      {/* Glow effects */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] z-0"></div>
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full filter blur-[100px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-2">VISIT NOW</h2>
          <p className="text-white/80 text-lg">Experience Quezon City like never before</p>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex overflow-x-auto hide-scrollbar space-x-5 pb-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] sm:min-w-[350px]"
            >
              <Link to={destination.link} className="block">
                <div className="relative rounded-xl overflow-hidden h-[400px]">
                  {/* Image background */}
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="absolute w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                    {/* Title with line breaks for first card */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                      {destination.title === 'UNIVERSITY OF THE PHILIPPINES DILIMAN' ? (
                        <>
                          UNIVERSITY<br />
                          OF THE<br />
                          PHILIPPINES<br />
                          DILIMAN
                        </>
                      ) : destination.title}
                    </h3>

                    {/* Star rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-white/80 mb-3">
                      {destination.description}
                    </p>
                    
                    {destination.location && (
                      <div className="mt-2 bg-white/10 backdrop-blur-sm py-1 px-2 rounded text-[10px] text-white/90 inline-block">
                        {destination.location}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Destinations;
