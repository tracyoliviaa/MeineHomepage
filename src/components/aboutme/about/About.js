import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "Erfahrung mit Frontend (React, HTML/CSS) und Backend (Node.js, PHP) Technologien"
    },
    {
      icon: <FaLaptopCode />,
      title: "Moderne Tools",
      description: "Vertraut mit Git, VS Code, agilen Methoden und modernen Development Workflows"
    },
    {
      icon: <FaRocket />,
      title: "Kontinuierliches Lernen",
      description: "Ständig auf dem neuesten Stand mit aktuellen Technologien und Best Practices"
    }
  ];

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

        {/* Main Content Grid */}
        <div className="about-grid-professional">
          {/* Lottie Animation */}
          <div className="about-animation-wrapper">
            <Slide left duration={1000}>
              <div style={{
                background: 'rgba(142, 70, 186, 0.1)',
                border: '1px solid rgba(142, 70, 186, 0.3)',
                borderRadius: '20px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                  loop
                  autoplay
                />
              </div>
            </Slide>
          </div>

          {/* Text Content */}
          <Fade right duration={1200} delay={200}>
            <div className="about-text-professional">
              <div style={{
                background: 'rgba(142, 70, 186, 0.05)',
                border: '1px solid rgba(142, 70, 186, 0.2)',
                borderRadius: '16px',
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-md)'
              }}>
                <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '16px' }}>
                  Mein Name ist <span className="purple">Martina Schulz</span> und ich bin 
                  <span className="purple"> Fachinformatikerin für Anwendungsentwicklung</span>.
                </p>
                
                <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                  Ich beherrsche verschiedene Programmiersprachen wie 
                  <span className="purple"> C, C++, Java, Python, HTML, CSS, PHP und JavaScript</span>.
                </p>
                
                <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                  Außerdem habe ich Erfahrung mit Frameworks und Bibliotheken wie 
                  <span className="purple"> Node.js, React.js, OpenCV und NumPy</span>.
                </p>
                
                <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: 0 }}>
                  In meiner Freizeit entwickle ich gerne neue Technologien und 
                  <span className="purple"> baue moderne Webanwendungen</span>.
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Highlights Section */}
        <div style={{ marginTop: 'var(--spacing-xl)' }}>
          <Zoom cascade>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-md)',
              marginTop: 'var(--spacing-lg)'
            }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(142, 70, 186, 0.1)',
                    border: '1px solid rgba(142, 70, 186, 0.3)',
                    borderRadius: '16px',
                    padding: 'var(--spacing-lg)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = '#8e46ba';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(142, 70, 186, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #8e46ba, #b061df)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: '#fff',
                    marginBottom: '16px'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#fbd9ad',
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#d4d4d4',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Zoom>
        </div>

        {/* Call to Action */}
        <Fade bottom duration={1000} delay={800}>
          <div style={{
            marginTop: 'var(--spacing-xl)',
            padding: 'var(--spacing-xl)',
            background: 'rgba(142, 70, 186, 0.1)',
            border: '1px solid rgba(142, 70, 186, 0.3)',
            borderRadius: '20px',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#fbd9ad',
              marginBottom: '16px'
            }}>
              Bereit für neue Herausforderungen
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#d4d4d4',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto 24px'
            }}>
              Ich suche nach spannenden Projekten und Möglichkeiten, meine Skills einzusetzen 
              und weiterzuentwickeln. Lass uns gemeinsam innovative Lösungen entwickeln!
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="#contact"
                className="btn-professional btn-primary-professional"
                style={{ textDecoration: 'none' }}
              >
                Kontakt aufnehmen
              </a>
              <a
                href="/resume"
                className="btn-professional btn-secondary-professional"
                style={{ textDecoration: 'none' }}
              >
                Lebenslauf ansehen
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;