import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/ui/logo/Logo';
const Footer = () => {
  return <footer className="bg-rich-black border-t border-gold/30 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo width={160} />
            </div>
            <p className="text-gray-300 mb-4">Providing exceptional catering services with chef-driven cuisine that blends classic comfort with creative innovation.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/menus" className="text-gray-300 hover:text-gold transition-colors">Menus</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-playfair font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">Off-Premises Catering</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">Rentals</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">Staffing</Link></li>
              <li><Link to="/menus" className="text-gray-300 hover:text-gold transition-colors">Customized Menus</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Event Planning</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-gold mr-3 mt-1" />
                <span className="text-gray-300">517-339-7255</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-gold mr-3 mt-1" />
                <span className="text-gray-300">info@mortonsfinecatering.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-3 mt-1" />
                <span className="text-gray-300">2405 E Michigan Ave<br />Lansing, MI 48912</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn-gold inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Morton's Fine Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;