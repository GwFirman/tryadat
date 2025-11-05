import { GoogleGenAI, Modality } from "@google/genai";

export async function editImageWithPrompt(
    originalImage: { base64Data: string, mimeType: string },
    prompt: string
): Promise<string> {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable is not set.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash-preview-image-generation',
            contents: {
                parts: [
                    {
                        text: prompt,
                    },
                    {
                        inlineData: {
                            data: originalImage.base64Data,
                            mimeType: originalImage.mimeType,
                        },
                    },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
                return part.inlineData.data;
            }
        }
        
        throw new Error('Tidak ada gambar yang dihasilkan. Prompt mungkin telah diblokir.');
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Gemini API Error: ${error.message}`);
        }
        throw new Error('Terjadi kesalahan yang tidak diketahui saat memanggil Gemini API.');
    }
}