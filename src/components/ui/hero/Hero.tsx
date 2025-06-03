
import React from 'react';
import { Link } from 'react-router-dom';

type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  height?: string;
  overlay?: boolean;
};

const Hero = ({
  title,
  subtitle,
  description,
  imageUrl = "https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ctaText,
  ctaLink = "/contact",
  height = "h-screen",
  overlay = true,
}: HeroProps) => {
  return (
    <div className={`relative ${height} w-full flex`}>
      {/* Left Side - Logo on Black Background */}
      <div className="w-1/2 bg-rich-black flex items-center justify-center">
        <img 
          src="/lovable-uploads/91b7d4c4-b0a4-4909-98d3-5e5b6994aa7f.png" 
          alt="Morton's Fine Catering" 
          className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover shadow-2xl"
        />
      </div>

      {/* Right Side - Text with Background Image */}
      <div className="w-1/2 relative flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        
        {/* Overlay */}
        {overlay && <div className="absolute inset-0 bg-black/60"></div>}
        
        {/* Content */}
        <div className="relative z-10 text-center px-8">
          {subtitle && (
            <p className="text-gold font-playfair text-xl md:text-2xl mb-4">{subtitle}</p>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {ctaText && (
            <Link to={ctaLink} className="btn-gold inline-block">
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
