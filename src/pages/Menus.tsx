
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BookCta from '@/components/ui/book-cta/BookCta';
import Testimonial from '@/components/ui/testimonial/Testimonial';
import FoodGallery from '@/components/ui/food-gallery/FoodGallery';

const Menus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Menus"
          subtitle="MORTON'S FINE CATERING"
          description="From elegant plated dinners to interactive stations and casual buffets, our culinary team crafts menus that showcase seasonal ingredients and global influences."
          imageUrl="/lovable-uploads/ea15893c-7cab-4191-921a-bb420fb56005.png"
          height="min-h-[60vh]"
        />
        
        <section className="py-16 bg-rich-black">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Sample Menus</h2>
              <p className="text-gray-300">
                Below are samples of our most popular menu options. All menus can be customized to your preferences, 
                dietary needs, and event style.
              </p>
            </div>
            
            <Tabs defaultValue="hors" className="w-full">
              <TabsList className="grid w-full md:grid-cols-4 bg-rich-gray border border-gold/30 rounded-lg h-auto">
                <TabsTrigger value="hors" className="py-3">Hors d'oeuvres</TabsTrigger>
                <TabsTrigger value="dinner" className="py-3">Plated Dinners</TabsTrigger>
                <TabsTrigger value="buffet" className="py-3">Buffet</TabsTrigger>
                <TabsTrigger value="dessert" className="py-3">Desserts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hors" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-white mb-6">Cold Hors d'oeuvres</h3>
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <div className="flex gap-3 mb-4">
                          <div>
                            <h4 className="text-xl font-playfair text-white">Passed Canapés</h4>
                            <p className="text-gold text-sm mt-1">$35 per dozen, minimum 3 dozen per selection</p>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Miniature crab cakes with lemon aioli</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Seared tuna on wonton crisp with wasabi cream</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Goat cheese and herb tartlets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Prosciutto-wrapped melon with balsamic glaze</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Deviled eggs with caviar</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <div className="flex gap-3 mb-4">
                          <div>
                            <h4 className="text-xl font-playfair text-white">Platters & Displays</h4>
                            <p className="text-gold text-sm mt-1">Priced per person, 25 person minimum</p>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Artisanal cheese board with dried fruits, nuts, and crackers - $8</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Crudité display with assorted dips - $6</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Charcuterie board with cured meats, pickled vegetables, and mustards - $12</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Seafood display with shrimp, oysters, and crab claws - $18</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Testimonial
                      className="mt-8"
                      compact={true}
                      quote="Morton's canapés were the highlight of our corporate event. The seared tuna on wonton crisp received so many compliments from our clients."
                      author="Sarah Johnson"
                      position="Event Coordinator, Tech Solutions Inc."
                    />
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img 
                        src="/lovable-uploads/747a761d-59d8-43a8-8ec3-2e3ef49c85ce.png" 
                        alt="Elegant wrap appetizers"
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-semibold text-white mb-6">Hot Hors d'oeuvres</h3>
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <div className="flex gap-3 mb-4">
                          <div>
                            <h4 className="text-xl font-playfair text-white">Passed Hot Items</h4>
                            <p className="text-gold text-sm mt-1">$40 per dozen, minimum 3 dozen per selection</p>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Bacon-wrapped scallops</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Wild mushroom and goat cheese tartlets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Lamb lollipops with mint pesto</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Chicken satay with peanut sauce</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Coconut shrimp with sweet chili sauce</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden mt-6">
                      <img 
                        src="/lovable-uploads/70c843ff-7e09-4a39-8cbb-3445782fadcd.png" 
                        alt="Charcuterie spread with meats and accompaniments"
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    <Testimonial
                      className="mt-8"
                      compact={true}
                      quote="The seafood display was absolutely spectacular. Our guests couldn't stop talking about the fresh oysters and jumbo shrimp. Morton's attention to detail is unmatched!"
                      author="Michael Reynolds"
                      position="Luxury Wedding Planner"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="dinner" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-white mb-6">Plated Dinner Menu</h3>
                    <p className="text-gray-300 mb-6">
                      Our plated dinners include artisan bread service, a first course, entrée with sides, and coffee & tea service.
                      Pricing starts at $65 per person.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">First Course (select one)</h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Seasonal greens with champagne vinaigrette, shaved parmesan and candied pecans</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Roasted butternut squash soup with creme fraiche and chives</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Heirloom tomato and burrata salad with basil oil and balsamic reduction</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">Entrées (select two for guests to choose)</h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Herb-crusted beef tenderloin with red wine reduction</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Pan-seared salmon with lemon dill sauce</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Roasted chicken breast with wild mushroom sauce</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Grilled vegetable wellington with tomato coulis (vegetarian)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Testimonial
                      className="mt-8"
                      compact={true}
                      quote="The herb-crusted beef tenderloin was cooked to absolute perfection. Morton's plated dinners were elegant, beautifully presented, and exceeded our expectations."
                      author="Jennifer & David Martinez"
                      position="Wedding Clients, May 2025"
                    />
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img 
                        src="/lovable-uploads/761d5e81-4b3c-4715-a21e-21626a8406c0.png" 
                        alt="Gourmet plated dinner with roasted vegetables and quinoa"
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">Sides (select two)</h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Herb-roasted fingerling potatoes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Wild rice pilaf with toasted almonds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Seasonal roasted vegetables</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Creamy parmesan polenta</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Grilled asparagus with lemon zest</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">Optional Enhancements</h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Intermezzo sorbet course - $4 per person</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Custom wine pairings - starting at $30 per person</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Passed dessert mignardises - $12 per person</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden mt-6">
                      <img 
                        src="/lovable-uploads/8dc5924d-5028-4413-a6f6-c4a9be8acdb3.png" 
                        alt="Gourmet crostini with rare beef and greens"
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    <Testimonial
                      className="mt-8"
                      compact={true}
                      quote="The seasonal roasted vegetables and herb-roasted fingerling potatoes complemented our entrées perfectly. Every dish was a work of art!"
                      author="Robert Chen"
                      position="Non-profit Gala Organizer"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="buffet" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-white mb-6">Buffet Menus</h3>
                    <p className="text-gray-300 mb-6">
                      Our buffet menus offer elegant yet approachable options that provide variety for your guests.
                      Pricing starts at $45 per person, 25 person minimum.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">Classic Buffet</h4>
                        <p className="text-gold text-sm mb-4">$48 per person</p>
                        
                        <h5 className="text-white font-medium mb-2">Salads (select two)</h5>
                        <ul className="space-y-2 text-gray-300 mb-4">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Classic Caesar salad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Mixed greens with assorted toppings and dressings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Mediterranean orzo pasta salad</span>
                          </li>
                        </ul>
                        
                        <h5 className="text-white font-medium mb-2">Entrées (select two)</h5>
                        <ul className="space-y-2 text-gray-300 mb-4">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Carved roast beef with horseradish cream</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Herb-roasted chicken</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Grilled salmon with citrus butter</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Vegetable lasagna</span>
                          </li>
                        </ul>
                        
                        <p className="text-gray-300">Includes artisan rolls, seasonal vegetables, choice of potato or rice, and coffee service</p>
                      </div>
                    </div>
                    
                    <Testimonial
                      className="mt-8"
                      compact={true}
                      quote="The Mediterranean buffet was a huge hit at our company party! The variety was impressive and accommodated all of our dietary preferences. The mezze display was particularly spectacular."
                      author="Lisa Thompson"
                      position="HR Director, Global Innovations"
                    />
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img 
                        src="/lovable-uploads/98b6fe0d-1a31-4839-a54e-e71d9494cf69.png" 
                        alt="Beautifully arranged catering buffet with salads"
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">Specialty Themed Buffets</h4>
                        
                        <h5 className="text-white font-medium mb-2">Mediterranean Table - $55 per person</h5>
                        <ul className="space-y-2 text-gray-300 mb-4">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Mezze display with hummus, baba ganoush, olives, and pita</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Greek salad with feta and kalamata olives</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Grilled chicken souvlaki and beef kofta</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Vegetable moussaka</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Lemon rice and roasted vegetables</span>
                          </li>
                        </ul>
                        
                        <h5 className="text-white font-medium mb-2">Pacific Rim - $58 per person</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Sushi display (California rolls, spicy tuna, vegetable)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Asian slaw with sesame ginger dressing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Teriyaki glazed salmon</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Korean beef bulgogi</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Stir-fried vegetables and coconut jasmine rice</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden mt-6">
                      <img 
                        src="/lovable-uploads/7422a23e-773e-4ffb-8a7f-2ead0162deb6.png" 
                        alt="Grilled chicken skewers with glaze"
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    <Testimonial
                      className="mt-8" 
                      compact={true}
                      quote="The Pacific Rim buffet was an absolute crowd-pleaser. The sushi display was beautifully presented, and the Korean beef bulgogi was the best I've ever tasted!"
                      author="James Wilson"
                      position="Corporate Events Manager"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="dessert" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-white mb-6">Dessert Options</h3>
                    <p className="text-gray-300 mb-6">
                      Choose from our chef's selection of sweet endings to complete your event.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">Plated Desserts</h4>
                        <p className="text-gold text-sm mb-4">$12 per person</p>
                        
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Classic crème brûlée with fresh berries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Chocolate torte with raspberry coulis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Seasonal fruit tart with vanilla custard</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>New York cheesecake with berry compote</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Tiramisu with chocolate shavings</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">Dessert Stations</h4>
                        <p className="text-gold text-sm mb-4">Priced per person, minimum 40 guests</p>
                        
                        <h5 className="text-white font-medium mb-2">Mini Dessert Display - $16 per person</h5>
                        <p className="text-gray-300 mb-4">
                          An assortment of bite-sized desserts including macarons, mini cupcakes, 
                          chocolate-dipped strawberries, and petit fours.
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">S'mores Station - $14 per person</h5>
                        <p className="text-gray-300 mb-4">
                          Interactive station with toasted marshmallows, gourmet chocolates, and 
                          graham crackers with various toppings.
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">Ice Cream & Gelato Bar - $15 per person</h5>
                        <p className="text-gray-300">
                          Premium ice creams and gelatos with assorted toppings, sauces, and garnishes.
                        </p>
                      </div>
                    </div>
                    
                    <Testimonial
                      className="mt-8"
                      compact={true}
                      quote="The chocolate torte with raspberry coulis was divine! Our guests were raving about all of Morton's desserts throughout the evening."
                      author="Emma Rodriguez"
                      position="Birthday Celebration Client"
                    />
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img 
                        src="/lovable-uploads/3e639f14-2b91-41b7-a995-d4ea1c5984b1.png" 
                        alt="Elegant fruit tarts with berries and kiwi"
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-white mb-4">Specialty Desserts</h4>
                        
                        <h5 className="text-white font-medium mb-2">Wedding Cakes</h5>
                        <p className="text-gray-300 mb-4">
                          Custom designed wedding cakes tailored to your style and flavor preferences.
                          Starting at $9 per slice with consultation required.
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">Dessert Flights - $14 per person</h5>
                        <p className="text-gray-300 mb-4">
                          Tasting portions of three complementary desserts, artfully presented.
                          Perfect for creating a memorable dessert experience.
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">Seasonal Specialties</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Summer: Strawberry shortcake bar</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Fall: Apple cider donuts and caramel station</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Winter: Hot chocolate bar with gourmet marshmallows</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Spring: Lemon dessert display with meringues and tarts</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden mt-6">
                      <img 
                        src="/lovable-uploads/1db4c64d-3219-4445-b1b9-1fbccbb3722f.png" 
                        alt="Assorted dessert display with macarons and cakes"
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    <Testimonial
                      className="mt-8"
                      compact={true}
                      quote="The dessert station was the highlight of our wedding reception. The mini dessert display was not only beautiful but incredibly delicious. Morton's exceeded our expectations!"
                      author="Katherine West"
                      position="Wedding Client, October 2024"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-20">
              <FoodGallery 
                title="Menu Gallery"
                subtitle="Experience Morton's Fine Catering through our visual showcase"
              />
            </div>
          </div>
        </section>
        
        <BookCta 
          title="Ready to Create Your Menu?" 
          description="Contact us to start planning your custom catering experience. Our team will work with you to design the perfect menu for your event."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Menus;
