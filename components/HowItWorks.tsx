import React from 'react';
import { STEPS } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-orange rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
              <img 
                src="https://picsum.photos/seed/towtruck/800/600" 
                alt="Tow truck picking up car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Servicio Rápido y Seguro</p>
                <p className="text-sm opacity-80">En todo el Valle del Sol</p>
              </div>
            </div>
          </div>

          {/* Right Steps */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Vender tu carro nunca fue tan <span className="text-brand-orange">fácil</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Olvídate de anuncios clasificados y extraños visitando tu casa. Nosotros lo hacemos simple y profesional.
            </p>

            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.id} className="flex gap-6 group">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-brand-orange transition-colors">
                      {step.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};