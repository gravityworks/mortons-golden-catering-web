
import React from 'react';
import { Cake, Briefcase, Users, Gift, Coffee, Utensils, GlassWater, Table, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import BookCta from '@/components/ui/book-cta/BookCta';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Our Services"
          subtitle="MORTON'S FINE CATERING"
          description="At Morton's we believe that great food brings people together—and every event deserves a menu worth remembering. Whether you're planning an elegant wedding or a casual gathering at home, our team is here to deliver exceptional flavor, flawless service, and a stress-free experience from start to finish throughout Greater Lansing, Michigan."
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
                
                <div className="mt-8">
                  <Button asChild variant="default" className="bg-gold hover:bg-gold/90 text-black">
                    <Link to="/services/wedding">
                      Wedding Services
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/365b125b-bd32-4a64-a988-873a3727e69b.png" 
                  alt="Wedding table decoration with Mr & Mrs signs and floral arrangements" 
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
                
                <div className="mt-8">
                  <Button asChild variant="default" className="bg-gold hover:bg-gold/90 text-black">
                    <Link to="/services/corporate">
                      Corporate Event Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-rich-black">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Event Rentals</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We stock a full inventory of rental items for your event!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Silverware Card */}
              <Card className="bg-rich-gray border-gray-800 hover:border-gold/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Utensils className="h-6 w-6 text-gold" />
                    <CardTitle className="text-white text-xl">Silverware</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Salad Forks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Dinner Forks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Table Knives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Teaspoons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Demi-Tasse Spoons</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gold text-sm">$.50 per piece</p>
                </CardContent>
              </Card>
              
              {/* Glassware Card */}
              <Card className="bg-rich-gray border-gray-800 hover:border-gold/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GlassWater className="h-6 w-6 text-gold" />
                    <CardTitle className="text-white text-xl">Glassware</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Goblets - 25/rack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Champagne - 36/rack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Wine Glasses - 25/rack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Coffee Cups - 20/rack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Rocks/Highballs - 25/rack</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* China Card */}
              <Card className="bg-rich-gray border-gray-800 hover:border-gold/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Table className="h-6 w-6 text-gold" />
                    <CardTitle className="text-white text-xl">China</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Salad Plates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Dessert Plates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Bread and Butter Plates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Dinner Plates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Soup Cups or Bowls</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gold text-sm">$.50 per piece</p>
                </CardContent>
              </Card>
              
              {/* Linen Card */}
              <Card className="bg-rich-gray border-gray-800 hover:border-gold/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-gold" />
                    <CardTitle className="text-white text-xl">Linen Rental</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-2">Napkins - Variety of colors</p>
                  <p className="text-gold text-sm mb-4">$.75 each</p>
                  
                  <p className="font-medium">Table Cloths - White/Black/Ivory:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>81x81 square - $9</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>120x52 rectangle - $9</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>132x90 rectangle - $12</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="bg-gold w-2 h-2 rounded-full"></div>
                      </div>
                      <span>Floor length round - $15</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Event Staff Card */}
            <div className="mt-10">
              <Card className="bg-rich-gray border-gray-800 hover:border-gold/30 transition-all duration-300 max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center">Event Staff</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="text-center">
                    Bartenders and Servers are $25/hour, 2 hour minimum
                  </p>
                  <p className="text-center mt-4">
                    Looking for Tables, Tents, Chairs, Chair Covers or Special linens?<br />
                    We can refer you to a local vendor!
                  </p>
                </CardContent>
              </Card>
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
