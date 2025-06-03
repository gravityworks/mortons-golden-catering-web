
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
  overlay = true
}: HeroProps) => {
  return (
    <div className={`relative ${height} w-full flex items-center justify-center`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      
      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black/60"></div>}
      
      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-gold mb-6 leading-tight">
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
  );
};

export default Hero;
