import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaClock, FaLandmark, FaUsers, FaCity } from 'react-icons/fa';
import HistoryQuiz from '../components/HistoryQuiz';
import { interactiveTimelineData } from '../data/qcHistoryData';
import DistrictExplorer from '../components/DistrictExplorer';
import CulturalHeritageSection from '../components/CulturalHeritageSection';
import { districtHistoryData, culturalHeritageData } from '../data/qcHistoryData';

const QCHistory: React.FC = () => {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(
    scrollY,
    [0, window.innerHeight],
    ['0%', '50%']
  );

  const contentY = useTransform(
    scrollY,
    [0, window.innerHeight],
    ['0%', '-30%']
  );

  const backgroundScale = useTransform(
    scrollY,
    [0, window.innerHeight],
    [1, 1.2]
  );

  const backgroundOpacity = useTransform(
    scrollY,
    [0, window.innerHeight * 0.5],
    [1, 0.5]
  );

  // Historical quiz questions
  const quizQuestions = [
    {
      question: "In what year was Quezon City founded?",
      options: ["1935", "1939", "1945", "1948"],
      correctAnswer: 1,
      explanation: "Quezon City was established on October 12, 1939, through Commonwealth Act No. 502, as envisioned by President Manuel L. Quezon."
    },
    {
      question: "Who was the first mayor of Quezon City?",
      options: ["Ponciano Bernardo", "Tomas Morato", "Ignacio Santos Diaz", "Norberto Amoranto"],
      correctAnswer: 1,
      explanation: "Tomás Morato was appointed as the first mayor of Quezon City by President Manuel L. Quezon after the city's establishment in 1939."
    },
    {
      question: "When was Quezon City officially designated as the capital of the Philippines?",
      options: ["1939", "1945", "1948", "1976"],
      correctAnswer: 2,
      explanation: "On July 17, 1948, President Elpidio Quirino signed Republic Act No. 333, officially designating Quezon City as the capital of the Philippines."
    },
    {
      question: "What significant event occurred in parts of EDSA in Quezon City in 1986?",
      options: ["The first MRT line opened", "The People Power Revolution", "The first Araneta Coliseum concert", "The founding of UP Diliman"],
      correctAnswer: 1,
      explanation: "The People Power Revolution (also known as the EDSA Revolution) took place from February 22-25, 1986, which led to the ousting of President Ferdinand Marcos."
    },
    {
      question: "Which educational institution was inaugurated in Quezon City in 1949?",
      options: ["Ateneo de Manila University", "University of the Philippines Diliman", "Miriam College", "New Era University"],
      correctAnswer: 1,
      explanation: "The University of the Philippines Diliman campus was inaugurated in 1949, establishing Quezon City as a premier educational center."
    }
  ];

  // Add sample data arrays before the return statement in QCHistory
  const timelineEvents = interactiveTimelineData.map(e => ({
    year: e.year,
    title: e.event,
    description: e.description || '',
    image: e.image || '',
  }));

  const historicalLandmarks = [
    {
      name: 'Quezon Memorial Circle',
      description: 'A national park and shrine dedicated to President Manuel L. Quezon.',
      image: '/qchistory/quezonmemorialcircle.jpg',
      yearEstablished: '1978',
      location: 'Elliptical Road, Diliman',
      significance: 'Iconic city landmark and historical site.'
    },
    {
      name: 'Smart Araneta Coliseum',
      description: 'One of the largest indoor arenas in Asia, host to historic events.',
      image: '/qchistory/smart-araneta-coliseum.jpg',
      yearEstablished: '1960',
      location: 'Cubao',
      significance: 'Venue for sports, concerts, and global events.'
    },
    {
      name: 'UP Diliman',
      description: 'The main campus of the University of the Philippines, a center for education and culture.',
      image: '/qchistory/updiliman-aerial-DJIspark.jpg',
      yearEstablished: '1949',
      location: 'Diliman',
      significance: 'Premier educational institution.'
    },
    {
      name: 'La Mesa Eco Park',
      description: 'A lush ecological park and water reservoir, perfect for nature lovers and families.',
      image: '/qchistory/la-mesa-ecopark-signage-1-1719823758.jpg',
      yearEstablished: '2005',
      location: 'Novaliches',
      significance: 'Major green space and water conservation area.'
    },
    {
      name: 'Ninoy Aquino Parks and Wildlife Center',
      description: 'A wildlife rescue and nature park in the heart of the city.',
      image: '/qchistory/ninoy-aquino-parks-and-wildlife-center-2195.jpg',
      yearEstablished: '1954',
      location: 'Diliman',
      significance: 'Home to rescued animals and native flora.'
    },
    {
      name: 'EDSA Shrine',
      description: 'A church and monument commemorating the 1986 People Power Revolution.',
      image: '/qchistory/edsashrine.jpg',
      yearEstablished: '1989',
      location: 'Ortigas Avenue corner EDSA',
      significance: 'Symbol of democracy and peaceful revolution.'
    },
    {
      name: 'Sto. Domingo Church',
      description: 'One of the largest churches in the Philippines, known for its beautiful architecture.',
      image: '/qchistory/stodomingochurch.jpg',
      yearEstablished: '1954',
      location: 'Quezon Avenue',
      significance: 'National Cultural Treasure and pilgrimage site.'
    },
    {
      name: 'Batasang Pambansa Complex',
      description: 'The seat of the House of Representatives of the Philippines.',
      image: '/qchistory/batasancomplex.jpg',
      yearEstablished: '1978',
      location: 'Batasan Hills',
      significance: 'Center of Philippine legislative activity.'
    },
    {
      name: 'QCX Museum',
      description: 'An interactive museum showcasing the history and culture of Quezon City.',
      image: '/qchistory/QC_museums_2023_11_07_15_22_51.jpg',
      yearEstablished: '2015',
      location: 'Quezon Memorial Circle',
      significance: 'Modern museum for city heritage and education.'
    },
    {
      name: 'Ali Mall',
      description: 'The first major shopping mall in the Philippines, named after Muhammad Ali.',
      image: '/qchistory/alimall.jpg',
      yearEstablished: '1976',
      location: 'Cubao',
      significance: 'Historic commercial center.'
    },
    {
      name: 'San Pedro Bautista Church',
      description: 'A 16th-century church and heritage site.',
      image: '/qchistory/sanpedrochurch.jpg',
      yearEstablished: '1590',
      location: 'San Francisco del Monte',
      significance: 'One of the oldest churches in Metro Manila.'
    }
  ];

  const mayorsData = [
    {
      name: 'Tomas Morato',
      term: '1939-1942',
      image: '/qchistory/Tomas_Morato.jpg',
      achievements: [
        'First appointed mayor of Quezon City',
        "Oversaw the city's initial development and planning",
      ],
      description: "Appointed by President Quezon, Morato was instrumental in laying the groundwork for the new city."
    },
    {
      name: 'Ponciano Bernardo',
      term: '1942-1947',
      image: '/qchistory/Ponciano_A._Bernardo.jpg',
      achievements: [
        'Led post-war reconstruction',
        'Expanded city infrastructure',
      ],
      description: "Bernardo guided the city through the challenges of World War II and its aftermath."
    },
    {
      name: 'Nicanor Roxas',
      term: '1947-1950',
      image: '/qchistory/Nicanor_A._Roxas_Painting.jpg',
      achievements: [
        'Oversaw city expansion after WWII',
        'Promoted urban development',
      ],
      description: "Roxas continued the city's growth and modernization after the war."
    },
    {
      name: 'Ignacio Santos Diaz',
      term: '1950-1954',
      image: '/qchistory/Ignacio_Santos-Diaz.jpg',
      achievements: [
        'Improved city governance',
        'Focused on public services',
      ],
      description: "Diaz worked on improving the city's administration and services."
    },
    {
      name: 'Norberto Amoranto',
      term: '1954-1976',
      image: '/qchistory/Norberto_Salandanan_Amoranto.png',
      achievements: [
        'Longest-serving QC mayor',
        'Oversaw major infrastructure projects',
        'Guided the city through Martial Law',
      ],
      description: "Amoranto's long tenure saw significant growth and challenges for Quezon City."
    },
    {
      name: 'Luzviminda Ilagan',
      term: '1976-1986',
      image: '/qchistory/luzvimindailigan.jpg',
      achievements: [
        'First female mayor (OIC)',
        'Served during the transition after Martial Law',
      ],
      description: "Ilagan was appointed as OIC during a turbulent period in Philippine history."
    },
    {
      name: 'Brigido Simon Jr.',
      term: '1986-1992',
      image: '/qchistory/Brigido_Simon_Jr.jpg',
      achievements: [
        'Restored democracy in city governance',
        'Promoted transparency and reforms',
      ],
      description: "Simon led the city after the People Power Revolution."
    },
    {
      name: 'Ismael Mathay Jr.',
      term: '1992-2001',
      image: '/qchistory/ismael.png',
      achievements: [
        'Modernized city services',
        'Expanded social programs',
      ],
      description: "Mathay's administration focused on modernization and social welfare."
    },
    {
      name: 'Feliciano Belmonte Jr.',
      term: '2001-2010',
      image: '/qchistory/Feliciano_Belmonte_Jr_-_2016_(cropped).jpg',
      achievements: [
        'Promoted good governance',
        'Improved city finances',
      ],
      description: "Belmonte is known for his reforms and fiscal management."
    },
    {
      name: 'Herbert Bautista',
      term: '2010-2019',
      image: '/qchistory/herbertbautista.jpg',
      achievements: [
        'Focused on infrastructure and disaster preparedness',
        'Promoted youth and cultural programs',
      ],
      description: "Bistek's terms were marked by modernization and youth engagement."
    },
    {
      name: 'Joy Belmonte',
      term: '2019-present',
      image: '/qchistory/joybelmonte.png',
      achievements: [
        'Digital transformation of city services',
        'COVID-19 pandemic response',
      ],
      description: "The current mayor, known for her focus on modernization and social inclusion."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/qchistory/herosection.jpg")',
              scale: backgroundScale,
              opacity: backgroundOpacity,
              transformOrigin: 'center center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/90" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-slide" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative h-full"
          style={{ y: contentY }}
        >
          <div className="relative h-[calc(100vh-80px)] flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-12"
                >
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-8xl font-bold text-white leading-tight tracking-tight"
                  >
                    The History of<br />
                    <span className="bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-transparent bg-clip-text drop-shadow-lg">
                      Quezon City
                    </span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-xl text-gray-200 leading-relaxed max-w-2xl font-light tracking-wide"
                  >
                    From its founding in 1939 to the present day, discover the rich heritage, 
                    historical landmarks, and visionary leaders who shaped the city's destiny.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#timeline"
                      className="inline-flex items-center px-12 py-5 bg-[#0047AB] text-white rounded-lg font-semibold 
                        transition-all duration-300 shadow-lg hover:bg-[#003380] group relative overflow-hidden"
                    >
                      <span className="relative z-10 text-lg tracking-wide">Explore Mayor Timeline</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
                        initial={{ x: '100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <svg className="w-5 h-5 ml-3 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-white flex flex-col items-center cursor-pointer group"
              onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm font-medium tracking-widest uppercase mb-3 text-gray-400 
                group-hover:text-white transition-colors duration-300">Discover More</span>
              <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent 
                group-hover:h-16 transition-all duration-300"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Facts Section */}
      <div className="relative py-32 bg-gradient-to-r from-[#0047AB] to-[#003380] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 animate-slide-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {[
              { 
                number: "84+", 
                label: "YEARS OF HISTORY",
                icon: <FaClock className="text-blue-300 text-3xl mb-4" />
              },
              { 
                number: "11+", 
                label: "CITY MAYORS",
                icon: <FaUsers className="text-blue-300 text-3xl mb-4" />
              },
              { 
                number: "20+", 
                label: "HISTORICAL LANDMARKS",
                icon: <FaLandmark className="text-blue-300 text-3xl mb-4" />
              },
              { 
                number: "6", 
                label: "DISTRICTS",
                icon: <FaCity className="text-blue-300 text-3xl mb-4" />
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center group h-full"
              >
                <div className="absolute inset-0 bg-white/5 rounded-lg transform -skew-y-3 transition-transform group-hover:skew-y-0 duration-300"></div>
                <div className="relative p-8 h-full flex flex-col items-center">
                  <div className="w-12 h-[2px] bg-white/30 mx-auto mb-6 group-hover:w-20 transition-all duration-300"></div>
                  {stat.icon}
                  <div className="flex-grow flex flex-col items-center justify-center">
                    <span className="text-6xl font-bold text-white tracking-tight">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm font-medium tracking-widest mt-6">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Historical Timeline Section */}
      <div id="timeline" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-[#0047AB] mb-6">HISTORICAL TIMELINE</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Journey through the key moments that shaped Quezon City from its foundation to becoming 
              a modern metropolis
            </p>
          </motion.div>

          <div className="space-y-32">
            {timelineEvents.map((event, idx) => (
              <TimelineEvent
                key={event.year}
                event={event}
                isLeft={idx % 2 === 0}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Historical Landmarks Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">HISTORICAL LANDMARKS</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the iconic places that stand as testament to Quezon City's rich heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {historicalLandmarks.map((landmark, idx) => (
              <LandmarkCard
                key={landmark.name}
                landmark={landmark}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* District History Section */}
      <DistrictExplorer districtData={districtHistoryData} />

      {/* Cultural Heritage Section */}
      <CulturalHeritageSection culturalItems={culturalHeritageData} />

      {/* Mayors Timeline Section */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-[#0047AB] mb-6">CITY MAYORS</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the visionary leaders who guided Quezon City through the decades
            </p>
          </motion.div>

          <div className="space-y-32">
            {mayorsData.map((mayor, idx) => (
              <MayorProfile
                key={mayor.name}
                mayor={mayor}
                isLeft={idx % 2 === 0}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Quiz Section - Using the HistoryQuiz component */}
      <section id="quiz" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <HistoryQuiz quizQuestions={quizQuestions} />
        </div>
      </section>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-[#0047AB] to-[#0066FF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Experience the Rich History of Quezon City
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              Visit our historical landmarks, museums, and cultural sites to learn more about our heritage
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://quezoncity.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-12 py-5 bg-white text-[#0047AB] rounded-lg font-semibold 
                  transition-all duration-300 shadow-lg hover:bg-blue-50 group"
              >
                <span className="text-lg">Visit Official Website</span>
                <svg className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Timeline Event Component
const TimelineEvent: React.FC<{
  event: any;
  isLeft: boolean;
  index: number;
}> = ({ event, isLeft, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 perspective-[1000px]`}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Event Image */}
      <motion.div 
        whileHover={{ 
          scale: 1.02,
          rotateY: isLeft ? -15 : 15,
          rotateX: 5,
          z: 50
        }}
        className="md:w-1/2 relative transform-gpu transition-all duration-500"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl transform ${isLeft ? 'rotate-2' : '-rotate-2'} -z-10 shadow-2xl`}></div>
        <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform-gpu transition-all duration-500">
          <div className="aspect-video bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <img 
              src={event.image} 
              alt={event.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/800x450?text=Historical+Event";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-blue-600/80 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg inline-block
                transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {event.year}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Event Info */}
      <div className="md:w-1/2">
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 transform-gpu hover:translate-z-10"
          style={{ perspective: '1000px' }}
        >
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2 transform-gpu transition-all duration-300
              hover:translate-z-10 hover:text-blue-600">{event.title}</h3>
            <div className="w-20 h-1 bg-blue-600 transform-gpu transition-all duration-300 hover:scale-x-150"></div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed transform-gpu transition-all duration-300
            hover:translate-z-5">
            {event.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Landmark Card Component
const LandmarkCard: React.FC<{
  landmark: any;
  index: number;
}> = ({ landmark, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-lg overflow-hidden transform-gpu transition-all duration-300
        hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        rotateX: 5,
        z: 50
      }}
    >
      <div className="relative transform-gpu transition-all duration-300 group-hover:translate-z-10">
        <img 
          src={landmark.image} 
          alt={landmark.name}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover transform transition-all duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/400x300?text=Landmark";
          }}
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full
          transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
          Est. {landmark.yearEstablished}
        </div>
      </div>
      
      <div className="p-6 transform-gpu transition-all duration-300 group-hover:translate-z-10">
        <h3 className="text-xl font-bold text-gray-900 mb-2 transform-gpu transition-all duration-300
          group-hover:translate-z-5 group-hover:text-blue-600">{landmark.name}</h3>
        <p className="text-gray-600 text-sm mb-4 transform-gpu transition-all duration-300
          group-hover:translate-z-5">{landmark.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-start text-sm transform-gpu transition-all duration-300
            group-hover:translate-z-5">
            <FaLandmark className="text-blue-500 mt-1 mr-2 transform-gpu transition-all duration-300
              group-hover:scale-110" />
            <span className="text-gray-600">{landmark.location}</span>
          </div>
          <div className="flex items-start text-sm transform-gpu transition-all duration-300
            group-hover:translate-z-5">
            <FaLandmark className="text-blue-500 mt-1 mr-2 transform-gpu transition-all duration-300
              group-hover:scale-110" />
            <span className="text-gray-600">{landmark.significance}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Mayor Profile Component
const MayorProfile: React.FC<{
  mayor: any;
  isLeft: boolean;
  index: number;
}> = ({ mayor, isLeft, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 perspective-[1000px]`}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Mayor Image */}
      <motion.div 
        whileHover={{ 
          scale: 1.02,
          rotateY: isLeft ? -15 : 15,
          rotateX: 5,
          z: 50
        }}
        className="md:w-2/5 relative transform-gpu transition-all duration-300"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl transform ${isLeft ? 'rotate-2' : '-rotate-2'} -z-10`}></div>
        <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <img 
              src={mayor.image} 
              alt={mayor.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/400x500?text=Mayor+Image";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-blue-600/80 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg inline-block
                transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {mayor.term}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mayor Info */}
      <div className="md:w-3/5">
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 transform-gpu hover:translate-z-10"
          style={{ perspective: '1000px' }}
        >
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2 transform-gpu transition-all duration-300
              hover:translate-z-10 hover:text-blue-600">{mayor.name}</h3>
            <div className="w-20 h-1 bg-blue-600 transform-gpu transition-all duration-300 hover:scale-x-150"></div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed transform-gpu transition-all duration-300
            hover:translate-z-5">
            {mayor.description}
          </p>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800 transform-gpu transition-all duration-300
              hover:translate-z-5">Key Achievements</h4>
            <ul className="space-y-3">
              {mayor.achievements.map((achievement: string, i: number) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-start transform-gpu transition-all duration-300 hover:translate-z-5"
                >
                  <span className="text-blue-600 mr-3 mt-1 transform-gpu transition-all duration-300
                    group-hover:scale-110">•</span>
                  <span className="text-gray-700">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QCHistory; 