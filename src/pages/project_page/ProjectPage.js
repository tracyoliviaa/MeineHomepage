import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Particle from "../../Particle";

import knowledgeFlowImage from "../../images/nyc.png";
import coreMapImage from "../../images/hd.png";
import dailyMindImage from "../../images/onboarding.png";

export default function ProjectPage() {
  const projects = [
    {
      title: "KnowledgeFlow – Deine persönliche Wissensdatenbank",
      description: "Plattform zum Sammeln, Strukturieren und Lernen von Inhalten mit Notizen, Karteikarten, Spaced Repetition und KI-Features.",
      image: knowledgeFlowImage,
      emoji: "📚",
      github: "https://github.com/tracyoliviaa/KnowledgeFlow",
      demo: "https://knowledgeflow-frontend.vercel.app/login", 
      tags: "React · Tailwind · Node.js · Express · MongoDB · Firebase",
      status: "live"
    },
    {
      title: "CoreMap – Deine Interessen im Gleichgewicht",
      description: "Self-Management-App zur Strukturierung der 6 Lebensbereiche mit täglichen Impulsen, Gamification und integriertem Ziel-Editor.",
      image: coreMapImage,
      emoji: "🗺️",
      github: "https://github.com/tracyoliviaa/core-map", 
      demo: "https://core-map.vercel.app",
      tags: "React · MUI · Node.js · MongoDB · LocalStorage",
      status: "live"
    },
    {
      title: "DailyMind – Intelligenter werden in 10 Minuten",
      description: "App für tägliche Mini-Lerneinheiten: Fördert gezielt kognitive Fähigkeiten wie Logik, Sprache, Allgemeinwissen, Kreativität und Gedächtnis.",
      image: dailyMindImage,
      emoji: "🧠",
      github: "https://github.com/tracyoliviaa/DailyMind",
      demo: "https://dailymind-jlirf6htr-tracyoliviaas-projects.vercel.app", 
      tags: "React · Node.js · MongoDB · Express · Gamification",
      status: "live"
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      live: { text: "Live Demo", color: "#54faae" },
      "coming-soon": { text: "Bald verfügbar", color: "#ff8c2f" },
      private: { text: "Privat", color: "#fe3e57" }
    };
    const badge = badges[status] || badges.live;
    return (
      <span style={{
        background: `${badge.color}20`,
        color: badge.color,
        padding: "4px 12px",
        borderRadius: "12px",
        fontSize: "11px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
      }}>
        {badge.text}
      </span>
    );
  };

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            style={{
              backgroundColor: "#fbd9ad",
              padding: "20px 0",
              borderRadius: "12px",
              marginTop: "80px",
            }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)", margin: 0 }}>ALLE PROJEKTE</h1>
            </Zoom>
          </div>

          <div className="mt-5">
            <Container fluid className="certificate-section">
              <Container>
                <Row className="g-5">
                  {projects.map((project, index) => (
                    <Col md={4} key={index}>
                      <Fade bottom>
                        <div 
                          className="singleProject" 
                          style={{ 
                            backgroundColor: "rgb(142 70 186 / 31%)", 
                            border: "1px solid",
                            position: "relative",
                            minHeight: "520px"
                          }}
                        >
                          <div className="projectContent">
                            <div style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              marginBottom: "12px"
                            }}>
                              <h5 
                                className="project-title" 
                                style={{ 
                                  color: "#fbd9ad",
                                  margin: 0,
                                  flex: 1,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px"
                                }}
                              >
                                <span style={{ fontSize: "24px" }}>{project.emoji}</span>
                                {project.title.split('–')[0]}
                              </h5>
                              {getStatusBadge(project.status)}
                            </div>

                            <p style={{
                              color: "#eb90ff",
                              fontSize: "13px",
                              marginBottom: "12px",
                              fontWeight: "600"
                            }}>
                              {project.title.split('–')[1]}
                            </p>

                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="project-image"
                              style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "16px"
                              }}
                            />

                            <div style={{
                              display: "flex",
                              gap: "12px",
                              marginBottom: "16px"
                            }}>
                              <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer" 
                                style={{
                                  flex: 1,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "6px",
                                  padding: "10px",
                                  background: "rgba(251, 217, 173, 0.1)",
                                  border: "1px solid rgba(251, 217, 173, 0.3)",
                                  borderRadius: "8px",
                                  color: "#fbd9ad",
                                  textDecoration: "none",
                                  transition: "all 0.3s ease",
                                  fontSize: "14px",
                                  fontWeight: "600"
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "rgba(251, 217, 173, 0.2)";
                                  e.currentTarget.style.borderColor = "#fbd9ad";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "rgba(251, 217, 173, 0.1)";
                                  e.currentTarget.style.borderColor = "rgba(251, 217, 173, 0.3)";
                                }}
                              >
                                <FaCode /> Code
                              </a>

                              {project.status === "live" && project.demo ? (
                                <a 
                                  href={project.demo} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  style={{
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "6px",
                                    padding: "10px",
                                    background: "linear-gradient(135deg, #8e46ba, #b061df)",
                                    border: "none",
                                    borderRadius: "8px",
                                    color: "#fff",
                                    textDecoration: "none",
                                    transition: "all 0.3s ease",
                                    fontSize: "14px",
                                    fontWeight: "600"
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(142, 70, 186, 0.4)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                  }}
                                >
                                  <FaExternalLinkAlt /> Demo
                                </a>
                              ) : (
                                <button
                                  disabled
                                  style={{
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "6px",
                                    padding: "10px",
                                    background: "rgba(255, 255, 255, 0.05)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    borderRadius: "8px",
                                    color: "#888",
                                    cursor: "not-allowed",
                                    fontSize: "14px",
                                    fontWeight: "600"
                                  }}
                                >
                                  <FaExternalLinkAlt /> Demo
                                </button>
                              )}
                            </div>

                            <p 
                              className="project--desc" 
                              style={{ 
                                background: "#fbd9ad", 
                                color: "#b061df", 
                                fontWeight: 600,
                                padding: "12px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                marginBottom: "12px"
                              }}
                            >
                              {project.description}
                            </p>

                            <div 
                              className="project--lang" 
                              style={{ 
                                background: "#fbd9ad", 
                                color: "#b061df", 
                                fontWeight: 600,
                                padding: "12px",
                                borderRadius: "8px",
                                fontSize: "13px"
                              }}
                            >
                              {project.tags}
                            </div>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Container>
          </div>
        </Container>
      </Container>
    </section>
  );
}