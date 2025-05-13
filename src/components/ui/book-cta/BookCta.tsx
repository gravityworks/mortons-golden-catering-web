
import React from 'react';
import { Link } from 'react-router-dom';

type BookCtaProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
};

const BookCta = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  ctaText = "Book Your Event",
  ctaLink = "/contact",
}: BookCtaProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="overlay-dark"></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/90 text-lg md:text-xl mb-10">
              {subtitle}
            </p>
          )}
          <Link to={ctaLink} className="btn-gold inline-block">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookCta;
