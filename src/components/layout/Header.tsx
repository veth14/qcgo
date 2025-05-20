'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">QCGO</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-300">HOME</Link></li>
            <li><Link href="/tours" className="hover:text-gray-300">TOURS</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300">BLOG/GUIDE</Link></li>
            <li><Link href="/about-us" className="hover:text-gray-300">ABOUT US</Link></li>
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
        <div className="md:hidden bg-primary-dark">
          <ul className="px-4 pt-2 pb-4 space-y-2">
            <li><Link href="/" className="block py-2 hover:text-gray-300">HOME</Link></li>
            <li><Link href="/tours" className="block py-2 hover:text-gray-300">TOURS</Link></li>
            <li><Link href="/blog" className="block py-2 hover:text-gray-300">BLOG/GUIDE</Link></li>
            <li><Link href="/about-us" className="block py-2 hover:text-gray-300">ABOUT US</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
