
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface FoodGalleryProps {
  className?: string;
  title?: string;
  subtitle?: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const FoodGallery: React.FC<FoodGalleryProps> = ({ 
  className = '', 
  title, 
  subtitle,
  images 
}) => {
  return (
    <div className={`${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">{title}</h2>}
          {subtitle && <p className="text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="overflow-hidden rounded-lg shadow-xl border border-gold/20 h-full">
                <AspectRatio ratio={4/3} className="bg-rich-gray">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="relative static translate-y-0 mr-4" />
          <CarouselNext className="relative static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default FoodGallery;
