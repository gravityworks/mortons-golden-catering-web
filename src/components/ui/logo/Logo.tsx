
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  width?: number;
  mobileWidth?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 180, mobileWidth }) => {
  const responsiveWidth = mobileWidth ? mobileWidth : Math.floor(width * 0.5);
  
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/lovable-uploads/91b7d4c4-b0a4-4909-98d3-5e5b6994aa7f.png" 
        alt="Morton's Fine Catering" 
        width={width}
        height="auto"
        className={`rounded-full hidden md:block`}
      />
      <img 
        src="/lovable-uploads/91b7d4c4-b0a4-4909-98d3-5e5b6994aa7f.png" 
        alt="Morton's Fine Catering" 
        width={responsiveWidth}
        height="auto"
        className={`rounded-full block md:hidden`}
      />
    </Link>
  );
};

export default Logo;
