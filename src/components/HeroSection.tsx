import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}) => {
  return (
    <div 
      className="relative h-screen flex items-center justify-center" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {subtitle}
        </p>
        <Link 
          to={buttonLink} 
          className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-md inline-block transition-colors text-lg font-medium"
          data-aos="fade-up" data-aos-delay="300"
        >
          {buttonText}
        </Link>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white bg-opacity-30 p-2 w-10 h-10 ring-1 ring-white ring-opacity-20 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;