import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaWifi, FaBus, FaIdCard } from 'react-icons/fa';

const AboutQC: React.FC = () => {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundY = useTransform(
    scrollY,
    [0, viewportHeight],
    ['0%', '50%']
  );

  const contentY = useTransform(
    scrollY,
    [0, viewportHeight],
    ['0%', '-30%']
  );

  const backgroundScale = useTransform(
    scrollY,
    [0, viewportHeight],
    [1, 1.2]
  );

  const backgroundOpacity = useTransform(
    scrollY,
    [0, viewportHeight * 0.5],
    [1, 0.5]
  );

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 will-change-transform"
          style={{ y: backgroundY }}
        >
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/AboutQC/quezoncityskyimage.jpg")',
              scale: backgroundScale,
              opacity: backgroundOpacity,
              transformOrigin: 'center center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/90" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-slide" />
        </motion.div>

        {/* Hero Content with Reverse Parallax */}
        <motion.div 
          className="relative h-full will-change-transform"
          style={{ y: contentY }}
        >
          {/* Enhanced Navigation Bar */}
          <div className="relative z-10">
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="container mx-auto px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="/logo.png" 
                  alt="QCGO Logo" 
                  className="h-14 drop-shadow-lg" 
                />
                <nav className="hidden md:flex space-x-10">
                  {['HOME', 'MORE', 'TRAVEL GUIDE'].map((item, index) => (
                    <motion.a
                      key={item}
                      href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-white hover:text-blue-200 transition-colors duration-200 
                        relative text-sm tracking-wider font-medium"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {item}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Hero Content */}
          <div className="relative h-[calc(100vh-80px)] flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="space-y-12"
                >
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-8xl font-bold text-white leading-tight tracking-tight"
                  >
                    The Story of<br />
                    <span className="bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-transparent bg-clip-text drop-shadow-lg">
                      Quezon City
                    </span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl text-gray-200 leading-relaxed max-w-2xl font-light tracking-wide"
                  >
                    From a vision of progress to Metro Manila's largest city, discover the rich history 
                    and vibrant present of the city that bears President Manuel L. Quezon's legacy.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,71,171,0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      href="#explore"
                      className="inline-flex items-center px-12 py-5 bg-[#0047AB] text-white rounded-lg font-semibold 
                        transition-all duration-300 shadow-lg hover:bg-[#003380] group relative overflow-hidden"
                    >
                      <span className="relative z-10 text-lg tracking-wide">Explore Our Story</span>
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
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-white flex flex-col items-center cursor-pointer group"
              onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm font-medium tracking-widest uppercase mb-3 text-gray-400 
                group-hover:text-white transition-colors duration-300">Discover More</span>
              <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent 
                group-hover:h-16 transition-all duration-300"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Quick Facts Section */}
      <div id="explore" className="relative py-32 bg-gradient-to-r from-[#0047AB] to-[#003380] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 animate-slide-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { 
                number: "1939", 
                label: "YEAR FOUNDED",
                prefix: "EST.",
                prefixStyle: "absolute -top-6 left-0 text-blue-200 text-sm tracking-wider"
              },
              { 
                number: "161.11", 
                label: "SQUARE KILOMETERS",
                suffix: "km²",
                wrapperClass: "relative inline-flex items-baseline",
                suffixStyle: "ml-2 text-blue-200 text-sm font-medium"
              },
              { 
                number: "2.96", 
                label: "POPULATION",
                suffix: "M",
                wrapperClass: "relative inline-flex items-baseline",
                suffixStyle: "text-white text-5xl font-bold ml-1"
              },
              { 
                number: "142", 
                label: "BARANGAYS",
                suffix: "Districts",
                wrapperClass: "flex flex-col items-center",
                suffixStyle: "text-blue-200 text-sm tracking-wider mt-2"
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
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-12 h-[2px] bg-white/30 mx-auto mb-6 group-hover:w-20 transition-all duration-300"></div>
                  <div className="flex-grow flex flex-col items-center justify-center">
                    <div className="relative">
                      {stat.prefix && (
                        <span className={stat.prefixStyle}>
                          {stat.prefix}
                        </span>
                      )}
                      <div className={stat.wrapperClass || "relative inline-block"}>
                        <span className="text-6xl font-bold text-white tracking-tight">
                          {stat.number}
                        </span>
                        {stat.suffix && (
                          <span className={stat.suffixStyle}>
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                    </div>
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

      {/* Enhanced City Services Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">City Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the digital services and programs available to Quezon City residents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaWifi className="w-8 h-8" />,
                title: "QC FREE WIFI HOT SPOT",
                description: "Access high-speed internet across strategic locations in Quezon City",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <FaBus className="w-8 h-8" />,
                title: "QC BUS SERVICE ROUTES",
                description: "Efficient and convenient transportation across the city",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <FaIdCard className="w-8 h-8" />,
                title: "QC ID PERKS/PROMOS",
                description: "Exclusive benefits and discounts for QC ID holders",
                color: "from-purple-500 to-purple-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 transform -skew-y-6 group-hover:skew-y-0 transition-transform duration-500"></div>
                <div className="relative p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                    bg-gradient-to-r ${service.color} text-white transform 
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0047AB] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced History Section */}
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 rotate-180"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block py-4"
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#0047AB] to-[#0066FF] text-transparent bg-clip-text leading-[1.4] px-4">
                A Legacy of Progress
              </h2>
            </motion.div>
            <p className="text-xl text-gray-600 leading-relaxed mt-8 px-4">
              Quezon City's story began with a vision for a new capital, evolved through historical 
              milestones, and continues to thrive as a center of culture and innovation.
            </p>
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line with Animation */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"
              />

              {/* Timeline Items */}
              <div className="space-y-32">
                <TimelineItem 
                  year="1939"
                  title="City Foundation"
                  description="President Manuel L. Quezon envisioned a new capital city that would address Manila's overcrowding. Commonwealth Act No. 502 established Quezon City."
                  image="public/aboutqc/cityfoundation.jpg"
                  isLeft={true}
                />

                <TimelineItem 
                  year="1948"
                  title="Philippine Capital"
                  description="Quezon City was officially declared as the national capital of the Philippines, marking a significant milestone in its history."
                  image="public/aboutqc/capitalofthephilippines.jpg"
                  isLeft={false}
                />

                <TimelineItem 
                  year="1976"
                  title="Metro Manila Integration"
                  description="The city became part of the newly created Metro Manila region, contributing to its role as a major urban center."
                  image="public/aboutqc/metromanilaintegration.jpeg"
                  isLeft={true}
                />

                <TimelineItem 
                  year="Present"
                  title="Modern Development"
                  description="Today, Quezon City stands as a testament to urban progress, being the most populous city in Metro Manila and a hub for business, education, and culture."
                  image="public/aboutqc/moderndevelopment.png"
                  isLeft={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        {/* Enhanced City Leadership Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50/30"></div>
            </div>

            <div className="relative p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">City Mayor</span>
                  <h2 className="text-4xl font-bold text-gray-900 mt-2">HON. MAYOR JOY BELMONTE</h2>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 text-gray-600"
                >
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    Ms. Josefina "Joy" Belmonte is currently serving as the 11th elected mayor of Quezon City since 2019.
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    A member of the local Serbisyo sa Bayan Party, Belmonte previously served as the vice mayor of Quezon City from 2010-2019 under her predecessor, Herbert Bautista.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col gap-3 mt-6"
                >
                  {[
                    { icon: "🌐", text: "https://quezoncity.gov.ph/", href: "https://quezoncity.gov.ph/" },
                    { icon: "✉️", text: "mayor@quezoncity.gov.ph", href: "mailto:mayor@quezoncity.gov.ph" }
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ x: 5 }}
                      href={item.href}
                      className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <span className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg mr-3">
                        {item.icon}
                      </span>
                      <span className="text-sm">{item.text}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:w-1/2 relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300"></div>
                <img 
                  src="public/aboutqc/JoyBelmonte.png" 
                  alt="Mayor Joy Belmonte"
                  className="relative w-full rounded-xl shadow-lg transform -rotate-2 group-hover:-rotate-1 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Programs Section */}
        <div className="relative mb-32 py-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-white"></div>
          </div>
          
          <div className="container mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-[#0047AB] mb-6 leading-tight tracking-normal">
                QUEZON CITY PROGRAMS
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Empowering citizens through innovative services and sustainable development initiatives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "CIVIL REGISTRY DIGITALIZATION",
                  image: "/AboutQC/civilRegistry.png",
                  description: "Modern digital solutions for civil registry services"
                },
                {
                  title: "QCITIZEN ID",
                  image: "/AboutQC/qcitizenid.png",
                  description: "Your key to exclusive city services and benefits"
                },
                {
                  title: "QCITY BUS PROGRAM",
                  image: "/AboutQC/qcbusprogram.png",
                  description: "Efficient public transportation for all citizens"
                },
                {
                  title: "BUSINESS SUPPORT",
                  image: "/AboutQC/qcbusinesssupport.png",
                  description: "Empowering local businesses to thrive"
                },
                {
                  title: "CITY FIRST",
                  image: "/AboutQC/cityfirst.png",
                  description: "Prioritizing citizen needs and services"
                },
                {
                  title: "KABATAANG QC VOLUNTEER PROGRAM",
                  image: "/AboutQC/kabataanqc.png",
                  description: "Engaging youth in community development"
                }
              ].map((program, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="w-12 h-[2px] bg-[#0047AB] mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0047AB] transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mt-16"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://quezoncity.gov.ph/programs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#0047AB] text-white rounded-lg
                  transition-all duration-300 text-lg font-semibold hover:bg-[#003380] shadow-lg hover:shadow-xl
                  hover:shadow-blue-500/25"
              >
                View All Programs
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* QCitizen Guides Section */}
        <div className="mb-32 bg-gray-50/30 py-15">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-[2.5rem] font-bold text-[#0047AB] mb-6">
                QCITIZEN GUIDES
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Access comprehensive guides and resources for Quezon City services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  title: "GUIDES FOR RESIDENTS",
                  description: "Essential information and services for QC residents",
                  link: "https://quezoncity.gov.ph/qcitizen-guides/#guides-for-residents",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.586l6-6z"/>
                    </svg>
                  )
                },
                {
                  title: "BUSINESSES AND ENTREPRENEURS",
                  description: "Registration, permits, and business resources",
                  link: "https://quezoncity.gov.ph/qcitizen-guides/#businesses-and-entrepreneurs",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h16v6H4z"/>
                    </svg>
                  )
                },
                {
                  title: "SICKNESS AND EMERGENCY",
                  description: "Healthcare facilities and emergency services",
                  link: "https://quezoncity.gov.ph/qcitizen-guides/#sickness-and-emergency",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"/>
                    </svg>
                  )
                },
                {
                  title: "SOCIAL AND WELFARE SERVICES",
                  description: "Community support and assistance programs",
                  link: "https://quezoncity.gov.ph/qcitizen-guides/#social-and-welfare-services-assistance",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"/>
                    </svg>
                  )
                },
                {
                  title: "PAYMENTS",
                  description: "Tax payments and financial transactions",
                  link: "https://quezoncity.gov.ph/qcitizen-guides/#payments",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"/>
                    </svg>
                  )
                },
                {
                  title: "PLACES OF INTEREST",
                  description: "Discover key locations and facilities",
                  link: "https://quezoncity.gov.ph/qcitizen-guides/#places-of-interest",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  )
                }
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <a 
                    href={guide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-8 h-[180px] w-full transition-all duration-300
                      border border-gray-200 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_8px_16px_-6px_rgba(0,71,171,0.2)] hover:border-gray-300
                      hover:translate-y-[-2px] cursor-pointer relative"
                  >
                    <div className="flex h-full items-start">
                      {/* Icon Container - Fixed size */}
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50/80 text-[#0047AB]">
                        {guide.icon}
                      </div>

                      {/* Content Container - Fixed margins and padding */}
                      <div className="flex-1 min-w-0 ml-6">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900 pr-8">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 pr-8">
                          {guide.description}
                        </p>
                      </div>

                      {/* Arrow Container - Fixed position */}
                      <div className="absolute right-8 top-[50%] -translate-y-1/2">
                        <svg 
                          className="w-5 h-5 text-[#0047AB] transform transition-transform duration-300 group-hover:translate-x-1" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a 
                href="https://quezoncity.gov.ph/qcitizen-guides/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-[#0047AB] text-white rounded-lg
                  transition-all duration-300 hover:bg-[#003380] shadow-sm hover:shadow-md"
              >
                <span className="mr-2">View All Guides</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* QC Public Servants */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0047AB] to-[#0066FF] rounded-2xl p-12 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-white mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-4">QC PUBLIC SERVANTS</h2>
                <p className="text-lg text-blue-100">
                  Meet our dedicated public servants working towards excellence in service for Quezon City
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col sm:flex-row justify-end gap-6">
                <div className="text-center">
                  <img 
                    src="public/aboutqc/publicservant1.png" 
                    alt="Hon. Alfred Vargas" 
                    className="w-24 h-24 rounded-full border-4 border-white/90 shadow-lg mx-auto mb-2" 
                  />
                  <p className="text-white font-medium">Hon. Alfred Vargas</p>
                </div>
                <div className="text-center">
                  <img 
                    src="public/aboutqc/publicservant2.png" 
                    alt="Hon. Vito S. Generoso" 
                    className="w-24 h-24 rounded-full border-4 border-white/90 shadow-lg mx-auto mb-2" 
                  />
                  <p className="text-white font-medium">Hon. Vito S. Generoso</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://quezoncity.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-[#0047AB] rounded-lg 
                  font-semibold transition-all duration-200 hover:bg-blue-50"
              >
                Learn More About Our Public Servants
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Timeline Item Component
const TimelineItem: React.FC<{
  year: string;
  title: string;
  description: string;
  image: string;
  isLeft: boolean;
}> = ({ year, title, description, image, isLeft }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="w-1/2 px-8">
        <div className={`${!isLeft && 'text-right'} space-y-4`}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
          >
            {year}
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-gray-900 mt-4 mb-3"
          >
            {title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full border-4 border-white shadow-lg z-10"
      />
      <div className="w-1/2 px-8">
        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 group"
        >
          <div className="relative overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutQC; 