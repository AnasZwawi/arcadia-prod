import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Resend } from "resend";

const API_KEY = process.env.GEMINI_API_KEY;
const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = process.env.ARCADIA_TEAM_EMAIL || "contact@arcadiaprod.com";

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();

  if (!message) {
    return NextResponse.json({ reply: "Message is required" }, { status: 400 });
  }

  try {
    if (!API_KEY) throw new Error("GEMINI_API_KEY is not configured");

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are the Arcadia AI Advisor — a sharp, knowledgeable assistant for Arcadia Production, a premium video and photo production company.

About Arcadia Production:
- We specialize in high-end video production, photography, brand films, wedding films, commercials, music videos, and creative content.
- We work with brands, artists, couples, and businesses who want exceptional visual storytelling.
- Our team handles everything: concept, pre-production, shooting, editing, and delivery.
- We operate across Tunisia and internationally.

Your role:
- Help potential clients understand our services and how we can help their project.
- Gather key details about their project naturally across the conversation — remember everything they've told you.
- Answer questions about pricing, timelines, process, packages, and availability.
- Be concise, professional, and warm — like a creative director having a real conversation.
- NEVER ask the same question twice. Always build on what the client has already told you.
- When you have enough info about a project, summarize it and suggest next steps (e.g., booking a call, sending a brief).
- If you don't know specific pricing, say our team will follow up with a tailored quote.

IMPORTANT — Lead capture:
- When a client provides their contact info (email or phone), always include a special JSON block at the very END of your reply, after your normal message, in this exact format on its own line:
  LEAD_DATA:{"name":"...","email":"...","phone":"...","projectType":"...","date":"...","location":"...","notes":"..."}
- Only include fields you actually have. Use empty string "" for unknown fields.
- This line will be stripped before showing the message to the user — it's for internal use only.

Tone: Confident, creative, minimal. No fluff. No corporate speak.`,
    });

    const rawHistory = (history || []).slice(0, -1);
    const firstUserIdx = rawHistory.findIndex(
      (msg: { sender: string; text: string }) => msg.sender === "user",
    );
    const chatHistory = (
      firstUserIdx === -1 ? [] : rawHistory.slice(firstUserIdx)
    ).map((msg: { sender: string; text: string }) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(message);
    let aiResponse =
      result?.response?.text() ||
      "Sorry, I couldn't process that. Could you rephrase?";

    // Extract LEAD_DATA if present and send email to the team
    const leadMatch = aiResponse.match(/LEAD_DATA:(\{.*?\})/);
    if (leadMatch) {
      try {
        const lead = JSON.parse(leadMatch[1]);

        await resend.emails.send({
          from: "Arcadia AI <noreply@arcadiaprod.com>",
          to: TEAM_EMAIL,
          subject: `New Lead: ${lead.projectType || "Project Inquiry"} — ${lead.name || "Unknown Client"}`,
          html: `
            <div style="font-family: monospace; background: #000; color: #fff; padding: 32px; max-width: 600px;">
              <h2 style="color: #c8f135; text-transform: uppercase; letter-spacing: 0.2em; font-size: 14px; margin-bottom: 24px;">
                New Lead from Arcadia AI
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                ${Object.entries(lead)
                  .filter(([, v]) => v)
                  .map(
                    ([k, v]) => `
                  <tr>
                    <td style="color: #c8f135; padding: 8px 16px 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; vertical-align: top; white-space: nowrap;">${k}</td>
                    <td style="color: #ccc; padding: 8px 0; font-size: 13px;">${v}</td>
                  </tr>`,
                  )
                  .join("")}
              </table>
              <hr style="border: 1px solid #222; margin: 24px 0;" />
              <p style="color: #555; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">
                Collected via Arcadia AI Chat · Follow up ASAP
              </p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Failed to send lead email:", emailErr);
      }

      // Strip the LEAD_DATA line before sending response to user
      aiResponse = aiResponse.replace(/\nLEAD_DATA:\{.*?\}/g, "").trim();
    }

    return NextResponse.json({ reply: aiResponse });
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    return NextResponse.json(
      { reply: "There was an issue with the AI. Please try again later." },
      { status: 500 },
    );
  }
}
