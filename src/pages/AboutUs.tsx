import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub, FaUsers, FaMapMarkedAlt, FaHeadset, FaChevronDown, FaInfoCircle, FaGraduationCap, FaLaptopCode, FaCode, FaTrophy, FaArrowLeft, FaGlobe } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  const location = useLocation();
  const [showInfo, setShowInfo] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset scroll position when navigating to the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const developer = {
    name: "Ian Angelo Valmores",
    role: "Lead Developer & 3rd Year BSIT Student",
    image: "/iandeveloper.jpg",
    description: "A passionate 3rd year BSIT student at Quezon City University, focusing on web development and currently developing QCGO to enhance tourism technology in Quezon City.",
    social: {
      facebook: "https://facebook.com/vianangelo14",
      instagram: "https://instagram.com/itsss.iannn14",
      github: "https://github.com/veth14",
      portfolio: "https://portfolioofvalmores.netlify.app"
    },
    details: {
      education: {
        degree: "Bachelor of Science in Information Technology",
        year: "3rd Year Student",
        school: "Quezon City University",
        period: "2023 - Present",
        achievements: [
          "Consistent Dean's Lister with GPA above 1.5",
          "Active participant in academic competitions",
          "Hackathon Participant contributing to a unique solution."
        ]
      },
      skills: {
        technical: [
          "HTML5 & CSS3",
          "JavaScript/TypeScript",
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "Git & GitHub"
        ],
        soft: [
          "Problem Solving",
          "Team Collaboration",
          "Time Management",
          "Communication"
        ],
        tools: [
          "VS Code",
          "Figma",
          "GitHub Desktop"
        ]
      },
      interests: [
        "Web Development",
        "Frontend Design",
        "UI/UX Design",
        "JavaScript Frameworks",
        "Database Management"
      ],
      projects: [
        {
          name: "QCGO Tourism Platform",
          role: "Lead Developer",
          description: "Developing a modern web application to enhance tourism experience in Quezon City"
        },
        {
          name: "SaleMeate E-commerce Platform",
          role: "Lead Developer",
          description: "Built an e-commerce platform for QCU entrepreneurship students to showcase and sell their products"
        }
      ],
      certifications: [
        "Web Development Fundamentals",
        "JavaScript Essentials",
        "Git & GitHub Basics"
      ]
    }
  };

  const achievements = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="12" cy="8" r="3.5" stroke="white" strokeWidth="1.5" />
          <path d="M5 18.5c0-2.5 2.5-5 7-5s7 2.5 7 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      number: "1000+",
      title: "Active Users",
      description: "Trusted by locals and tourists"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="1.5" />
        </svg>
      ),
      number: "50+",
      title: "Featured Locations",
      description: "Curated destinations"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M4 10c0-1 .6-2 2-2h12c1.4 0 2 1 2 2v4c0 1-.6 2-2 2H6c-1.4 0-2-1-2-2v-4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 10v6M16 10v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      number: "24/7",
      title: "Support",
      description: "Always here to help"
    }
  ];

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 3.5V5m0 14v1.5m-8.5-8.5H5m14 0h1.5m-2.364-6.636l-1.06 1.06m-9.152 9.153l-1.06 1.06m0-11.273l1.06 1.06m9.153 9.153l1.06 1.06" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Innovation",
      description: "Leveraging cutting-edge technology to transform how people discover and experience Quezon City's attractions."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 4c-3 0-5.5 2-5.5 5 0 3 2.5 8 5.5 11 3-3 5.5-8 5.5-11 0-3-2.5-5-5.5-5z" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" 
            fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Local Expertise",
      description: "Deep understanding of Quezon City's culture, history, and hidden gems, curated by locals who know the city best."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 3l7 4v5c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" 
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Reliability",
      description: "Committed to providing accurate, up-to-date information about Quezon City's attractions and experiences."
    }
  ];

  const handleMoreInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hero Section Background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-96 h-96"
        >
          <img src="/images/qc-circle.svg" alt="" className="w-full h-full object-contain" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[90vh] bg-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[linear-gradient(45deg,rgba(11,28,72,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(11,28,72,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 py-20">
          <div className="h-full flex flex-col justify-center items-start max-w-3xl">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-[#0B1C48] text-lg font-medium tracking-wider uppercase border-b-2 border-[#0B1C48]/20 pb-2">About Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-7xl font-bold text-[#0B1C48] leading-tight">
                The Team Behind
                <br />
                <span className="relative">
                  Your Journey
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#0B1C48]/10 -rotate-1"></div>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mb-16"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                We're a dedicated team of innovators and city enthusiasts, committed to transforming 
                how people experience Quezon City. Our passion for technology and local expertise drives 
                us to create meaningful connections between visitors and the vibrant culture of our city.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="grid grid-cols-3 gap-12"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#0B1C48]/5 rounded-lg -rotate-3 transition-transform group-hover:rotate-0"></div>
                <div className="relative bg-white p-6 rounded-lg border border-[#0B1C48]/10">
                  <div className="text-4xl font-bold text-[#0B1C48] mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#0B1C48]/5 rounded-lg -rotate-3 transition-transform group-hover:rotate-0"></div>
                <div className="relative bg-white p-6 rounded-lg border border-[#0B1C48]/10">
                  <div className="text-4xl font-bold text-[#0B1C48] mb-2">100%</div>
                  <div className="text-gray-600">Dedication</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#0B1C48]/5 rounded-lg -rotate-3 transition-transform group-hover:rotate-0"></div>
                <div className="relative bg-white p-6 rounded-lg border border-[#0B1C48]/10">
                  <div className="text-4xl font-bold text-[#0B1C48] mb-2">24/7</div>
                  <div className="text-gray-600">Commitment</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[45%] h-[80%] hidden lg:block"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[#0B1C48]/5 rounded-l-[100px]"></div>
              <div className="absolute inset-8 bg-[#0B1C48]/5 rounded-l-[80px]"></div>
              <div className="absolute inset-16 bg-[#0B1C48]/5 rounded-l-[60px]"></div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C48] to-blue-600 rounded-[2.5rem] opacity-50 blur-2xl transition-all duration-300 group-hover:opacity-70" />
                <div className="relative bg-white rounded-[2rem] p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-gradient-to-br from-[#0B1C48] to-blue-500 rounded-2xl rotate-12 opacity-50 group-hover:rotate-45 transition-transform duration-300" />
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0B1C48] to-blue-600 rounded-2xl flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </motion.div>
                    <h2 className="text-4xl font-bold text-[#0B1C48] mb-6">Our Mission</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#0B1C48] to-blue-600 rounded-full mb-8" />
                    <p className="text-xl text-gray-600 leading-relaxed">
                      To revolutionize how people discover and experience Quezon City by providing an innovative, user-friendly platform that seamlessly connects visitors with the city's vibrant culture, hidden gems, and local businesses. We strive to make every exploration meaningful and memorable.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C48] to-blue-600 rounded-[2.5rem] opacity-50 blur-2xl transition-all duration-300 group-hover:opacity-70" />
                <div className="relative bg-white rounded-[2rem] p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-gradient-to-br from-[#0B1C48] to-blue-500 rounded-2xl -rotate-12 opacity-50 group-hover:rotate-45 transition-transform duration-300" />
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0B1C48] to-blue-600 rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </motion.div>
                    <h2 className="text-4xl font-bold text-[#0B1C48] mb-6">Our Vision</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#0B1C48] to-blue-600 rounded-full mb-8" />
                    <p className="text-xl text-gray-600 leading-relaxed">
                      To be the leading digital platform that transforms Quezon City tourism, creating a dynamic ecosystem where technology enhances urban exploration, fosters community connections, and showcases the city's unique identity to the world. We envision a future where every visitor becomes a part of our city's story.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0B1C48]/[0.02] mix-blend-multiply"></div>
        <div className="absolute inset-0">
          <div className="absolute w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2% 50%, rgba(11,28,72,0.04) 0%, transparent 25%), radial-gradient(circle at 98% 50%, rgba(11,28,72,0.04) 0%, transparent 25%)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            {/* Section Header */}
            <div className="flex flex-col items-center relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-6"
              >
                <span className="absolute -inset-3 bg-gradient-to-r from-[#0B1C48]/20 to-blue-500/20 blur-lg opacity-50"></span>
                <span className="relative inline-block px-6 py-2 text-[#0B1C48] text-lg font-semibold tracking-wider uppercase bg-white border border-[#0B1C48]/10 rounded-full shadow-md">
                  Our Impact
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0B1C48] to-[#0B1C48]"
              >
                Making a Difference in
                <br />
                Our Community
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-2xl text-center text-gray-600 text-lg leading-relaxed"
              >
                Through dedication and innovation, we're creating positive change in how people connect with and experience Quezon City
              </motion.p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-[2rem] p-12 h-full">
                  {/* Hover Effects */}
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48] to-blue-600 opacity-[0.03] rounded-[2rem]"></div>
                    <div className="absolute inset-[1px] bg-white rounded-[calc(2rem-1px)]"></div>
                  </div>

                  {/* Border Gradient */}
                  <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-br from-[#0B1C48]/20 via-blue-500/20 to-[#0B1C48]/20">
                    <div className="absolute inset-0 bg-white rounded-[calc(2rem-1px)]"></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-8 relative">
                      <div className="w-20 h-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48] to-blue-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48] to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                          <div className="w-12 h-12 relative">
                            {/* Icon Background Glow */}
                            <div className="absolute inset-0 bg-white/10 rounded-xl blur-sm"></div>
                            {/* Icon Container */}
                            <div className="relative w-full h-full">
                              {item.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Number */}
                    <div className="relative mb-4 group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                      <span className="text-7xl font-bold bg-gradient-to-r from-[#0B1C48] to-blue-600 bg-clip-text text-transparent">
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#0B1C48] mb-4 group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                      {item.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1">
                      <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#0B1C48] to-blue-600 transition-all duration-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(11,28,72,0.03) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(11,28,72,0.03) 0%, transparent 50%)'
          }}></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-24">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0B1C48]/20 via-blue-500/20 to-[#0B1C48]/20 blur-lg opacity-50 rounded-full"></div>
                <span className="relative inline-flex items-center gap-3 px-8 py-3 text-[#0B1C48] text-lg font-semibold tracking-wider uppercase bg-white border border-[#0B1C48]/10 rounded-full shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#0B1C48]"></span>
                  Why Choose QCGO?
                  <span className="w-2 h-2 rounded-full bg-[#0B1C48]"></span>
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-[#0B1C48] to-blue-600 bg-clip-text text-transparent">
                  Experience the Future of
                  <br />
                  City Exploration
                </span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-2xl text-gray-600 text-lg leading-relaxed"
              >
                Discover why QCGO is the preferred choice for exploring Quezon City's vibrant culture and hidden gems
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-[2rem] p-12 h-full">
                    {/* Hover Effects */}
                    <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48] to-blue-600 opacity-[0.03] rounded-[2rem]"></div>
                      <div className="absolute inset-[1px] bg-white rounded-[calc(2rem-1px)]"></div>
                    </div>

                    {/* Border Gradient */}
                    <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-br from-[#0B1C48]/20 via-blue-500/20 to-[#0B1C48]/20">
                      <div className="absolute inset-0 bg-white rounded-[calc(2rem-1px)]"></div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      {/* Icon Container */}
                      <div className="mb-8 relative">
                        <div className="w-24 h-24 relative">
                          {/* Icon Background Effects */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48] to-blue-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48] to-blue-600 rounded-2xl"></div>
                          
                          {/* Icon Wrapper */}
                          <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                            <div className="w-14 h-14 relative">
                              {/* Icon Glow */}
                              <div className="absolute inset-0 bg-white/20 rounded-xl blur-md"></div>
                              {/* Icon */}
                              <div className="relative w-full h-full text-white">
                                {item.icon}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-[#0B1C48] mb-4 group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                        {item.description}
                      </p>

                      {/* Bottom Line Animation */}
                      <div className="absolute bottom-0 left-0 right-0 h-1">
                        <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#0B1C48] to-blue-600 transition-all duration-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Card Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0B1C48]/10 via-blue-500/10 to-[#0B1C48]/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(11,28,72,0.03) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(11,28,72,0.03) 0%, transparent 50%)'
          }}></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]"></div>
          {/* Decorative Circles */}
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#0B1C48]/5 to-blue-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-[#0B1C48]/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Enhanced Section Header */}
            <div className="flex flex-col items-center text-center mb-24">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0B1C48]/20 via-blue-500/20 to-[#0B1C48]/20 blur-lg opacity-50 rounded-full"></div>
                <span className="relative inline-flex items-center gap-3 px-8 py-3 text-[#0B1C48] text-lg font-semibold tracking-wider uppercase bg-white border border-[#0B1C48]/10 rounded-full shadow-md">
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-[#0B1C48]"
                  ></motion.span>
                  Trusted Partners
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="w-2 h-2 rounded-full bg-[#0B1C48]"
                  ></motion.span>
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mb-6"
              >
                <h2 className="text-6xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-[#0B1C48] to-blue-600 bg-clip-text text-transparent">
                    In Partnership With
                  </span>
                  {/* Full Width Underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -bottom-4 left-0 right-0 h-1 origin-left bg-gradient-to-r from-[#0B1C48] to-blue-600"
                  ></motion.div>
                </h2>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-2xl text-gray-600 text-lg leading-relaxed"
              >
                Collaborating with prestigious institutions to deliver excellence in city exploration
              </motion.p>
            </div>

            {/* Enhanced Partner Cards Grid */}
            <div className="grid grid-cols-2 gap-16 items-center relative">
              {/* Connecting Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-[#0B1C48]/20 via-blue-500/20 to-[#0B1C48]/20"
              ></motion.div>

              {/* QCU Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-[2rem] p-12 h-full">
                  {/* Enhanced Hover Effects */}
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48] to-blue-600 opacity-[0.03] rounded-[2rem]"></div>
                    <div className="absolute inset-[1px] bg-white rounded-[calc(2rem-1px)]"></div>
                  </div>

                  {/* Enhanced Border Gradient */}
                  <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-br from-[#0B1C48]/20 via-blue-500/20 to-[#0B1C48]/20">
                    <div className="absolute inset-0 bg-white rounded-[calc(2rem-1px)]"></div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative flex flex-col items-center">
                    {/* Logo Container with Enhanced Effects */}
                    <div className="w-[300px] h-[300px] relative mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-full h-full rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500"
                      >
                        {/* Logo Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48]/5 to-blue-500/5"></div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0B1C48]/10 to-blue-500/10"></div>
                        
                        {/* Logo Image */}
                        <div className="relative w-full h-full p-8 flex items-center justify-center">
                          <motion.img 
                            src="/QCU_Logo_2019.png" 
                            alt="QCU Logo" 
                            className="w-full h-full object-contain filter drop-shadow-lg"
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced Text Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-center"
                    >
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-[#0B1C48] to-blue-600 bg-clip-text text-transparent mb-4">
                        Quezon City University
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        A premier institution of higher learning committed to excellence and innovation
                      </p>
                    </motion.div>

                    {/* Enhanced Bottom Line Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1">
                      <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#0B1C48] to-blue-600 transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Card Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0B1C48]/10 via-blue-500/10 to-[#0B1C48]/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </motion.div>

              {/* BSIT Card - Similar enhancements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-[2rem] p-12 h-full">
                  {/* Enhanced Hover Effects */}
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48] to-blue-600 opacity-[0.03] rounded-[2rem]"></div>
                    <div className="absolute inset-[1px] bg-white rounded-[calc(2rem-1px)]"></div>
                  </div>

                  {/* Enhanced Border Gradient */}
                  <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-br from-[#0B1C48]/20 via-blue-500/20 to-[#0B1C48]/20">
                    <div className="absolute inset-0 bg-white rounded-[calc(2rem-1px)]"></div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative flex flex-col items-center">
                    {/* Logo Container with Enhanced Effects */}
                    <div className="w-[300px] h-[300px] relative mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-full h-full rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-500"
                      >
                        {/* Logo Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48]/5 to-blue-500/5"></div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0B1C48]/10 to-blue-500/10"></div>
                        
                        {/* Logo Image */}
                        <div className="relative w-full h-full p-8 flex items-center justify-center">
                          <motion.img 
                            src="/bsitlogo.png" 
                            alt="BSIT Logo" 
                            className="w-full h-full object-contain filter drop-shadow-lg"
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced Text Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-center"
                    >
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-[#0B1C48] to-blue-600 bg-clip-text text-transparent mb-4">
                        College of Computer Studies
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Nurturing future tech leaders through innovative education and research
                      </p>
                    </motion.div>

                    {/* Enhanced Bottom Line Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1">
                      <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#0B1C48] to-blue-600 transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Card Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0B1C48]/10 via-blue-500/10 to-[#0B1C48]/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </motion.div>
            </div>

            {/* Enhanced Decorative Bottom Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-24 h-px bg-gradient-to-r from-transparent via-[#0B1C48]/20 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Refined Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white">
          {/* Subtle Animated Gradient */}
          <motion.div
            animate={{
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(11,28,72,0.03) 0%, transparent 70%),
                radial-gradient(circle at 80% 80%, rgba(59,130,246,0.03) 0%, transparent 70%)
              `
            }}
          />

          {/* Refined Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(11,28,72,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11,28,72,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header with Improved Typography */}
          <div className="max-w-7xl mx-auto mb-24">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-6"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0B1C48]/20 via-blue-500/20 to-[#0B1C48]/20 blur-lg opacity-50 rounded-full"></div>
                <span className="relative inline-flex items-center gap-3 px-8 py-3 text-[#0B1C48] text-base font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-sm border border-[#0B1C48]/10 rounded-full shadow-md">
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#0B1C48]"
                  />
                  Meet Our Team
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-[#0B1C48]"
                  />
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              >
                <span className="bg-gradient-to-r from-[#0B1C48] to-blue-600 bg-clip-text text-transparent">
                  The Minds Behind QCGO
                </span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed"
              >
                Meet the passionate individual driving innovation in city exploration technology
              </motion.p>
            </div>
          </div>

          {/* Team Member Card */}
          <div className="max-w-5xl mx-auto perspective-1000">
            <div 
              className={`relative transition-transform duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front of Card */}
              <div className="relative backface-hidden">
                <div className="relative bg-gradient-to-br from-white/90 via-white/95 to-white/90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/20">
                  <div className="grid md:grid-cols-12 gap-0">
                    {/* Image Column */}
                    <div className="md:col-span-4 relative">
                      <div className="relative h-[320px] md:h-full flex items-center justify-center p-8">
                        {/* Logo Background Effects */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-[#0B1C48]/20 to-blue-500/20 blur-xl"></div>
                        </div>
                        
                        {/* Rotating Border Effect */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute w-72 h-72 rounded-full border-2 border-dashed border-[#0B1C48]/30"
                        ></motion.div>

                        {/* Logo Container */}
                        <motion.div
                          whileHover={{ scale: 1.02, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white shadow-xl bg-white"
                          style={{
                            aspectRatio: '1/1'
                          }}
                        >
                          {/* Image Overlay Effects - Reduced opacity */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48]/10 to-blue-500/10 mix-blend-overlay rounded-full"></div>
                          
                          {/* Profile Image */}
                          <div className="w-full h-full rounded-full overflow-hidden" style={{ aspectRatio: '1/1' }}>
                            <img
                              src={developer.image}
                              alt={developer.name}
                              className="w-full h-full object-cover"
                              style={{
                                aspectRatio: '1/1',
                                objectPosition: 'center 90%',
                                transform: 'scale(1.2)'
                              }}
                            />
                          </div>
                          
                          {/* Shine Effect - Reduced opacity */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rotate-45 rounded-full"></div>
                          
                          {/* Bottom Gradient - Reduced opacity and size */}
                          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0B1C48]/60 via-[#0B1C48]/20 to-transparent rounded-full"></div>
                        </motion.div>

                        {/* Decorative Dots */}
                        <div className="absolute inset-0">
                          <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-[#0B1C48]/50"></div>
                          <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-[#0B1C48]/50"></div>
                          <div className="absolute bottom-12 left-12 w-2 h-2 rounded-full bg-[#0B1C48]/50"></div>
                          <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-[#0B1C48]/50"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-8 p-8 flex flex-col justify-center relative">
                      <div className="space-y-4">
                        {/* Role Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#0B1C48] to-blue-600 text-white text-sm font-medium tracking-wide shadow-md">
                          {developer.role}
                        </div>

                        {/* Name */}
                        <h3 className="text-2xl font-bold leading-tight tracking-tight">
                          <span className="bg-gradient-to-r from-[#0B1C48] to-blue-600 bg-clip-text text-transparent">
                            {developer.name}
                          </span>
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {developer.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-2">
                          <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={developer.social.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#0B1C48] to-blue-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
                          >
                            <FaGlobe className="w-4 h-4" />
                            <span className="font-medium">Portfolio</span>
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={developer.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-black text-sm"
                          >
                            <FaGithub className="w-4 h-4" />
                            <span className="font-medium">GitHub</span>
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={developer.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group flex items-center gap-2 px-3 py-1.5 bg-[#1877F2] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-[#0d6adf] text-sm"
                          >
                            <FaFacebook className="w-4 h-4" />
                            <span className="font-medium">Facebook</span>
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={developer.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:opacity-90 text-sm"
                          >
                            <FaInstagram className="w-4 h-4" />
                            <span className="font-medium">Instagram</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="relative h-full bg-gradient-to-br from-white/90 via-white/95 to-white/90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C48]/5 via-transparent to-blue-500/5"></div>
                  
                  <div className="relative z-10 p-6 h-full overflow-y-auto">
                    <div className="grid gap-4 pb-16">
                      {/* Education Section */}
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-md">
                        <h3 className="text-lg font-bold text-[#0B1C48] mb-3 flex items-center gap-2">
                          <div className="p-1.5 bg-[#0B1C48]/10 rounded-lg">
                            <FaGraduationCap className="w-4 h-4 text-[#0B1C48]" />
                          </div>
                          Education
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-gray-700 font-semibold">{developer.details.education.degree}</p>
                            <p className="text-[#0B1C48] font-medium text-sm">{developer.details.education.year}</p>
                            <p className="text-gray-600 text-sm">{developer.details.education.school}</p>
                            <p className="text-gray-500 text-sm">{developer.details.education.period}</p>
                          </div>
                          <div className="pt-2">
                            <p className="text-sm font-medium text-[#0B1C48] mb-1">Academic Achievements:</p>
                            <ul className="space-y-1">
                              {developer.details.education.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                  <div className="mt-1.5">
                                    <div className="w-1 h-1 rounded-full bg-[#0B1C48]"></div>
                                  </div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Skills Section */}
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-md">
                        <h3 className="text-lg font-bold text-[#0B1C48] mb-3 flex items-center gap-2">
                          <div className="p-1.5 bg-[#0B1C48]/10 rounded-lg">
                            <FaLaptopCode className="w-4 h-4 text-[#0B1C48]" />
                          </div>
                          Skills
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-[#0B1C48] mb-1">Technical Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {developer.details.skills.technical.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gradient-to-r from-[#0B1C48]/10 to-blue-500/10 rounded-md text-[#0B1C48] text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#0B1C48] mb-1">Soft Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {developer.details.skills.soft.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gradient-to-r from-[#0B1C48]/10 to-blue-500/10 rounded-md text-[#0B1C48] text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#0B1C48] mb-1">Tools & Technologies:</p>
                            <div className="flex flex-wrap gap-1">
                              {developer.details.skills.tools.map((tool, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gradient-to-r from-[#0B1C48]/10 to-blue-500/10 rounded-md text-[#0B1C48] text-xs font-medium"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Projects Section with updated content */}
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-md">
                        <h3 className="text-lg font-bold text-[#0B1C48] mb-3 flex items-center gap-2">
                          <div className="p-1.5 bg-[#0B1C48]/10 rounded-lg">
                            <FaCode className="w-4 h-4 text-[#0B1C48]" />
                          </div>
                          Projects
                        </h3>
                        <div className="space-y-3">
                          {developer.details.projects.map((project, index) => (
                            <div key={index} className="space-y-1 pb-2 border-b border-[#0B1C48]/10 last:border-0">
                              <h4 className="font-semibold text-gray-700">{project.name}</h4>
                              <p className="text-sm text-[#0B1C48]">{project.role}</p>
                              <p className="text-sm text-gray-600">{project.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Certifications Section */}
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-md">
                        <h3 className="text-lg font-bold text-[#0B1C48] mb-3 flex items-center gap-2">
                          <div className="p-1.5 bg-[#0B1C48]/10 rounded-lg">
                            <FaTrophy className="w-4 h-4 text-[#0B1C48]" />
                          </div>
                          Certifications
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {developer.details.certifications.map((cert, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gradient-to-r from-[#0B1C48]/10 to-blue-500/10 rounded-md text-[#0B1C48] text-xs font-medium"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Info Modal */}
      <AnimatePresence>
        {showInfo && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseInfo}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl p-6 z-50"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <button
                  onClick={handleCloseInfo}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1C48] mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "HTML & CSS",
                        "JavaScript",
                        "React.js",
                        "Tailwind CSS",
                        "Node.js",
                        "Git & GitHub",
                        "Responsive Design",
                        "UI/UX Basics"
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#0B1C48]/10 rounded-full text-sm text-[#0B1C48]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1C48] mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Web Development",
                        "Frontend Design",
                        "UI/UX Design",
                        "JavaScript Frameworks",
                        "Database Management"
                      ].map((interest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#0B1C48]/10 rounded-full text-sm text-[#0B1C48]"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1C48] mb-2">Education</h3>
                    <div className="ml-7">
                      <p className="text-gray-700 font-semibold">{developer.details.education.degree}</p>
                      <p className="text-[#0B1C48] font-medium text-sm">{developer.details.education.year}</p>
                      <p className="text-gray-600 text-sm">{developer.details.education.school}</p>
                      <p className="text-gray-600 text-sm">{developer.details.education.period}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1C48] mb-2">Achievements</h3>
                    <div className="ml-7">
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Lead Developer of QCGO Tourism Platform</li>
                        <li>Consistent Dean's Lister</li>
                        <li>Active Member of QCU Tech Community</li>
                        <li>Web Development Project Team Lead</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUs; 