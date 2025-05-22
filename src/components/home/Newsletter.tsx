import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommunityConnect = () => {
  const [suggestion, setSuggestion] = useState('');
  const [isSuggestionSubmitted, setIsSuggestionSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'general', label: 'General Feedback', icon: '💡' },
    { id: 'experience', label: 'Travel Experience', icon: '✈️' },
    { id: 'suggestion', label: 'Suggestion', icon: '📝' },
    { id: 'report', label: 'Report Issue', icon: '🚨' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/itsss.iannn14',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      bgClass: 'bg-gradient-to-br from-purple-600 to-pink-500'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/vianangelo14',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z"/>
        </svg>
      ),
      bgClass: 'bg-blue-600 hover:bg-blue-700'
    },
  ];

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', { category: selectedCategory, suggestion });
    setIsSuggestionSubmitted(true);
    setSuggestion('');
    setSelectedCategory('');

    setTimeout(() => {
      setIsSuggestionSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Join Our Community
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Share your experiences, connect with fellow travelers, and help us improve
          </p>
          <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Feedback Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-gray-50 border border-gray-100 shadow-xl rounded-xl"
            >
              <div className="p-8 md:p-10">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Share Your Experience</h3>
                <p className="mb-6 text-gray-600">
                  Your feedback helps us create better experiences for everyone
                </p>

                <form onSubmit={handleSuggestionSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-2xl mb-2 block">{category.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{category.label}</span>
                      </motion.button>
                    ))}
                  </div>

                  <div>
                    <textarea
                      value={suggestion}
                      onChange={(e) => setSuggestion(e.target.value)}
                      placeholder="Tell us about your experience..."
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900"
                      rows={4}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  >
                    Share Feedback
                  </motion.button>
                </form>

                <AnimatePresence>
                  {isSuggestionSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 mt-4 rounded-lg bg-green-50 border border-green-200"
                    >
                      <p className="flex items-center text-green-600">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Thank you for sharing your experience!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Social Connect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-gray-50 border border-gray-100 shadow-xl rounded-xl"
            >
              <div className="p-8 md:p-10">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Connect With Us</h3>
                
                <div className="space-y-8">
                  {/* Social Media Links */}
                  <div>
                    <h4 className="mb-4 text-lg font-medium text-gray-700">Follow Our Journey</h4>
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center justify-center w-14 h-14 rounded-full ${social.bgClass} transition-all duration-300 hover:shadow-lg`}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Community Stats */}
                  <div className="pt-8 border-t border-gray-200">
                    <h4 className="mb-6 text-lg font-medium text-gray-700">Community Highlights</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-white border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600">50K+</div>
                        <div className="text-sm text-gray-600">Community Members</div>
                      </div>
                      <div className="p-4 rounded-lg bg-white border border-gray-100">
                        <div className="text-2xl font-bold text-purple-600">1K+</div>
                        <div className="text-sm text-gray-600">Monthly Visitors</div>
                      </div>
                      <div className="p-4 rounded-lg bg-white border border-gray-100">
                        <div className="text-2xl font-bold text-pink-600">100+</div>
                        <div className="text-sm text-gray-600">Local Guides</div>
                      </div>
                      <div className="p-4 rounded-lg bg-white border border-gray-100">
                        <div className="text-2xl font-bold text-green-600">4.8</div>
                        <div className="text-sm text-gray-600">Average Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnect;
