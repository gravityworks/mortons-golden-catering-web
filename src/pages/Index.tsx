
import React from 'react';
import { ChefHat, Utensils, Wine } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import FeatureSection from '@/components/ui/feature-section/FeatureSection';
import { Testimonials } from '@/components/ui/testimonial/Testimonial';
import BookCta from '@/components/ui/book-cta/BookCta';
import FoodGallery from '@/components/ui/food-gallery/FoodGallery';
import { Link } from 'react-router-dom';

const featuresData = [{
  title: "Exquisite Cuisine",
  description: "Chef-driven menus that blend classic comfort with creative innovation, using only the finest, freshest ingredients.",
  icon: <ChefHat size={48} />
}, {
  title: "Full Service",
  description: "From elegant place settings to professional staff, we provide everything needed to make your event flawless.",
  icon: <Utensils size={48} />
}, {
  title: "Custom Menus",
  description: "Tailored menus designed specifically for your event, accommodating dietary restrictions and preferences.",
  icon: <Wine size={48} />
}];
const testimonialData = [{
  quote: "We went with Morton's to serve brunch-style food for our wedding, and we were absolutely blown away. The food was so good! The impossible sausage quiche was delicious, the french toast was the best I've ever had (by a long shot), a guest came up raving about the sausage links, and we were showered with compliments about the food. I've been to several weddings and this was my favorite meal! And not just because it was my wedding lol. They also helped orchestrate by releasing tables, they were prompt at clearing them when guests finished eating, they were fully setup and ready to serve on time, and they cleaned up quickly afterward. We are so happy we went with them on our big day!",
  author: "Angela and Jacob Archer",
  position: "Wedding Clients"
}, {
  quote: "This is the second event that we have used Morton's Fine Catering for. The servers were exceptionally polite and responsive. The food was well received without a single complaint from my 60+ attendees at the college. I would not hesitate to use them again. This time we had the baked potato bar with chili and cream of broccoli soup. It came with bread, salad, and dessert. The vinaigrette was a house dressing and it was delicious. I say this as a person who normally does not care for salads. It was a good value for what we paid with plenty of offerings for the vegetarians in the group. I still have coworkers rave about the last meal we had with them as I heard the macaroni and cheese and BBQ was outstanding. I would use this company outside of work for catering if I ever need them. That's how good the company is!",
  author: "Erin Fredrich-Filer",
  position: "College Event Coordinator"
}, {
  quote: "Morton's catered our company Christmas party. The food was fantastic. I appreciated the communication and the servers. We had a variety of a dinner package with added sides. The hit of the night was the Mac and cheese bar and mashed potato bar. We also loved the desserts. Highly recommend!",
  author: "Kori Shook",
  position: "Corporate Client"
}];
const foodGalleryImages = [{
  src: "/lovable-uploads/4aae84da-3941-4510-8410-850ad17f22eb.png",
  alt: "Gourmet tartlet canapés with a decorative tomato rose"
}, {
  src: "/lovable-uploads/03e7ecfe-8171-442a-9a57-13d490794d4d.png",
  alt: "Butternut squash soup shooters"
}, {
  src: "/lovable-uploads/9d0af1fd-4b6b-4bcd-818a-2c974fbf173f.png",
  alt: "Toasted marshmallow dessert sticks"
}, {
  src: "/lovable-uploads/ac03567f-544c-41c6-840f-bd1fdc004701.png",
  alt: "Charcuterie board with prosciutto-wrapped melon and cheese"
}, {
  src: "/lovable-uploads/3e639f14-2b91-41b7-a995-d4ea1c5984b1.png",
  alt: "Fresh fruit tarts with strawberries, kiwi and blueberries"
}, {
  src: "/lovable-uploads/31f56b24-5898-453e-a799-65fd34f28d2d.png",
  alt: "Dessert display with cupcakes, macarons and cake pops"
}];

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Mortons Fine Catering" 
          description="From weddings to corporate gatherings, we serve Greater Lansing with chef-crafted cuisine, flawless service, and attention to every detail." 
          imageUrl="/lovable-uploads/70c843ff-7e09-4a39-8cbb-3445782fadcd.png" 
          height="h-[60vh]" 
        />
        
        {/* Call to Action Section */}
        <section 
          className="py-16 bg-rich-black relative"
          style={{
            backgroundImage: `url('/lovable-uploads/c8677d0a-a2c2-430e-91a3-d71a96c1c5ae.png')`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        >
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Discover Our Culinary Offerings
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Explore our carefully crafted menus featuring seasonal ingredients and exceptional flavors designed to make your event unforgettable.
            </p>
            <Link to="/menus" className="btn-gold inline-block">
              View Our Menus
            </Link>
          </div>
        </section>
        
        <section className="py-24 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1">
                <h2 className="section-title">Crafting Memorable Experiences Since 1995</h2>
                <p className="text-gray-300 mb-8">Morton's Fine Catering specializes in delivering exceptional off-premises catering for weddings, corporate events, and campus functions throughout the Greater Lansing area.</p>
                <p className="text-gray-300 mb-8">
                  Our approach combines culinary excellence with personalized service, ensuring that
                  every detail of your event exceeds expectations. From menu development to execution,
                  our experienced team handles all aspects of your catering needs with precision and care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/about-us" className="btn-outline">About Our Team</a>
                  <a href="/services" className="btn-gold">Our Services</a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold rounded-lg"></div>
                  <img src="/lovable-uploads/8ad28185-288c-4ed2-a334-861d441f4e83.png" alt="Morton's catering chef preparing food" className="w-full h-auto rounded-lg shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FoodGallery title="A Taste of Our Cuisine" subtitle="Our culinary team creates dishes that are as beautiful as they are delicious. Here's a sampling of our recent creations served throughout Greater Lansing." images={foodGalleryImages} className="py-20 bg-rich-black" />
        
        <FeatureSection title="Why Choose Morton's" subtitle="We pride ourselves on creating memorable culinary experiences for every client in the Greater Lansing area, with a focus on quality, service, and presentation." features={featuresData} />
        
        <BookCta title="Ready to Create an Unforgettable Event?" subtitle="Let our team of culinary and event professionals bring your vision to life in Greater Lansing, Michigan. Contact us today to start planning your perfect occasion." backgroundImage="/lovable-uploads/71e48cb4-2adb-43b6-a940-f05bd92cfcaf.png" />
        
        <Testimonials title="What Our Clients Say" testimonials={testimonialData} />
      </main>
      
      <Footer />
    </div>;
};

export default Index;
