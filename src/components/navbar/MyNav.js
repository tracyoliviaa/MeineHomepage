import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaHome, FaProjectDiagram, FaFileAlt, FaCertificate } from "react-icons/fa";
import "./MyNav.css";

export default function MyNav() {
  const [navColor, setNavColor] = useState(false);
  const [expanded, setExpanded] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <div className="container">
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <strong className="logo">MosDev</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <NavLink
              as={Link}
              to="/"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <FaHome /> Home
            </NavLink>
            <NavLink
              as={Link}
              to="/projectspage"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <FaProjectDiagram /> Projects
            </NavLink>
            <NavLink
              as={Link}
              to="/certificatepage"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <FaCertificate /> Certificates
            </NavLink>
            <NavLink
              as={Link}
              to="/resume"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <FaFileAlt /> Resume
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
