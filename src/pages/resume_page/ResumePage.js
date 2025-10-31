import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";

// Ensure PDF.js worker is set up correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  
  // PDF path - works for both local and production
  const pdf = `${process.env.PUBLIC_URL}/Lebenslauf  Martina Schulz.pdf`;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log('PDF loaded successfully, pages:', numPages);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    console.log('Tried to load from:', pdf);
  }

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#fbd9ad",
                padding: "20px 0",
                borderRadius: "12px",
                marginTop: "80px"
              }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)", margin: 0 }}>LEBENSLAUF</h1>
              </Zoom>
            </div>

            <div className="certificate-section" id="about">
              <div className="d-flex justify-content-center mt-4">
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  download="Lebenslauf-Martina-Schulz.pdf"
                  style={{
                    background: "linear-gradient(135deg, #8e46ba, #b061df)",
                    border: "none",
                    padding: "12px 30px",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <AiOutlineDownload size={20} />
                  Download Resume
                </Button>
              </div>

              <div className="resume d-flex justify-content-center mt-5 mb-4">
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div style={{ 
                      padding: "80px 50px", 
                      textAlign: "center", 
                      color: "#fbd9ad",
                      background: "rgba(142, 70, 186, 0.1)",
                      borderRadius: "12px",
                      border: "2px dashed rgba(142, 70, 186, 0.3)"
                    }}>
                      <div style={{ fontSize: "48px", marginBottom: "20px" }}>📄</div>
                      <p style={{ fontSize: "18px", fontWeight: "600" }}>Lade PDF...</p>
                    </div>
                  }
                  error={
                    <div style={{ 
                      padding: "80px 50px", 
                      textAlign: "center", 
                      color: "#ff6b6b",
                      background: "rgba(255, 107, 107, 0.1)",
                      borderRadius: "12px",
                      border: "2px dashed rgba(255, 107, 107, 0.3)"
                    }}>
                      <div style={{ fontSize: "48px", marginBottom: "20px" }}>⚠️</div>
                      <p style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>
                        PDF konnte nicht geladen werden
                      </p>
                      <p style={{ fontSize: "14px", color: "#b8b8b8" }}>
                        Bitte laden Sie das PDF über den Button herunter
                      </p>
                      <p style={{ fontSize: "12px", color: "#666", marginTop: "16px" }}>
                        Pfad: {pdf}
                      </p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={1}
                    scale={width > 786 ? 1.5 : 0.35}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>

              {numPages && (
                <div className="text-center mb-3" style={{ color: "#b8b8b8", fontSize: "14px" }}>
                  Seite 1 von {numPages}
                </div>
              )}

              <div className="d-flex justify-content-center mb-5">
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  download="Lebenslauf-Martina-Schulz.pdf"
                  style={{
                    background: "linear-gradient(135deg, #8e46ba, #b061df)",
                    border: "none",
                    padding: "12px 30px",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <AiOutlineDownload size={20} />
                  Download Resume
                </Button>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
