import { useState } from 'react';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  to: string;
  category?: string;
}

const DestinationCard = ({ image, title, location, to }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-lg transition-all duration-500"
      style={{
        height: '350px',
        boxShadow: isHovered
          ? '0 20px 40px -15px rgba(0, 0, 0, 0.5)'
          : '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
          style={{ opacity: isHovered ? 0.9 : 0.8 }}
        ></div>
      </div>

      {/* Content - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h3 className="text-2xl font-bold text-white mb-2">
          {title}
        </h3>

        <div className="flex items-center text-white/90 text-sm">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
