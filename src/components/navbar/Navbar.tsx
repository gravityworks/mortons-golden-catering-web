
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-rich-black py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold text-white">
            <span className="text-gold">Morton's</span> Fine Catering
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white nav-link">Home</Link>
          <Link to="/about-us" className="text-white nav-link">About Us</Link>
          <Link to="/services" className="text-white nav-link">Services</Link>
          <Link to="/menus" className="text-white nav-link">Menus</Link>
          <Link to="/contact" className="text-white nav-link">Contact</Link>
          <Link to="/contact">
            <Button className="btn-gold">Book Us</Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-rich-black absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container-custom flex flex-col py-8 space-y-6">
            <Link to="/" className="text-white nav-link text-lg" onClick={toggleMenu}>Home</Link>
            <Link to="/about-us" className="text-white nav-link text-lg" onClick={toggleMenu}>About Us</Link>
            <Link to="/services" className="text-white nav-link text-lg" onClick={toggleMenu}>Services</Link>
            <Link to="/menus" className="text-white nav-link text-lg" onClick={toggleMenu}>Menus</Link>
            <Link to="/contact" className="text-white nav-link text-lg" onClick={toggleMenu}>Contact</Link>
            <Link to="/contact" onClick={toggleMenu}>
              <Button className="btn-gold w-full">Book Us</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
