import React from "react";
import Particle from "../../Particle";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";

import timeTrackProImage from "../../images/nyc.png";
import shopEaseImage from "../../images/hd.png";
import taskFlowImage from "../../images/onboarding.png";

import dailyMindImg from "../../images/nyc.png";
import knowledgeFlowImg from "../../images/nyc.png";
import coreMapImg from "../../images/nyc.png";

export default function ProjectPage() {
  const projects = [
    {
      title: "TimeTrackPro – Arbeitszeiterfassung",
      description:
        "Web-App zur Erfassung und Verwaltung von Arbeitszeiten mit JWT-Authentifizierung, Rollenverwaltung und REST-API.",
      image: timeTrackProImage,
      tags: ["React", "Symfony", "REST-API", "MySQL", "JWT", "TailwindCSS"],
      github: "https://github.com",
      emoji: "⏱️",
    },
    {
      title: "ShopEase – E-Commerce Backend",
      description:
        "Skalierbares Shop-Backend mit Produktverwaltung, Warenkorb-API und rollenbasiertem Zugriff über API Platform.",
      image: shopEaseImage,
      tags: ["Symfony", "API Platform", "MySQL", "JWT", "Docker", "Postman"],
      github: "https://github.com",
      emoji: "🛒",
    },
    {
      title: "TaskFlow – Aufgabenmanagement",
      description:
        "Kanban-basiertes Tool mit Drag & Drop, Echtzeit-Updates via WebSockets und effizientem Zustand-Management.",
      image: taskFlowImage,
      tags: ["React", "Node.js/Symfony API", "MySQL", "Zustand", "WebSockets", "TailwindCSS"],
      github: "https://github.com",
      emoji: "✅",
    },
    {
      title: "DailyMind – Intelligenter werden in 10 Minuten am Tag",
      description:
        "App für tägliche Mini-Lerneinheiten: Fördert gezielt kognitive Fähigkeiten wie Logik, Sprache, Allgemeinwissen, Kreativität und Gedächtnis. Mit Lernpfaden, Quiz, Gamification und KI-Empfehlungen.",
      image: dailyMindImg,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/tracyoliviaa/DailyMInd.git",
      emoji: "🧠",
    },
    {
      title: "KnowledgeFlow – Deine persönliche Wissensdatenbank",
      description:
        "Plattform zum Sammeln, Strukturieren und Lernen von Inhalten (E-Mails, Webseiten, Videos, Notizen). Integriert Notizen, Karteikarten, Spaced Repetition, KI-Features und flexible Suche.",
      image: knowledgeFlowImg,
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Firebase Auth"],
      github: "https://github.com/tracyoliviaa/KnowledgeFlow.git",
      emoji: "📚",
    },
    {
      title: "CoreMap – Deine Interessen im Gleichgewicht",
      description:
        "Self-Management-App zur Strukturierung der 6 Lebensbereiche (Body, Brain, Mind, Skills, Heart, Soul). Mit täglichen Impulsen, Gamification, Reflexion und integriertem Ziel- & Interessen-Editor.",
      image: coreMapImg,
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
                      <div className="project-image-professional">
                        <img src={project.image} alt={project.title} />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "64px",
                            opacity: 0.3,
                            pointerEvents: "none",
                          }}
                        >
                          {project.emoji}
                        </div>
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
