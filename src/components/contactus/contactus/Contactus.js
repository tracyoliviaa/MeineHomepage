import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiAtSign, FiMapPin } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";

// ─── EmailJS (kostenlos, kein Backend) ───────────────────────────────────────
// 1. Geh zu https://www.emailjs.com → kostenlos anmelden
// 2. Service + Template anlegen
// 3. Trage deine IDs unten ein:
const EMAILJS_SERVICE_ID  = "service_XXXXXXX";   // ← deine Service ID
const EMAILJS_TEMPLATE_ID = "template_XXXXXXX";  // ← deine Template ID
const EMAILJS_PUBLIC_KEY  = "XXXXXXXXXXXXXXX";    // ← dein Public Key
// ─────────────────────────────────────────────────────────────────────────────

export default function Contactus() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Bitte alle Felder ausfüllen.");
      return;
    }
    setStatus("sending");
    try {
      // EmailJS REST API – kein Backend nötig
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(142,70,186,0.3)",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <div className="section-professional section-dark" id="contact">
      <div className="container-professional">

        {/* Header */}
        <div className="section-header-professional">
          <Zoom left cascade>
            <h2 className="section-title-professional">Kontakt</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle-professional">
              Offen für Junior-Stellen &amp; spannende Projekte im Raum Frankfurt / Remote
            </p>
          </Zoom>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "40px", marginTop: "48px" }}>

          {/* ── Kontakt-Info ── */}
          <Fade left duration={1000}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* E-Mail */}
              <a href="mailto:m-o-schulz@web.de" style={linkCard}>
                <IconBox><FiAtSign size={22} color="#fff" /></IconBox>
                <div>
                  <div style={labelStyle}>E-Mail</div>
                  <div style={valueStyle}>m-o-schulz@web.de</div>
                </div>
              </a>

              {/* Standort – nur Region, keine Adresse */}
              <div style={{ ...linkCard, cursor: "default", textDecoration: "none" }}>
                <IconBox><FiMapPin size={22} color="#fff" /></IconBox>
                <div>
                  <div style={labelStyle}>Standort</div>
                  <div style={valueStyle}>Neu-Isenburg / Frankfurt am Main</div>
                </div>
              </div>

              {/* Social */}
              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <SocialBtn href="https://github.com/tracyoliviaa" label="GitHub">
                  <AiFillGithub size={22} color="#fbd9ad" />
                </SocialBtn>
                <SocialBtn href="https://www.linkedin.com/in/martina-schulz-5a3a26351" label="LinkedIn">
                  <FaLinkedinIn size={20} color="#fbd9ad" />
                </SocialBtn>
              </div>
            </div>
          </Fade>

          {/* ── Kontaktformular ── */}
          <Fade right duration={1000} delay={200}>
            <div style={{ background: "rgba(142,70,186,0.05)", border: "1px solid rgba(142,70,186,0.2)", borderRadius: "20px", padding: "32px" }}>
              {status === "sent" ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                  <h3 style={{ color: "#fbd9ad", marginBottom: "8px" }}>Nachricht gesendet!</h3>
                  <p style={{ color: "#b8b8b8" }}>Ich melde mich bald bei dir.</p>
                  <button onClick={() => setStatus("idle")} style={{ marginTop: "20px", padding: "10px 24px", background: "#8e46ba", border: "none", borderRadius: "8px", color: "#fff", cursor: "pointer", fontSize: "14px" }}>
                    Neue Nachricht
                  </button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <Field label="Name">
                    <input type="text" name="name" placeholder="Dein Name" value={form.name} onChange={handleChange} style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#8e46ba"} onBlur={e => e.target.style.borderColor = "rgba(142,70,186,0.3)"} />
                  </Field>
                  <Field label="E-Mail">
                    <input type="email" name="email" placeholder="deine@email.de" value={form.email} onChange={handleChange} style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#8e46ba"} onBlur={e => e.target.style.borderColor = "rgba(142,70,186,0.3)"} />
                  </Field>
                  <Field label="Nachricht">
                    <textarea name="message" rows="5" placeholder="Deine Nachricht..." value={form.message} onChange={handleChange}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={e => e.target.style.borderColor = "#8e46ba"} onBlur={e => e.target.style.borderColor = "rgba(142,70,186,0.3)"} />
                  </Field>

                  {status === "error" && (
                    <p style={{ color: "#ff6b6b", fontSize: "13px" }}>
                      Fehler beim Senden. Bitte schreib mir direkt an m-o-schulz@web.de
                    </p>
                  )}

                  <button onClick={handleSubmit} disabled={status === "sending"}
                    className="btn-professional btn-primary-professional"
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", opacity: status === "sending" ? 0.6 : 1 }}>
                    {status === "sending" ? "Wird gesendet..." : <><AiOutlineSend size={16} /> Nachricht senden</>}
                  </button>

                  {/* Fallback wenn EmailJS nicht konfiguriert */}
                  <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(184,184,184,0.5)" }}>
                    Oder direkt:{" "}
                    <a href="mailto:m-o-schulz@web.de" style={{ color: "#8e46ba" }}>m-o-schulz@web.de</a>
                  </p>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

// ── Kleine Hilfs-Components ───────────────────────────────────────────────────

function IconBox({ children }) {
  return (
    <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg,#8e46ba,#b061df)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label style={{ display: "block", marginBottom: "6px", color: "#fbd9ad", fontWeight: 600, fontSize: "13px" }}>{label}</label>
      {children}
    </div>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      style={{ width: "48px", height: "48px", border: "1px solid rgba(142,70,186,0.3)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(142,70,186,0.15)"; e.currentTarget.style.borderColor = "#8e46ba"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(142,70,186,0.3)"; }}>
      {children}
    </a>
  );
}

const linkCard = {
  background: "rgba(142,70,186,0.08)", border: "1px solid rgba(142,70,186,0.2)",
  borderRadius: "14px", padding: "16px 20px", display: "flex", alignItems: "center",
  gap: "16px", textDecoration: "none", transition: "all 0.2s",
};
const labelStyle = { fontWeight: 600, color: "#fbd9ad", marginBottom: "2px", fontSize: "14px" };
const valueStyle = { color: "#b8b8b8", fontSize: "14px" };
