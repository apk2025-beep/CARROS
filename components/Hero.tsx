import React, { useState } from 'react';
import { Phone, CheckCircle, Loader2, Sparkles, MapPin, Car } from 'lucide-react';
import { CONFIG, CONDITIONS } from '../constants';
import { CarDetails, QuoteResponse } from '../types';
import { generateSmartQuote } from '../services/geminiService';

export const Hero: React.FC = () => {
  const [form, setForm] = useState<CarDetails>({
    year: '',
    make: '',
    model: '',
    condition: 'Falla Mecánica',
    zip: ''
  });
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<QuoteResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setQuote(null);
    try {
      // Simulate a small delay for better UX if API is instant
      const [result] = await Promise.all([
        generateSmartQuote(form),
        new Promise(resolve => setTimeout(resolve, 1500)) 
      ]);
      setQuote(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hero" className="relative bg-brand-dark min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-white space-y-6 animate-fade-in-up">
          <div className="inline-block bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-1">
            <span className="text-brand-orange text-sm font-semibold tracking-wide flex items-center gap-2">
               <MapPin size={14} /> SERVING ALL ARIZONA
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Compramos Tu <br />
            Auto <span className="text-brand-orange">Chocado o Viejo</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-lg">
            Recibe dinero en efectivo hoy mismo. No importa la condición. Vamos a donde estés en Phoenix, Tucson y alrededores.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <a href={`tel:${CONFIG.phone.replace(/\D/g,'')}`} className="bg-white text-brand-dark hover:bg-gray-100 px-8 py-3.5 rounded-lg font-bold flex items-center gap-3 transition-colors shadow-lg group">
              <Phone className="text-brand-orange group-hover:scale-110 transition-transform" />
              <span className="text-lg">{CONFIG.phone}</span>
            </a>
            <span className="text-gray-400 font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Disponible 24/7
            </span>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full ml-auto relative">
           <div className="absolute -top-4 -right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
             RESPUESTA EN SEGUNDOS
           </div>

           {!quote ? (
             <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Cotiza tu Auto Gratis</h2>
                  <p className="text-gray-500 text-sm mt-1">Completa el formulario para una oferta</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase">Año</label>
                      <input 
                        type="number" 
                        name="year" 
                        value={form.year} 
                        onChange={handleChange}
                        placeholder="2010" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase">Marca</label>
                      <input 
                        type="text" 
                        name="make"
                        value={form.make}
                        onChange={handleChange}
                        placeholder="Toyota" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase">Modelo</label>
                    <input 
                      type="text" 
                      name="model"
                      value={form.model}
                      onChange={handleChange}
                      placeholder="Camry" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase">Condición</label>
                    <select 
                      name="condition"
                      value={form.condition}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                    >
                      {CONDITIONS.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase">Código Postal (Zip Code)</label>
                    <input 
                      type="text" 
                      name="zip"
                      value={form.zip}
                      onChange={handleChange}
                      placeholder="85001" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 rounded-lg shadow-lg transform active:scale-95 transition-all flex justify-center items-center gap-2 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" /> Analizando...
                      </>
                    ) : (
                      <>
                        <Car /> Ver Oferta Instantánea
                      </>
                    )}
                  </button>
                </form>
             </>
           ) : (
             <div className="animate-fade-in text-center py-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Estimado Listo!</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-500 mb-1">Oferta Estimada:</p>
                  <p className="text-3xl font-extrabold text-brand-orange">{quote.estimatedRange}</p>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {quote.message}
                </p>
                
                {/* AI Fun Fact */}
                <div className="bg-blue-50 p-3 rounded-lg mb-6 text-left flex gap-3">
                   <Sparkles className="text-blue-500 shrink-0" size={20} />
                   <p className="text-xs text-blue-800 italic">"{quote.funFact}"</p>
                </div>

                <a 
                  href={`tel:${CONFIG.phone.replace(/\D/g,'')}`}
                  className="w-full bg-brand-dark hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex justify-center items-center gap-2 mb-3 transition-colors"
                >
                  <Phone size={18} /> Llamar para Aceptar
                </a>
                <button 
                  onClick={() => setQuote(null)}
                  className="text-gray-400 text-sm hover:text-gray-600 underline"
                >
                  Cotizar otro auto
                </button>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};