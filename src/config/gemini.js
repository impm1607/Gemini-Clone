import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenerativeAI(apiKey);

export async function runGemini(prompt) {
  try {
    const model = ai.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to Gemini API";
  }
}
