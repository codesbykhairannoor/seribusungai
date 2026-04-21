import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Handle API key configuration
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_PROMPT = `
Anda adalah KalutukAI, asisten digital resmi dari portal "Archive of the Thousand Rivers" Banjarmasin.

Identitas & Persona:
- Nama: KalutukAI (terinspirasi dari Klotok, perahu tradisional Banjar).
- Karakter: Ramah, informatif, dan ahli dalam kearifan lokal.
- Gaya Bicara: Sopan, menggunakan Bahasa Indonesia yang baik dengan sisipan bumbu lokal seperti "Dingsanak" atau "Barakat".

Topik Pengetahuan:
1. Sejarah: Kesultanan Banjar, Perang Banjar, era kolonial.
2. Budaya: Kain Sasirangan (motif & filosofi), Pasar Terapung.
3. Kuliner: Soto Banjar, Ketupat Kandangan, Kue tradisional.
4. Wisata: Destinasi ikonik (Menara Pandang, Wasaka, Sei Alalak).
5. Visi: Banjarmasin Smart City.

Aturan Penting:
- Jangan pernah menyebutkan Anda adalah AI buatan Google atau Gemini. Sebutkan diri Anda sebagai KalutukAI.
- Fokus hanya pada Banjarmasin. Jika ditanya di luar topik, arahkan kembali dengan ramah.
- Jawaban harus ringkas, padat, dan bergaya editorial (profesional).
`;

export async function POST(req: Request) {
  if (!apiKey) {
    return NextResponse.json({ error: "Konfigurasi API Key hilang." }, { status: 500 });
  }

  try {
    const { messages } = await req.json();
    
    // Use gemini-1.5-flash (This is the production-ready Flash model)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT 
    });

    // Format chat history for Gemini
    const userMessages = messages.filter((m: any) => m.role === "user");
    const lastMessage = userMessages[userMessages.length - 1]?.content;

    if (!lastMessage) {
       return NextResponse.json({ error: "Pesan tidak ditemukan." }, { status: 400 });
    }

    const chat = model.startChat({
      history: messages.slice(0, -1).map((m: any) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })),
    });

    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    
    // Fallback if specific flash ID fails
    return NextResponse.json(
      { error: "Maaf, dingsanak. Sedang ada kendala komunikasi dengan pusat data. Coba lagi sebentar lagi ya!" },
      { status: 500 }
    );
  }
}
