import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you for your inquiry. Our team will contact you shortly."
    });
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero title="Contact Us" subtitle="MORTON'S FINE CATERING" imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" height="min-h-[50vh]" />
        
        <section className="py-20 bg-rich-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="section-title">Get In Touch</h2>
                <p className="text-gray-300 mb-10">
                  Whether you're planning a wedding, corporate function, or campus event, our team is ready 
                  to help you create an exceptional culinary experience. Complete the form below or reach out 
                  directly, and we'll respond promptly to discuss your needs.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <Phone size={24} className="text-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-gray-300">517-339-7255</p>
                      <p className="text-gray-500 text-sm">Monday-Friday, 9am-5pm PT</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-white mb-1">Email Us</h3>
                      <p className="text-gray-300">info@mortonsfinecatering.com</p>
                      <p className="text-gray-500 text-sm">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={24} className="text-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-white mb-1">Our Address</h3>
                      <p className="text-gray-300">2405 E Michigan Ave</p>
                      <p className="text-gray-300"> Lansing, MI 48912</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-rich-gray p-8 rounded-lg border border-gold/20">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">Book Your Event</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">
                        Name
                      </label>
                      <input type="text" id="name" className="w-full bg-rich-black text-white px-4 py-3 rounded-md border border-gray-700 focus:border-gold focus:outline-none" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        Email
                      </label>
                      <input type="email" id="email" className="w-full bg-rich-black text-white px-4 py-3 rounded-md border border-gray-700 focus:border-gold focus:outline-none" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">
                        Phone
                      </label>
                      <input type="tel" id="phone" className="w-full bg-rich-black text-white px-4 py-3 rounded-md border border-gray-700 focus:border-gold focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-gray-300 mb-2">
                        Event Type
                      </label>
                      <select id="eventType" className="w-full bg-rich-black text-white px-4 py-3 rounded-md border border-gray-700 focus:border-gold focus:outline-none">
                        <option value="">Select Event Type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="campus">Campus Function</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="eventDate" className="block text-gray-300 mb-2">
                      Event Date
                    </label>
                    <input type="date" id="eventDate" className="w-full bg-rich-black text-white px-4 py-3 rounded-md border border-gray-700 focus:border-gold focus:outline-none" />
                  </div>
                  
                  <div>
                    <label htmlFor="guestCount" className="block text-gray-300 mb-2">
                      Estimated Guest Count
                    </label>
                    <input type="number" id="guestCount" className="w-full bg-rich-black text-white px-4 py-3 rounded-md border border-gray-700 focus:border-gold focus:outline-none" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Tell us about your event
                    </label>
                    <textarea id="message" rows={5} className="w-full bg-rich-black text-white px-4 py-3 rounded-md border border-gray-700 focus:border-gold focus:outline-none"></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" className="btn-gold w-full">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <h2 className="section-title text-center mb-16">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">How far in advance should I book your services?</h3>
                <p className="text-gray-300">
                  We recommend booking at least 3-6 months in advance for larger events like weddings, 
                  and 2-4 weeks for smaller corporate functions, depending on the season.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">Do you offer tastings before booking?</h3>
                <p className="text-gray-300">
                  Yes, we offer menu tastings for weddings and large events after an initial consultation. 
                  Tastings are complimentary for weddings with a minimum guest count and a signed contract.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">What is your pricing structure?</h3>
                <p className="text-gray-300">
                  Our pricing varies based on menu selection, service style, staffing requirements, and additional 
                  services needed. We provide detailed proposals after an initial consultation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">Can you accommodate dietary restrictions?</h3>
                <p className="text-gray-300">
                  Absolutely. We can accommodate a wide range of dietary needs, including vegetarian, vegan, 
                  gluten-free, and allergy-specific restrictions. Just let us know during the planning process.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">Do you provide bar service and alcohol?</h3>
                <p className="text-gray-300">
                  Yes, we offer full bar service including bartenders. Depending on your location and licensing 
                  requirements, we can either provide alcohol or work with your purchased beverages.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">What is your cancellation policy?</h3>
                <p className="text-gray-300">
                  Our cancellation policy varies depending on the event size and timing. Details are outlined 
                  in your contract, but generally deposits are non-refundable within 60 days of the event.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Contact;