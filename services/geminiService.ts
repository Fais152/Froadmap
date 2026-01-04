import { GoogleGenAI, Type } from "@google/genai";
import { SKILLS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSkillRecommendation = async (goal: string, timeCommitment: string) => {
  try {
    const prompt = `
      User Goal: ${goal}
      Available Time: ${timeCommitment}
      
      Available Skills: ${SKILLS.map(s => `${s.title} (${s.id})`).join(', ')}
      
      Based on the user's goal and time, recommend exactly ONE skill from the list.
      Provide a brief reasoning (max 2 sentences).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedSkillId: { type: Type.STRING },
            reasoning: { type: Type.STRING }
          },
          required: ["recommendedSkillId", "reasoning"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    return null;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};