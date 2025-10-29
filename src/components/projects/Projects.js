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
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projekte</h1>
              </Zoom>
            </Col>

            {/* --- Projekt 1: TimeTrackPro --- */}
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id="timeTrackPro" style={{ color: "#fbd9ad" }}>
                      TimeTrackPro – Arbeitszeiterfassung
                    </h5>
                    <img src={timeTrackProImage} alt="TimeTrackPro" />
                    <div className="project--showcaseBtn">
                      <a
                        href={"#"} // TODO: GitHub/Live-Link einfügen
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code-ttpro`}
                      >
                        <FaCode
                          id={`code-ttpro`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Web-App zur digitalen Erfassung und Verwaltung von
                      Arbeitszeiten. Fokus: JWT-Authentifizierung, rollenbasierte
                      Rechte, QR-Code-Login und REST-API (React ↔ Symfony).
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React, Symfony, REST-API, MySQL, JWT, TailwindCSS
                  </div>
                </div>
              </Fade>
            </Col>

            {/* --- Projekt 2: ShopEase --- */}
            <Col md={3}>
              <Fade bottom>
                <div
                  key={2}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id="shopEase" style={{ color: "#fbd9ad" }}>
                      ShopEase – E-Commerce-Backend
                    </h5>
                    <img src={shopEaseImage} alt="ShopEase" />
                    <div className="project--showcaseBtn">
                      <a
                        href={"#"} // TODO: GitHub/Live-Link einfügen
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code-shopease`}
                      >
                        <FaCode
                          id={`code-shopease`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Skalierbares Backend für einen Online-Shop: Produkt-CRUD,
                      Warenkorb-API, rollenbasierter Zugriff und API Platform.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Symfony, API Platform, MySQL, JWT, Docker, Postman
                  </div>
                </div>
              </Fade>
            </Col>

            {/* --- Projekt 3: TaskFlow --- */}
            <Col md={3}>
              <Fade bottom>
                <div
                  key={3}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id="taskFlow" style={{ color: "#fbd9ad" }}>
                      TaskFlow – Aufgabenmanagement
                    </h5>
                    <img src={taskFlowImage} alt="TaskFlow" />
                    <div className="project--showcaseBtn">
                      <a
                        href={"#"} // TODO: GitHub/Live-Link einfügen
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code-taskflow`}
                      >
                        <FaCode
                          id={`code-taskflow`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Webbasiertes Kanban-Tool mit Drag & Drop, Statusmanagement
                      und Echtzeit-Updates via WebSockets. Fokus auf Zustand-
                      Management (Zustand) im Frontend.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React, Node.js/Symfony API, MySQL, Zustand, WebSockets, TailwindCSS
                  </div>
                </div>
              </Fade>
            </Col>

            {/* Fühle dich frei, weitere <Col md={3}> Blocks hinzuzufügen */}
          </Row>

          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                Alle anzeigen
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
