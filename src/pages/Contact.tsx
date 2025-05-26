import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitSuccess(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+63 0995 741 9175',
      description: 'Monday to Friday, 8:00 AM to 5:00 PM'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'vianangelo.14@gmail.com',
      description: "We'll respond within 24-48 hours"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: '673 Quirino Highway, San Bartolome, Novaliches, Quezon City',
      description: 'Visit us during office hours'
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
            <div className="relative inline-flex items-center justify-center mb-8">
              <div className="absolute -inset-x-2 -inset-y-4">
                <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter">
                  <div className="aspect-[108/32] w-[8.25rem] bg-gradient-to-r from-indigo-400/50 to-purple-400/50" />
                </div>
              </div>
              <span className="relative bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent text-lg font-medium">
                Get in Touch with Us
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Contact <span className="relative">
                <span className="relative inline-block text-indigo-600">
                  QCGO
                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full" />
                </span>
              </span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 leading-relaxed">
              Have questions or need assistance? We're here to help you make the most of your Quezon City experience.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                Send us a message
              </a>
              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('location');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                View location <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Get in Touch
              </h2>

              {/* Contact Info Cards */}
              <div className="mt-8 space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    id={item.title.toLowerCase()}
                    className="group relative overflow-hidden rounded-xl bg-white p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-white scroll-mt-24"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/0 to-indigo-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex items-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-200">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-base text-gray-600">{item.content}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900">Connect With Us</h3>
                <p className="mt-2 text-gray-600">Follow us on social media for updates and announcements</p>
                <div className="mt-6 flex space-x-6">
                  <a 
                    href="#" 
                    className="group flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-gray-400 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="group flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-gray-400 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="group flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-gray-400 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h2 id="contact-form" className="text-2xl font-bold text-gray-900 scroll-mt-24">
                Send Us a Message
              </h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <div className="relative mt-1 group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="peer block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 hover:border-gray-400"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition-opacity duration-200 group-hover:opacity-10" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative mt-1 group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="peer block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 hover:border-gray-400"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition-opacity duration-200 group-hover:opacity-10" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div className="relative mt-1 group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="peer block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 hover:border-gray-400"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition-opacity duration-200 group-hover:opacity-10" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="relative mt-1 group">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="peer block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 hover:border-gray-400"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition-opacity duration-200 group-hover:opacity-10" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isSubmitting ? 'cursor-not-allowed opacity-80' : ''}`}
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 blur transition-opacity duration-200 group-hover:opacity-20" />
                    <span className="relative flex items-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : submitSuccess ? (
                        <>
                          <svg className="animate-bounce -ml-1 mr-3 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Sent!
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </span>
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <div className="mt-16 mb-20">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="px-8 py-10">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit Our Location
                </h2>
                <p className="mt-2 text-gray-600 max-w-2xl">
                  Find us at 673 Quirino Highway, San Bartolome, Novaliches, Quezon City. Our campus is easily accessible via public transportation.
                </p>
              </div>
              
              <div className="relative h-[500px] w-full border-t border-gray-100">
                <iframe
                  title="QCU Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3439780927534!2d121.02924430000001!3d14.701289900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0897431ba59%3A0x9e3bcb15a3c00df4!2sQuezon%20City%20University%20-%20Main!5e0!3m2!1sen!2sph!4v1709667547932!5m2!1sen!2sph&zoom=17"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Open Hours: Monday - Friday, 8:00 AM to 5:00 PM
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/Quezon+City+University+-+Main/@14.7012899,121.0292443,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b0897431ba59:0x9e3bcb15a3c00df4!8m2!3d14.7012899!4d121.0292443!16s%2Fg%2F11c1nl4x4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on Google Maps
                  </a>
                  <a 
                    href="https://www.google.com/maps/dir//Quezon+City+University+-+Main/@14.7012899,121.0292443,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3397b0897431ba59:0x9e3bcb15a3c00df4!2m2!1d121.0292443!2d14.7012899!3e0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 