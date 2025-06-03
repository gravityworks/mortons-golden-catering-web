import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import { Testimonials } from '@/components/ui/testimonial/Testimonial';
import FoodGallery from '@/components/ui/food-gallery/FoodGallery';
import BookCta from '@/components/ui/book-cta/BookCta';
import { Button } from '@/components/ui/button';

const CorporateServices = () => {
  const featuredVenues = ["Old Town Marquee", "GLAR Ballroom", "MSU Business College", "Lansing Center", "Grand Ledge Country Club", "Kellogg Center", "University Club of MSU"];
  const corporateTestimonials = [{
    quote: "Morton's has been our go-to caterer for quarterly board meetings and our annual gala for three years running. Their food is consistently excellent, and their staff is always professional and punctual.",
    author: "Robert Johnson",
    position: "CEO, Lansing Tech Solutions",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
  }, {
    quote: "Our team training events are always enhanced by Morton's catering. They offer flexible options that work within our budget while still delivering quality that impresses our staff and clients alike.",
    author: "Amanda Peters",
    position: "HR Director, Michigan Financial Group",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
  }, {
    quote: "From small executive lunches to our 250-person holiday party, Morton's consistently delivers exceptional food and service. Their attention to detail and ability to accommodate last-minute changes has made them an invaluable partner.",
    author: "Mark Wilson",
    position: "Events Coordinator, Greater Lansing Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-013ccf25f16a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
  }];
  const corporateGalleryImages = [{
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    alt: "Corporate buffet setup"
  }, {
    src: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9",
    alt: "Business lunch catering"
  }, {
    src: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845",
    alt: "Corporate event hors d'oeuvres"
  }, {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a",
    alt: "Professional networking event catering"
  }, {
    src: "https://images.unsplash.com/photo-1571805341302-f857308690e3",
    alt: "Corporate breakfast spread"
  }, {
    src: "/lovable-uploads/8dc5924d-5028-4413-a6f6-c4a9be8acdb3.png",
    alt: "Executive meeting catering"
  }];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Corporate Event Catering" 
          description="Elevating your business gatherings with professional catering services throughout Greater Lansing, Michigan." 
          imageUrl="https://images.unsplash.com/photo-1517457373958-b7bdd4587205" 
          height="min-h-[70vh]" 
          overlay={true} 
        />
        
        <section className="py-16 bg-rich-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">Corporate Catering Excellence</h2>
              <div className="space-y-6 text-gray-300">
                <p>At Morton's Fine Catering, we understand that successful business events require meticulous planning, reliable execution, and exceptional food.</p>
                <p>Whether you're hosting an multi-day conference, a product launch, or your annual holiday party, our team delivers a seamless catering experience that allows you to focus on your business objectives while we handle the details.</p>
                <p>
                  We pride ourselves on punctuality, professionalism, and the ability to accommodate 
                  special requests and dietary requirements with the same attention to quality that 
                  has made us Greater Lansing's premier catering service.
                </p>
                <div className="flex justify-center mt-10">
                  <Button asChild variant="default" className="bg-gold hover:bg-gold/90 text-black">
                    <Link to="/menus">
                      View Corporate Menus
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">Our Corporate Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Breakfast Meetings</h3>
                <p className="text-gray-300">Start the day right with continental breakfasts, hot breakfast buffets.</p>
              </div>
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">All-Day Conferences</h3>
                <p className="text-gray-300">
                  Keep attendees energized with breakfast, lunch, and strategic snack breaks 
                  throughout your event.
                </p>
              </div>
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Networking Receptions</h3>
                <p className="text-gray-300">
                  Create the perfect atmosphere for connection with elegant hors d'oeuvres 
                  and beverage service.
                </p>
              </div>
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Company Celebrations</h3>
                <p className="text-gray-300">
                  Make your holiday parties, milestones, and team-building events memorable 
                  with customized menus and service.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <FoodGallery className="py-16 bg-rich-black" title="Corporate Catering Gallery" subtitle="Examples of our corporate catering services across Greater Lansing" images={corporateGalleryImages} />
        
        <section className="py-16 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">Featured Corporate Venues</h2>
            <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto">
              We've had the pleasure of catering at many corporate venues throughout Greater Lansing. 
              Here are some locations where we frequently provide our services. We can cater at your office, 
              a conference center of your choice, or any other suitable venue.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {featuredVenues.map((venue, index) => <div key={index} className="bg-rich-black p-4 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300 text-center">
                  <p className="text-white font-medium">{venue}</p>
                </div>)}
            </div>
            
            <p className="text-gray-400 text-center mt-6 text-sm">
              * Morton's Fine Catering is not affiliated with these venues. Please contact them directly for venue information.
            </p>
          </div>
        </section>
        
        <Testimonials title="Client Testimonials" subtitle="What our corporate clients say about our catering services" testimonials={corporateTestimonials} />
        
        <section className="py-16 bg-rich-gray">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Ready to Elevate Your Next Business Event?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              Contact us today to discuss how we can help make your corporate event a success 
              with our professional catering services throughout Greater Lansing.
            </p>
            <BookCta title="" ctaText="Contact Us" subtitle="" />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CorporateServices;
