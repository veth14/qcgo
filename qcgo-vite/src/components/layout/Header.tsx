import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white py-4">
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* SVG logo matching the screenshot exactly */}
            <div className="flex items-center">
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
                <span className="text-white text-4xl font-extrabold leading-none" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '-0.5px' }}>QCGO!</span>

                {/* YOUR TRAVELLING PARTNER text */}
                <div className="relative w-full">
                  <span className="text-white text-[6px] font-bold uppercase tracking-wider leading-none absolute left-0 right-0 text-center mt-0.5" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>YOUR TRAVELLING PARTNER</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            <li><Link to="/" className="font-medium hover:text-gray-300">HOME</Link></li>
            <li>
              <div className="relative group">
                <Link to="#" className="font-medium hover:text-gray-300 flex items-center">
                  MORE
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </li>
            <li>
              <div className="relative group">
                <Link to="/travel-guide" className="font-medium hover:text-gray-300 flex items-center">
                  TRAVEL GUIDE
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </li>
            <li><Link to="/about-us" className="font-medium hover:text-gray-300">ABOUT US</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <ul className="px-4 pt-2 pb-4 space-y-2">
            <li><Link to="/" className="block py-2 hover:text-gray-300">HOME</Link></li>
            <li><Link to="#" className="block py-2 hover:text-gray-300">MORE</Link></li>
            <li><Link to="/travel-guide" className="block py-2 hover:text-gray-300">TRAVEL GUIDE</Link></li>
            <li><Link to="/about-us" className="block py-2 hover:text-gray-300">ABOUT US</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
