import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h2>
          <div className="flex justify-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-gray-200" size={48} />
              
              <div className="flex gap-1 text-yellow-400 mb-4 relative z-10">
                {[...Array(t.stars)].map((_, idx) => <Star key={idx} fill="currentColor" size={16} />)}
              </div>
              
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed min-h-[80px]">
                "{t.text}"
              </p>
              
              <div>
                <p className="font-bold text-gray-900">{t.author}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};