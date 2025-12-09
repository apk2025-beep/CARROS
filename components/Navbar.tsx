import React, { useState, useEffect } from 'react';
import { Phone, Car, Menu, X } from 'lucide-react';
import { CONFIG, NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <Car className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl leading-none tracking-wide">ARIZONA</span>
            <span className="text-brand-orange text-xs font-semibold tracking-wider">AUTO BUYERS</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-white font-medium text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href={`tel:${CONFIG.phone.replace(/\D/g,'')}`} className="bg-brand-orange hover:bg-brand-orangeHover text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg">
            <Phone size={18} />
            {CONFIG.phone}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-gray-800 shadow-xl p-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-lg font-medium py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${CONFIG.phone.replace(/\D/g,'')}`} 
            className="bg-brand-orange text-white w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2 mt-2"
          >
            <Phone size={20} />
            Llamar: {CONFIG.phone}
          </a>
        </div>
      )}
    </nav>
  );
};