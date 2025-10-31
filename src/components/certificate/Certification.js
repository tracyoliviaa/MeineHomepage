import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ucsc from "../../images/ucsc.png";
<<<<<<< HEAD
=======
import ufm from "../../images/ufm.png";
import cbta from "../../images/CBT&A.pdf";
>>>>>>> origin/main
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
<<<<<<< HEAD
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
          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                Alle Zertifikate ansehen
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
=======
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
<h1 className="aboutme-heading">Certification</h1>
</Zoom>
</Col>
<Col ms={12} className="mt-3">
<Row className="g-5">
<Col md={4}>
<Fade bottom duration={2000} distance="20px">
<div className="cert-card">
<div className="content">
<a
href="https://www.hackerrank.com/certificates/3573ea1a35bb"
target="_blank"
rel="noopener noreferrer"
>
<div className="content-overlay"></div>
<div
className="cert-header"
style={{ backgroundColor: "white" }}
>
{<img className="logo_img" src={ucsc} alt={ucsc} />}
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
Problem Solving Basic : Programming Fundamentals
</h2>
<h3
className="cert-body-subtitle"
style={{ color: "#eb90ff", marginBottom: "0px" }}
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
href="https://www.hackerrank.com/certificates/af66a6615aad"
target="_blank"
rel="noopener noreferrer"
>
<div className="content-overlay"></div>
<div
className="cert-header"
style={{ backgroundColor: "white" }}
>
{<img className="logo_img" src={ucsc} alt={ucsc} />}
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
Python Basic for : Programming Fundamentals
</h2>
<h3
className="cert-body-subtitle"
style={{ color: "#eb90ff", marginBottom: "0px" }}
>
- HackerRank
</h3>
</div>
</div>
</Fade>
</Col>
</Row>
</Col>
</Row>
<div className="blog--viewAll">
<Link to="/certificatepage">
<button className="btn btn-primary">
View All
<HiArrowRight className="viewArr" />
</button>
</Link>
</div>
</Container>
</Container>
</div>
);
>>>>>>> origin/main
}