
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import BookCta from '@/components/ui/book-cta/BookCta';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

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

// Appetizer menu categories and items
type AppetizersCategory = {
  title: string;
  items: {
    name: string;
    description: string;
    price?: string;
    dietaryInfo?: string[];
  }[];
};

const appetizersMenu: AppetizersCategory[] = [
  {
    title: "Fruits and Cheese",
    items: [
      {
        name: "Fresh Fruit Display",
        description: "Seasonal fruits and berries, artfully presented",
        price: "$80",
        dietaryInfo: ["vegan", "gf"]
      },
      {
        name: "Artisan Cheese Board",
        description: "Wedges of specialty cheeses, with flatbread and crackers",
        price: "$80",
        dietaryInfo: ["v", "gf"]
      },
      {
        name: "Baked Brie w/Raspberry",
        description: "Large wheel of brie baked in puff pastry, with raspberry jam, flatbreads & crackers",
        price: "$70",
        dietaryInfo: ["v"]
      },
      {
        name: "Cheese and Crackers",
        description: "Cubed cheddar, Swiss, pepper jack, dill havarti, or Gouda",
        price: "$65",
        dietaryInfo: ["v", "gf"]
      }
    ]
  },
  {
    title: "Dips and Spreads",
    items: [
      {
        name: "Buffalo Chicken Dip",
        description: "Like a hot wing, but in dip form! Corn chips and celery sticks",
        price: "$85",
        dietaryInfo: ["gf"]
      },
      {
        name: "Caramelized Onion Dip",
        description: "with kettle chips",
        price: "$60",
        dietaryInfo: ["v", "gf"]
      },
      {
        name: "Hummus and Pita",
        description: "Traditional garlic, lemon, tahini, chick peas and olive oil, house made pita crisps",
        price: "$60",
        dietaryInfo: ["vegan", "gf"]
      },
      {
        name: "Pimento Cheese Dip",
        description: "Southern inspired cheese dip with pimento peppers, served with pretzels",
        price: "$75",
        dietaryInfo: ["v"]
      },
      {
        name: "Spinach and Artichoke Dip",
        description: "Served warm with house made pita crisps",
        price: "$85",
        dietaryInfo: ["v", "gf"]
      },
      {
        name: "Smoked Whitefish or Salmon Pate",
        description: "Cream cheese, capers, and lemon with crackers or canapes",
        price: "$85",
        dietaryInfo: ["v", "gf"]
      }
    ]
  },
  {
    title: "Apps with Snap",
    items: [
      {
        name: "Asparagus Spears",
        description: "Grilled, with lemon vinaigrette",
        price: "$60",
        dietaryInfo: ["vegan", "gf"]
      },
      {
        name: "Roasted Carrots",
        description: "Roasted and chilled, topped with spiced seed and nut brittle, lemon tahini sauce",
        price: "$80",
        dietaryInfo: ["vegan", "gf"]
      },
      {
        name: "Vegetable Crudités",
        description: "Fresh seasonal vegetables with our signature Green Goddess dip or Dill Ranch Dip",
        price: "$65",
        dietaryInfo: ["v", "gf"]
      },
      {
        name: "Pickle Board",
        description: "Pickled beets, artichokes, mini gherkins, pickled vegetables, peppadew peppers, mixed olives",
        price: "$75",
        dietaryInfo: ["vegan", "gf"]
      }
    ]
  },
  {
    title: "Platters",
    items: [
      {
        name: "Mezze Platter",
        description: "Hummus, baba ghanoush, vegetarian grape leaves, falafel, feta, pickled turnips, olives, signature pita crisps",
        price: "$160",
        dietaryInfo: ["vegan", "gf", "df options"]
      },
      {
        name: "Roasted and Grilled Vegetable Display",
        description: "Marinated, seasoned, grilled and chilled, with asparagus, zucchini, squash (seasonal), peppers and portobello mushrooms",
        price: "$100",
        dietaryInfo: ["vegan", "gf"]
      },
      {
        name: "Charcuterie",
        description: "Chef's special selection of cured meats, stone-ground mustard, nuts, petit pickles, pickled red onion, toasts",
        price: "$90",
        dietaryInfo: ["df", "gf options"]
      },
      {
        name: "Smoked Salmon Platter",
        description: "with capers, red onion, chopped egg, tomato, dill ranch and crackers",
        price: "$135",
        dietaryInfo: ["df", "gf"]
      },
      {
        name: "Whole Beef Tenderloin Platter",
        description: "Chilled and sliced grilled beef tenderloin with rolls, horseradish cream and onion straws",
        price: "Market Price",
        dietaryInfo: ["df", "gf options"]
      },
      {
        name: "Chilled Beef Platter",
        description: "Grilled, roasted, chilled, and sliced end-cut tenderloin, served with rolls and horseradish cream",
        price: "$160",
        dietaryInfo: ["df", "gf options"]
      }
    ]
  },
  {
    title: "Stations",
    items: [
      {
        name: "Mashed Potato Bar",
        description: "Mashed yukon gold potatoes with toppings; shredded cheddar, gorgonzola, sour cream, bacon, crispy onion straws, steamed broccoli, cracked pepper",
        price: "$300"
      },
      {
        name: "Mac n' Cheese Bar",
        description: "Johnny's signature mac n' cheese with toppings: bacon, parmesan, potato chips, jalapeños, diced peppers, and hot sauce",
        price: "$300"
      }
    ]
  },
  {
    title: "Canapés, Crostinis, & Crisps",
    items: [
      {
        name: "Phyllo Canapés",
        description: "Brie, walnut and pear; or chevre with basil and tomato; or caramelized onion and boursin cheese",
        price: "$85",
        dietaryInfo: ["v"]
      },
      {
        name: "Asparagus Crostini",
        description: "Roasted shaved asparagus, ricotta, fresh dill and lemon zest on crostini",
        price: "$85",
        dietaryInfo: ["v"]
      },
      {
        name: "Roasted Tomato Crostini",
        description: "with za'atar and labne",
        price: "$85",
        dietaryInfo: ["v"]
      },
      {
        name: "Traditional Bruschetta",
        description: "Fresh tomatoes, cucumber, basil, and red onion, with crostini (crostini contains gluten and parmesan)",
        price: "$65",
        dietaryInfo: ["vegan", "gf"]
      },
      {
        name: "Michigan White Bean Bruschetta",
        description: "Roasted red peppers, fennel, fresh herbs and olive oil, crostini (crostini contains gluten and parmesan)",
        price: "$70",
        dietaryInfo: ["vegan", "gf"]
      },
      {
        name: "Potato Skins w/Bacon",
        description: "Halved mini red skins, cheddar cheese, scallions and bacon",
        price: "$75"
      },
      {
        name: "Boursin Stuffed Mushrooms",
        description: "Vegetarian blend of spinach and boursin cheese",
        price: "$70",
        dietaryInfo: ["v"]
      }
    ]
  },
  {
    title: "Meat Bites",
    items: [
      {
        name: "Bourbon Meatballs",
        description: "Browned meatballs tossed with homemade bourbon barbecue sauce",
        price: "$90",
        dietaryInfo: ["df"]
      },
      {
        name: "Beef Wellington",
        description: "Petite pastry puff with beef, peppercorn horsey cream on the side",
        price: "$150"
      },
      {
        name: "Tenderloin Crostini w/Chimichurri",
        description: "Thinly sliced beef tenderloin with chimichurri, arugula, shaved parmesan on toasted baguette",
        price: "$130",
        dietaryInfo: ["df"]
      },
      {
        name: "Chicken Rumaki",
        description: "Bacon wrapped chicken in our special marinade, sweet chili glaze",
        price: "$80",
        dietaryInfo: ["gf", "df"]
      },
      {
        name: "Sesame Chicken Kebab",
        description: "Marinated chicken in ginger, sesame, and soy, hint of brown sugar (40 pieces)",
        price: "$95",
        dietaryInfo: ["halal", "gf", "df"]
      },
      {
        name: "Southwest Chicken Eggroll",
        description: "Spicy blend of chicken, black beans, and cheese wrapped in a crispy flour tortilla, Green Chile Ranch dipping sauce",
        price: "$100"
      },
      {
        name: "Pigs n' a Blanket",
        description: "Mini hot dogs wrapped in pastry, honey Dijonniase dipping sauce",
        price: "$90",
        dietaryInfo: ["df"]
      },
      {
        name: "Prosciutto",
        description: "Wrapped melon and/or asparagus tips",
        price: "$80",
        dietaryInfo: ["gf", "df"]
      },
      {
        name: "BBQ Wings",
        description: "Johnny's homemade sweet and spicy barbecue sauce, Ranch on the side",
        price: "$90",
        dietaryInfo: ["gf"]
      }
    ]
  },
  {
    title: "Vegetarian & Vegan Bites",
    items: [
      {
        name: "Mac n' Cheese Bites",
        description: "Mac n' cheese wrapped in golden fried crispy goodness",
        price: "$90",
        dietaryInfo: ["v"]
      },
      {
        name: "Spanikopita",
        description: "Mini spinach pie in phyllo",
        price: "$90",
        dietaryInfo: ["v"]
      },
      {
        name: "Veggie Potato Skins",
        description: "Halved mini red skins, cheddar cheese, scallions",
        price: "$75",
        dietaryInfo: ["v"]
      },
      {
        name: "Potstickers",
        description: "Shiitake mushroom, carrot, and bok choy, sesame soy sauce on the side",
        price: "$95",
        dietaryInfo: ["vegan"]
      },
      {
        name: "Spring Rolls",
        description: "Vegetarian, with dipping sauce",
        price: "$90",
        dietaryInfo: ["vegan"]
      }
    ]
  },
  {
    title: "Seafood Bites",
    items: [
      {
        name: "Coconut Shrimp",
        description: "Coconut crusted shrimp with a spicy orange marmalade",
        price: "$100",
        dietaryInfo: ["df"]
      },
      {
        name: "Lox Canape",
        description: "Smoked salmon, whipped chevre, cucumber garnish",
        price: "$85"
      },
      {
        name: "Bang Bang Shrimp",
        description: "with crispy panko crusted shrimp, bang bang sauce on the side",
        price: "$95",
        dietaryInfo: ["df"]
      },
      {
        name: "Shrimp Cocktail",
        description: "Chilled jumbo tail-on shrimp, with lemon and cocktail sauce",
        price: "$100",
        dietaryInfo: ["gf", "df"]
      }
    ]
  },
  {
    title: "Sliders & Mini Buns",
    items: [
      {
        name: "Aloha Chicken Slider",
        description: "Shredded chicken breast with a sweet soy bbq sauce, shredded muenster blend cheese, pineapple, pickled red onions and fresh cilantro (40 pieces)",
        price: "$160"
      },
      {
        name: "French Onion Beef Slider",
        description: "Tender sliced beef, creamy Swiss, caramelized onions, on a mini bun (40 pieces)",
        price: "$160"
      },
      {
        name: "Portobello Mushroom Slider",
        description: "Grilled portobello, roasted red peppers, provolone, fresh basil aioli, on a mini bun (40 pieces)",
        price: "$150",
        dietaryInfo: ["v"]
      },
      {
        name: "Silver Dollar Sandwiches",
        description: "Chef's selection of deli meats, cheese, & special sauces on a mini bun (48 pieces)",
        price: "$150"
      },
      {
        name: "Veggie Pinwheel",
        description: "Olives, artichoke, pepperoncini, sun-dried tomato pesto spread, arugula (48 pieces)",
        price: "$75"
      }
    ]
  },
  {
    title: "Crunchies",
    items: [
      {
        name: "Asian Party Mix",
        description: "with chex mix, rice crackers, and wasabi peas",
        price: "$65"
      },
      {
        name: "Maple Caramel Corn",
        description: "Espelette pepper, toasted pepitas, self-serve $50, or in bamboo cone",
        price: "$75",
        dietaryInfo: ["gf"]
      },
      {
        name: "Rosemary Spiced Cashews",
        description: "Roasted in butter, tossed with fresh rosemary, self-serve or in bamboo cone",
        price: "$50, $75",
        dietaryInfo: ["gf"]
      }
    ]
  }
];

// Sample data for other menu tabs (to be filled with real data later)
const entreesMenu = [
  {
    title: "Signature Entrées",
    items: [
      {
        name: "Herb-Crusted Filet Mignon",
        description: "Prime beef tenderloin with herb crust, served with truffle mashed potatoes and seasonal vegetables",
        price: "$45 per person"
      },
      {
        name: "Seared Sea Bass",
        description: "Fresh sea bass with lemon beurre blanc, wild rice pilaf, and grilled asparagus",
        price: "$42 per person"
      }
    ]
  }
];

const dessertsMenu = [
  {
    title: "Sweet Endings",
    items: [
      {
        name: "Chocolate Trio",
        description: "Dark chocolate mousse, milk chocolate ganache tart, and white chocolate covered strawberry",
        price: "$12 per person"
      },
      {
        name: "Seasonal Fruit Crisp",
        description: "Warm seasonal fruit with oat streusel topping and vanilla bean ice cream",
        price: "$10 per person"
      }
    ]
  }
];

const Menus = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  
  const filteredMenuItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.categories.includes(activeCategory));
    
  const featuredItems = menuItems.filter(item => item.featured);

  // Helper function to render the dietary info badges
  const renderDietaryInfo = (info?: string[]) => {
    if (!info || info.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-1 mt-2">
        {info.map((item, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-0.5 rounded-full bg-rich-gray border border-gold/40 text-gold"
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  // Function to render a menu category section
  const renderMenuCategory = (category: AppetizersCategory) => (
    <div key={category.title} className="mb-10">
      <h3 className="text-2xl font-playfair font-semibold text-white mb-4 border-b border-gold/30 pb-2">
        [ {category.title} ]
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.items.map((item, index) => (
          <div key={index} className="bg-rich-gray border border-gray-800 rounded-lg p-4 hover:border-gold/30 transition-all duration-300">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-xl font-playfair font-semibold text-gold">{item.name}</h4>
              {item.price && <span className="text-white font-inter font-medium">{item.price}</span>}
            </div>
            <p className="text-gray-300 text-sm mb-2">{item.description}</p>
            {renderDietaryInfo(item.dietaryInfo)}
          </div>
        ))}
      </div>
    </div>
  );

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
            
            <div className="bg-rich-gray/50 border border-gold/20 rounded-lg p-8 mb-16">
              <Tabs defaultValue="appetizers" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-rich-black/60 p-1 border border-gold/30">
                    <TabsTrigger 
                      value="appetizers" 
                      className="px-8 py-3 data-[state=active]:bg-gold data-[state=active]:text-black font-medium"
                    >
                      Appetizers
                    </TabsTrigger>
                    <TabsTrigger 
                      value="entrees"
                      className="px-8 py-3 data-[state=active]:bg-gold data-[state=active]:text-black font-medium"
                    >
                      Entrées
                    </TabsTrigger>
                    <TabsTrigger 
                      value="desserts"
                      className="px-8 py-3 data-[state=active]:bg-gold data-[state=active]:text-black font-medium"
                    >
                      Desserts
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="appetizers" className="p-2">
                  <div className="mb-6 text-center max-w-3xl mx-auto">
                    <p className="text-gray-300 mb-3">
                      Platters and Party Trays are priced to serve 40-50. We recommend a minimum of 1 order per 50 guests. Overall quantities depend on the size and style of your event.
                    </p>
                    <p className="text-gray-300 italic mb-6">
                      Minimum order, delivery, and service fee will apply
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gold inline-block"></span>
                        <span className="text-sm text-gray-300">vegan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gold inline-block"></span>
                        <span className="text-sm text-gray-300">v-vegetarian</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gold inline-block"></span>
                        <span className="text-sm text-gray-300">gf-gluten-friendly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gold inline-block"></span>
                        <span className="text-sm text-gray-300">df-dairy-free</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {appetizersMenu.map(category => renderMenuCategory(category))}
                  </div>
                </TabsContent>
                
                <TabsContent value="entrees" className="p-2">
                  <div className="mb-6 text-center max-w-3xl mx-auto">
                    <p className="text-gray-300 mb-6">
                      Our entrée selections showcase the finest ingredients prepared with care by our expert chefs.
                    </p>
                  </div>
                  <div>
                    {entreesMenu.map(category => renderMenuCategory(category))}
                  </div>
                </TabsContent>
                
                <TabsContent value="desserts" className="p-2">
                  <div className="mb-6 text-center max-w-3xl mx-auto">
                    <p className="text-gray-300 mb-6">
                      Complete your dining experience with our exquisite dessert offerings.
                    </p>
                  </div>
                  <div>
                    {dessertsMenu.map(category => renderMenuCategory(category))}
                  </div>
                </TabsContent>
              </Tabs>
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
