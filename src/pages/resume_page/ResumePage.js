import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import Particle from "../../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPagesResume, setNumPagesResume] = useState(null);
  const [numPagesCertificate, setNumPagesCertificate] = useState(null);
  const resumePDF = process.env.PUBLIC_URL + "/Lebenslauf-Martina-Schulz.pdf";
  const certificatePDF = process.env.PUBLIC_URL + "/Praktikumszeugnis-Martina-Schulz.pdf";

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = async (pdfUrl, filename) => {
    try {
      // Für lokale Entwicklung: Direkter Download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      alert('Download fehlgeschlagen. Bitte versuchen Sie es erneut.');
    }
  };

  const DocumentSection = ({ 
    title, 
    pdfUrl, 
    filename, 
    numPages, 
    setNumPages,
    icon 
  }) => (
    <Fade bottom duration={1000}>
      <div style={{
        background: 'rgba(142, 70, 186, 0.05)',
        border: '1px solid rgba(142, 70, 186, 0.2)',
        borderRadius: '20px',
        padding: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--spacing-lg)',
          flexWrap: 'wrap',
          gap: 'var(--spacing-md)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #8e46ba, #b061df)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px'
            }}>
              {icon}
            </div>
            <div>
              <h2 style={{ 
                color: '#fbd9ad', 
                margin: 0,
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontWeight: 700
              }}>
                {title}
              </h2>
              <p style={{ 
                color: '#b8b8b8', 
                margin: '4px 0 0 0',
                fontSize: '14px' 
              }}>
                {numPages ? `${numPages} Seite${numPages > 1 ? 'n' : ''}` : 'Wird geladen...'}
              </p>
            </div>
          </div>

          <Button
            onClick={() => handleDownload(pdfUrl, filename)}
            className="btn-professional btn-primary-professional"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 600
            }}
          >
            <AiOutlineDownload size={20} />
            Download PDF
          </Button>
        </div>

        {/* PDF Preview */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '12px',
          padding: 'var(--spacing-md)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-lg)'
        }}>
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div style={{ color: '#b8b8b8', padding: '40px' }}>
                PDF wird geladen...
              </div>
            }
            error={
              <div style={{ 
                color: '#fe3e57', 
                padding: '40px',
                textAlign: 'center'
              }}>
                <p>PDF konnte nicht geladen werden.</p>
                <button
                  onClick={() => handleDownload(pdfUrl, filename)}
                  style={{
                    marginTop: '16px',
                    padding: '12px 24px',
                    background: '#8e46ba',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  PDF direkt öffnen
                </button>
              </div>
            }
          >
            {numPages && Array.from(new Array(numPages), (el, index) => (
              <div 
                key={`page-${index + 1}`} 
                style={{
                  marginBottom: index < numPages - 1 ? 'var(--spacing-lg)' : 0,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              >
                <Page
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.3 : 0.4}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
                <div style={{
                  textAlign: 'center',
                  padding: '12px',
                  background: 'rgba(142, 70, 186, 0.1)',
                  color: '#b8b8b8',
                  fontSize: '13px',
                  fontWeight: 600
                }}>
                  Seite {index + 1} von {numPages}
                </div>
              </div>
            ))}
          </Document>
        </div>
      </div>
    </Fade>
  );

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          {/* Page Header */}
          <div style={{
            textAlign: 'center',
            marginTop: '100px',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <Zoom left cascade>
              <div style={{
                display: 'inline-block',
                padding: '8px 24px',
                background: 'linear-gradient(135deg, #8e46ba, #b061df)',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: 'var(--spacing-md)'
              }}>
                📄 Bewerbungsunterlagen
              </div>
            </Zoom>
            <Zoom left cascade delay={200}>
              <h1 style={{
                fontSize: 'clamp(36px, 6vw, 56px)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #fff, #fbd9ad)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Meine Dokumente
              </h1>
            </Zoom>
            <Fade bottom duration={1000} delay={400}>
              <p style={{
                fontSize: '18px',
                color: '#b8b8b8',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Hier finden Sie meinen vollständigen Lebenslauf und mein Praktikumszeugnis 
                zum Download und zur Ansicht.
              </p>
            </Fade>
          </div>

          {/* Documents */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <DocumentSection
              title="Lebenslauf"
              pdfUrl={resumePDF}
              filename="Lebenslauf-Martina-Schulz.pdf"
              numPages={numPagesResume}
              setNumPages={setNumPagesResume}
              icon={<HiDocumentText color="#fff" />}
            />

            <DocumentSection
              title="Praktikumszeugnis"
              pdfUrl={certificatePDF}
              filename="Praktikumszeugnis-Martina-Schulz.pdf"
              numPages={numPagesCertificate}
              setNumPages={setNumPagesCertificate}
              icon={<HiDocumentText color="#fff" />}
            />
          </div>

          {/* Info Box */}
          <Fade bottom duration={1000} delay={600}>
            <div style={{
              maxWidth: '900px',
              margin: 'var(--spacing-xl) auto 0',
              padding: 'var(--spacing-lg)',
              background: 'rgba(142, 70, 186, 0.1)',
              border: '1px solid rgba(142, 70, 186, 0.3)',
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#d4d4d4',
                fontSize: '14px',
                margin: 0,
                lineHeight: '1.6'
              }}>
                💡 <strong>Tipp:</strong> Die PDFs können direkt im Browser angesehen oder 
                heruntergeladen werden. Bei Problemen mit der Anzeige nutzen Sie bitte den 
                Download-Button.
              </p>
            </div>
          </Fade>
        </Container>
      </Container>
    </section>
  );
}

export default Resume;