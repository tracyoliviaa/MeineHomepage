import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle, FaEnvelope } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import profileImg from '../../assets/profile.jpg';

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              
              {/* Begrüßung und Name im gleichen Format */}
              <h1
                style={{ paddingBottom: 15, fontSize: "70px" }} 
                className="heading"
              >
                Hallo, ich bin{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Martina Schulz</strong>
              </h1>
              
              {/* Überarbeiteter Text: Kurze, prägnante Rollenbeschreibung in einem Format, das besser passt */}
              <h3 style={{ fontSize: "2.1em", marginTop: "20px" }}>
                  <span className="main-name">Softwareentwicklerin</span> mit Fokus auf effizienten, skalierbaren Code.
              </h3>

              {/* Typing Effekt: Hier sollten die Technologien/Rollen laufen (z.B. React, Java, Full Stack) */}
              <div className="typing-homeclass">
                <Typing /> 
              </div>
              
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/tracyoliviaa"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/martina-schulz-5a3a26351"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                 
                  <li className="socialicons">
                    <a
                      // Mailto: sorgt dafür, dass das E-Mail-Programm startet
                      href="mailto:m-o-schulz@web.de"
                      // target="_blank" wurde entfernt
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      {/* Das FaEnvelope Icon signalisiert E-Mail */}
                      <FaEnvelope /> 
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            
            {/* Bild-Spalte: Das Bild wird hier korrekt eingebunden */}
           <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      // Wichtig: Verwenden Sie die importierte Variable in geschweiften Klammern
                      src={profileImg} 
                      alt="Profilbild Martina Schulz"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}