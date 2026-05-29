import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaHeart } from "react-icons/fa";

// ─── Einheitliche Links – nur hier ändern ────────────────────────────────────
const GITHUB_URL   = "https://github.com/tracyoliviaa";
const LINKEDIN_URL = "https://www.linkedin.com/in/martina-schulz-5a3a26351";
const EMAIL        = "m-o-schulz@web.de";
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: GITHUB_URL,   icon: <AiFillGithub size={20} />,  label: "GitHub"   },
    { href: LINKEDIN_URL, icon: <FaLinkedinIn size={18} />,  label: "LinkedIn" },
  ];

  return (
    <footer style={{
      background: "rgba(10,10,10,0.95)",
      borderTop: "1px solid rgba(142,70,186,0.2)",
      padding: "40px 0",
      marginTop: "80px",
    }}>
      <Container>
        <Row className="align-items-center">

          {/* Links */}
          <Col md={4} style={{ marginBottom: "16px" }}>
            <div style={{ fontWeight: 700, fontSize: "17px", color: "#fbd9ad", marginBottom: "4px" }}>
              Martina Schulz
            </div>
            <div style={{ fontSize: "13px", color: "#888", display: "flex", alignItems: "center", gap: "5px" }}>
              Entwickelt mit <FaHeart size={12} color="#8e46ba" /> in Frankfurt
            </div>
          </Col>

          {/* Mitte */}
          <Col md={4} className="text-center" style={{ marginBottom: "16px" }}>
            <div style={{ fontSize: "13px", color: "#888" }}>© {year} Martina Schulz</div>
            <div style={{ fontSize: "12px", color: "#555", marginTop: "4px" }}>Alle Rechte vorbehalten</div>
          </Col>

          {/* Social Icons */}
          <Col md={4}>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "42px", height: "42px",
                    border: "1px solid rgba(142,70,186,0.3)",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fbd9ad", textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg,#8e46ba,#b061df)";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(142,70,186,0.3)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Bottom */}
        <Row style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(142,70,186,0.1)" }}>
          <Col className="text-center">
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
              {[
                { label: "Impressum",   href: "/impressum"  },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "Kontakt",     href: `mailto:${EMAIL}` },
              ].map(({ label, href }) => (
                <a key={label} href={href}
                  style={{ fontSize: "12px", color: "#555", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "#fbd9ad"}
                  onMouseLeave={(e) => e.target.style.color = "#555"}
                >
                  {label}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
