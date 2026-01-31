import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ucsc from "../../images/ucsc.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
  const certificates = [
    {
      title: "React (Basic) Certificate",
      subtitle: "Component Fundamentals & State Management",
      organization: "HackerRank",
      link: "https://www.hackerrank.com/certificates/7d80638ffac8",
      logo: ucsc
    },
    {
      title: "SQL (Basic) Certificate",
      subtitle: "Querying and Managing Data",
      organization: "HackerRank",
      link: "https://www.hackerrank.com/certificates/02cf34962bf9",
      logo: ucsc
    },
    {
      title: "JavaScript (Basic) Certificate",
      subtitle: "Programming Fundamentals",
      organization: "HackerRank",
      link: "https://www.hackerrank.com/certificates/e5a42ff65c18",
      logo: ucsc
    }
  ];

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
                <h1 className="aboutme-heading">Zertifizierungen</h1>
              </Zoom>
            </Col>
            <Col ms={12} className="mt-3">
              <Row className="g-5">
                {certificates.map((cert, index) => (
                  <Col md={4} key={index}>
                    <Fade bottom duration={2000} distance="20px">
                      <div className="cert-card">
                        <div className="content">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="content-overlay"></div>
                            <div
                              className="cert-header"
                              style={{ backgroundColor: "white" }}
                            >
                              <img className="logo_img" src={cert.logo} alt={cert.organization} />
                            </div>
                            <div className="content-details fadeIn-top">
                              <h3
                                className="content-title"
                                style={{ color: "black" }}
                              >
                                Zertifikat ansehen
                              </h3>
                            </div>
                          </a>
                        </div>
                        <div className="cert-body">
                          <h2
                            className="cert-body-title"
                            style={{ fontWeight: 700, color: "#fbd9ad" }}
                          >
                            {cert.title}
                          </h2>
                          <h3
                            className="cert-body-subtitle"
                            style={{ color: "#eb90ff", marginBottom: "8px" }}
                          >
                            {cert.subtitle}
                          </h3>
                          <h3
                            className="cert-body-subtitle"
                            style={{ color: "#b8b8b8", marginBottom: "0px", fontSize: "14px" }}
                          >
                            - {cert.organization}
                          </h3>
                        </div>
                      </div>
                    </Fade>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          
          {/* View All Button - FIXED */}
          <div className="blog--viewAll">
            <Link to="/certificatepage" style={{ textDecoration: 'none' }}>
              <button 
                className="btn btn-primary"
                style={{
                  background: "linear-gradient(135deg, #8e46ba, #b061df)",
                  border: "none",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  borderRadius: "25px",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  minWidth: "220px",
                  boxShadow: "0 4px 15px rgba(142, 70, 186, 0.3)"
                }}
              >
                Alle Zertifikate ansehen
                <HiArrowRight className="viewArr" style={{ fontSize: "20px" }} />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}