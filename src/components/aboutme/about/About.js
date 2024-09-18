import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

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
                Mein Name ist <b className="purple">Martina Schulz</b> und ich studiere  
                <b className="purple">Informatik</b> an der <b className="purple">SRH</b> in Heidelberg.
                <br />
                <br />
                Ich beherrsche verschiedene Programmiersprachen wie 
                <b className="purple">C, C++, Java, Python, HTML, CSS, PHP und JavaScript</b>.
                <br />
                <br />
                Außerdem habe ich Erfahrung mit Frameworks und Bibliotheken wie 
                <b className="purple">NodeJS, ReactJS, OpenCV und NumPy</b>.
                <br />
                <br />
                In meiner Freizeit entwickle ich gerne neue Technologien und 
                <b className="purple">baue neue Webanwendungen</b>.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;