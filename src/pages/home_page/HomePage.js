import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import ChatWidget from "../../components/ChatWidget";
import profileImg from "../../assets/profile.jpg";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />

        {/* ── HERO ──────────────────────────────────────── */}
        <div className="home-section-professional" style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "60px" }}>

          {/* Text links */}
          <div className="home-content-professional">

            {/* Availability badge */}
            <Fade top duration={800}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "6px 16px", borderRadius: "50px", fontSize: "12px",
                fontWeight: 600, marginBottom: "20px",
                background: "rgba(84,250,174,0.12)",
                border: "1px solid rgba(84,250,174,0.3)",
                color: "#54faae",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#54faae", display: "inline-block" }} />
                Verfügbar ab sofort · Raum Frankfurt / Remote
              </span>
            </Fade>

            {/* Name – clean, no wave emoji */}
            <Fade left duration={900} delay={100}>
              <h1 style={{
                fontSize: "clamp(36px,5.5vw,64px)", fontWeight: 800,
                lineHeight: 1.1, letterSpacing: "-0.02em",
                marginBottom: "10px", color: "#fff",
              }}>
                Martina Schulz
              </h1>
            </Fade>

            {/* Role line */}
            <Fade left duration={900} delay={200}>
              <p style={{ fontSize: "clamp(16px,2vw,20px)", color: "#fbd9ad", fontWeight: 500, marginBottom: "16px" }}>
                Fachinformatikerin für Anwendungsentwicklung
              </p>
            </Fade>

            {/* Typewriter */}
            <Fade left duration={900} delay={300}>
              <div style={{
                display: "inline-block",
                background: "rgba(142,70,186,0.15)",
                border: "1px solid rgba(142,70,186,0.35)",
                borderRadius: "10px", padding: "10px 20px", marginBottom: "24px",
              }}>
                <Typing />
              </div>
            </Fade>

            {/* Short pitch – 2 lines max */}
            <Fade left duration={900} delay={400}>
              <p style={{
                fontSize: "16px", color: "#d4d4d4", lineHeight: 1.75,
                maxWidth: "480px", marginBottom: "32px",
              }}>
                Ich entwickle moderne Webanwendungen mit React &amp; Node.js.
                Drei eigene Live-Projekte, KI-Erfahrung, lernbereit.
              </p>
            </Fade>

            {/* CTAs */}
            <Fade left duration={900} delay={500}>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "32px" }}>
                <a
                  href={process.env.PUBLIC_URL + "/Lebenslauf-Martina-Schulz.pdf"}
                  download
                  className="btn-professional btn-primary-professional"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <HiDownload size={18} /> Lebenslauf herunterladen
                </a>
                <a
                  href="https://www.linkedin.com/in/martina-schulz-5a3a26351"
                  target="_blank" rel="noreferrer"
                  className="btn-professional btn-secondary-professional"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <FaLinkedinIn size={16} /> LinkedIn
                </a>
              </div>
            </Fade>

            {/* Social icons – smaller, below CTAs */}
            <Fade left duration={900} delay={600}>
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { href: "https://github.com/tracyoliviaa", icon: <AiFillGithub size={20} />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/martina-schulz-5a3a26351", icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
                ].map(({ href, icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    style={{
                      width: "40px", height: "40px", borderRadius: "10px",
                      border: "1px solid rgba(142,70,186,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fbd9ad", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(142,70,186,0.2)"; e.currentTarget.style.borderColor = "#8e46ba"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(142,70,186,0.35)"; }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </Fade>
          </div>

          {/* Foto rechts */}
          <div className="home-image-professional">
            <Fade right duration={1000} delay={200}>
              <Tilt>
                <div className="image-frame-professional" style={{ boxShadow: "0 20px 60px rgba(142,70,186,0.4)" }}>
                  <img src={profileImg} alt="Martina Schulz – Fachinformatikerin" className="img-fluid" />
                </div>
              </Tilt>
            </Fade>
          </div>
        </div>
      </Container>

      {/* ── SECTIONS ───────────────────────────────────── */}
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
      <ChatWidget />
    </section>
  );
}
