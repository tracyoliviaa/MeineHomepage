import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Particle from "../../Particle";

import knowledgeFlowImage from "../../images/nyc.png";
import coreMapImage from "../../images/coremap-dashboard.jpg";
import dailyMindImage from "../../images/dailymind-dashboard.jpg";
import macCleanerImage from "../../images/mac-cleaner.jpg";
import linuxServerImage from "../../images/grafana-dashboard.png";
import tracyDashboardImage from "../../images/tracy-dashboard.jpg";

const projects = [
  {
    emoji: "📚",
    title: "KnowledgeFlow",
    subtitle: "Persönliche Wissensdatenbank",
    problem: "Wissen geht verloren, wenn es nicht strukturiert gespeichert wird.",
    built: "Vollständige Web-App mit Login (JWT Auth), Notizen, Karteikarten und Spaced-Repetition.",
    result: "Nutzer lernen Inhalte 3× effizienter durch tägliche Wiederholung.",
    tags: ["React", "Node.js", "MongoDB", "JWT Auth", "Firebase", "Tailwind"],
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
    built: "Dashboard mit 6 Lebensbereich-Tracking, täglichen Impulsen, Gamification und Ziel-Editor.",
    result: "Gamification sorgt für tägliche Rückkehr und nachhaltige Gewohnheiten.",
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
    problem: "Kognitive Fähigkeiten brauchen tägliches Training – bestehende Apps sind zu zeitintensiv.",
    built: "10-Minuten Mini-Sessions für Logik, Sprache, Gedächtnis und Kreativität mit Punktesystem.",
    result: "Tägliche Lerngewohnheit durch kurze, gamifizierte Sessions.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gamification"],
    image: dailyMindImage,
    github: "https://github.com/tracyoliviaa/DailyMind",
    demo: "https://dailymind-jlirf6htr-tracyoliviaas-projects.vercel.app",
    status: "live",
  },
{
  emoji: "🧹",
  title: "MacCleaner",
  subtitle: "Native macOS Utility App — Swift & SwiftUI",
  problem: "CleanMyMac kostet €40/Jahr. Die meisten Nutzer brauchen nur wenige Kernfunktionen.",
  built: "Vollständige native macOS App in Swift/SwiftUI mit Disk Scanner, Memory Monitor, CPU Monitor, Duplicate Finder, Privacy Cleaner und App Uninstaller. MVVM-Architektur, keine externen Dependencies.",
  result: "Funktionsfähige Utility-App als persönliche Alternative zu einem kommerziellen Produkt — zeigt systemnahe Programmierung außerhalb des Web-Stacks.",
  tags: ["Swift", "SwiftUI", "macOS", "MVVM", "FileManager", "CryptoKit", "async/await"],
  image: macCleanerImage,
  github: "https://github.com/tracyoliviaa/MacCleaner",
  demo: "https://github.com/tracyoliviaa/MacCleaner",
  demoLabel: "Details",
  status: "native",
},
{
  emoji: "🖥️",
  title: "Linux Server Lab",
  subtitle: "Rechenzentrum & Cloud Infrastructure",
  problem: "Praxiserfahrung mit Linux-Administration und Cloud-Infrastruktur für Rechenzentrum-Bewerbungen fehlte.",
  built: "Ubuntu Linux Server mit SSH Key Authentication, Nginx Webserver, UFW Firewall, fail2ban Intrusion Prevention, Prometheus Monitoring, Grafana Dashboard und automatisiertem Backup-Script. Zusätzlich auf Google Cloud Platform (GCP) deployed.",
  result: "Vollständiger Linux-Server Stack mit Security Hardening, Monitoring und Automation — dokumentiert und reproduzierbar.",
  tags: ["Linux", "Ubuntu", "Nginx", "SSH", "UFW", "fail2ban", "Prometheus", "Grafana", "GCP", "Bash", "Docker"],
  image: linuxServerImage,
  github: "https://github.com/tracyoliviaa",
  demo: "https://github.com/tracyoliviaa",
  demoLabel: "Details",
  status: "infra",
},


  {
    emoji: "📊",
    title: "Tracy's Dashboard",
    subtitle: "Personal HQ",
    problem: "Habit-Tracking, Finanzen und Tages-KPIs waren über mehrere Apps verteilt.",
    built: "Persönliches Dashboard mit Habit-Tracker, ETF-Tracking (VWCE), Dark Mode und Live-KPIs.",
    result: "Alles an einem Ort – selbst gebaut, kein Template, komplett eigener Code.",
    tags: ["React", "Vite", "Tailwind", "Context API", "Dark Mode"],
    image: tracyDashboardImage,
    github: "https://github.com/tracyoliviaa/tracy-dashboard",
    demo: "https://tracyoliviaa.github.io/tracy-dashboard",
    status: "live",
  },
];

const STATUS_BADGE = {
  live: { text: "Live Demo", color: "#54faae" },
  native: { text: "Native App", color: "#fbd9ad" },
  infra: { text: "Infrastructure", color: "#8ad7ff" },
};

function ValueRow({ icon, label, text }) {
  return (
    <div style={{ display: "flex", gap: "8px", fontSize: "12px", lineHeight: 1.55 }}>
      <span style={{ flexShrink: 0 }}>{icon}</span>
      <span>
        <strong style={{ color: "#fbd9ad" }}>{label}:</strong>{" "}
        <span style={{ color: "#d4d4d4" }}>{text}</span>
      </span>
    </div>
  );
}

function ProjectCard({ project }) {
  const badge = STATUS_BADGE[project.status] || STATUS_BADGE.live;
  return (
    <Fade bottom>
      <div style={{
        background: "rgba(142,70,186,0.1)", border: "1px solid rgba(142,70,186,0.3)",
        borderRadius: "16px", padding: "24px", height: "100%",
        display: "flex", flexDirection: "column", transition: "all 0.3s",
      }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(142,70,186,0.25)"; e.currentTarget.style.borderColor = "#8e46ba"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(142,70,186,0.3)"; }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px" }}>{project.emoji}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "16px", color: "#fbd9ad" }}>{project.title}</div>
              <div style={{ fontSize: "12px", color: "#eb90ff", fontWeight: 500 }}>{project.subtitle}</div>
            </div>
          </div>
          <span style={{ fontSize: "10px", fontWeight: 600, padding: "3px 9px", borderRadius: "50px", background: `${badge.color}20`, color: badge.color, whiteSpace: "nowrap", textTransform: "uppercase" }}>
            {badge.text}
          </span>
        </div>

        <img src={project.image} alt={project.title}
          style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px", marginBottom: "14px", border: "1px solid rgba(142,70,186,0.2)" }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "7px", marginBottom: "14px" }}>
          <ValueRow icon="🎯" label="Problem"  text={project.problem} />
          <ValueRow icon="🔧" label="Gebaut"   text={project.built}   />
          <ValueRow icon="✅" label="Ergebnis" text={project.result}  />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "50px", fontWeight: 500, background: "rgba(142,70,186,0.15)", border: "1px solid rgba(142,70,186,0.3)", color: "#fbd9ad" }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "9px", background: "rgba(251,217,173,0.08)", border: "1px solid rgba(251,217,173,0.25)", borderRadius: "8px", color: "#fbd9ad", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>
            <FaCode /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer"
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "9px", background: "linear-gradient(135deg,#8e46ba,#b061df)", border: "none", borderRadius: "8px", color: "#fff", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>
            <FaExternalLinkAlt /> {project.demoLabel || "Demo"}
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div style={{ backgroundColor: "#fbd9ad", padding: "20px 0", borderRadius: "12px", marginTop: "80px", textAlign: "center" }}>
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134,61,176)", margin: 0 }}>Alle Projekte</h1>
            </Zoom>
          </div>

          <Row className="g-4 mt-4">
            {projects.map((project) => (
              <Col md={4} key={project.title}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}
