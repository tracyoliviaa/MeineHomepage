import React from "react";
import { Container, Row, Col } from "react-bootstrap";
<<<<<<< HEAD
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaHeart } from "react-icons/fa";
=======
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
>>>>>>> origin/main

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
<<<<<<< HEAD

  return (
    <footer style={{
      background: 'rgba(10, 10, 10, 0.95)',
      borderTop: '1px solid rgba(142, 70, 186, 0.2)',
      padding: 'var(--spacing-xl) 0',
      marginTop: 'var(--spacing-xxl)'
    }}>
      <Container>
        <Row>
          {/* Left Section */}
          <Col md={4} className="footer-copywright" style={{ marginBottom: 'var(--spacing-md)' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-xs)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#fbd9ad',
                marginBottom: 'var(--spacing-xs)'
              }}>
                Martina Schulz
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#b8b8b8',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Designed & Developed with <FaHeart size={14} color="#8e46ba" /> by Martina
              </p>
            </div>
          </Col>

          {/* Center Section */}
          <Col md={4} className="footer-copywright text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
            <p style={{
              fontSize: '14px',
              color: '#b8b8b8',
              margin: 0
            }}>
              Copyright © {year} Martina Schulz
            </p>
            <p style={{
              fontSize: '12px',
              color: '#888',
              marginTop: 'var(--spacing-xs)'
            }}>
              Alle Rechte vorbehalten
            </p>
          </Col>

          {/* Right Section - Social Icons */}
          <Col md={4} className="footer-body">
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 'var(--spacing-sm)',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://github.com/tracyolivia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '45px',
                  height: '45px',
                  border: '2px solid rgba(142, 70, 186, 0.3)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#8e46ba';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #8e46ba, #b061df)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <AiFillGithub size={22} color="#fbd9ad" />
              </a>

              <a
                href="https://www.linkedin.com/in/martina-schulz/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '45px',
                  height: '45px',
                  border: '2px solid rgba(142, 70, 186, 0.3)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#8e46ba';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #8e46ba, #b061df)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaLinkedinIn size={20} color="#fbd9ad" />
              </a>

     
            </div>
          </Col>
        </Row>

        {/* Bottom Legal Links */}
        <Row style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid rgba(142, 70, 186, 0.1)' }}>
          <Col className="text-center">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-md)',
              flexWrap: 'wrap'
            }}>
              <a
                href="/impressum"
                style={{
                  fontSize: '13px',
                  color: '#888',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fbd9ad'}
                onMouseLeave={(e) => e.target.style.color = '#888'}
              >
                Impressum
              </a>
              <span style={{ color: '#444' }}>|</span>
              <a
                href="/datenschutz"
                style={{
                  fontSize: '13px',
                  color: '#888',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fbd9ad'}
                onMouseLeave={(e) => e.target.style.color = '#888'}
              >
                Datenschutz
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
=======
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Martina</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Martina</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MD-MAFUJUL-HASAN"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/martina-schulz/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:m-o-schulz@web.de/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
>>>>>>> origin/main
