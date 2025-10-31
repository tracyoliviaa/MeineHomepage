import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ucsc from "../../images/ucsc.png";
<<<<<<< HEAD
import Particle from "../../Particle";

export default function CertificatePage() {
  const allCertificates = [
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
    },
    {
      title: "SQL (Advanced) Certificate",
      subtitle: "Tables, Joins and Advanced Queries",
      organization: "HackerRank",
      link: "https://www.hackerrank.com/certificates/8cebd621a497",
      logo: ucsc
    }
  ];

=======
import ufm from "../../images/ufm.png";
import nh from "../../images/nh.jpg";
import nactar from "../../images/nactar.jpg";
import ccna from "../../images/CCNA_Certificate.jpg";
import cbta from "../../images/CBT&A.pdf";
import skill from "../../images/skill.png";
import c from "../../images/c.jpg";
import iq from "../../images/IQ_Test.jpg";
import computer from "../../images/Computer_knowledge.jpg";
import graphics from "../../images/Graphics_Design.jpg";
import Particle from "../../Particle";
export default function CertificatePage() {
>>>>>>> origin/main
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
<<<<<<< HEAD
              <h1 style={{ color: "rgb(134 61 176)", padding: "20px 0" }}>
                Meine Zertifizierungen
              </h1>
=======
              <h1 style={{ color: "rgb(134 61 176" }}>Certificates</h1>
>>>>>>> origin/main
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
<<<<<<< HEAD
                        {allCertificates.map((cert, index) => (
                          <Col md={4} className="col-sm-12 col-md-4" key={index}>
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
                                      <img
                                        className="logo_img"
                                        src={cert.logo}
                                        alt={cert.organization}
                                      />
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
                                    style={{
                                      color: "#eb90ff",
                                      marginBottom: "8px",
                                      fontSize: "15px"
                                    }}
                                  >
                                    {cert.subtitle}
                                  </h3>
                                  <h3
                                    className="cert-body-subtitle"
                                    style={{
                                      color: "#b8b8b8",
                                      marginBottom: "0px",
                                      fontSize: "14px"
                                    }}
                                  >
                                    - {cert.organization}
                                  </h3>
                                </div>
                              </div>
                            </Fade>
                          </Col>
                        ))}
=======
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href="https://www.hackerrank.com/certificates/02cf34962bf9"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={ucsc}
                                        alt={ucsc}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  SQL Basic : Querying and managing data
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - HackerRank
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                       
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href="https://www.hackerrank.com/certificates/8cebd621a497"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={ucsc}
                                        alt={ucsc}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  SQL Advanced : Tables, Joins and More
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - HackerRank
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                       
<Col md={4} className="col-sm-12 col-md4">
    <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
            <div className="content">
                {/* 1. ANKER-TAG (LINK ZUM ZERTIFIKAT) */}
                <a
                    // HIER KOMMT DER IMPORT-NAME HINEIN, z.B. {zertifikatEins}
                    href="https://www.hackerrank.com/certificates/02cf34962bf9" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="content-overlay"></div>
                    <div
                        className="cert-header"
                        style={{ backgroundColor: "white" }}
                    >
                        {
                            // 2. LOGO/BILD, DAS AUF DER KARTE SICHTBAR IST
                            <img
                                className="logo_img"
                                src={ucsc} // HIER DER IMPORT-NAME FÜR DAS LOGO, z.B. {skill}
                                alt={ucsc}
                            />
                        }
                    </div>
                    {/* HIER DIE TEXTÜBERSCHRIFT, DIE BEIM HOVERN ERSCHEINT */}
                    <div className="content-details fadeIn-top">
                        <h3
                            className="content-title"
                            style={{ color: "black" }}
                        >
                            Certificate
                        </h3>
                    </div>
                </a>
            </div>
            {/* 3. TEXT-KARTE UNTER DEM BILD */}
            <div className="cert-body">
                <h2
                    className="cert-body-title"
                    style={{ fontWeight: 700, color: "#fbd9ad" }}
                >
                    SQL Basic : Querying and managing data // HIER ZERTIFIKAT-TITEL
                </h2>
                <h3
                    className="cert-body-subtitle"
                    style={{
                        color: "#eb90ff",
                        marginBottom: "0px",
                    }}
                >
                    - HackerRank // HIER ZERTIFIKAT-AUSSTELLER
                </h3>
            </div>
        </div>
    </Fade>
</Col>

                       
>>>>>>> origin/main
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
          <div className="blog--viewAll"></div>
        </Container>
      </Container>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
