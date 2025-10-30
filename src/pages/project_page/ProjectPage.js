import React from "react";
import Particle from "../../Particle";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/eco.png";
import meal from "../../images/meal.png";
import ac from "../../images/academic.png";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectPage() {
  const projects = [
    {
      title: "Shoppy E-Commerce Plattform",
      description: "Vollständige E-Commerce-Lösung mit Warenkorb, Zahlungsintegration und Admin-Dashboard. Moderne Shopping-Erfahrung mit personalisierten Empfehlungen und sicheren Transaktionen.",
      image: eco,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      emoji: "🛒"
    },
    {
      title: "Amazing Meal System",
      description: "Restaurant-Management-System mit Online-Bestellung und Tischreservierung. Intuitive Benutzeroberfläche für Kunden und effizientes Backend für Restaurant-Betreiber.",
      image: meal,
      tags: ["React", "JavaScript", "Firebase"],
      github: "https://github.com",
      emoji: "🍽️"
    },
    {
      title: "Academia Lernplattform",
      description: "Online-Lernplattform mit Video-Kursen, interaktiven Quiz und Fortschrittsverfolgung. Entwickelt für effektives und flexibles Lernen.",
      image: ac,
      tags: ["React", "Express", "PostgreSQL"],
      github: "https://github.com",
      emoji: "📚"
    },
    {
      title: "Heart Disease Prediction",
      description: "Machine Learning-basiertes Vorhersagesystem zur Früherkennung von Herzerkrankungen. Nutzt fortschrittliche Algorithmen für präzise medizinische Prognosen.",
      image: hd,
      tags: ["Python", "Pandas", "Scikit-Learn", "ML"],
      github: "https://github.com",
      emoji: "❤️"
    },
    {
      title: "Online Payroll Management",
      description: "Komplettes Gehaltsabrechnungssystem mit Mitarbeiterverwaltung, Urlaubstracking und Echtzeit-Chat. Automatisierte Payroll-Prozesse für moderne Unternehmen.",
      image: ci,
      tags: ["PHP", "JavaScript", "MySQL", "SCSS"],
      github: "https://github.com",
      emoji: "💼"
    },
    {
      title: "New Year Countdown",
      description: "Interaktive Countdown-Anwendung mit modernem Design und Echtzeit-Updates. Perfekt für Neujahrsfeierlichkeiten mit animierten Effekten.",
      image: nyc,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      emoji: "🎉"
    }
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
                      {/* Project Image */}
                      <div className="project-image-professional">
                        <img src={project.image} alt={project.title} />
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          fontSize: '64px',
                          opacity: 0.3,
                          pointerEvents: 'none'
                        }}>
                          {project.emoji}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="project-content-professional">
                        <h3 className="project-title-professional">
                          <span style={{ marginRight: '8px' }}>{project.emoji}</span>
                          {project.title}
                        </h3>
                        
                        <p className="project-desc-professional">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="project-tags-professional">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="tag-professional">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div style={{
                          display: 'flex',
                          gap: '12px',
                          marginTop: '16px'
                        }}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              color: '#fbd9ad',
                              textDecoration: 'none',
                              fontSize: '14px',
                              fontWeight: '600',
                              transition: 'all 0.3s ease',
                              padding: '8px 16px',
                              border: '1px solid rgba(142, 70, 186, 0.3)',
                              borderRadius: '8px'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.borderColor = '#8e46ba';
                              e.target.style.background = 'rgba(142, 70, 186, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                              e.target.style.background = 'transparent';
                            }}
                          >
                            <FaCode size={16} />
                            Code ansehen
                          </a>
                          
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              color: '#fbd9ad',
                              textDecoration: 'none',
                              fontSize: '14px',
                              fontWeight: '600',
                              transition: 'all 0.3s ease',
                              padding: '8px 16px',
                              border: '1px solid rgba(142, 70, 186, 0.3)',
                              borderRadius: '8px'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.borderColor = '#8e46ba';
                              e.target.style.background = 'rgba(142, 70, 186, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                              e.target.style.background = 'transparent';
                            }}
                          >
                            <FaExternalLinkAlt size={14} />
                            Demo
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