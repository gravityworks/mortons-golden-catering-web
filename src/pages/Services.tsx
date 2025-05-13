
import React from 'react';
import { Cake, Briefcase, Users, Gift, Coffee } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import BookCta from '@/components/ui/book-cta/BookCta';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Our Services"
          subtitle="MORTON'S FINE CATERING"
          description="At Morton's we believe that great food brings people together—and every event deserves a menu worth remembering. Whether you're planning an elegant wedding or a casual gathering at home, our team is here to deliver exceptional flavor, flawless service, and a stress-free experience from start to finish."
          imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          height="min-h-[60vh]"
        />
        
        <section className="py-16 bg-rich-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Cake className="text-gold h-8 w-8" />
                  <h2 className="text-3xl font-playfair font-bold text-white">Weddings</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Your big day deserves nothing less than perfection. From cocktail hour to 
                    cake cutting, we work closely with you (and your planner) to craft a 
                    wedding menu that reflects your taste and style. Whether it's a plated 
                    dinner, buffet, or family-style service, we'll help make your celebration 
                    unforgettable—with artful presentation, seamless timing, and personal 
                    touches throughout.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Services include:</h3>
                  <ul className="space-y-2">
                    {["Custom menu consultation and tastings", "Full-service staff and bar options", "On-site coordination and setup", "Rentals, linens, and dessert stations"].map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="bg-gold w-3 h-3 rounded-full"></div>
                        </div>
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1470024646345-85f82436fbb4" 
                  alt="Wedding Catering" 
                  className="w-full h-auto rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205" 
                  alt="Corporate Events Catering" 
                  className="w-full h-auto rounded-lg shadow-2xl object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4">
                  <Briefcase className="text-gold h-8 w-8" />
                  <h2 className="text-3xl font-playfair font-bold text-white">Corporate Events</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    From quarterly meetings to full-scale galas, we help businesses 
                    impress with fresh high-quality food and reliable service. We offer a 
                    range of options from executive lunches and boxed meals to 
                    networking receptions and holiday parties. Always professional, always 
                    on time.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Popular Corporate Services:</h3>
                  <ul className="space-y-2">
                    {["Breakfasts, lunches, and all-day service", "Individually packaged or buffet options", "Dietary accommodations", "Drop-off or staffed service"].map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="bg-gold w-3 h-3 rounded-full"></div>
                        </div>
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-rich-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Private Parties */}
              <div className="p-8 border border-gray-800 rounded-lg hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="text-gold h-7 w-7" />
                  <h2 className="text-2xl font-playfair font-bold text-white">Private Parties</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Celebrating a birthday, retirement, or anniversary? Let us handle the food while you enjoy your guests. We'll design a menu to match your vision and bring the same care and quality to your backyard as we do to ballrooms.
                </p>
                
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Perfect For:</h3>
                <ul className="space-y-2">
                  {["Backyard barbecues", "Anniversary dinners", "Cocktail parties", "Holiday gatherings"].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-3 h-3 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Special Occasions */}
              <div className="p-8 border border-gray-800 rounded-lg hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Gift className="text-gold h-7 w-7" />
                  <h2 className="text-2xl font-playfair font-bold text-white">Special Occasions</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Life's milestones deserve something special. Whether it's a graduation open house, baby shower brunch, or rehearsal dinner, our team creates festive menus with thoughtful details to match your theme and space.
                </p>
                
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Occasions We Love to Cater:</h3>
                <ul className="space-y-2">
                  {["Graduations", "Baby & Bridal Showers", "Family Reunions", "Engagement Parties"].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-3 h-3 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Drop-Off Catering */}
              <div className="p-8 border border-gray-800 rounded-lg hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Coffee className="text-gold h-7 w-7" />
                  <h2 className="text-2xl font-playfair font-bold text-white">Drop-Off Catering</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Need great food without the full setup? Our drop-off catering service is perfect for smaller events, business meetings, or casual get-togethers. We prepare everything fresh, deliver it right on time, and include everything you need to serve with ease.
                </p>
                
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Why Clients Love It:</h3>
                <ul className="space-y-2">
                  {["Fast, reliable delivery", "Easy setup with chafing racks and utensils", "Freshly prepared with the same quality and care", "Perfect for meetings, trainings, or casual events"].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-3 h-3 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-rich-gray border-t border-gold/20">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              Contact us for a custom quote or to schedule a consultation. We 
              can't wait to help you bring your event to life—one bite at a time.
            </p>
            <BookCta 
              title=""
              ctaText="Contact Us Now"
              subtitle=""
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
