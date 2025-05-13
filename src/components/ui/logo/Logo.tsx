
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 180 }) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/lovable-uploads/ef18f492-1e2e-43a4-8a10-c3bf44f62251.png" 
        alt="Morton's Fine Catering" 
        width={width} 
        height="auto"
        className="rounded-full"
      />
    </Link>
  );
};

export default Logo;
