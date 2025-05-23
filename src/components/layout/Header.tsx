import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [travelDropdownOpen, setTravelDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const moreDropdownRef = useRef<HTMLDivElement>(null);
  const travelDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
      if (travelDropdownRef.current && !travelDropdownRef.current.contains(event.target as Node)) {
        setTravelDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
      scrolled
        ? 'border-b border-white/5 backdrop-blur-md'
        : isHomePage ? 'bg-transparent' : 'bg-[#001B3D]'
    }`}
      style={{
        background: scrolled
          ? 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(17, 24, 39, 0.9), rgba(0, 0, 0, 0.9))'
          : isHomePage ? 'transparent' : '#001B3D'
      }}
    >
      <div className="container flex items-center justify-between px-8 py-10 mx-auto"
        style={{
          backgroundImage: scrolled
            ? 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 25%), radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 25%)'
            : 'none'
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">

            <div className="flex items-center py-1">
              {/* Circle with pin logo */}
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Blue circle with white border */}
                <circle cx="22.5" cy="22.5" r="22.5" fill="#0A3B8C"/>
                <circle cx="22.5" cy="22.5" r="20.5" stroke="white" strokeWidth="2"/>

                {/* Yellow flat circle base - placed first so pin appears on top */}
                <ellipse cx="22.5" cy="32" rx="5" ry="1.5" fill="#FFD700"/>

                {/* Red location pin - adjusted to overlap yellow base */}
                <path d="M22.5 8C18 8 14.5 11.5 14.5 16C14.5 21 22.5 32 22.5 32C22.5 32 30.5 21 30.5 16C30.5 11.5 27 8 22.5 8Z" fill="#FF3B30"/>

                {/* White circle in the middle of pin */}
                <circle cx="22.5" cy="16" r="4" fill="white"/>
              </svg>

              {/* Text part of logo */}
              <div className="flex flex-col ml-2">
                {/* QCGO! text */}
                <div>
                  <span className="text-4xl font-extrabold leading-none text-white" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '-0.5px' }}>QCGO!</span>
                </div>

                {/* YOUR TRAVELLING PARTNER text */}
                <div className="relative w-full mt-1 mb-2">
                  <div className="text-white text-[6px] font-bold uppercase tracking-wider leading-none mx-auto text-center" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>YOUR TRAVELLING PARTNER</div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="relative flex items-center font-medium group">
                <span className="relative px-3 py-1.5 rounded-full group-hover:bg-white/10 transition-all duration-200">
                  <span className="relative z-10 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">HOME</span>
                  <span className="absolute inset-0 transition-all duration-300 border border-transparent rounded-full group-hover:border-white/10"></span>
                </span>
              </Link>
            </li>
            <li>
              <div className="relative" ref={moreDropdownRef}>
                <button
                  className="relative flex items-center font-medium text-white bg-transparent border-none cursor-pointer group"
                  onClick={() => {
                    setMoreDropdownOpen(!moreDropdownOpen);
                    setTravelDropdownOpen(false);
                  }}
                >
                  <span className="relative px-3 py-1.5 rounded-full group-hover:bg-white/10 transition-all duration-200">
                    <span className="relative z-10 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">MORE</span>
                    <span className={`absolute inset-0 rounded-full transition-all duration-300 ${moreDropdownOpen ? 'bg-white/15 border-white/15 border' : 'group-hover:border-white/10 border border-transparent'}`}></span>
                  </span>
                  <svg className={`w-4 h-4 ml-0.5 transition-transform duration-300 ${moreDropdownOpen ? 'rotate-180 text-blue-400' : 'text-white/70 group-hover:text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* MORE Dropdown Menu - Ultra Premium Design */}
                <div
                  className={`absolute left-0 mt-3 w-72 backdrop-blur-md z-50 transform origin-top transition-all duration-300 ease-out ${
                    moreDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-3 pointer-events-none'
                  }`}
                  style={{
                    boxShadow: '0 15px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.98))',
                    borderRadius: '16px',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-600/10 blur-2xl"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                  </div>

                  {/* Header */}
                  <div className="relative px-6 pt-5 pb-3">
                    <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-400/90">Discover More</h3>
                  </div>

                  {/* Menu items */}
                  <div className="relative px-2 pb-3">
                    <Link
                      to="/about-qc"
                      className="flex items-center px-4 py-3 my-1 text-sm transition-all duration-200 text-white/90 rounded-xl hover:bg-white/5 hover:text-white group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-4 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">About QC</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Learn about Quezon City</p>
                      </div>
                      <svg className="w-5 h-5 ml-auto text-gray-500 transition-all duration-200 group-hover:text-blue-400 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <Link
                      to="/qc-history"
                      className="flex items-center px-4 py-3 my-1 text-sm transition-all duration-200 text-white/90 rounded-xl hover:bg-white/5 hover:text-white group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-4 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">QC History</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Explore the city's rich past</p>
                      </div>
                      <svg className="w-5 h-5 ml-auto text-gray-500 transition-all duration-200 group-hover:text-blue-400 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <Link
                      to="/qc-facts"
                      className="flex items-center px-4 py-3 my-1 text-sm transition-all duration-200 text-white/90 rounded-xl hover:bg-white/5 hover:text-white group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-4 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">QC Facts</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Discover interesting facts</p>
                      </div>
                      <svg className="w-5 h-5 ml-auto text-gray-500 transition-all duration-200 group-hover:text-blue-400 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative" ref={travelDropdownRef}>
                <button
                  className="relative flex items-center font-medium text-white bg-transparent border-none cursor-pointer group"
                  onClick={() => {
                    setTravelDropdownOpen(!travelDropdownOpen);
                    setMoreDropdownOpen(false);
                  }}
                >
                  <span className="relative px-3 py-1.5 rounded-full group-hover:bg-white/10 transition-all duration-200">
                    <span className="relative z-10 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">TRAVEL GUIDE</span>
                    <span className={`absolute inset-0 rounded-full transition-all duration-300 ${travelDropdownOpen ? 'bg-white/15 border-white/15 border' : 'group-hover:border-white/10 border border-transparent'}`}></span>
                  </span>
                  <svg className={`w-4 h-4 ml-0.5 transition-transform duration-300 ${travelDropdownOpen ? 'rotate-180 text-blue-400' : 'text-white/70 group-hover:text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* TRAVEL GUIDE Dropdown Menu - Ultra Premium Design */}
                <div
                  className={`absolute left-0 mt-3 w-[420px] backdrop-blur-md z-50 transform origin-top transition-all duration-300 ease-out ${
                    travelDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-3 pointer-events-none'
                  }`}
                  style={{
                    boxShadow: '0 15px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.98))',
                    borderRadius: '16px',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-600/10 blur-2xl"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                  </div>

                  {/* Header */}
                  <div className="relative flex items-center justify-between px-6 pt-5 pb-3">
                    <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-400/90">Quezon City Districts</h3>
                    <span className="text-xs text-gray-500">Explore all 6 districts</span>
                  </div>

                  {/* Grid layout for districts */}
                  <div className="relative grid grid-cols-2 gap-2 px-4 pb-4">
                    <Link
                      to="/district-1"
                      className="flex items-center p-3 text-sm transition-all duration-200 border border-transparent text-white/90 rounded-xl hover:bg-white/5 group hover:border-blue-500/10"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">District 1</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Diliman, Project 6</p>
                      </div>
                    </Link>

                    <Link
                      to="/district-2"
                      className="flex items-center p-3 text-sm transition-all duration-200 border border-transparent text-white/90 rounded-xl hover:bg-white/5 group hover:border-blue-500/10"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">District 2</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Novaliches, Lagro</p>
                      </div>
                    </Link>

                    <Link
                      to="/district-3"
                      className="flex items-center p-3 text-sm transition-all duration-200 border border-transparent text-white/90 rounded-xl hover:bg-white/5 group hover:border-blue-500/10"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">District 3</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Cubao, Kamias</p>
                      </div>
                    </Link>
                    <Link
                      to="/district-4"
                      className="flex items-center p-3 text-sm transition-all duration-200 border border-transparent text-white/90 rounded-xl hover:bg-white/5 group hover:border-blue-500/10"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">District 4</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Kamuning, New Manila</p>
                      </div>
                    </Link>

                    <Link
                      to="/district-5"
                      className="flex items-center p-3 text-sm transition-all duration-200 border border-transparent text-white/90 rounded-xl hover:bg-white/5 group hover:border-blue-500/10"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">District 5</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Fairview, Commonwealth</p>
                      </div>
                    </Link>

                    <Link
                      to="/district-6"
                      className="flex items-center p-3 text-sm transition-all duration-200 border border-transparent text-white/90 rounded-xl hover:bg-white/5 group hover:border-blue-500/10"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400 transition-colors duration-200 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">District 6</span>
                        <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">Batasan Hills, Holy Spirit</p>
                      </div>
                    </Link>

                    {/* View all link */}
                    <div className="col-span-2 pt-3 mt-2 border-t border-gray-800/50">
                      <Link
                        to="/districts"
                        className="flex items-center justify-center p-2 text-sm text-blue-400 transition-all duration-200 rounded-lg hover:bg-blue-900/10 group"
                      >
                        <span className="font-medium">View All Districts</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/about-us" className="relative flex items-center font-medium group">
                <span className="relative px-3 py-1.5 rounded-full group-hover:bg-white/10 transition-all duration-200">
                  <span className="relative z-10 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">ABOUT US</span>
                  <span className="absolute inset-0 transition-all duration-300 border border-transparent rounded-full group-hover:border-white/10"></span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none p-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Premium Design */}
      {isMenuOpen && (
        <div className="border-t md:hidden backdrop-blur-md border-white/5"
          style={{
            background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.98))'
          }}
        >
          <div className="px-4 py-3 border-b border-white/5">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-400/90">Navigation</h3>
          </div>
          <ul className="px-4 py-2 space-y-1">
            <li>
              <Link to="/" className="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white/5 group">
                <div className="flex items-center justify-center w-8 h-8 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="font-medium">HOME</span>
              </Link>
            </li>

            {/* Mobile MORE dropdown */}
            <li>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center justify-between w-full p-3 text-left text-white transition-all duration-200 rounded-xl hover:bg-white/5 group"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium">MORE</span>
                </div>
                <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 transition-all duration-300 ${moreDropdownOpen ? 'rotate-180 from-blue-600/20 to-blue-800/20' : ''}`}>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  moreDropdownOpen ? 'max-h-80 opacity-100 mt-1' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-1 pl-4 space-y-1 border-l ml-11 border-white/10">
                  <Link
                    to="/about-qc"
                    className="flex items-center p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                  >
                    <span className="font-medium text-white/80 group-hover:text-white">About QC</span>
                    <svg className="w-4 h-4 ml-auto text-gray-500 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <Link
                    to="/qc-history"
                    className="flex items-center p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                  >
                    <span className="font-medium text-white/80 group-hover:text-white">QC History</span>
                    <svg className="w-4 h-4 ml-auto text-gray-500 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <Link
                    to="/qc-facts"
                    className="flex items-center p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                  >
                    <span className="font-medium text-white/80 group-hover:text-white">QC Facts</span>
                    <svg className="w-4 h-4 ml-auto text-gray-500 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </li>

            {/* Mobile TRAVEL GUIDE dropdown */}
            <li>
              <button
                onClick={() => setTravelDropdownOpen(!travelDropdownOpen)}
                className="flex items-center justify-between w-full p-3 text-left text-white transition-all duration-200 rounded-xl hover:bg-white/5 group"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-medium">TRAVEL GUIDE</span>
                </div>
                <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 transition-all duration-300 ${travelDropdownOpen ? 'rotate-180 from-blue-600/20 to-blue-800/20' : ''}`}>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  travelDropdownOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-1 pl-4 border-l ml-11 border-white/10">
                  <div className="mb-2 text-xs font-semibold tracking-wider uppercase text-blue-400/90">
                    Quezon City Districts
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    <Link
                      to="/district-1"
                      className="flex flex-col p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">District 1</span>
                      <span className="text-xs text-gray-500">Diliman</span>
                    </Link>

                    <Link
                      to="/district-2"
                      className="flex flex-col p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">District 2</span>
                      <span className="text-xs text-gray-500">Novaliches</span>
                    </Link>

                    <Link
                      to="/district-3"
                      className="flex flex-col p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">District 3</span>
                      <span className="text-xs text-gray-500">Cubao</span>
                    </Link>

                    <Link
                      to="/district-4"
                      className="flex flex-col p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">District 4</span>
                      <span className="text-xs text-gray-500">Kamuning</span>
                    </Link>

                    <Link
                      to="/district-5"
                      className="flex flex-col p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">District 5</span>
                      <span className="text-xs text-gray-500">Fairview</span>
                    </Link>

                    <Link
                      to="/district-6"
                      className="flex flex-col p-2 text-sm transition-all duration-200 rounded-lg hover:bg-white/5 group"
                    >
                      <span className="font-medium text-white/80 group-hover:text-white">District 6</span>
                      <span className="text-xs text-gray-500">Batasan Hills</span>
                    </Link>
                  </div>

                  {/* View all link */}
                  <div className="pt-2 mt-2 border-t border-gray-800/30">
                    <Link
                      to="/districts"
                      className="flex items-center justify-center p-2 text-sm text-blue-400 transition-all duration-200 rounded-lg hover:bg-blue-900/10 group"
                    >
                      <span className="font-medium">View All Districts</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/about-us" className="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white/5 group">
                <div className="flex items-center justify-center w-8 h-8 mr-3 transition-all duration-200 border rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 group-hover:from-blue-600/30 group-hover:to-blue-800/30 border-white/5 group-hover:border-blue-500/30">
                  <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">ABOUT US</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
