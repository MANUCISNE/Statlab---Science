// /api/claude.js — Vercel serverless function using Groq (Llama 3.3 70B - FREE)
// The Groq API key stays on the server; never exposed to the browser.

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Use POST." });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "GROQ_API_KEY not set in Vercel Environment Variables.",
    });
  }

  try {
    const { prompt, max_tokens = 2000 } = req.body || {};

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Field 'prompt' is required (string)." });
    }

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: Math.min(max_tokens, 8000),
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: "You are an expert biostatistician. Always respond with valid JSON only, no markdown fences, no commentary outside the JSON object. All textual content (interpretations, rationales, notes) must be in English."
          },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" },
      }),
    });

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      return res.status(groqResponse.status).json(data);
    }

    // Adapt Groq's OpenAI-style response to the Anthropic-style format
    // the frontend expects (data.content[0].text)
    const text = data.choices?.[0]?.message?.content || "";
    const adapted = {
      content: [{ type: "text", text }],
      original: data,
    };

    return res.status(200).json(adapted);
  } catch (err) {
    console.error("Proxy error:", err);
    return res.status(500).json({ error: err.message });
  }
}
