
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import BookCta from '@/components/ui/book-cta/BookCta';
import { CircleDot } from 'lucide-react';

const AboutUs = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero title="Our Story" subtitle="ABOUT MORTON'S FINE CATERING" imageUrl="https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height="min-h-[60vh]" />
        
        <section className="py-20 bg-rich-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title">A Heritage of Excellence</h2>
                <div className="space-y-6 text-gray-300">
                  <p>What started as a few small events for friends and family quickly grew into one of Lansing's most trusted names in catering. Over the years, we've served weddings, corporate galas, backyard gatherings, and everything in between—always with the same care, creativity, and commitment to quality.</p>
                  <p>We believe that every event is an opportunity to make someone's day. Whether we're plating an elegant five-course dinner or delivering a crowd-pleasing buffet, our focus is always the same: fresh ingredients, flawless presentation, and service that goes above and beyond.</p>
                  
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold rounded-lg"></div>
                <img src="https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Elegant catering setup" className="w-full h-auto rounded-lg shadow-2xl" />
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
                  <img src="https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="William Morton" className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">Beth Morton</h3>
                <p className="text-gold mb-4">Owner & Executive Chef</p>
                <p className="text-gray-300">Trained in both fine dining and comfort food, bringing over 15 years of culinary experience to the table.</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img src="https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sophia Chen" className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">Sarah Williams</h3>
                <p className="text-gold mb-4">Events Coordinator</p>
                <p className="text-gray-300">Your go-to person for logistics, timelines, and those "just one more question" emails.</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img src="https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Marcus Johnson" className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">Catering Team</h3>
                <p className="text-gold mb-4">Service Staff</p>
                <p className="text-gray-300">Our seasoned team of prep cooks, servers, and bartenders who bring every event to life.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-rich-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Our Philosophy" className="w-full h-auto rounded-lg shadow-2xl" />
              </div>
              <div>
                <h2 className="section-title">Mission & Values</h2>
                <div className="space-y-8 text-gray-300">
                  <p className="text-lg">
                    We're here to serve more than just meals—we serve memories. Our mission is to create customized culinary experiences that reflect your style, exceed your expectations, and leave a lasting impression on everyone who attends.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-white">
                          <CircleDot className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gold mb-2">Hospitality First</h3>
                        <p>Every guest deserves to feel welcome, well-fed, and cared for.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-white">
                          <CircleDot className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gold mb-2">Culinary Excellence</h3>
                        <p>We never cut corners. Our ingredients are fresh, our flavors bold, and our standards high.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-white">
                          <CircleDot className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gold mb-2">Community Connection</h3>
                        <p>As a locally owned business, we're proud to support local farms, vendors, and events.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-white">
                          <CircleDot className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-gold mb-2">Sustainability</h3>
                        <p>From composting kitchen waste to using eco-friendly packaging, we work to reduce our footprint.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <BookCta title="Experience the Morton's Difference" subtitle="Let our team of experienced professionals create an unforgettable culinary experience for your next event." />
      </main>
      
      <Footer />
    </div>;
};
export default AboutUs;
