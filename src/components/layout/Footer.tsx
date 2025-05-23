import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
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

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-16 mb-12">
          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wider text-sm font-medium">
            Contact Us
          </Link>
          <Link to="/terms-of-use" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wider text-sm font-medium">
            Terms of Use
          </Link>
          <Link to="/faqs" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wider text-sm font-medium">
            FAQs
          </Link>
          <Link to="/about-us" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wider text-sm font-medium">
            About Us
          </Link>
          <Link to="/privacy" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wider text-sm font-medium">
            Privacy
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} QUEZON CITY UNIVERSITY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
