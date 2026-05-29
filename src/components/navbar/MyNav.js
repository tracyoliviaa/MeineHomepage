import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCertificate } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import profileImg from "../../assets/profile.jpg";

export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    { path: "/",              label: "Start",         icon: <AiOutlineHome /> },
    { path: "/projectspage",  label: "Projekte",      icon: <AiOutlineFundProjectionScreen /> },
    { path: "/resume",        label: "Lebenslauf",    icon: <CgFileDocument /> },
    { path: "/certificatepage", label: "Zertifikate", icon: <FaCertificate /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={{
        background: navColour ? "rgba(10,10,10,0.98)" : "transparent",
        backdropFilter: navColour ? "blur(20px)" : "none",
        transition: "all 0.3s ease",
        borderBottom: navColour ? "1px solid rgba(142,70,186,0.2)" : "none",
        padding: "12px 0",
        zIndex: 1000,
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img
            src={profileImg}
            alt="Martina Schulz"
            style={{ width: "44px", height: "44px", borderRadius: "50%", border: "2px solid #8e46ba", objectFit: "cover" }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: "16px", color: "#fbd9ad", lineHeight: 1.2 }}>Martina Schulz</div>
            <div style={{ fontSize: "11px", color: "#b8b8b8", letterSpacing: "0.04em" }}>Software Entwicklerin</div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
          style={{ border: "1px solid rgba(142,70,186,0.4)", borderRadius: "8px", padding: "6px 10px", background: "rgba(142,70,186,0.1)" }}
        >
          <span style={{ display: "block", width: "20px", height: "2px", background: "#fbd9ad", margin: "4px 0" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#fbd9ad", margin: "4px 0" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#fbd9ad", margin: "4px 0" }} />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{ gap: "4px", alignItems: "center" }}>
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                onClick={() => updateExpanded(false)}
                style={{
                  display: "flex", alignItems: "center", gap: "7px",
                  padding: "9px 18px", borderRadius: "8px",
                  fontWeight: 500, fontSize: "14px",
                  color: isActive(item.path) ? "#fbd9ad" : "#d4d4d4",
                  background: isActive(item.path) ? "rgba(142,70,186,0.2)" : "transparent",
                  border: isActive(item.path) ? "1px solid rgba(142,70,186,0.4)" : "1px solid transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = "rgba(142,70,186,0.1)";
                    e.currentTarget.style.color = "#fbd9ad";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#d4d4d4";
                  }
                }}
              >
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                {item.label}
              </Nav.Link>
            ))}

            <a
              href="https://github.com/tracyoliviaa"
              target="_blank"
              rel="noreferrer"
              style={{
                marginLeft: "8px", padding: "9px 16px",
                background: "linear-gradient(135deg,#8e46ba,#b061df)",
                color: "#fff", borderRadius: "8px",
                display: "flex", alignItems: "center", gap: "6px",
                fontSize: "13px", fontWeight: 600, textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              <CgGitFork style={{ fontSize: "16px" }} />
              <AiFillStar style={{ fontSize: "14px" }} />
              GitHub
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
