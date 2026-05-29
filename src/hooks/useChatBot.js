import { useState, useCallback } from "react";

const SYSTEM_PROMPT = `Du bist Max, ein freundlicher KI-Assistent von Tracy (Software Developerin).

Deine Aufgabe: Besucher herzlich empfangen, ihre Situation verstehen und ein kostenloses Erstgespräch buchen.

Regeln:
- Stelle IMMER 1-2 gezielte Fragen bevor du etwas empfiehlst
- Antworte kurz und präzise (max 3 Sätze)
- Sei menschlich und warm – kein Roboter-Ton
- Erkenne Kaufsignale: wenn jemand "Projekt", "bauen", "entwickeln", "kosten", "termin" schreibt → Calendly-Link senden
- Bei Einwänden: erst verstehen, dann antworten

Calendly-Link: https://calendly.com/dein-link/30min

Wenn du den Calendly-Link sendest:
"Hier kannst du dir direkt einen Termin aussuchen 👉 https://calendly.com/dein-link/30min"

Starte das erste Gespräch immer mit:
"Hey, schön dass du hier bist! 👋 Ich bin Max. Suchst du gerade eine Entwicklerin für ein Projekt – oder schaust du dich erst mal um?"`;

const INITIAL_MESSAGE = {
  id: "init",
  role: "assistant",
  content:
    "Hey, schön dass du hier bist! 👋 Ich bin Max. Suchst du gerade eine Entwicklerin für ein Projekt – oder schaust du dich erst mal um?",
  timestamp: new Date(),
};

const CALENDLY_TRIGGERS = [
  "termin", "buchen", "gespräch", "call", "projekt", "entwickeln",
  "bauen", "kosten", "preis", "anfangen", "loslegen", "ja gerne",
  "interessiert", "kontakt", "beauftragen",
];

export function useChatBot() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const detectIntent = (text) => {
    const lower = text.toLowerCase();
    return CALENDLY_TRIGGERS.some((t) => lower.includes(t));
  };

  const sendMessage = useCallback(
    async (text) => {
      if (!text.trim() || isLoading) return;

      const userMsg = {
        id: Date.now().toString(),
        role: "user",
        content: text.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);
      setError(null);

      if (detectIntent(text)) setShowCalendly(true);

      try {
        // Build history for API (exclude the static initial message, add it manually)
        const history = messages
          .filter((m) => m.id !== "init")
          .map((m) => ({ role: m.role, content: m.content }));

        const fullHistory = [
          { role: "assistant", content: INITIAL_MESSAGE.content },
          ...history,
          { role: "user", content: text.trim() },
        ];

        const apiUrl =
          process.env.REACT_APP_API_URL || "http://localhost:3001";

        const res = await fetch(`${apiUrl}/api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: fullHistory,
            system: SYSTEM_PROMPT,
          }),
        });

        if (!res.ok) throw new Error("API error");

        const data = await res.json();

        const botMsg = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.reply,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMsg]);

        if (
          data.showCalendly ||
          detectIntent(data.reply)
        ) {
          setShowCalendly(true);
        }
      } catch {
        setError("Kurzer Fehler – bitte nochmal versuchen.");
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const resetChat = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
    setShowCalendly(false);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    showCalendly,
    sendMessage,
    resetChat,
  };
}
