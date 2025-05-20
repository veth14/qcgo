import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">QCGO</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">HOME</Link></li>
            <li><Link to="/tours" className="hover:text-gray-300">TOURS</Link></li>
            <li><Link to="/blog" className="hover:text-gray-300">BLOG/GUIDE</Link></li>
            <li><Link to="/about-us" className="hover:text-gray-300">ABOUT US</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
