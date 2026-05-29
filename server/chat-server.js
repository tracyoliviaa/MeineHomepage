const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3001);
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled rejection:", error);
});

function loadEnv() {
  const envPath = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(body));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        req.destroy(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

loadEnv();

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    return sendJson(res, 204, {});
  }

  if (req.method === "GET" && req.url === "/api/health") {
    return sendJson(res, 200, { ok: true });
  }

  if (req.method !== "POST" || req.url !== "/api/chat") {
    return sendJson(res, 404, { error: "Not found" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return sendJson(res, 500, {
      error: "Missing GROQ_API_KEY. Add it to .env in the project root.",
    });
  }

  try {
    const body = await readJson(req);
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const system = body.system || "You are a helpful assistant.";

    if (!messages.length) {
      return sendJson(res, 400, { error: "messages is required" });
    }

    const groqResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.7,
        max_tokens: 500,
        messages: [{ role: "system", content: system }, ...messages],
      }),
    });

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      return sendJson(res, groqResponse.status, {
        error: data.error?.message || "Groq API error",
      });
    }

    const reply = data.choices?.[0]?.message?.content?.trim();
    return sendJson(res, 200, {
      reply: reply || "Ich bin gerade kurz sprachlos. Versuch es bitte nochmal.",
      showCalendly: /calendly\.com/i.test(reply || ""),
    });
  } catch (error) {
    console.error("Chat request failed:", error);
    return sendJson(res, 500, { error: error.message || "Server error" });
  }
});

server.listen(PORT, () => {
  console.log(`Chat API running on http://localhost:${PORT}`);
});
