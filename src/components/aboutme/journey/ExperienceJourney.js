import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

function ExperienceJourney() {
  const journeyNav = [
    { to: "/educationjourney", label: "Education" },
    { to: "/experiencejourney", label: "Experience" },
    { to: "/technicaljourney", label: "Technical" },
    { to: "/projectjourney", label: "Projects" }
  ];

  const experiences = [
    {
      title: "Fachinformatikerin für Anwendungsentwicklung",
      company: "SRH, Heidelberg",
      period: "03/2022 - 06/2025",
      description: "Ausbildung zur Fachinformatikerin mit Fokus auf Softwareentwicklung, Datenbanken und IT-Support. Praktische Erfahrung in agilen Methoden wie Scrum und modernen Entwicklungstools."
    },
    {
      title: "Stromsparhelfer",
      company: "Caritas Offenbach",
      period: "01/2018 - 12/2018",
      description: "Beratung und Unterstützung von Haushalten zur Energieeinsparung. Analyse von Stromverbrauch und Entwicklung individueller Sparkonzepte."
    },
    {
      title: "Buchhaltung Assistenz",
      company: "Seniorenzentrum Offenbach",
      period: "11/2016 - 03/2017",
      description: "Assistenz in der Buchhaltung mit Fokus auf Finanzverwaltung, Rechnungswesen und administrative Aufgaben."
    },
    {
      title: "Au Pair",
      company: "Familie Stevenson, Phoenix, Arizona",
      period: "01/2013 - 10/2015",
      description: "Kinderbetreuung und Unterstützung im Haushalt. Kultureller Austausch und Verbesserung der Englischkenntnisse."
    },
    {
      title: "Kaufmännische Hilfe",
      company: "Symbol Dietzenbach",
      period: "02/1998 - 09/2004",
      description: "Kaufmännische Unterstützung mit Erfahrung in administrativen und organisatorischen Aufgaben."
    }
  ];

  return (
    <div className="section-professional">
      <div className="container-professional">
        
        {/* Navigation */}
        <div className="text-center mb-lg">
          <Fade top duration={800}>
            <div className="d-flex justify-center gap-md flex-wrap">
              {journeyNav.map((nav, idx) => (
                <Link 
                  key={idx}
                  className="btn-professional btn-secondary-professional" 
                  to={nav.to}
                  style={{ fontSize: '14px', padding: '12px 24px' }}
                >
                  {nav.label}
                </Link>
              ))}
            </div>
          </Fade>
        </div>

        {/* Header */}
        <div className="section-header-professional">
          <Flip top cascade>
            <h1 className="section-title-professional">Experience Journey</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle-professional">
              Meine berufliche Laufbahn
            </p>
          </Flip>
        </div>

        {/* Timeline */}
        <VerticalTimeline lineColor="rgba(142, 70, 186, 0.3)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: "rgba(142, 70, 186, 0.1)", 
                color: "#fbd9ad",
                border: "1px solid rgba(142, 70, 186, 0.3)",
                borderRadius: "16px",
                boxShadow: "0 3px 0 rgba(142, 70, 186, 0.2)"
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(142, 70, 186, 0.3)" }}
              date={exp.period}
              iconStyle={{ 
                background: "linear-gradient(135deg, #8e46ba, #b061df)", 
                color: "#fff",
                boxShadow: "0 0 0 4px rgba(142, 70, 186, 0.2)"
              }}
              icon={<PersonIcon />}
            >
              <h5 className="vertical-timeline-element-title" style={{ 
                color: "#fbd9ad", 
                fontWeight: 700,
                fontSize: "18px",
                marginBottom: "8px"
              }}>
                {exp.title}
              </h5>
              <h6 className="vertical-timeline-element-subtitle" style={{ 
                color: "#b8b8b8",
                fontSize: "15px",
                marginBottom: "12px"
              }}>
                {exp.company}
              </h6>
              <p style={{ color: "#d4d4d4", lineHeight: "1.6", fontSize: "14px" }}>
                {exp.description}
              </p>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ 
              background: "#fbd9ad", 
              color: "rgb(142, 70, 186)",
              boxShadow: "0 0 0 4px rgba(251, 217, 173, 0.3)"
            }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default ExperienceJourney;