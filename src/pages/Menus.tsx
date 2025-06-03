
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BookCta from '@/components/ui/book-cta/BookCta';

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
              <p className="text-white">
                Below are samples of our most popular menu options. All menus can be customized to your preferences, 
                dietary needs, and event style.
              </p>
            </div>
            
            <Tabs defaultValue="appetizers" className="w-full">
              <TabsList className="grid w-full md:grid-cols-5 bg-rich-gray border border-gold/30 rounded-lg h-auto">
                <TabsTrigger value="appetizers" className="py-3 data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:font-semibold">
                  Appetizers And Platters
                </TabsTrigger>
                <TabsTrigger value="breakfast" className="py-3 data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:font-semibold">
                  Breakfast
                </TabsTrigger>
                <TabsTrigger value="mortons" className="py-3 data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:font-semibold">
                  Morton's Catering Menu
                </TabsTrigger>
                <TabsTrigger value="bbq" className="py-3 data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:font-semibold">
                  BBQ Menu
                </TabsTrigger>
                <TabsTrigger value="desserts" className="py-3 data-[state=active]:bg-gold data-[state=active]:text-black data-[state=active]:font-semibold">
                  Desserts
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="appetizers" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-8 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Perfect for cocktail hours, corporate events, and social gatherings. Our appetizers and platters feature fresh, seasonal ingredients prepared with attention to detail and beautiful presentation.
                      </p>
                    </div>

                    <h3 className="text-2xl font-playfair font-semibold mb-4 text-gold">Party Trays And Displays</h3>
                    <p className="text-white mb-6">
                      Platters and Party Trays are priced to serve 40-50. We recommend a minimum of 1 order per 50 guests. Overall quantities depend on the size and style of your event. Minimum order, delivery, and service fee will apply.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Fruits & Cheese</h4>
                        <p className="text-sm text-white mb-4">vegan | v-vegetarian | gf-gluten-friendly | df-dairy-free</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Fresh Fruit Display (vegan, gf) Seasonal fruits and berries, artfully presented $80</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Artisan Cheese Board (v, gf) Wedges of specialty cheeses, with flatbread and crackers $80</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Baked Brie w/Raspberry (v) Large wheel of brie baked in puff pastry, with raspberry jam, flatbreads & crackers $70</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Cheese and Crackers (v, gf) Cubed cheddar, Swiss, pepper jack, dill havarti, or Gouda $65</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Dips & Spreads</h4>
                        <p className="text-sm text-white mb-4">vegan | v-vegetarian | gf-gluten-friendly | df-dairy-free</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Buffalo Chicken Dip (gf) Like a hot wing, but in dip form! Corn chips and celery sticks $85</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Caramelized Onion Dip (v, gf) with kettle chips $60</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Hummus and Pita (vegan, gf) Traditional garlic, lemon, tahini, chick peas and olive oil, house made pita crisps $60</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Pimento Cheese Dip (v) Southern inspired cheese dip with pimento peppers, served with pretzels $75</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img src="/lovable-uploads/747a761d-59d8-43a8-8ec3-2e3ef49c85ce.png" alt="Elegant wrap appetizers" className="w-full h-auto object-cover" />
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Appetizers & Hors D'oeuvres</h3>
                    <p className="text-white mb-6">
                      Elegant bite-sized offerings perfect for cocktail receptions and passed service during events.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Canapés, Crostinis, & Crisps</h4>
                        <p className="text-sm text-white mb-4">vegan | v-vegetarian | gf-gluten-friendly | df-dairy-free</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Phyllo Canapés (v) Brie, walnut and pear; or chevre with basil and tomato; or caramelized onion and boursin cheese $85</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Asparagus Crostini (v) Roasted shaved asparagus, ricotta, fresh dill and lemon zest on crostini $85</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Roasted Tomato Crostini (v) with za'atar and labne $85</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Traditional Bruschetta (vegan, gf) Fresh tomatoes, cucumber, basil, and red onion, with crostini $65</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Michigan White Bean Bruschetta (vegan, gf) Roasted red peppers, fennel, fresh herbs and olive oil, crostini $70</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden mt-6">
                      <img src="/lovable-uploads/70c843ff-7e09-4a39-8cbb-3445782fadcd.png" alt="Charcuterie spread with meats and accompaniments" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="breakfast" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-8 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Start your day right with our breakfast and brunch offerings. From continental spreads to elaborate brunch stations, we create memorable morning experiences for corporate meetings, conferences, and special occasions.
                      </p>
                    </div>

                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Continental Options</h3>
                    <p className="text-white mb-6">
                      Simple yet elegant breakfast selections perfect for business meetings and morning events.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Continental Breakfast</h4>
                        <p className="text-white text-sm mb-4">$8.50 per person</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Assortment of freshly baked bagels and breakfast pastries, with cream cheese, butter, and jam</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Fresh fruit display with seasonal fruits and berries, or basket of whole fruit</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Coffee and tea service</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Breakfast Burritos</h4>
                        <p className="text-white text-sm mb-4">$9.50 per guest</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Fluffy scrambled eggs, black beans, sausage, or bacon and cheese, rolled in a flour tortilla</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Salsa and sour cream on the side</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Fresh fruit display with seasonal fruits and berries, or basket of whole fruit</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img src="/lovable-uploads/4aae84da-3941-4510-8410-850ad17f22eb.png" alt="Breakfast pastries and fruit" className="w-full h-auto object-cover" />
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Brunch Experiences</h3>
                    <p className="text-white mb-6">
                      Elevated brunch offerings with interactive stations and premium selections for special occasions and celebrations.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Brunch Specialties</h4>
                        <p className="text-white text-sm mb-4">$35 per person</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>French toast with maple syrup</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Benedict station with various toppings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Omelet station with fresh ingredients</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Gourmet salads and sandwiches</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Mimosa and Bloody Mary bar</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="mortons" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-8 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Our signature plated dinner experience featuring premium ingredients and elegant presentation. Perfect for formal events, galas, and intimate celebrations requiring exceptional culinary excellence.
                      </p>
                    </div>

                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Plated Dinner Service</h3>
                    <p className="text-white mb-6">
                      Our plated dinners include artisan bread service, a first course, entrée with sides, and coffee & tea service. Pricing starts at $65 per person.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">First Course</h4>
                        <p className="text-white text-sm mb-4">Select one for your event</p>
                        <ul className="space-y-3 text-white">
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
                        <h4 className="text-xl font-playfair text-gold mb-2">Entrées</h4>
                        <p className="text-white text-sm mb-4">Select two for guests to choose from</p>
                        <ul className="space-y-3 text-white">
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
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img src="/lovable-uploads/761d5e81-4b3c-4715-a21e-21626a8406c0.png" alt="Gourmet plated dinner with roasted vegetables and quinoa" className="w-full h-auto object-cover" />
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Accompaniments & Enhancements</h3>
                    <p className="text-white mb-6">
                      Complete your dining experience with carefully selected sides and optional premium enhancements.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Sides</h4>
                        <p className="text-white text-sm mb-4">Select two to accompany your entrées</p>
                        <ul className="space-y-3 text-white">
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
                        <h4 className="text-xl font-playfair text-gold mb-2">Optional Enhancements</h4>
                        <p className="text-white text-sm mb-4">Elevate your dining experience</p>
                        <ul className="space-y-3 text-white">
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
                      <img src="/lovable-uploads/8dc5924d-5028-4413-a6f6-c4a9be8acdb3.png" alt="Gourmet crostini with rare beef and greens" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="bbq" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-8 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Authentic smokehouse flavors brought to your event with slow-smoked meats and classic sides. Perfect for casual gatherings, outdoor events, and celebrations that call for comfort food excellence.
                      </p>
                    </div>

                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Smoked Meats</h3>
                    <p className="text-white mb-6">
                      Premium cuts slow-smoked to perfection using traditional methods and signature dry rubs and sauces.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Individual Meat Options</h4>
                        <p className="text-white text-sm mb-4">Priced per person, 25 person minimum</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Pulled pork with tangy BBQ sauce - $16</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Smoked brisket with dry rub - $22</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>BBQ ribs (half rack per person) - $24</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Smoked chicken (half bird) - $18</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Smoked sausage links - $14</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Classic BBQ Package</h4>
                        <p className="text-white text-sm mb-4">$32 per person - includes choice of two meats and three sides</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Choose two meats: Pulled pork, brisket, smoked chicken, or ribs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Fresh buns, pickles, onions, and assorted BBQ sauces</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Three classic sides of your choice</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img src="/lovable-uploads/7422a23e-773e-4ffb-8a7f-2ead0162deb6.png" alt="BBQ grilled meats" className="w-full h-auto object-cover" />
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Classic BBQ Sides</h3>
                    <p className="text-white mb-6">
                      Traditional accompaniments that perfectly complement our smoked meats, prepared with attention to authentic flavors.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Traditional Sides</h4>
                        <p className="text-white text-sm mb-4">$6 per person per side</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Creamy coleslaw</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Baked beans with bacon</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Mac and cheese</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Potato salad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Cornbread with honey butter</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Grilled corn on the cob</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">BBQ Enhancements</h4>
                        <p className="text-white text-sm mb-4">Elevate your BBQ experience</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Live carving station - $4 per person</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Gourmet BBQ sauce bar - $3 per person</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Smoked vegetable platter - $5 per person</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="desserts" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-8 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Complete your event with memorable sweet endings. From elegant plated desserts to interactive stations, our pastry team creates desserts that provide the perfect finale to your dining experience.
                      </p>
                    </div>

                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Plated Desserts</h3>
                    <p className="text-white mb-6">
                      Individually crafted desserts with restaurant-quality presentation and premium ingredients.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Classic Selections</h4>
                        <p className="text-white text-sm mb-4">$12 per person</p>
                        <ul className="space-y-3 text-white">
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
                        <h4 className="text-xl font-playfair text-gold mb-2">Dessert Stations</h4>
                        <p className="text-white text-sm mb-4">Minimum 40 guests</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Mini Dessert Display - $16 per person: Assortment of macarons, mini cupcakes, chocolate-dipped strawberries, and petit fours</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>S'mores Station - $14 per person: Interactive station with toasted marshmallows, gourmet chocolates, and graham crackers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Ice Cream & Gelato Bar - $15 per person: Premium selections with assorted toppings and sauces</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img src="/lovable-uploads/3e639f14-2b91-41b7-a995-d4ea1c5984b1.png" alt="Elegant fruit tarts with berries and kiwi" className="w-full h-auto object-cover" />
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">Specialty Desserts</h3>
                    <p className="text-white mb-6">
                      Custom and seasonal offerings for special occasions and unique celebrations.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Custom Creations</h4>
                        <p className="text-white text-sm mb-4">Consultation required</p>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Wedding Cakes - Starting at $9 per slice: Custom designed to your style and flavor preferences</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Dessert Flights - $14 per person: Tasting portions of three complementary desserts</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-2">Seasonal Specialties</h4>
                        <p className="text-white text-sm mb-4">Available based on season</p>
                        <ul className="space-y-3 text-white">
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
                      <img src="/lovable-uploads/1db4c64d-3219-4445-b1b9-1fbccbb3722f.png" alt="Assorted dessert display with macarons and cakes" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-16">
              <p className="text-white mb-6">
                All menus can be customized to accommodate dietary restrictions and preferences. 
                Please contact us to discuss your specific needs.
              </p>
              <a href="/contact" className="btn-gold inline-block">Contact Us For Custom Menus</a>
            </div>
          </div>
        </section>
        
        <BookCta 
          title="Ready to Create a Menu for Your Special Event?" 
          subtitle="Our culinary team would be delighted to create a custom menu tailored specifically to your event and preferences." 
          backgroundImage="/lovable-uploads/71e48cb4-2adb-43b6-a940-f05bd92cfcaf.png" 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Menus;
