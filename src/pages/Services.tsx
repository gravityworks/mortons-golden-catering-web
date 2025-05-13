
import React from 'react';
import { Utensils, Wine, Cake, Salad } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/ui/hero/Hero';
import FeatureSection from '@/components/ui/feature-section/FeatureSection';
import BookCta from '@/components/ui/book-cta/BookCta';

const serviceFeatures = [
  {
    title: "Weddings",
    description: "Create an unforgettable culinary experience for your special day, from elegant hors d'oeuvres to custom-designed menus that reflect your personal style.",
    icon: <Cake size={48} />,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    title: "Corporate Events",
    description: "Impress clients and reward employees with sophisticated catering options for meetings, celebrations, and corporate functions of any size.",
    icon: <Wine size={48} />,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    title: "Campus Functions",
    description: "From alumni gatherings to faculty dinners, we provide exceptional catering services tailored to the unique needs of educational institutions.",
    icon: <Salad size={48} />,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    title: "Special Occasions",
    description: "Whether it's an anniversary, milestone birthday, or family reunion, our team will help you celebrate life's special moments with memorable cuisine.",
    icon: <Utensils size={48} />,
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
];

const rentalFeatures = [
  {
    title: "Premium Tableware",
    description: "Elevate your event with our selection of fine china, crystal glassware, and silver flatware that complement your chosen menu and décor.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    title: "Elegant Linens",
    description: "Choose from our extensive collection of table linens, napkins, and chair covers in a variety of colors and fabrics to match your event theme.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    title: "Serving Equipment",
    description: "From chafing dishes to champagne fountains, we provide all the serving equipment needed to present your menu with style and functionality.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
];

const staffingFeatures = [
  {
    title: "Professional Servers",
    description: "Our experienced, professionally trained servers ensure that your guests receive attentive, unobtrusive service throughout your event.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    title: "Culinary Staff",
    description: "Our skilled chefs and kitchen staff prepare and present your menu with expertise and attention to detail, whether on-site or in advance.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    title: "Event Coordination",
    description: "From initial planning to day-of execution, our event coordinators work closely with you to ensure every aspect of your catering runs smoothly.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Our Services"
          subtitle="MORTON'S FINE CATERING"
          description="From exquisite cuisine to equipment rentals and professional staffing, we provide everything needed to make your event exceptional."
          imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          height="min-h-[60vh]"
        />
        
        <section className="py-20 bg-rich-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="section-title">Off-Premises Catering</h2>
              <p className="text-gray-300 text-lg">
                We bring the restaurant experience to your venue, with chef-driven cuisine and 
                impeccable service at any location of your choice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Morton's Fine Catering specializes in delivering exceptional dining experiences at the venue of your choice. 
                    As a dedicated off-premises caterer, we handle all aspects of food preparation, delivery, service, and cleanup, 
                    allowing you to focus on enjoying your event.
                  </p>
                  <p>
                    Our menus are carefully crafted to travel well and be finished on-site, ensuring that every dish 
                    is served at its peak of flavor and presentation. Our experienced team brings everything needed to 
                    transform any space into a first-class dining destination.
                  </p>
                  <p>
                    From intimate gatherings to large celebrations, we scale our services to accommodate events of any size 
                    while maintaining our high standards of quality and attention to detail.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Off-Premises Catering" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        <FeatureSection 
          title="Event Types"
          subtitle="We provide specialized catering services for a variety of occasions, each tailored to the unique requirements of your event."
          features={serviceFeatures}
        />
        
        <section className="py-20 bg-rich-gray border-y border-gold/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="section-title">Equipment Rentals</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Complete your event with our premium rental items, designed to enhance your dining experience 
                    and complement your overall event design. From elegant place settings to functional serving 
                    pieces, we provide everything needed to present your menu beautifully.
                  </p>
                  <p>
                    Our rental inventory is meticulously maintained to ensure that every item arrives in pristine 
                    condition. We offer flexible rental options that can be tailored to your specific needs, 
                    whether you're hosting an intimate dinner party or a grand celebration.
                  </p>
                  <p>
                    Our team handles all aspects of delivery, setup, and pickup, making the rental process 
                    seamless and stress-free for our clients.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Equipment Rentals" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        <FeatureSection 
          title="Rental Options"
          subtitle="Elevate your event with our premium rental items, from elegant tableware to sophisticated linens."
          features={rentalFeatures}
          columns={3}
        />
        
        <section className="py-20 bg-rich-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Professional Staffing" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="section-title">Professional Staffing</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Our professionally trained staff ensures that your event runs smoothly from start to finish. 
                    Each team member is carefully selected and thoroughly trained to provide exceptional service 
                    with attention to every detail.
                  </p>
                  <p>
                    We tailor our staffing to the specific needs of your event, providing the right number of 
                    servers, bartenders, chefs, and support personnel to maintain the perfect service level for 
                    your guests.
                  </p>
                  <p>
                    From discreet, white-glove service at formal dinners to engaging, interactive service at casual 
                    events, our staff adapts to the tone and style of your occasion while maintaining the highest 
                    standards of professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeatureSection 
          title="Staffing Services"
          subtitle="Our professional team ensures flawless execution and impeccable service for your event."
          features={staffingFeatures}
          columns={3}
        />
        
        <BookCta 
          title="Ready to Plan Your Event?"
          subtitle="Contact us today to discuss how our catering services, equipment rentals, and professional staffing can make your next event exceptional."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
