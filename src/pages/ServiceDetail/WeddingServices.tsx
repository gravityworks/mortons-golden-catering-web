
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import { Testimonials } from '@/components/ui/testimonial/Testimonial';
import FoodGallery from '@/components/ui/food-gallery/FoodGallery';
import BookCta from '@/components/ui/book-cta/BookCta';
import { Button } from '@/components/ui/button';

const WeddingServices = () => {
  const featuredVenues = [
    "Old Town Marquee",
    "Grand Loft in Grand Ledge",
    "Grand Ledge Opera House",
    "GLAR Ballroom",
    "MSU Horticultural Gardens",
    "Grand Ledge Country Club",
    "Woldumar Nature Center"
  ];

  const weddingTestimonials = [
    {
      quote: "Morton's catered our wedding last summer and the food was absolutely incredible. Our guests are still talking about it months later. Their staff was professional and attentive throughout the entire event.",
      author: "Sarah & Michael",
      position: "Lansing, MI",
      imageUrl: "https://images.unsplash.com/photo-1532463788086-56a492a0b34a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
    },
    {
      quote: "Working with Morton's for our wedding was the best decision we made. The tasting experience was amazing, and they worked within our budget to create a custom menu that perfectly matched our vision.",
      author: "Jennifer & David",
      position: "East Lansing, MI",
      imageUrl: "https://images.unsplash.com/photo-1565128303599-278b285f4246?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
    },
    {
      quote: "The food at our wedding was outstanding! Morton's team was professional, organized, and went above and beyond to make our day special. I'd recommend them to anyone planning a wedding in Greater Lansing.",
      author: "Emily & Jason",
      position: "Grand Ledge, MI",
      imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
    }
  ];

  const weddingGalleryImages = [
    {
      src: "/lovable-uploads/365b125b-bd32-4a64-a988-873a3727e69b.png", 
      alt: "Wedding table setup with decorations"
    },
    {
      src: "/lovable-uploads/70c843ff-7e09-4a39-8cbb-3445782fadcd.png", 
      alt: "Wedding reception with elegant table settings"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed", 
      alt: "Wedding cake display"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3", 
      alt: "Elegant wedding dinner setting"
    },
    {
      src: "https://images.unsplash.com/photo-1510076857177-7470076d4098", 
      alt: "Wedding cocktail hour"
    },
    {
      src: "/lovable-uploads/4aae84da-3941-4510-8410-850ad17f22eb.png", 
      alt: "Wedding menu showcase"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Wedding Catering Services"
          subtitle="MORTON'S FINE CATERING"
          description="Making your special day unforgettable with exquisite cuisine and impeccable service throughout Greater Lansing, Michigan."
          imageUrl="/lovable-uploads/365b125b-bd32-4a64-a988-873a3727e69b.png"
          height="min-h-[70vh]"
          overlay={true}
        />
        
        <section className="py-16 bg-rich-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">Celebrate Your Love Story</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  At Morton's Fine Catering, we believe that your wedding day deserves nothing less than perfection. 
                  Our dedicated team of culinary experts and event specialists work tirelessly to create an 
                  unforgettable dining experience that reflects your unique love story and personal style.
                </p>
                <p>
                  From intimate gatherings to grand celebrations, we tailor our services to match your vision. 
                  Our wedding catering packages include custom menu creation, professional staff, bar services, 
                  and all the details that transform a meal into a cherished memory.
                </p>
                <p>
                  Serving Greater Lansing and the surrounding Michigan communities, we pride ourselves on 
                  using fresh, locally-sourced ingredients whenever possible to create dishes that will 
                  delight you and your guests.
                </p>
                <div className="flex justify-center mt-10">
                  <Button asChild variant="default" className="bg-gold hover:bg-gold/90 text-black">
                    <Link to="/menus">
                      View Wedding Menus
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">Our Wedding Services Include</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Customized Menus</h3>
                <p className="text-gray-300">
                  Work directly with our executive chef to create a menu that reflects your taste, 
                  accommodates dietary restrictions, and fits your budget.
                </p>
              </div>
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Tastings</h3>
                <p className="text-gray-300">
                  Sample your selected menu items in advance and make adjustments to ensure everything 
                  is perfect for your big day.
                </p>
              </div>
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Service Styles</h3>
                <p className="text-gray-300">
                  Choose from plated dinners, elegant buffets, family-style service, or creative food stations 
                  to match your wedding vision.
                </p>
              </div>
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Professional Staff</h3>
                <p className="text-gray-300">
                  Our experienced servers, bartenders, and event coordinators provide attentive, 
                  professional service throughout your celebration.
                </p>
              </div>
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Bar Services</h3>
                <p className="text-gray-300">
                  Full bar packages, signature cocktails, champagne toasts, and non-alcoholic options 
                  to complement your menu and keep the celebration flowing.
                </p>
              </div>
              <div className="bg-rich-black p-6 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300">
                <h3 className="text-xl font-playfair font-semibold text-gold mb-4">Rental Coordination</h3>
                <p className="text-gray-300">
                  From elegant place settings to linens that match your color scheme, we can help source 
                  and coordinate all your rental needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <FoodGallery 
          className="py-16 bg-rich-black"
          title="Wedding Catering Gallery"
          subtitle="Glimpses of our wedding catering services across Greater Lansing"
          images={weddingGalleryImages}
        />
        
        <section className="py-16 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">Featured Venues</h2>
            <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto">
              While we cater at venues throughout Greater Lansing and beyond, here are some 
              of the wonderful locations we've had the pleasure of working with. This is not an exhaustive 
              list—we're happy to work at the venue of your choice!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {featuredVenues.map((venue, index) => (
                <div 
                  key={index}
                  className="bg-rich-black p-4 rounded-lg border border-gray-800 hover:border-gold/30 transition-all duration-300 text-center"
                >
                  <p className="text-white font-medium">{venue}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-400 text-center mt-6 text-sm">
              * Morton's Fine Catering is not affiliated with these venues. Please contact them directly for venue information.
            </p>
          </div>
        </section>
        
        <Testimonials 
          title="What Couples Say About Us"
          subtitle="Hear from couples who chose Morton's Fine Catering for their special day"
          testimonials={weddingTestimonials}
        />
        
        <section className="py-16 bg-rich-gray">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Ready to Plan Your Wedding Menu?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
              Contact us today to schedule a consultation and tasting. Let's create a 
              memorable dining experience for your special day in Greater Lansing.
            </p>
            <BookCta 
              title=""
              ctaText="Contact Us"
              subtitle=""
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WeddingServices;
