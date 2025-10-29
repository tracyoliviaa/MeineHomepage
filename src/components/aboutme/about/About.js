import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
// ... (Die Imports und die Komponentenstruktur bleiben gleich)

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              />
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                Hallo! Ich bin <b className="purple">Martina Schulz</b>, eine engagierte 
                <b className="purple"> Informatikstudentin</b> der <b className="purple">SRH Hochschule Heidelberg</b>.
                <br />
                <br />
                Mein Fokus liegt auf der Entwicklung <b className="purple">effizienter und skalierbarer Softwarelösungen</b>. Ich verfüge über fundierte Kenntnisse in Kernsprachen wie 
                <b className="purple"> Java, C/C++, und Python</b>, die ich primär für Backend-Logik und Datenverarbeitung einsetze.
                <br />
                <br />
                In der Webentwicklung konzentriere ich mich auf den modernen Stack: Ich nutze 
                <b className="purple"> ReactJS und JavaScript (ES6+)</b> für dynamische Frontends und <b className="purple">NodeJS</b> für robuste serverseitige Anwendungen.
                <br />
                <br />
                Über meine akademischen Projekte hinaus verfolge ich leidenschaftlich gerne <b className="purple">eigene Full-Stack-Projekte</b>, in denen ich stets neue Technologien integriere, um praxisrelevante Probleme zu lösen.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;