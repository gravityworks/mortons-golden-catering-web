
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import BookCta from '@/components/ui/book-cta/BookCta';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Our Story"
          subtitle="ABOUT MORTON'S FINE CATERING"
          imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          height="min-h-[60vh]"
        />
        
        <section className="py-20 bg-rich-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title">A Heritage of Excellence</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Founded in 1995 by Chef William Morton, Morton's Fine Catering began with a simple mission: 
                    to provide restaurant-quality dining experiences at any venue. What started as a small operation 
                    has grown into one of the region's premier catering companies, while maintaining the personal touch 
                    and attention to detail that set us apart from the beginning.
                  </p>
                  <p>
                    Our culinary approach blends classic techniques with contemporary innovation, creating 
                    memorable dishes that delight the palate while honoring the traditions of fine dining. 
                    We source the highest quality ingredients from local producers whenever possible, 
                    ensuring freshness and supporting our community.
                  </p>
                  <p>
                    While our menus and presentations have evolved over the years, our commitment to 
                    exceptional service has remained constant. Every member of our team, from our 
                    executive chef to our service staff, is dedicated to exceeding your expectations 
                    and making your event truly special.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Chef preparing food" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <h2 className="section-title text-center mb-16">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                    alt="William Morton" 
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">William Morton</h3>
                <p className="text-gold mb-4">Founder & Executive Chef</p>
                <p className="text-gray-300">
                  With over 30 years of culinary experience, Chef Morton brings his passion for 
                  exceptional food and impeccable service to every event we cater.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                    alt="Sophia Chen" 
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">Sophia Chen</h3>
                <p className="text-gold mb-4">Events Director</p>
                <p className="text-gray-300">
                  Sophia's meticulous planning and creative vision ensure that every detail of your 
                  event is thoughtfully executed and perfectly aligned with your vision.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                    alt="Marcus Johnson" 
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">Marcus Johnson</h3>
                <p className="text-gold mb-4">Head of Operations</p>
                <p className="text-gray-300">
                  Marcus oversees the logistics of our catering services, ensuring seamless execution 
                  and the highest standards of quality at every event we serve.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-rich-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Our Philosophy" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="section-title">Our Philosophy</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    At Morton's Fine Catering, we believe that exceptional food is the foundation of 
                    any memorable event. We approach each menu as an opportunity to create a unique 
                    culinary experience that reflects your personal style and vision.
                  </p>
                  <p>
                    Our commitment to quality extends beyond the food to every aspect of our service. 
                    From the initial consultation to the final cleanup, we pay meticulous attention to 
                    detail, ensuring that your event unfolds flawlessly and exceeds your expectations.
                  </p>
                  <p>
                    We are proud to be a trusted partner for life's most important occasions, and we 
                    take that responsibility seriously. Our team works tirelessly to create experiences 
                    that leave lasting impressions and bring your vision to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <BookCta 
          title="Experience the Morton's Difference"
          subtitle="Let our team of experienced professionals create an unforgettable culinary experience for your next event."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
