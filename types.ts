export interface CarDetails {
  year: string;
  make: string;
  model: string;
  condition: string;
  zip: string;
}

export interface SiteConfig {
  phone: string;
  email: string;
  address: string;
  social: {
    facebook: string;
    instagram: string;
  };
}

export interface QuoteResponse {
  estimatedRange: string;
  message: string;
  funFact: string;
}

export enum Condition {
  EXCELLENT = "Excelente",
  GOOD = "Bueno",
  FAIR = "Regular",
  POOR = "Malo",
  MECHANICAL_ISSUES = "Falla Mecánica",
  WRECKED = "Chocado/Yonke"
}