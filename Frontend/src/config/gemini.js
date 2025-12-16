import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenerativeAI(apiKey);

console.log("API KEY:", apiKey);

export const runGemini = async (prompt) => {
  try {
    const model = ai.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(prompt);
    response = result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to Gemini API";
  }
};
