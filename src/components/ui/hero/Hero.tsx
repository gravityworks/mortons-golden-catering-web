
import React from 'react';
import { Link } from 'react-router-dom';

type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  height?: string;
  overlay?: boolean;
};

const Hero = ({
  title,
  subtitle,
  description,
  imageUrl,
  ctaText,
  ctaLink = "/contact",
  height = "h-screen",
  overlay = true,
}: HeroProps) => {
  return (
    <div className={`relative ${height} w-full flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      
      {/* Overlay */}
      {overlay && <div className="overlay-dark"></div>}
      
      {/* Content */}
      <div className="container-custom relative z-20 text-center px-4 animate-fade-up">
        {subtitle && (
          <p className="text-gold font-playfair text-xl md:text-2xl mb-4">{subtitle}</p>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
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
  );
};

export default Hero;
