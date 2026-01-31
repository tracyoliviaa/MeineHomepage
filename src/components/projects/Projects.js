import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import knowledgeFlowImage from "../../images/nyc.png";
import coreMapImage from "../../images/hd.png";
import dailyMindImage from "../../images/onboarding.png";

export default function Projects() {
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
        padding: "6px 14px",
        borderRadius: "12px",
        fontSize: "11px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        whiteSpace: "nowrap"
      }}>
        {badge.text}
      </span>
    );
  };

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

            {projects.map((project, index) => (
              <Col md={4} key={index}>
                <Fade bottom>
                  <div 
                    className="singleProject" 
                    style={{ 
                      backgroundColor: "rgb(142 70 186 / 31%)", 
                      border: "1px solid rgba(142, 70, 186, 0.5)",
                      borderRadius: "16px",
                      position: "relative",
                      minHeight: "540px",
                      padding: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="projectContent">
                      {/* Header with Title and Badge */}
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "12px",
                        gap: "12px"
                      }}>
                        <h5 
                          className="project-title" 
                          style={{ 
                            color: "#fbd9ad",
                            margin: 0,
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            fontSize: "20px",
                            fontWeight: "700",
                            lineHeight: "1.3"
                          }}
                        >
                          <span style={{ fontSize: "28px", flexShrink: 0 }}>{project.emoji}</span>
                          <span style={{ wordBreak: "break-word" }}>
                            {project.title.split('–')[0]}
                          </span>
                        </h5>
                        {getStatusBadge(project.status)}
                      </div>

                      {/* Subtitle */}
                      <p style={{
                        color: "#eb90ff",
                        fontSize: "14px",
                        marginBottom: "16px",
                        fontWeight: "600",
                        lineHeight: "1.4"
                      }}>
                        {project.title.split('–')[1]}
                      </p>

                      {/* Project Image */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="project-image"
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                          borderRadius: "12px",
                          marginBottom: "16px",
                          border: "1px solid rgba(142, 70, 186, 0.3)"
                        }}
                      />

                      {/* Action Buttons */}
                      <div style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "16px"
                      }}>
                        {/* GitHub Link */}
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            padding: "12px 16px",
                            background: "rgba(251, 217, 173, 0.1)",
                            border: "1px solid rgba(251, 217, 173, 0.3)",
                            borderRadius: "8px",
                            color: "#fbd9ad",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(251, 217, 173, 0.2)";
                            e.currentTarget.style.borderColor = "#fbd9ad";
                            e.currentTarget.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(251, 217, 173, 0.1)";
                            e.currentTarget.style.borderColor = "rgba(251, 217, 173, 0.3)";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          <FaCode style={{ flexShrink: 0 }} /> Code
                        </a>

                        {/* Demo Link */}
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
                              gap: "8px",
                              padding: "12px 16px",
                              background: "linear-gradient(135deg, #8e46ba, #b061df)",
                              border: "none",
                              borderRadius: "8px",
                              color: "#fff",
                              textDecoration: "none",
                              transition: "all 0.3s ease",
                              fontSize: "14px",
                              fontWeight: "600",
                              whiteSpace: "nowrap"
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
                            <FaExternalLinkAlt style={{ flexShrink: 0 }} /> Demo
                          </a>
                        ) : (
                          <button
                            disabled
                            style={{
                              flex: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              padding: "12px 16px",
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              borderRadius: "8px",
                              color: "#888",
                              cursor: "not-allowed",
                              fontSize: "14px",
                              fontWeight: "600",
                              whiteSpace: "nowrap"
                            }}
                          >
                            <FaExternalLinkAlt style={{ flexShrink: 0 }} /> Demo
                          </button>
                        )}
                      </div>

                      {/* Description */}
                      <p 
                        className="project--desc" 
                        style={{ 
                          background: "#fbd9ad", 
                          color: "#b061df", 
                          fontWeight: 600,
                          padding: "14px",
                          borderRadius: "10px",
                          fontSize: "14px",
                          lineHeight: "1.6",
                          marginBottom: "12px"
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div 
                        className="project--lang" 
                        style={{ 
                          background: "#fbd9ad", 
                          color: "#b061df", 
                          fontWeight: 600,
                          padding: "14px",
                          borderRadius: "10px",
                          fontSize: "13px",
                          lineHeight: "1.5"
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

          {/* View All Button - FIXED */}
          <div className="blog--viewAll">
            <Link to="/projectspage" style={{ textDecoration: 'none' }}>
              <button 
                className="btn btn-primary"
                style={{
                  background: "linear-gradient(135deg, #8e46ba, #b061df)",
                  border: "none",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  borderRadius: "25px",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  minWidth: "200px",
                  boxShadow: "0 4px 15px rgba(142, 70, 186, 0.3)"
                }}
              >
                Alle Projekte ansehen
                <HiArrowRight className="viewArr" style={{ fontSize: "20px" }} />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}