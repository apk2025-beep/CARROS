import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Car } from 'lucide-react';
import { CONFIG, SERVICE_AREAS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-400 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
              <Car className="w-8 h-8 text-brand-orange" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-none tracking-wide">ARIZONA</span>
                <span className="text-brand-orange text-xs font-semibold tracking-wider">AUTO BUYERS</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Compramos autos en cualquier condición en Phoenix, Tucson, Mesa, Scottsdale y todo el valle. Servicio rápido, honesto y en español.
            </p>
            <div className="flex gap-4">
              <a href={CONFIG.social.facebook} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href={CONFIG.social.instagram} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Áreas de Servicio</h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.map((area, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contáctanos</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${CONFIG.phone.replace(/\D/g,'')}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="text-brand-orange" size={20} />
                  <span className="text-lg font-bold text-white">{CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONFIG.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="text-brand-orange" size={20} />
                  {CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-brand-orange" size={20} />
                {CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Arizona Auto Buyers. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};