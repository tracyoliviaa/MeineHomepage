import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import profileImg from "../../assets/profile.jpg"; 




export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        
        {/* HERO SECTION */}
        <div className="home-section-professional">
          <div className="home-content-professional">
            <Fade left duration={1000}>
              <span className="home-badge-professional">
                💻 Software Developer
              </span>
            </Fade>
            
            <Zoom left cascade>
              <h1 className="home-title-professional">
                Hallo!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <br />
                Ich bin <span className="home-title-gradient">Martina Schulz</span>
              </h1>
            </Zoom>

            <Fade left duration={1200} delay={200}>
              <p className="home-subtitle-professional">
                Leidenschaftliche Entwicklerin mit Fokus auf moderne Webtechnologien,
                performante Frontends und skalierbare Softwarearchitekturen.
                Ich kombiniere technisches Know-how mit Kreativität, um digitale
                Lösungen zu gestalten, die funktionieren – sauber, elegant und zukunftssicher.
              </p>
            </Fade>

            <div className="typing-homeclass">
              <Typing />
            </div>

            <Fade left duration={1400} delay={400}>
              <div className="home-cta-professional">
                <a href="#projects" className="btn-professional btn-primary-professional">
                  View Projects
                </a>
                <a href="#contact" className="btn-professional btn-secondary-professional">
                  Get in Touch
                </a>
              </div>
            </Fade>

            <Fade left duration={1600} delay={600}>
              <div className="sociallink-home mt-lg">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/tracyoliviaa"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/martina-schulz-5a3a26351"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
        
                </ul>
              </div>
            </Fade>
          </div>

          <div className="home-image-professional">
            <Fade right duration={1000}>
              <Tilt>
                <div className="image-frame-professional">
                  <img
                  src={profileImg}
  alt="Martina Schulz - Software Developer"
  className="img-fluid"
/>
                </div>
              </Tilt>
            </Fade>
          </div>
        </div>
      </Container>

      {/* SECTIONS */}
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
