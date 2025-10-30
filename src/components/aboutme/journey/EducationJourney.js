import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

function EducationJourney() {
  const journeyNav = [
    { to: "/educationjourney", label: "Education" },
    { to: "/experiencejourney", label: "Experience" },
    { to: "/technicaljourney", label: "Technical" },
    { to: "/projectjourney", label: "Projects" }
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
                  className="btn-professional btn-primary-professional" 
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
            <h1 className="section-title-professional">Qualification Journey</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle-professional">
              Mein akademischer Werdegang
            </p>
          </Flip>
        </div>

        {/* Timeline */}
        <VerticalTimeline lineColor="rgba(142, 70, 186, 0.3)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: "rgba(142, 70, 186, 0.1)", 
              color: "#fbd9ad",
              border: "1px solid rgba(142, 70, 186, 0.3)",
              borderRadius: "16px",
              boxShadow: "0 3px 0 rgba(142, 70, 186, 0.2)"
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(142, 70, 186, 0.3)" }}
            date="2022 - 2025"
            iconStyle={{ 
              background: "linear-gradient(135deg, #8e46ba, #b061df)", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(142, 70, 186, 0.2)"
            }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title" style={{ 
              color: "#fbd9ad", 
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "8px"
            }}>
              SRH Heidelberg
            </h4>
            <h4 className="vertical-timeline-element-subtitle" style={{ 
              color: "#b8b8b8",
              fontSize: "16px",
              marginBottom: "12px"
            }}>
              Heidelberg, Deutschland
            </h4>
            <p style={{ color: "#d4d4d4", lineHeight: "1.6" }}>
              Ausbildung als Fachinformatikerin für Anwendungsentwicklung mit Fokus auf
              moderne Softwareentwicklung, agile Methoden und Full-Stack Development.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: "rgba(142, 70, 186, 0.1)", 
              color: "#fbd9ad",
              border: "1px solid rgba(142, 70, 186, 0.3)",
              borderRadius: "16px",
              boxShadow: "0 3px 0 rgba(142, 70, 186, 0.2)"
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(142, 70, 186, 0.3)" }}
            date="2019 - 2020"
            iconStyle={{ 
              background: "linear-gradient(135deg, #8e46ba, #b061df)", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(142, 70, 186, 0.2)"
            }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title" style={{ 
              color: "#fbd9ad", 
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "8px"
            }}>
              Gasthörerin
            </h4>
            <h4 className="vertical-timeline-element-subtitle" style={{ 
              color: "#b8b8b8",
              fontSize: "16px",
              marginBottom: "12px"
            }}>
              University of Toronto
            </h4>
            <p style={{ color: "#d4d4d4", lineHeight: "1.6" }}>
              Teilnahme an Informatik-Vorlesungen als Gasthörerin. Vertiefung theoretischer
              Kenntnisse in Algorithmen, Datenstrukturen und Software Engineering.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: "rgba(142, 70, 186, 0.1)", 
              color: "#fbd9ad",
              border: "1px solid rgba(142, 70, 186, 0.3)",
              borderRadius: "16px",
              boxShadow: "0 3px 0 rgba(142, 70, 186, 0.2)"
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(142, 70, 186, 0.3)" }}
            date="2013 - 2015"
            iconStyle={{ 
              background: "linear-gradient(135deg, #8e46ba, #b061df)", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(142, 70, 186, 0.2)"
            }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title" style={{ 
              color: "#fbd9ad", 
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "8px"
            }}>
              Abitur
            </h4>
            <h4 className="vertical-timeline-element-subtitle" style={{ 
              color: "#b8b8b8",
              fontSize: "16px",
              marginBottom: "12px"
            }}>
              Abendgymnasium Frankfurt
            </h4>
            <p style={{ color: "#d4d4d4", lineHeight: "1.6" }}>
              Allgemeine Hochschulreife mit Schwerpunkt Mathematik und Naturwissenschaften.
            </p>
          </VerticalTimelineElement>

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

export default EducationJourney;