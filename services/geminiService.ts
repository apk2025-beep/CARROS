import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, QuoteResponse } from "../types";

// NOTE: In a real production app, you should not expose API keys on the client side.
// This is for demonstration purposes as per the requested architecture.
const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

export const generateSmartQuote = async (details: CarDetails): Promise<QuoteResponse> => {
  if (!apiKey) {
    // Fallback if no API key is present
    return {
      estimatedRange: "$500 - $3,500",
      message: "Estimación preliminar basada en mercado local.",
      funFact: "Los precios de autos usados en Arizona han subido un 15% este año."
    };
  }

  try {
    const prompt = `
      Act as a professional used car buyer in Arizona.
      User is selling: ${details.year} ${details.make} ${details.model}
      Condition: ${details.condition}
      Zip Code: ${details.zip}

      Provide a realistic price range estimate for purchasing this car (as a junk/used car buyer).
      Also provide a short, friendly message in Spanish encouraging them to sell.
      And a very short interesting "fun fact" about this specific car model in Spanish.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedRange: { type: Type.STRING, description: "Price range e.g. '$400 - $1200'" },
            message: { type: Type.STRING, description: "Friendly message in Spanish" },
            funFact: { type: Type.STRING, description: "Fun fact in Spanish" }
          }
        }
      }
    });

    if (response.text) {
        return JSON.parse(response.text) as QuoteResponse;
    }
    throw new Error("No response text");

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      estimatedRange: "Pendiente de Revisión",
      message: "Nuestros agentes revisarán tu auto manualmente para darte la mejor oferta.",
      funFact: "¡Llámanos para una oferta exacta!"
    };
  }
};