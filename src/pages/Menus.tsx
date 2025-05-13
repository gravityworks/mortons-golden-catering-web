
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import BookCta from '@/components/ui/book-cta/BookCta';
import { Button } from '@/components/ui/button';

type MenuCategory = 'all' | 'wedding' | 'corporate' | 'campus';

type MenuItem = {
  name: string;
  description: string;
  price?: string;
  imageUrl: string;
  categories: MenuCategory[];
  featured?: boolean;
};

// Sample menu items data
const menuItems: MenuItem[] = [
  {
    name: "Herb-Crusted Filet Mignon",
    description: "Prime beef tenderloin with herb crust, served with truffle mashed potatoes and seasonal vegetables",
    price: "$45 per person",
    imageUrl: "https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['wedding', 'corporate'],
    featured: true,
  },
  {
    name: "Seared Sea Bass",
    description: "Fresh sea bass with lemon beurre blanc, wild rice pilaf, and grilled asparagus",
    price: "$42 per person",
    imageUrl: "https://images.pexels.com/photos/31985706/pexels-photo-31985706/free-photo-of-elegant-outdoor-wedding-reception-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ['wedding', 'corporate', 'campus'],
    featured: true,
  },
  {
    name: "Roasted Vegetable Tart",
    description: "Seasonal vegetables in a flaky pastry crust with herbed goat cheese and balsamic reduction",
    price: "$32 per person",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    categories: ['wedding', 'corporate', 'campus'],
  },
  {
    name: "Artisanal Cheese & Charcuterie Station",
    description: "Selection of fine cheeses, cured meats, house-made preserves, and artisan breads",
    price: "$18 per person",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    categories: ['wedding', 'corporate', 'campus'],
  },
  {
    name: "Seafood Raw Bar",
    description: "Fresh oysters, shrimp, crab claws, and lobster tails with classic accompaniments",
    price: "$MP",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    categories: ['wedding', 'corporate'],
    featured: true,
  },
  {
    name: "Executive Lunch Buffet",
    description: "Gourmet sandwiches, salads, fresh fruit, and dessert bites, perfect for corporate meetings",
    price: "$28 per person",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    categories: ['corporate', 'campus'],
  },
  {
    name: "Student-Friendly Taco Bar",
    description: "Build-your-own taco station with variety of proteins, toppings, and house-made salsas",
    price: "$22 per person",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    categories: ['campus'],
  },
  {
    name: "Graduation Reception Package",
    description: "Elegant passed hors d'oeuvres, celebration cake, and sparkling toast for graduates and families",
    price: "$35 per person",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    categories: ['campus'],
    featured: true,
  },
];

const Menus = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  
  const filteredMenuItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.categories.includes(activeCategory));
    
  const featuredItems = menuItems.filter(item => item.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Our Menus"
          subtitle="MORTON'S FINE CATERING"
          description="Discover our chef-driven menus that blend classic comfort with creative innovation, customizable for your unique event."
          imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          height="min-h-[60vh]"
        />
        
        <section className="py-20 bg-rich-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="section-title">Culinary Excellence</h2>
              <p className="text-gray-300 text-lg">
                Our menus are crafted by experienced chefs who blend classic techniques with innovative 
                approaches to create memorable dining experiences for any occasion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
              {featuredItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-rich-gray border border-gold/20 rounded-lg overflow-hidden hover:border-gold/60 transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gold px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold">Featured</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-playfair font-semibold text-white">{item.name}</h3>
                      {item.price && <span className="text-gold font-semibold">{item.price}</span>}
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto mb-10">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6 text-center">Browse Our Menus By Event Type</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Button 
                  className={`px-6 py-3 rounded-full ${activeCategory === 'all' ? 'bg-gold text-white' : 'bg-rich-gray text-white hover:bg-gold/20'}`}
                  onClick={() => setActiveCategory('all')}
                >
                  All Menus
                </Button>
                <Button 
                  className={`px-6 py-3 rounded-full ${activeCategory === 'wedding' ? 'bg-gold text-white' : 'bg-rich-gray text-white hover:bg-gold/20'}`}
                  onClick={() => setActiveCategory('wedding')}
                >
                  Wedding
                </Button>
                <Button 
                  className={`px-6 py-3 rounded-full ${activeCategory === 'corporate' ? 'bg-gold text-white' : 'bg-rich-gray text-white hover:bg-gold/20'}`}
                  onClick={() => setActiveCategory('corporate')}
                >
                  Corporate
                </Button>
                <Button 
                  className={`px-6 py-3 rounded-full ${activeCategory === 'campus' ? 'bg-gold text-white' : 'bg-rich-gray text-white hover:bg-gold/20'}`}
                  onClick={() => setActiveCategory('campus')}
                >
                  Campus
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMenuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-rich-gray border border-gray-800 rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300"
                >
                  <div className="h-48">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-playfair font-semibold text-white">{item.name}</h3>
                      {item.price && <span className="text-gold font-semibold text-sm">{item.price}</span>}
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <p className="text-gray-300 mb-6">
                This is just a sampling of our offerings. We specialize in custom menus tailored to your specific event and preferences.
              </p>
              <Link to="/contact" className="btn-gold">
                Request Custom Menu
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Customizable Menus" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="section-title">Customizable For Your Event</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Every menu at Morton's Fine Catering is fully customizable to suit your preferences, 
                    dietary requirements, and event style. Our culinary team works closely with you to 
                    create a dining experience that perfectly complements your occasion.
                  </p>
                  <p>
                    From elegant plated dinners to interactive food stations, we offer a variety of 
                    service styles to match the flow and feel of your event. Our expert catering consultants 
                    can help you select the perfect approach for your unique celebration.
                  </p>
                  <p>
                    We pride ourselves on accommodating dietary restrictions and preferences, ensuring that 
                    all of your guests enjoy an exceptional dining experience regardless of their needs.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="btn-gold">
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <BookCta 
          title="Ready to Create Your Custom Menu?"
          subtitle="Contact our culinary team today to begin designing the perfect menu for your upcoming event."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Menus;
