import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQs: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Reset scroll position when navigating to the page
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    { 
      id: 'general', 
      name: 'General Questions',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 'booking', 
      name: 'Booking & Reservations',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 'payment', 
      name: 'Payment & Pricing',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    { 
      id: 'account', 
      name: 'Account Management',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      id: 'support', 
      name: 'Support & Help',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const faqs: FAQItem[] = [
    {
      category: 'general',
      question: 'What is QCGO?',
      answer: 'QCGO is a comprehensive travel and tourism platform designed specifically for Quezon City. It helps users discover local attractions, book accommodations, and explore the best that Quezon City has to offer.'
    },
    {
      category: 'general',
      question: 'How do I get started with QCGO?',
      answer: 'Getting started is easy! Simply create an account on our platform, verify your email, and you can immediately start exploring and booking experiences in Quezon City.'
    },
    {
      category: 'booking',
      question: 'How do I make a booking?',
      answer: 'To make a booking, search for your desired destination or activity, select your preferred date and time, fill in the required information, and proceed to payment. You\'ll receive a confirmation email once your booking is complete.'
    },
    {
      category: 'booking',
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, you can modify or cancel your booking up to 24 hours before the scheduled time. Go to your account dashboard, find the booking you wish to change, and follow the modification or cancellation process.'
    },
    {
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, PayPal, GCash, and other local payment options. All payments are processed securely through our platform.'
    },
    {
      category: 'payment',
      question: 'How do refunds work?',
      answer: 'Refunds are processed according to our refund policy. Generally, full refunds are available for cancellations made 24 hours before the scheduled activity. The refund will be processed to your original payment method within 5-7 business days.'
    },
    {
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page, enter your email address, and follow the instructions sent to your email to create a new password.'
    },
    {
      category: 'account',
      question: 'How can I update my profile information?',
      answer: 'Log in to your account, go to your profile settings, and you can update your personal information, contact details, and preferences from there.'
    },
    {
      category: 'support',
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team through multiple channels: email at vianangelo.14@gmail.com, phone at +63 0995 741 9175, or through our contact form on the website.'
    },
    {
      category: 'support',
      question: 'What are your support hours?',
      answer: 'Our customer support team is available 24/7 to assist you with any questions or concerns you may have about our services.'
    }
  ];

  // Filter FAQs based on search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery) return faqs;
    const query = searchQuery.toLowerCase();
    return faqs.filter(
      faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery, faqs]);

  // Get unique categories from filtered FAQs
  const activeCategories = useMemo(() => {
    if (!searchQuery) return [activeCategory];
    return Array.from(new Set(filteredFaqs.map(faq => faq.category)));
  }, [searchQuery, filteredFaqs, activeCategory]);

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
                Help Center
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frequently Asked <span className="relative">
                <span className="relative inline-block text-indigo-600">
                  Questions
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
              Find answers to commonly asked questions about QCGO services. Can't find what you're looking for? Contact our support team.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 pl-14"
                />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-12">
              {/* Category Sidebar - Hide when searching */}
              {!searchQuery && (
                <div className="md:col-span-3">
                  <div className="sticky top-24" style={{ height: 'fit-content' }}>
                    {/* Mobile Category Select */}
                    <div className="md:hidden mb-8">
                      <select
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                        className="w-full rounded-lg border-gray-300 py-3 px-4 text-base focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        {faqCategories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Desktop Category Navigation */}
                    <nav className="hidden md:block relative space-y-2 bg-white rounded-xl shadow-sm p-6">
                      <div className="mb-6 pb-4 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
                      </div>
                      <div className="space-y-2">
                        {faqCategories.map((category) => (
                          <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`relative group w-full flex items-center px-5 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                              activeCategory === category.id
                                ? 'bg-gradient-to-r from-indigo-50 to-indigo-50/50 text-indigo-600 shadow-sm'
                                : 'hover:bg-gray-50 text-gray-600 hover:text-indigo-600'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className={`mr-3 ${
                              activeCategory === category.id
                                ? 'text-indigo-600'
                                : 'text-gray-400 group-hover:text-indigo-600'
                            }`}>
                              {category.icon}
                            </span>
                            {category.name}
                            {activeCategory === category.id && (
                              <motion.div
                                className="absolute right-4 text-indigo-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </div>

                      {/* Category Stats */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Total Questions</span>
                          <span className="font-medium text-gray-900">{filteredFaqs.length}</span>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              )}

              {/* FAQ Content */}
              <div className={searchQuery ? 'col-span-12' : 'md:col-span-9'}>
                <AnimatePresence mode="wait">
                  {activeCategories.map((categoryId) => {
                    const category = faqCategories.find(c => c.id === categoryId);
                    if (!category) return null;

                    return (
                      <motion.div
                        key={category.id}
                        className="mb-12 last:mb-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="flex items-center gap-3 mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="flex-shrink-0 p-2 bg-indigo-50 rounded-lg text-indigo-600">
                            {category.icon}
                          </span>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {category.name}
                          </h2>
                        </motion.div>

                        <div className="space-y-4">
                          {filteredFaqs
                            .filter(faq => faq.category === categoryId)
                            .map((faq, index) => (
                              <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <button
                                  onClick={() => toggleQuestion(index)}
                                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50"
                                >
                                  <span className="text-base font-medium text-gray-900 pr-8">{faq.question}</span>
                                  <motion.span
                                    animate={{ 
                                      rotate: openQuestions.includes(index) ? 180 : 0,
                                      backgroundColor: openQuestions.includes(index) ? 'rgb(238, 242, 255)' : 'rgb(249, 250, 251)'
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex-shrink-0 ml-2 p-2 rounded-full ${
                                      openQuestions.includes(index) 
                                        ? 'bg-indigo-100 text-indigo-600' 
                                        : 'bg-gray-50 text-gray-400'
                                    }`}
                                  >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </motion.span>
                                </button>
                                <AnimatePresence>
                                  {openQuestions.includes(index) && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                        <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            ))}
                        </div>

                        {filteredFaqs.filter(faq => faq.category === categoryId).length === 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-12"
                          >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                            <p className="text-gray-500">Try adjusting your search terms or clear the search to browse all categories.</p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Show no results message when searching with no matches */}
                {searchQuery && filteredFaqs.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                    <p className="text-gray-500">Try adjusting your search terms or clear the search to browse all categories.</p>
                  </motion.div>
                )}

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 rounded-2xl shadow-sm p-8 border border-indigo-100/50"
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
                        Still Have Questions?
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Can't find the answer you're looking for? Please check our terms of use or contact our support team.
                      </p>
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
                          Contact Support
                        </motion.a>
                        <motion.a
                          href="/terms-of-use"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg shadow-sm text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:shadow transition-all duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                          Terms of Use
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Last Updated */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-16 text-center text-sm text-gray-500"
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

export default FAQs; 