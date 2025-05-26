import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionElement extends HTMLElement {
  id: string;
}

const TermsOfUse: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('section-0');
  const [currentSection, setCurrentSection] = useState('section-0');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Debounce helper function
  const debounce = useCallback((func: (...args: any[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Reset scroll position when navigating to the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Track current visible section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('[id^="section-"]'));
      const headerOffset = 130;

      // Find first section that's in view
      const currentVisible = sections.find(section => {
        const rect = section.getBoundingClientRect();
        // Adjust the detection range to be more accurate
        return rect.top <= headerOffset && rect.bottom > headerOffset;
      });

      if (currentVisible) {
        const newSectionId = currentVisible.id;
        setCurrentSection(newSectionId);
        // Also update activeSection to match the current visible section
        setActiveSection(newSectionId);
        setIsScrolling(true);
        // Reset isScrolling after a short delay
        setTimeout(() => setIsScrolling(false), 100);
      }
    };

    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, []);

  // Simple scroll to section function that only updates state on click
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      setCurrentSection(sectionId);
      setIsManualScroll(true);
      
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Reset manual scroll flag after animation completes
      setTimeout(() => setIsManualScroll(false), 1000);
    }
  };

  // Add this scroll function near the top of the component
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    {
      title: 'Introduction',
      content: `Welcome to QCGO. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. These terms and conditions govern your use of our services.`
    },
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using QCGO, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our services.`
    },
    {
      title: 'User Responsibilities',
      content: `When using QCGO, you agree to:
      • Provide accurate and complete information
      • Maintain the security of your account
      • Not use the service for any illegal purposes
      • Respect the rights of other users
      • Not interfere with the proper working of the service`
    },
    {
      title: 'Privacy Policy',
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using QCGO, you agree to our Privacy Policy.`
    },
    {
      title: 'Intellectual Property',
      content: `All content on QCGO, including but not limited to text, graphics, logos, images, and software, is the property of Quezon City University or its content suppliers and is protected by copyright laws.`
    },
    {
      title: 'Service Modifications',
      content: `We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.`
    },
    {
      title: 'Limitation of Liability',
      content: `QCGO and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.`
    },
    {
      title: 'Governing Law',
      content: `These terms shall be governed by and construed in accordance with the laws of the Philippines, without regard to its conflict of law provisions.`
    },
    {
      title: 'Changes to Terms',
      content: `We reserve the right to update or modify these terms at any time without prior notice. Your continued use of QCGO following any changes indicates your acceptance of such changes.`
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 blur-3xl -z-10 transform-gpu">
            <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-purple-200/25 to-indigo-200/25 opacity-40"
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
                QCGO Guidelines
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Terms of <span className="relative">
                <span className="relative inline-block text-indigo-600">
                  Use
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
              Please read these terms carefully before using QCGO services. These guidelines ensure a safe and reliable experience for all users.
            </motion.p>

            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                onClick={() => scrollToElement('terms-content')}
                className="relative overflow-hidden rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ mixBlendMode: 'overlay' }}
                />
                Read Terms
              </motion.button>
              <motion.a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('contact-section');
                }}
                className="group text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                whileHover={{ x: 4 }}
                whileTap={{ x: -2 }}
              >
                Contact Us{' '}
                <motion.span 
                  aria-hidden="true"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div id="terms-content" className="relative -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-12">
              {/* Navigation Sidebar */}
              <div className="hidden md:block md:col-span-3">
                <div className="sticky top-24" style={{ height: 'fit-content' }}>
                  <nav className="relative space-y-2 bg-white rounded-xl shadow-sm p-6">
                    {/* Navigation Header */}
                    <div className="mb-6 pb-4 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900">Table of Contents</h3>
                    </div>

                    {/* Navigation Items Container */}
                    <div className="relative">
                      {/* Navigation Items */}
                      {sections.map((section, index) => {
                        const sectionId = `section-${index}`;
                        const isActive = activeSection === sectionId;
                        const isCurrent = currentSection === sectionId;
                        
                        return (
                          <motion.button
                            key={section.title}
                            onClick={() => scrollToSection(sectionId)}
                            className={`relative group w-full flex items-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 mb-2 ${
                              isActive
                                ? 'bg-gradient-to-r from-indigo-50 to-indigo-50/50 text-indigo-600 shadow-sm'
                                : isCurrent
                                ? 'bg-gray-50/80 text-gray-800'
                                : 'hover:bg-gray-50 text-gray-600 hover:text-indigo-600'
                            }`}
                            initial={false}
                            animate={{
                              backgroundColor: isActive ? 'rgb(238 242 255)' : isCurrent ? 'rgb(249 250 251)' : 'transparent',
                              scale: isActive ? 1.02 : 1,
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className={`mr-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                              isActive 
                                ? 'bg-indigo-100 ring-2 ring-indigo-200 text-indigo-600 shadow-sm'
                                : isCurrent
                                ? 'bg-gray-200 text-gray-800 ring-1 ring-gray-300'
                                : 'bg-gray-100 group-hover:bg-gray-200 group-hover:text-indigo-600'
                            }`}>
                              {index + 1}
                            </span>
                            <span className="truncate">{section.title}</span>
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Navigation Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        Current section: {parseInt(currentSection.split('-')[1]) + 1}
                      </p>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-9">
                <div className="space-y-16">
                  {sections.map((section, index) => {
                    const sectionId = `section-${index}`;
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.div
                        key={section.title}
                        id={sectionId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative scroll-mt-32"
                      >
                        <motion.div
                          className="group"
                          animate={{
                            scale: isActive && !isScrolling ? 1.01 : 1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {/* Section Number */}
                          <div className="absolute -left-10 hidden md:flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium group-hover:bg-indigo-200 transition-colors duration-200">
                            {index + 1}
                          </div>

                          {/* Content Card */}
                          <div className="bg-white rounded-2xl shadow-sm overflow-hidden group-hover:shadow-md transition-all duration-200">
                            {/* Header */}
                            <div className="px-8 py-5 bg-gradient-to-r from-indigo-50/50 via-white to-purple-50/30 border-b border-gray-100">
                              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                <span className="md:hidden flex items-center justify-center h-7 w-7 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
                                  {index + 1}
                                </span>
                                <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                                  {section.title}
                                </span>
                              </h2>
                            </div>

                            {/* Content */}
                            <div className="px-8 py-6">
                              {section.content.split('\n').map((paragraph, i) => (
                                <motion.div
                                  key={i}
                                  className="mb-4 last:mb-0"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  {paragraph.startsWith('•') ? (
                                    <div className="flex items-start gap-4 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                      <div className="relative mt-1">
                                        <motion.div
                                          className="absolute inset-0 bg-indigo-100 rounded-full"
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          transition={{ duration: 0.2 }}
                                        />
                                        <svg className="w-5 h-5 text-indigo-500 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                      </div>
                                      <span className="text-base leading-relaxed">{paragraph.substring(1).trim()}</span>
                                    </div>
                                  ) : (
                                    <p className="text-gray-600 text-base leading-relaxed tracking-wide hover:text-gray-900 transition-colors duration-200">
                                      {paragraph}
                                    </p>
                                  )}
                                </motion.div>
                              ))}
                            </div>

                            {/* Footer - Only for specific sections */}
                            {(section.title === 'Contact Information' || section.title === 'Privacy Policy') && (
                              <div className="px-8 py-5 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                  {section.title === 'Contact Information' && (
                                    <motion.a
                                      href="/contact"
                                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg shadow-sm text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:shadow transition-all duration-200"
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                      </svg>
                                      Contact Us
                                    </motion.a>
                                  )}
                                  {section.title === 'Privacy Policy' && (
                                    <motion.a
                                      href="/privacy"
                                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg shadow-sm text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:shadow transition-all duration-200"
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                      </svg>
                                      View Privacy Policy
                                    </motion.a>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Contact Section with updated design */}
                <motion.div
                  id="contact-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sections.length * 0.1 }}
                  className="mt-24 mb-16" // Increased top and bottom margins
                >
                  <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 rounded-2xl shadow-sm p-8 border border-indigo-100/50">
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
                        <motion.h2
                          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-4"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Need Help?
                        </motion.h2>
                        <motion.p
                          className="text-gray-600 mb-6 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          If you have any questions about these terms or need clarification, our team is here to help. You can reach us at:
                          <br />
                          <span className="block mt-2 text-gray-700">
                            • Email: vianangelo.14@gmail.com<br />
                            • Phone: +63 0995 741 9175<br />
                            • Address: 673 Quirino Highway, San Bartolome, Novaliches, Quezon City
                          </span>
                        </motion.p>
                        <div className="flex flex-wrap gap-4">
                          <motion.a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg shadow-sm text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:shadow transition-all duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us
                          </motion.a>
                          <motion.a
                            href="/faqs"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg shadow-sm text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:shadow transition-all duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            View FAQs
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Last Updated */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: (sections.length + 1) * 0.1 }}
                  className="py-16 text-center text-sm text-gray-500 border-t border-gray-100"
                >
                  Last updated: {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse; 