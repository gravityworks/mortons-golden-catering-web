
import React from 'react';
import { ChefHat, Utensils, Wine } from 'lucide-react';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import FeatureSection from '@/components/ui/feature-section/FeatureSection';
import { Testimonials } from '@/components/ui/testimonial/Testimonial';
import BookCta from '@/components/ui/book-cta/BookCta';

const featuresData = [
  {
    title: "Exquisite Cuisine",
    description: "Chef-driven menus that blend classic comfort with creative innovation, using only the finest, freshest ingredients.",
    icon: <ChefHat size={48} />,
  },
  {
    title: "Full Service",
    description: "From elegant place settings to professional staff, we provide everything needed to make your event flawless.",
    icon: <Utensils size={48} />,
  },
  {
    title: "Custom Menus",
    description: "Tailored menus designed specifically for your event, accommodating dietary restrictions and preferences.",
    icon: <Wine size={48} />,
  },
];

const testimonialData = [
  {
    quote: "Morton's handled our company gala with such elegance and professionalism. The food was exceptional, and the staff anticipated every need.",
    author: "Emily Chen",
    position: "Marketing Director, TechCorp",
  },
  {
    quote: "Our wedding guests are still raving about the food! Morton's truly elevated our special day with their attention to detail and exquisite presentation.",
    author: "James & Olivia Wilson",
    position: "Wedding Clients",
  },
  {
    quote: "The university president's dinner was flawless thanks to Morton's. Their team handled every aspect with grace, and the customized menu impressed everyone.",
    author: "Dr. Robert Thompson",
    position: "University Events Manager",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Exceptional Catering for Exceptional Events"
          subtitle="MORTON'S FINE CATERING"
          description="We deliver unforgettable culinary experiences with chef-driven cuisine, impeccable service, and meticulous attention to detail."
          imageUrl="https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          ctaText="Contact Us"
          height="min-h-screen"
        />
        
        <section className="py-24 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1">
                <h2 className="section-title">Crafting Memorable Experiences Since 1995</h2>
                <p className="text-gray-300 mb-8">
                  Morton's Fine Catering specializes in delivering exceptional off-premises catering
                  for weddings, corporate events, and campus functions throughout the region.
                </p>
                <p className="text-gray-300 mb-8">
                  Our approach combines culinary excellence with personalized service, ensuring that
                  every detail of your event exceeds expectations. From menu development to execution,
                  our experienced team handles all aspects of your catering needs with precision and care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/about-us" className="btn-outline">About Our Team</a>
                  <a href="/services" className="btn-gold">Our Services</a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold rounded-lg"></div>
                  <img 
                    src="https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Elegant catering setup" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeatureSection 
          title="Why Choose Morton's"
          subtitle="We pride ourselves on creating memorable culinary experiences for every client, with a focus on quality, service, and presentation."
          features={featuresData}
        />
        
        <BookCta 
          title="Ready to Create an Unforgettable Event?"
          subtitle="Let our team of culinary and event professionals bring your vision to life. Contact us today to start planning your perfect occasion."
        />
        
        <Testimonials 
          title="What Our Clients Say"
          testimonials={testimonialData}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
