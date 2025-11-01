import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import timeTrackProImage from "../../images/nyc.png";
import shopEaseImage from "../../images/hd.png";
import taskFlowImage from "../../images/onboarding.png";

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

            {/* --- Projekt 1: TimeTrackPro --- */}
            <Col md={4}>
              <Fade bottom>
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 className="project-title" style={{ color: "#fbd9ad" }}>
                      TimeTrackPro – Arbeitszeiterfassung
                    </h5>
                    <img src={timeTrackProImage} alt="TimeTrackPro" className="project-image" />
                    <div className="project--showcaseBtn">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="iconBtn" 
                        aria-labelledby="code-ttpro"
                      >
                        <FaCode id="code-ttpro" className="icon" aria-label="Code" />
                      </a>
                    </div>
                    <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      Web-App zur Erfassung und Verwaltung von Arbeitszeiten mit JWT-Authentifizierung, Rollenverwaltung und REST-API.
                    </p>
                    <div className="project--lang" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      React · Symfony · REST-API · MySQL · JWT · TailwindCSS
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>

            {/* --- Projekt 2: ShopEase --- */}
            <Col md={4}>
              <Fade bottom>
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 className="project-title" style={{ color: "#fbd9ad" }}>
                      ShopEase – E-Commerce Backend
                    </h5>
                    <img src={shopEaseImage} alt="ShopEase" className="project-image" />
                    <div className="project--showcaseBtn">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="iconBtn" 
                        aria-labelledby="code-shopease"
                      >
                        <FaCode id="code-shopease" className="icon" aria-label="Code" />
                      </a>
                    </div>
                    <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      Skalierbares Shop-Backend mit Produktverwaltung, Warenkorb-API und rollenbasiertem Zugriff über API Platform.
                    </p>
                    <div className="project--lang" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      Symfony · API Platform · MySQL · JWT · Docker · Postman
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>

            {/* --- Projekt 3: TaskFlow --- */}
            <Col md={4}>
              <Fade bottom>
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 className="project-title" style={{ color: "#fbd9ad" }}>
                      TaskFlow – Aufgabenmanagement
                    </h5>
                    <img src={taskFlowImage} alt="TaskFlow" className="project-image" />
                    <div className="project--showcaseBtn">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="iconBtn" 
                        aria-labelledby="code-taskflow"
                      >
                        <FaCode id="code-taskflow" className="icon" aria-label="Code" />
                      </a>
                    </div>
                    <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      Kanban-basiertes Tool mit Drag & Drop, Echtzeit-Updates via WebSockets und effizientem Zustand-Management.
                    </p>
                    <div className="project--lang" style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}>
                      React · Node.js/Symfony API · MySQL · Zustand · WebSockets · TailwindCSS
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>

          {/* View All Button */}
          <div className="blog--viewAll text-center mt-4">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                Alle Projekte ansehen <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}