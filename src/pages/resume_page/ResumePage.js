              import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPagesResume, setNumPagesResume] = useState(null);
  const [numPagesCertificate, setNumPagesCertificate] = useState(null);

  const resumePDF = `${process.env.PUBLIC_URL}/Lebenslauf-Martina-Schulz.pdf`;
  const certificatePDF = `${process.env.PUBLIC_URL}/Praktikumszeugnis-Martina-Schulz.pdf`;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            {/* === LEBENSLAUF === */}
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#fbd9ad",
                padding: "20px 0",
                borderRadius: "12px",
                marginTop: "80px",
              }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)", margin: 0 }}>LEBENSLAUF</h1>
              </Zoom>
            </div>

            {/* Download Button */}
            <div className="d-flex justify-content-center mt-4">
              <Button
                variant="primary"
                href={resumePDF}
                target="_blank"
                download="Lebenslauf-Martina-Schulz.pdf"
                style={buttonStyle}
              >
                <AiOutlineDownload size={20} />
                Download Lebenslauf
              </Button>
            </div>

            {/* PDF Anzeige */}
            <div className="resume d-flex justify-content-center mt-5 mb-4">
              <Document
                file={resumePDF}
                onLoadSuccess={({ numPages }) => setNumPagesResume(numPages)}
              >
                <Page
                  pageNumber={1}
                  scale={width > 786 ? 1.5 : 0.35}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>

            {numPagesResume && (
              <div className="text-center mb-5" style={{ color: "#b8b8b8", fontSize: "14px" }}>
                Seite 1 von {numPagesResume}
              </div>
            )}

            {/* === PRAKTIKUMSZEUGNIS === */}
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#fbd9ad",
                padding: "20px 0",
                borderRadius: "12px",
                marginTop: "60px",
              }}
            >
              <Zoom right cascade>
                <h1 style={{ color: "rgb(134 61 176)", margin: 0 }}>PRAKTIKUMSZEUGNIS</h1>
              </Zoom>
            </div>

            {/* Download Button für Zeugnis */}
            <div className="d-flex justify-content-center mt-4">
              <Button
                variant="primary"
                href={certificatePDF}
                target="_blank"
                download="Praktikumszeugnis-Martina-Schulz.pdf"
                style={buttonStyle}
              >
                <AiOutlineDownload size={20} />
                Download Praktikumszeugnis
              </Button>
            </div>

            {/* PDF Anzeige für Zeugnis */}
            <div className="resume d-flex justify-content-center mt-5 mb-4">
              <Document
                file={certificatePDF}
                onLoadSuccess={({ numPages }) => setNumPagesCertificate(numPages)}
              >
                <Page
                  pageNumber={1}
                  scale={width > 786 ? 1.5 : 0.35}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>

            {numPagesCertificate && (
              <div className="text-center mb-5" style={{ color: "#b8b8b8", fontSize: "14px" }}>
                Seite 1 von {numPagesCertificate}
              </div>
            )}
          </Container>
        </Container>
      </section>
    </div>
  );
}

// Einheitliches Button-Design
const buttonStyle = {
  background: "linear-gradient(135deg, #8e46ba, #b061df)",
  border: "none",
  padding: "12px 30px",
  fontSize: "16px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "8px",
};

export default Resume;


