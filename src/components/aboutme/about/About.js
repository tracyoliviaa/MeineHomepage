import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className="section-professional section-dark">
      <div className="container-professional">
        
        {/* Section Header */}
        <div className="section-header-professional">
          <Fade top duration={1000}>
            <h2 className="section-title-professional">Über mich</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle-professional">
              Mein Weg in die Softwareentwicklung
            </p>
          </Fade>
        </div>

        {/* About Grid */}
        <div className="about-grid-professional">
          {/* Lottie Animation */}
          <div className="about-animation-wrapper">
            <Slide left duration={1000}>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                loop
                autoplay
              />
            </Slide>
          </div>

          {/* Text Content */}
          <Fade right duration={1200} delay={200}>
            <div className="about-text-professional">
              <p>
<<<<<<< HEAD
                Mein Name ist <span className="purple">Martina Schulz</span> und ich bin 
                <span className="purple"> Fachinformatikerin für Anwendungsentwicklung</span>.
=======
                Mein Name ist <span className="purple">Martina Schulz</span> und ich studiere  
                <span className="purple"> Informatik</span> an der <span className="purple">SRH</span> in Heidelberg.
>>>>>>> origin/main
              </p>
              
              <p>
                Ich beherrsche verschiedene Programmiersprachen wie 
                <span className="purple"> C, C++, Java, Python, HTML, CSS, PHP und JavaScript</span>.
              </p>
              
              <p>
                Außerdem habe ich Erfahrung mit Frameworks und Bibliotheken wie 
                <span className="purple"> NodeJS, ReactJS, OpenCV und NumPy</span>.
              </p>
              
              <p>
                In meiner Freizeit entwickle ich gerne neue Technologien und 
<<<<<<< HEAD
                <span className="purple"> baue moderne Webanwendungen</span>.
=======
                <span className="purple"> baue neue Webanwendungen</span>.
>>>>>>> origin/main
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> origin/main
