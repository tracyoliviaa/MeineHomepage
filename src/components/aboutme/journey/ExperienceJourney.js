import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
<<<<<<< HEAD
import "react-vertical-timeline-component/style.min.css";
=======
>>>>>>> origin/main
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";
<<<<<<< HEAD
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
=======

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
  <Flip top cascade>
    <h1>Experience Journey</h1>
  </Flip>
</div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
    date="03/2022 - 06/2024"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">
      Fachinformatikerin für Anwendungsentwicklung
    </h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      SRH, Heidelberg
    </h6>
    <p>
      Ausbildung zur Fachinformatikerin für Anwendungsentwicklung. Erfahrung in
      Softwareentwicklung, Datenbanken und IT-Unterstützung. Anwendung von agilen Methoden
      wie Scrum.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
    date="01/2018 - 12/2018"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Stromsparhelfer</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      Caritas Offenbach
    </h6>
    <p>
      Arbeit als Stromsparhelfer bei der Caritas in Offenbach. Beratung und
      Unterstützung von Haushalten zur Energieeinsparung.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
    date="11/2016 - 03/2017"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Buchhaltung Assistenz</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      Seniorenzentrum Offenbach
    </h6>
    <p>
      Assistenz in der Buchhaltung des Seniorenzentrums Offenbach. Unterstützung bei der
      Finanzverwaltung und Buchhaltungsaufgaben.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
    date="01/2013 - 10/2015"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Au Pair</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      Familie Stevenson, Phoenix, Arizona
    </h6>
    <p>
      Tätigkeit als Au Pair bei einer Familie in Phoenix, Arizona. Betreuung von Kindern
      und Unterstützung im Haushalt.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
    date="02/1998 - 09/2004"
    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
    icon={<PersonIcon />}
  >
    <h5 className="vertical-timeline-element-title">Kaufmännische Hilfe</h5>
    <h6 className="vertical-timeline-element-subtitle mt-2">
      Symbol Dietzenbach
    </h6>
    <p>
      Kaufmännische Unterstützung bei Symbol in Dietzenbach. Erfahrung in administrativen
      und kaufmännischen Aufgaben.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
>>>>>>> origin/main
    </div>
  );
}

<<<<<<< HEAD
export default ExperienceJourney;
=======
export default ExperienceJourney;
>>>>>>> origin/main
