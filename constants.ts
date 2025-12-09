import { SiteConfig, Condition } from './types';
import { Phone, Clock, DollarSign, Shield, Truck, MapPin } from 'lucide-react';

// ==========================================
// CONFIGURACIÓN PRINCIPAL (Edita esto)
// ==========================================
export const CONFIG: SiteConfig = {
  phone: "(602) 555-0199",
  email: "cotizaciones@arizonaautobuyers.com",
  address: "Phoenix, AZ 85001",
  social: {
    facebook: "#",
    instagram: "#"
  }
};

export const NAV_LINKS = [
  { name: "Inicio", href: "#hero" },
  { name: "Cómo Funciona", href: "#how-it-works" },
  { name: "Preguntas", href: "#faq" },
  { name: "Testimonios", href: "#testimonials" }
];

export const CONDITIONS = [
  Condition.EXCELLENT,
  Condition.GOOD,
  Condition.FAIR,
  Condition.MECHANICAL_ISSUES,
  Condition.WRECKED
];

export const FEATURES = [
  {
    icon: DollarSign,
    title: "Mejor Oferta Garantizada",
    description: "Pagamos más que el yonke promedio. Evaluamos partes y metal."
  },
  {
    icon: Truck,
    title: "Grúa Gratis",
    description: "Vamos por tu auto sin costo alguno en cualquier parte de AZ."
  },
  {
    icon: Clock,
    title: "Pago el Mismo Día",
    description: "Dinero en mano al momento de recoger el vehículo."
  },
  {
    icon: Shield,
    title: "Trámite Seguro",
    description: "Nos encargamos de todo el papeleo del título y traspaso."
  }
];

export const STEPS = [
  {
    id: "01",
    title: "Pide tu Cotización",
    description: "Llámanos o llena el formulario con los detalles de tu auto."
  },
  {
    id: "02",
    title: "Acepta la Oferta",
    description: "Te damos un precio justo al instante. Sin compromisos."
  },
  {
    id: "03",
    title: "Recibes tu Dinero",
    description: "Vamos por el auto, te pagamos en efectivo y nos lo llevamos."
  }
];

export const FAQS = [
  {
    question: "¿Necesito tener el título del auto?",
    answer: "Sí, generalmente requerimos el título de propiedad para poder comprar el vehículo legalmente. Si has perdido el título pero eres el dueño registrado, contáctanos para ver cómo podemos ayudarte."
  },
  {
    question: "¿Compran autos que no funcionan?",
    answer: "¡Absolutamente! Compramos autos en cualquier condición: chocados, descompuestos, con motor soplado o simplemente viejos."
  },
  {
    question: "¿Cuánto cuesta el servicio de grúa?",
    answer: "El servicio de grúa es 100% GRATIS. Nosotros vamos a donde esté el auto y lo recogemos sin costo para ti."
  },
  {
    question: "¿Cuándo recibo mi dinero?",
    answer: "Recibes el pago en el mismo momento en que recogemos el auto. Usualmente pagamos en efectivo o cheque de caja."
  },
  {
    question: "¿Qué áreas cubren en Arizona?",
    answer: "Cubrimos todo el área metropolitana de Phoenix, Tucson, Mesa, Scottsdale, Glendale, Peoria y alrededores."
  }
];

export const TESTIMONIALS = [
  {
    stars: 5,
    text: "Tenía un Honda Civic 2005 chocado en mi cochera por meses. Vinieron el mismo día, me pagaron en efectivo y se lo llevaron. ¡Excelente servicio!",
    author: "Carlos M.",
    location: "Phoenix, AZ"
  },
  {
    stars: 5,
    text: "Muy amables y profesionales. Me ofrecieron más que el yonke local. El conductor de la grúa fue muy respetuoso.",
    author: "Maria R.",
    location: "Mesa, AZ"
  },
  {
    stars: 5,
    text: "Proceso súper rápido. Llené el formulario y en 10 minutos ya tenía una oferta. Recomendados 100%.",
    author: "Juan P.",
    location: "Tucson, AZ"
  }
];

export const SERVICE_AREAS = [
  "Phoenix Metro",
  "Tucson",
  "Mesa / Chandler",
  "Glendale / Peoria",
  "Y todo Arizona"
];
