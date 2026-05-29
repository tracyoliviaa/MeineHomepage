import React, { useState, useRef, useEffect } from "react";
import { useChatBot } from "../hooks/useChatBot";
import "./ChatWidget.css";

const CALENDLY_URL = "https://calendly.com/dein-link/30min";

function TypingIndicator() {
  return (
    <div className="cw-message cw-bot">
      <div className="cw-avatar">M</div>
      <div className="cw-bubble cw-bubble-bot cw-typing">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function Message({ msg }) {
  const isBot = msg.role === "assistant";
  const text = msg.content;
  const hasLink = text.includes("calendly.com");
  const parts = hasLink ? text.split(/(https?:\/\/\S+)/g) : null;

  return (
    <div className={`cw-message ${isBot ? "cw-bot" : "cw-user"}`}>
      {isBot && <div className="cw-avatar">M</div>}
      <div className={`cw-bubble ${isBot ? "cw-bubble-bot" : "cw-bubble-user"}`}>
        {hasLink ? (
          parts.map((part, i) =>
            part.match(/^https?:\/\//) ? (
              <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="cw-link"
              >
                Termin buchen →
              </a>
            ) : (
              <span key={i}>{part}</span>
            )
          )
        ) : (
          text
        )}
      </div>
      {!isBot && <div className="cw-avatar cw-avatar-user">Du</div>}
    </div>
  );
}

function CalendlyBanner() {
  return (
    <div className="cw-calendly-banner">
      <div className="cw-calendly-icon">📅</div>
      <div className="cw-calendly-text">
        <strong>Kostenloses Erstgespräch</strong>
        <span>30 Minuten – unverbindlich</span>
      </div>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cw-calendly-btn"
      >
        Jetzt buchen
      </a>
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isLoading, error, showCalendly, sendMessage, resetChat } =
    useChatBot();
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  function handleSend() {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function autoResize(el) {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 90) + "px";
  }

  return (
    <>
      {/* Floating trigger button */}
      {!isOpen && (
        <button
          className="cw-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Chat öffnen"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
          </svg>
          <span>Lass uns reden</span>
          <span className="cw-trigger-dot" />
        </button>
      )}

      {/* Chat window */}
      <div className={`cw-window ${isOpen ? "cw-window-open" : ""}`}>
        {/* Header */}
        <div className="cw-header">
          <div className="cw-header-info">
            <div className="cw-header-avatar">M</div>
            <div>
              <div className="cw-header-name">Max</div>
              <div className="cw-header-status">
                <span className="cw-status-dot" />
                Jetzt online
              </div>
            </div>
          </div>
          <div className="cw-header-actions">
            <button
              className="cw-icon-btn"
              onClick={resetChat}
              title="Neu starten"
            >
              ↺
            </button>
            <button
              className="cw-icon-btn"
              onClick={() => setIsOpen(false)}
              title="Schließen"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="cw-messages">
          {messages.map((msg) => (
            <Message key={msg.id} msg={msg} />
          ))}
          {isLoading && <TypingIndicator />}
          {error && <div className="cw-error">{error}</div>}
          {showCalendly && <CalendlyBanner />}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="cw-input-area">
          <textarea
            ref={inputRef}
            className="cw-input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              autoResize(e.target);
            }}
            onKeyDown={handleKey}
            placeholder="Schreib Max eine Nachricht..."
            rows={1}
            disabled={isLoading}
          />
          <button
            className="cw-send-btn"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            aria-label="Senden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M22 2L15 22 11 13 2 9l20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="cw-footer">Powered by Claude AI</div>
      </div>
    </>
  );
}
