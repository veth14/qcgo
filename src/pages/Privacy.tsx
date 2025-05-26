import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('introduction');

  // Reset scroll position when navigating to the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = privacySections.map(section => section.id);
      const scrollPosition = window.scrollY + 200; // Add offset for better trigger point

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const privacySections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: `At QCGO, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this privacy policy carefully. By using our services, you agree to the collection and use of information in accordance with this policy.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      subsections: [
        {
          title: 'Personal Information',
          content: 'Name, email address, phone number, and other contact information when you create an account or contact us.'
        },
        {
          title: 'Usage Information',
          content: 'Browser type, IP address, device information, and interaction with our services.'
        },
        {
          title: 'Location Data',
          content: 'Geographic location to provide location-based services and recommendations.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      content: `We use the collected information to:
      • Provide, maintain, and improve our services
      • Process your bookings and transactions
      • Send you updates and marketing communications
      • Analyze usage patterns and optimize user experience
      • Protect against fraudulent or unauthorized activity`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      content: `We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      content: `We may share your information with:
      • Service providers and business partners
      • Law enforcement when required by law
      • Other users with your consent
      We do not sell your personal information to third parties.`
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      content: `You have the right to:
      • Access your personal information
      • Correct inaccurate information
      • Request deletion of your information
      • Object to processing of your information
      • Withdraw consent at any time`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header Section */}
      <div className="relative overflow-hidden bg-white py-16 sm:py-24">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl -z-10 transform-gpu">
            <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-indigo-200/25 to-purple-200/25 opacity-40" 
                 style={{ clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" }} />
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
        </div>

        {/* Header Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              className="relative inline-flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-x-2 -inset-y-4">
                <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter">
                  <div className="aspect-[108/32] w-[8.25rem] bg-gradient-to-r from-indigo-400/50 to-purple-400/50" />
                </div>
              </div>
              <span className="relative bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent text-lg font-medium">
                Privacy Policy
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your Privacy <span className="relative">
                <span className="relative inline-block text-indigo-600">
                  Matters
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </span>
              </span>
            </motion.h1>

            <motion.p 
              className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We are committed to protecting your personal information and being transparent about how we use it.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Navigation Sidebar */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24" style={{ height: 'fit-content' }}>
                  <nav className="space-y-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900">On this page</h3>
                    </div>
                    <div className="p-4">
                      {privacySections.map((section) => (
                        <motion.button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                            activeSection === section.id
                              ? 'bg-indigo-50 text-indigo-600'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="flex-shrink-0">{section.icon}</span>
                          <span className="text-left font-medium">{section.title}</span>
                        </motion.button>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-9">
                <div className="space-y-16">
                  {privacySections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="scroll-mt-24"
                    >
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600">
                              {section.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                          </div>

                          {section.subsections ? (
                            <div className="grid gap-6 md:grid-cols-2">
                              {section.subsections.map((subsection, subIndex) => (
                                <motion.div
                                  key={subIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: (index * 0.1) + (subIndex * 0.1) }}
                                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-indigo-100 transition-colors duration-200"
                                >
                                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{subsection.title}</h3>
                                  <p className="text-gray-600 leading-relaxed">{subsection.content}</p>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            <div className="prose prose-indigo max-w-none">
                              {section.content.split('•').map((point, i) => (
                                point.trim() && (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className={`flex items-start gap-3 ${i > 0 ? 'mt-4' : ''}`}
                                  >
                                    {i > 0 && (
                                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-200" />
                                    )}
                                    <p className={`text-gray-600 leading-relaxed ${i === 0 ? 'text-lg' : ''}`}>
                                      {point.trim()}
                                    </p>
                                  </motion.div>
                                )
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Last Updated Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                  >
                    <p className="text-sm text-gray-500">
                      Last updated: {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </motion.div>

                  {/* Contact Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 rounded-2xl shadow-sm p-8 border border-indigo-100/50"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-4">
                          Have Questions About Your Privacy?
                        </h2>
                        <p className="text-gray-600 mb-6">
                          If you have any questions about this Privacy Policy or our practices, please contact our Privacy Team.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg shadow-sm text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:shadow transition-all duration-200"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              Contact Privacy Team
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 