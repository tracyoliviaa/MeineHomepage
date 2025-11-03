import React from "react";
import Particle from "../../Particle";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";

export default function ProjectPage() {
  // SVG-basierte Projekt-Illustrationen
  const ProjectIllustration = ({ type, emoji }) => {
    const illustrations = {
      timetrack: (
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <rect width="200" height="200" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#8e46ba", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#b061df", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="60" fill="white" opacity="0.1" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
          <line x1="100" y1="50" x2="100" y2="100" stroke="white" strokeWidth="3" opacity="0.8" />
          <line x1="100" y1="100" x2="130" y2="100" stroke="white" strokeWidth="3" opacity="0.8" />
          <circle cx="100" cy="100" r="8" fill="white" opacity="0.9" />
          <text x="100" y="170" textAnchor="middle" fill="white" fontSize="24" opacity="0.4">{emoji}</text>
        </svg>
      ),
      shopease: (
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <rect width="200" height="200" fill="url(#grad2)" />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#6b46ba", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#9061df", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M 60 70 L 140 70 L 130 150 L 70 150 Z" fill="white" opacity="0.2" />
          <circle cx="100" cy="90" r="12" fill="white" opacity="0.6" />
          <rect x="70" y="110" width="60" height="8" fill="white" opacity="0.4" rx="4" />
          <rect x="70" y="125" width="60" height="8" fill="white" opacity="0.4" rx="4" />
          <text x="100" y="170" textAnchor="middle" fill="white" fontSize="24" opacity="0.4">{emoji}</text>
        </svg>
      ),
      taskflow: (
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <rect width="200" height="200" fill="url(#grad3)" />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#7946ba", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#a061df", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="50" y="60" width="100" height="80" fill="none" stroke="white" strokeWidth="2" opacity="0.4" rx="8" />
          <rect x="60" y="70" width="35" height="20" fill="white" opacity="0.3" rx="4" />
          <rect x="105" y="70" width="35" height="20" fill="white" opacity="0.3" rx="4" />
          <rect x="60" y="100" width="35" height="20" fill="white" opacity="0.3" rx="4" />
          <path d="M 85 110 L 105 110" stroke="white" strokeWidth="2" opacity="0.6" />
          <text x="100" y="170" textAnchor="middle" fill="white" fontSize="24" opacity="0.4">{emoji}</text>
        </svg>
      ),
      dailymind: (
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <rect width="200" height="200" fill="url(#grad4)" />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#5b46ba", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#8061df", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="45" fill="white" opacity="0.15" />
          <circle cx="75" cy="80" r="8" fill="white" opacity="0.6" />
          <circle cx="125" cy="80" r="8" fill="white" opacity="0.6" />
          <circle cx="85" cy="120" r="6" fill="white" opacity="0.4" />
          <circle cx="115" cy="120" r="6" fill="white" opacity="0.4" />
          <path d="M 90 130 Q 100 135 110 130" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          <text x="100" y="170" textAnchor="middle" fill="white" fontSize="24" opacity="0.4">{emoji}</text>
        </svg>
      ),
      knowledgeflow: (
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <rect width="200" height="200" fill="url(#grad5)" />
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#6e46ba", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#9561df", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="60" y="65" width="30" height="50" fill="white" opacity="0.3" rx="2" />
          <rect x="95" y="60" width="30" height="55" fill="white" opacity="0.4" rx="2" />
          <rect x="130" y="70" width="30" height="45" fill="white" opacity="0.3" rx="2" />
          <line x1="75" y1="65" x2="110" y2="60" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <line x1="110" y1="60" x2="145" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <text x="100" y="170" textAnchor="middle" fill="white" fontSize="24" opacity="0.4">{emoji}</text>
        </svg>
      ),
      coremap: (
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <rect width="200" height="200" fill="url(#grad6)" />
          <defs>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#8346ba", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#b061df", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
          <circle cx="100" cy="60" r="6" fill="white" opacity="0.7" />
          <circle cx="135" cy="80" r="6" fill="white" opacity="0.7" />
          <circle cx="135" cy="120" r="6" fill="white" opacity="0.7" />
          <circle cx="100" cy="140" r="6" fill="white" opacity="0.7" />
          <circle cx="65" cy="120" r="6" fill="white" opacity="0.7" />
          <circle cx="65" cy="80" r="6" fill="white" opacity="0.7" />
          <text x="100" y="170" textAnchor="middle" fill="white" fontSize="24" opacity="0.4">{emoji}</text>
        </svg>
      ),
    };
    return illustrations[type];
  };

  const projects = [
    {
      title: "TimeTrackPro – Arbeitszeiterfassung",
      description:
        "Web-App zur Erfassung und Verwaltung von Arbeitszeiten mit JWT-Authentifizierung, Rollenverwaltung und REST-API.",
      type: "timetrack",
      tags: ["React", "Symfony", "REST-API", "MySQL", "JWT", "TailwindCSS"],
      github: "https://github.com",
      emoji: "⏱️",
    },
    {
      title: "ShopEase – E-Commerce Backend",
      description:
        "Skalierbares Shop-Backend mit Produktverwaltung, Warenkorb-API und rollenbasiertem Zugriff über API Platform.",
      type: "shopease",
      tags: ["Symfony", "API Platform", "MySQL", "JWT", "Docker", "Postman"],
      github: "https://github.com",
      emoji: "🛒",
    },
    {
      title: "TaskFlow – Aufgabenmanagement",
      description:
        "Kanban-basiertes Tool mit Drag & Drop, Echtzeit-Updates via WebSockets und effizientem Zustand-Management.",
      type: "taskflow",
      tags: ["React", "Node.js/Symfony API", "MySQL", "Zustand", "WebSockets", "TailwindCSS"],
      github: "https://github.com",
      emoji: "✅",
    },
    {
      title: "DailyMind – Intelligenter werden in 10 Minuten am Tag",
      description:
        "App für tägliche Mini-Lerneinheiten: Fördert gezielt kognitive Fähigkeiten wie Logik, Sprache, Allgemeinwissen, Kreativität und Gedächtnis.",
      type: "dailymind",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/tracyoliviaa/DailyMInd.git",
      emoji: "🧠",
    },
    {
      title: "KnowledgeFlow – Deine persönliche Wissensdatenbank",
      description:
        "Plattform zum Sammeln, Strukturieren und Lernen von Inhalten mit Notizen, Karteikarten, Spaced Repetition und KI-Features.",
      type: "knowledgeflow",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Firebase Auth"],
      github: "https://github.com/tracyoliviaa/KnowledgeFlow.git",
      emoji: "📚",
    },
    {
      title: "CoreMap – Deine Interessen im Gleichgewicht",
      description:
        "Self-Management-App zur Strukturierung der 6 Lebensbereiche mit täglichen Impulsen, Gamification und integriertem Ziel-Editor.",
      type: "coremap",
      tags: ["React", "MUI", "Node.js", "MongoDB"],
      github: "https://github.com/tracyoliviaa/core-map.git",
      emoji: "🗺️",
    },
  ];

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          {/* Header */}
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad", padding: "20px 0", borderRadius: "12px" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)", margin: 0 }}>MEINE PROJEKTE</h1>
            </Zoom>
          </div>

          {/* Projects Section */}
          <div className="section-professional" style={{ paddingTop: "60px" }}>
            <div className="container-professional">
              {/* Section Description */}
              <div className="section-header-professional">
                <Fade top duration={1000}>
                  <p className="section-subtitle-professional">
                    Eine Auswahl meiner besten technischen Projekte und Lösungen
                  </p>
                </Fade>
              </div>

              {/* Projects Grid */}
              <div className="projects-grid-professional">
                {projects.map((project, index) => (
                  <Fade bottom duration={800} delay={index * 100} key={index}>
                    <div className="project-card-professional">
                      <div className="project-image-professional" style={{ position: "relative" }}>
                        <ProjectIllustration type={project.type} emoji={project.emoji} />
                      </div>
                      <div className="project-content-professional">
                        <h3 className="project-title-professional">
                          <span style={{ marginRight: "8px" }}>{project.emoji}</span>
                          {project.title}
                        </h3>
                        <p className="project-desc-professional">{project.description}</p>
                        <div className="project-tags-professional">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="tag-professional">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            marginTop: "16px",
                          }}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              color: "#fbd9ad",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontWeight: "600",
                              transition: "all 0.3s ease",
                              padding: "8px 16px",
                              border: "1px solid rgba(142, 70, 186, 0.3)",
                              borderRadius: "8px",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.borderColor = "#8e46ba";
                              e.target.style.background = "rgba(142, 70, 186, 0.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.borderColor = "rgba(142, 70, 186, 0.3)";
                              e.target.style.background = "transparent";
                            }}
                          >
                            <FaCode size={16} />
                            Code ansehen
                          </a>
                        </div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}