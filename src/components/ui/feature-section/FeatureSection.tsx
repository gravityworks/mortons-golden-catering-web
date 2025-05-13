
import React from 'react';

type Feature = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
};

type FeatureSectionProps = {
  title: string;
  subtitle?: string;
  features: Feature[];
  alignment?: 'center' | 'left';
  columns?: 2 | 3 | 4;
};

const FeatureSection = ({
  title,
  subtitle,
  features,
  alignment = 'center',
  columns = 3,
}: FeatureSectionProps) => {
  const textAlignment = alignment === 'center' ? 'text-center' : 'text-left';
  
  let gridCols;
  switch (columns) {
    case 2:
      gridCols = 'md:grid-cols-2';
      break;
    case 3:
      gridCols = 'md:grid-cols-3';
      break;
    case 4:
      gridCols = 'md:grid-cols-2 lg:grid-cols-4';
      break;
    default:
      gridCols = 'md:grid-cols-3';
  }

  return (
    <section className="py-20 bg-rich-black">
      <div className="container-custom">
        <div className={`max-w-3xl mx-auto mb-16 ${alignment === 'center' ? 'text-center' : ''}`}>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="text-gray-300 text-lg">{subtitle}</p>}
        </div>

        <div className={`grid grid-cols-1 ${gridCols} gap-10`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${textAlignment} p-6 border border-gray-800 rounded-lg hover:border-gold/30 transition-all duration-300`}
            >
              {feature.icon && (
                <div className={`${alignment === 'center' ? 'mx-auto' : ''} text-gold mb-4`}>
                  {feature.icon}
                </div>
              )}
              {feature.imageUrl && (
                <div className="mb-6 overflow-hidden rounded-md">
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-2xl font-playfair font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
