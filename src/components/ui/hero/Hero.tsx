
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [scrollY, setScrollY] = useState(0);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Hide hero logo when scrolled past 200px (when navbar logo becomes visible)
      setShowLogo(currentScrollY < 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate logo scale and opacity based on scroll
  const logoScale = Math.max(0.3, 1 - (scrollY / 400));
  const logoOpacity = Math.max(0, 1 - (scrollY / 300));

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
      <div className="container-custom relative z-20 text-center">
        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: logoOpacity, 
                scale: logoScale,
              }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="flex justify-center mb-8"
            >
              <img 
                src="/lovable-uploads/91b7d4c4-b0a4-4909-98d3-5e5b6994aa7f.png" 
                alt="Morton's Fine Catering" 
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
