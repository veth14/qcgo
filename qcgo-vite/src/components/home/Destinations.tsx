import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      image: '/Landing Page Pics/UPD.png',
      title: 'UNIVERSITY OF THE PHILIPPINES DILIMAN',
      category: 'EDUCATION',
      description: 'Explore the premier state university campus with its iconic landmarks and vibrant academic atmosphere.',
      link: '/destinations/up-diliman'
    },
    {
      id: 2,
      image: '/Landing Page Pics/Wildlife.png',
      title: 'WILDLIFE',
      category: 'NATURE',
      description: 'Discover the natural beauty and diverse wildlife in this urban sanctuary.',
      link: '/destinations/wildlife'
    },
    {
      id: 3,
      image: '/Landing Page Pics/Sunken Garden.png',
      title: 'SUNKEN GARDEN',
      category: 'LANDMARK',
      description: 'Visit this iconic depression in the landscape that serves as a popular gathering spot.',
      link: '/destinations/sunken-garden'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">VISIT NOW</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Experience Quezon City like never before</p>
          <div className="w-20 h-1 bg-purple-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={destination.link} className="group block h-full">
                <div className="relative overflow-hidden rounded-xl h-full bg-white/5 backdrop-blur-sm shadow-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-500/30 text-purple-200 rounded-full mb-3">{destination.category}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{destination.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-300">View details</span>
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                        <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
