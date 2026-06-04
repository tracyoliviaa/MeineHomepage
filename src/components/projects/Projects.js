import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import knowledgeFlowImage from "../../images/nyc.png";
import coreMapImage from "../../images/coremap-dashboard.jpg";
import dailyMindImage from "../../images/dailymind-dashboard.jpg";

// ─── Projekte – mit Business Value ───────────────────────────────────────────
const projects = [
  {
    emoji: "📚",
    title: "KnowledgeFlow",
    subtitle: "Persönliche Wissensdatenbank",
    problem: "Wissen geht verloren, wenn es nicht strukturiert gespeichert wird.",
    built: "Vollständige Web-App mit Login, Notizen, Karteikarten und Spaced-Repetition-Algorithmus.",
    result: "Nutzer lernen Inhalte 3× effizienter durch tägliche Wiederholung.",
    tags: ["React", "Node.js", "MongoDB", "JWT Auth", "Firebase"],
    image: knowledgeFlowImage,
    github: "https://github.com/tracyoliviaa/KnowledgeFlow",
    demo: "https://knowledgeflow-frontend.vercel.app/login",
    status: "live",
  },
  {
    emoji: "🗺️",
    title: "CoreMap",
    subtitle: "Self-Management App",
    problem: "Viele Menschen verlieren den Überblick über ihre Lebensbereiche und Ziele.",
    built: "Dashboard mit 6 Lebensbereich-Tracking, täglichen Impulsen und Ziel-Editor.",
    result: "Gamification-Elemente sorgen für tägliche Rückkehr und Motivation.",
    tags: ["React", "MUI", "Node.js", "MongoDB", "LocalStorage"],
    image: coreMapImage,
    github: "https://github.com/tracyoliviaa/core-map",
    demo: "https://core-map.vercel.app",
    status: "live",
  },
  {
    emoji: "🧠",
    title: "DailyMind",
    subtitle: "Kognitive Lern-App",
    problem: "Kognitive Fähigkeiten brauchen tägliches Training – aber bestehende Apps sind zu zeitintensiv.",
    built: "Mini-Lerneinheiten (10 Min/Tag) für Logik, Sprache, Gedächtnis und Kreativität mit Punktesystem.",
    result: "Nutzer bauen eine tägliche Lerngewohnheit durch kurze, gamifizierte Sessions auf.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gamification"],
    image: dailyMindImage,
    github: "https://github.com/tracyoliviaa/DailyMind",
    demo: "https://dailymind-jlirf6htr-tracyoliviaas-projects.vercel.app",
    status: "live",
  },
];

const STATUS_BADGE = {
  live: { text: "Live Demo", color: "#54faae" },
};

function ProjectCard({ project }) {
  const badge = STATUS_BADGE[project.status] || STATUS_BADGE.live;

  return (
    <Fade bottom>
      <div style={{
        background: "rgba(142,70,186,0.1)",
        border: "1px solid rgba(142,70,186,0.3)",
        borderRadius: "16px",
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(142,70,186,0.25)";
          e.currentTarget.style.borderColor = "#8e46ba";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.borderColor = "rgba(142,70,186,0.3)";
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "26px" }}>{project.emoji}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "17px", color: "#fbd9ad" }}>{project.title}</div>
              <div style={{ fontSize: "12px", color: "#eb90ff", fontWeight: 500 }}>{project.subtitle}</div>
            </div>
          </div>
          <span style={{
            fontSize: "10px", fontWeight: 600, padding: "3px 10px",
            borderRadius: "50px", background: `${badge.color}20`, color: badge.color,
            whiteSpace: "nowrap", textTransform: "uppercase",
          }}>
            {badge.text}
          </span>
        </div>

        {/* Screenshot */}
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "10px", marginBottom: "16px", border: "1px solid rgba(142,70,186,0.2)" }}
        />

        {/* Business Value */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
          <ValueRow icon="🎯" label="Problem" text={project.problem} />
          <ValueRow icon="🔧" label="Gebaut"  text={project.built}   />
          <ValueRow icon="✅" label="Ergebnis" text={project.result}  />
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "11px", padding: "3px 9px", borderRadius: "50px", fontWeight: 500,
              background: "rgba(142,70,186,0.15)", border: "1px solid rgba(142,70,186,0.3)", color: "#fbd9ad",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <a href={project.github} target="_blank" rel="noreferrer" style={btnGhost}>
            <FaCode /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" style={btnPrimary}>
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </Fade>
  );
}

function ValueRow({ icon, label, text }) {
  return (
    <div style={{ display: "flex", gap: "8px", fontSize: "12px", lineHeight: 1.5 }}>
      <span style={{ flexShrink: 0 }}>{icon}</span>
      <span>
        <strong style={{ color: "#fbd9ad" }}>{label}:</strong>{" "}
        <span style={{ color: "#d4d4d4" }}>{text}</span>
      </span>
    </div>
  );
}

const btnGhost = {
  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
  padding: "10px", background: "rgba(251,217,173,0.08)", border: "1px solid rgba(251,217,173,0.25)",
  borderRadius: "8px", color: "#fbd9ad", textDecoration: "none",
  fontSize: "13px", fontWeight: 600, transition: "all 0.2s",
};
const btnPrimary = {
  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
  padding: "10px", background: "linear-gradient(135deg,#8e46ba,#b061df)", border: "none",
  borderRadius: "8px", color: "#fff", textDecoration: "none",
  fontSize: "13px", fontWeight: 600, transition: "all 0.2s",
};

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="projects">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projekte</h1>
              </Zoom>
            </Col>

            {projects.map((project) => (
              <Col md={4} key={project.title} style={{ marginBottom: "24px" }}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>

          <div className="blog--viewAll">
            <Link to="/projectspage" style={{ textDecoration: "none" }}>
              <button className="btn btn-primary" style={{
                background: "linear-gradient(135deg,#8e46ba,#b061df)", border: "none",
                padding: "14px 28px", fontSize: "15px", fontWeight: 600,
                display: "inline-flex", alignItems: "center", gap: "10px",
                borderRadius: "25px", color: "#fff", cursor: "pointer",
                boxShadow: "0 4px 15px rgba(142,70,186,0.3)",
              }}>
                Alle Projekte ansehen
                <HiArrowRight style={{ fontSize: "18px" }} />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
