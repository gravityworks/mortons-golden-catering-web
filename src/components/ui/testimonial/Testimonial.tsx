
import React from 'react';

type TestimonialProps = {
  quote: string;
  author: string;
  position?: string;
  imageUrl?: string;
  className?: string;
  compact?: boolean;
};

const Testimonial = ({ 
  quote, 
  author, 
  position, 
  imageUrl,
  className = '',
  compact = false
}: TestimonialProps) => {
  return (
    <div className={`bg-rich-gray p-8 rounded-lg border border-gray-800 ${className}`}>
      <div className="flex flex-col h-full">
        <div className={`${compact ? 'mb-4' : 'mb-6'} text-gold`}>
          {/* Quote icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={compact ? "32" : "48"} 
            height={compact ? "32" : "48"} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>
        
        <p className={`text-white ${compact ? 'text-base' : 'text-lg'} italic mb-6 flex-grow`}>"{quote}"</p>
        
        <div className="flex items-center">
          {imageUrl && (
            <div className="mr-4">
              <img 
                src={imageUrl} 
                alt={author} 
                className={`${compact ? 'w-10 h-10' : 'w-12 h-12'} rounded-full object-cover`} 
              />
            </div>
          )}
          <div>
            <p className="text-gold font-semibold">{author}</p>
            {position && <p className="text-gray-400 text-sm">{position}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

type TestimonialsProps = {
  title: string;
  subtitle?: string;
  testimonials: TestimonialProps[];
};

export const Testimonials = ({ title, subtitle, testimonials }: TestimonialsProps) => {
  return (
    <section className="py-20 bg-rich-black">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="text-gray-300 text-lg">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
