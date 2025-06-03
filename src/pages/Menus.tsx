
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BookCta from '@/components/ui/book-cta/BookCta';

const Menus = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero title="Menus" subtitle="MORTON'S FINE CATERING" description="From elegant plated dinners to interactive stations and casual buffets, our culinary team crafts menus that showcase seasonal ingredients and global influences." imageUrl="/lovable-uploads/ea15893c-7cab-4191-921a-bb420fb56005.png" height="min-h-[60vh]" />
        
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
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-6">Party Trays And Displays</h3>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-6 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Platters and Party Trays are priced to serve 40-50. We recommend a minimum of 1 order per 50 guests. Overall quantities depend on the size and style of your event.
                        <br />
                        Minimum order, delivery, and service fee will apply
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <div className="flex gap-3 mb-4">
                          <div>
                            <h4 className="text-xl font-playfair text-gold">Fruits & Cheese</h4>
                            <p className="text-sm mt-1 text-white">vegan      v-vegetarian    gf-gluten-friendly    df-dairy-free</p>
                          </div>
                        </div>
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
                            <span>Baked Brie w/Raspberry (v) Large wheel of brie baked in puff pastry, with raspberry jam, flatbreads &amp; crackers $70</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Cheese and Crackers (v, gf) Cubed cheddar, Swiss, pepper jack, dill havarti, or Gouda $65Prosciutto-wrapped melon with balsamic glaze</span>
                          </li>
                          
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <div className="flex gap-3 mb-4">
                          <div>
                            <h4 className="text-xl font-playfair text-gold">Dips & Spreads</h4>
                            <p className="text-sm mt-1 text-white">vegan      v-vegetarian    gf-gluten-friendly    df-dairy-free</p>
                          </div>
                        </div>
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
                    
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-6">Appetizers & Hors D'oeuvres</h3>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-6 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Platters and Party Trays are priced to serve 40-50. We recommend a minimum of 1 order per 50 guests. Overall quantities depend on the size and style of your event.
                        <br />
                        Minimum order, delivery, and service fee will apply
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <div className="flex gap-3 mb-4">
                          <div>
                            <h4 className="text-xl font-playfair text-gold">Canapés, Crostinis, & Crisps</h4>
                            <p className="text-sm mt-1 text-white">vegan      v-vegetarian    gf-gluten-friendly    df-dairy-free</p>
                          </div>
                        </div>
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Phyllo Canapés (v) Brie, walnut and pear; or chevre with basil and tomato; or caramelized onion and boursin cheese $85 </span>
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
                            <span>Traditional Bruschetta (vegan, gf) Fresh tomatoes, cucumber, basil, and red onion, with crostini $65
(crostini contains gluten and parmesan)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Michigan White Bean Bruschetta (vegan, gf) Roasted red peppers, fennel, fresh herbs and olive oil, crostini $70 (crostini contains gluten and parmesan)</span>
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
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-6">Breakfast & Brunch Menu</h3>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-6 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Platters and Party Trays are priced to serve 40-50. We recommend a minimum of 1 order per 50 guests. Overall quantities depend on the size and style of your event.
                        <br />
                        Minimum order, delivery, and service fee will apply
                      </p>
                    </div>
                    <p className="text-white mb-6">
                      Start your event with our delicious breakfast and brunch offerings, perfect for corporate meetings, 
                      conferences, or special occasions.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">Continental Breakfast</h4>
                        <p className="text-gold text-sm mb-4">$18 per person</p>
                        
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Assorted fresh pastries and muffins</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Seasonal fresh fruit display</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Assorted bagels with cream cheese</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Premium coffee, tea, and juice</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">Hot Breakfast Buffet</h4>
                        <p className="text-gold text-sm mb-4">$28 per person</p>
                        
                        <ul className="space-y-3 text-white">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Scrambled eggs with herbs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Crispy bacon and sausage links</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Breakfast potatoes with peppers and onions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Fresh fruit salad and pastries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Coffee, tea, and orange juice</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img src="/lovable-uploads/4aae84da-3941-4510-8410-850ad17f22eb.png" alt="Breakfast pastries and fruit" className="w-full h-auto object-cover" />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">Brunch Specialties</h4>
                        <p className="text-gold text-sm mb-4">$35 per person</p>
                        
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
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-6">Plated Dinner Menu</h3>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-6 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Platters and Party Trays are priced to serve 40-50. We recommend a minimum of 1 order per 50 guests. Overall quantities depend on the size and style of your event.
                        <br />
                        Minimum order, delivery, and service fee will apply
                      </p>
                    </div>
                    <p className="text-white mb-6">
                      Our plated dinners include artisan bread service, a first course, entrée with sides, and coffee & tea service.
                      Pricing starts at $65 per person.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">First Course (select one)</h4>
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
                        <h4 className="text-xl font-playfair text-gold mb-4">Entrées (select two for guests to choose)</h4>
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
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">Sides (select two)</h4>
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
                        <h4 className="text-xl font-playfair text-gold mb-4">Optional Enhancements</h4>
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
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-6">BBQ Menu</h3>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-6 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Platters and Party Trays are priced to serve 40-50. We recommend a minimum of 1 order per 50 guests. Overall quantities depend on the size and style of your event.
                        <br />
                        Minimum order, delivery, and service fee will apply
                      </p>
                    </div>
                    <p className="text-white mb-6">
                      Our BBQ menu brings authentic smokehouse flavors to your event with slow-smoked meats 
                      and classic sides. Perfect for casual gatherings and outdoor events.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">Smoked Meats</h4>
                        <p className="text-gold text-sm mb-4">Priced per person, 25 person minimum</p>
                        
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
                        <h4 className="text-xl font-playfair text-gold mb-4">Classic BBQ Package</h4>
                        <p className="text-gold text-sm mb-4">$32 per person - includes choice of two meats and three sides</p>
                        
                        <h5 className="text-white font-medium mb-2">Choose Two Meats:</h5>
                        <ul className="space-y-2 text-white mb-4">
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Pulled pork or brisket</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="bg-gold w-2 h-2 rounded-full"></div>
                            </div>
                            <span>Smoked chicken or ribs</span>
                          </li>
                        </ul>
                        
                        <p className="text-white">Includes fresh buns, pickles, onions, and assorted BBQ sauces</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img src="/lovable-uploads/7422a23e-773e-4ffb-8a7f-2ead0162deb6.png" alt="BBQ grilled meats" className="w-full h-auto object-cover" />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">Classic BBQ Sides</h4>
                        <p className="text-gold text-sm mb-4">$6 per person per side</p>
                        
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
                        <h4 className="text-xl font-playfair text-gold mb-4">BBQ Enhancements</h4>
                        
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
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-6">Dessert Options</h3>
                    <div className="bg-rich-gray/50 rounded-lg p-4 mb-6 border border-gold/20">
                      <p className="text-white text-sm leading-relaxed">
                        Platters and Party Trays are priced to serve 40-50. We recommend a minimum of 1 order per 50 guests. Overall quantities depend on the size and style of your event.
                        <br />
                        Minimum order, delivery, and service fee will apply
                      </p>
                    </div>
                    <p className="text-white mb-6">
                      Choose from our chef's selection of sweet endings to complete your event.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">Plated Desserts</h4>
                        <p className="text-gold text-sm mb-4">$12 per person</p>
                        
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
                        <h4 className="text-xl font-playfair text-gold mb-4">Dessert Stations</h4>
                        <p className="text-gold text-sm mb-4">Priced per person, minimum 40 guests</p>
                        
                        <h5 className="text-white font-medium mb-2">Mini Dessert Display - $16 per person</h5>
                        <p className="text-white mb-4">
                          An assortment of bite-sized desserts including macarons, mini cupcakes, 
                          chocolate-dipped strawberries, and petit fours.
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">S'mores Station - $14 per person</h5>
                        <p className="text-white mb-4">
                          Interactive station with toasted marshmallows, gourmet chocolates, and 
                          graham crackers with various toppings.
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">Ice Cream & Gelato Bar - $15 per person</h5>
                        <p className="text-white">
                          Premium ice creams and gelatos with assorted toppings, sauces, and garnishes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img src="/lovable-uploads/3e639f14-2b91-41b7-a995-d4ea1c5984b1.png" alt="Elegant fruit tarts with berries and kiwi" className="w-full h-auto object-cover" />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-rich-gray rounded-lg p-6 border border-gold/10">
                        <h4 className="text-xl font-playfair text-gold mb-4">Specialty Desserts</h4>
                        
                        <h5 className="text-white font-medium mb-2">Wedding Cakes</h5>
                        <p className="text-white mb-4">
                          Custom designed wedding cakes tailored to your style and flavor preferences.
                          Starting at $9 per slice with consultation required.
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">Dessert Flights - $14 per person</h5>
                        <p className="text-white mb-4">
                          Tasting portions of three complementary desserts, artfully presented.
                          Perfect for creating a memorable dessert experience.
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">Seasonal Specialties</h5>
                        <ul className="space-y-2 text-white">
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
        
        <BookCta title="Ready to Create a Menu for Your Special Event?" subtitle="Our culinary team would be delighted to create a custom menu tailored specifically to your event and preferences." backgroundImage="/lovable-uploads/71e48cb4-2adb-43b6-a940-f05bd92cfcaf.png" />
      </main>
      
      <Footer />
    </div>;
};

export default Menus;
