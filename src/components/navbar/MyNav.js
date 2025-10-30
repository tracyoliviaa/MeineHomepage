import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import "../../style.css";

export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "navbar-professional sticky" : "navbar-professional"}
      style={{
        background: navColour 
          ? 'rgba(10, 10, 10, 0.95)' 
          : 'transparent',
        backdropFilter: navColour ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: navColour ? '1px solid rgba(142, 70, 186, 0.2)' : 'none',
        padding: '16px 0'
      }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="logo-wrapper-professional">
            <img 
              src="./profile.jpg" 
              className="img-fluid" 
              alt="Martina Schulz" 
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid #8e46ba',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
          <h5
            style={{
              margin: 0,
              color: "#fbd9ad",
              fontWeight: 700,
              fontSize: '18px',
              letterSpacing: '0.5px'
            }}
          >
            Martina Schulz
          </h5>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{
            border: '2px solid #8e46ba',
            borderRadius: '8px'
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ml-auto" defaultActiveKey="#home" style={{ gap: '8px' }}>
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                className="nav-link-professional"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <AiOutlineHome style={{ fontSize: '18px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projectspage"
                onClick={() => updateExpanded(false)}
                className="nav-link-professional"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <AiOutlineFundProjectionScreen style={{ fontSize: '18px' }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="nav-link-professional"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <CgFileDocument style={{ fontSize: '18px' }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificatepage"
                onClick={() => updateExpanded(false)}
                className="nav-link-professional"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <ImBlog style={{ fontSize: '18px' }} /> Certifications
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={() => updateExpanded(false)}
                className="nav-link-professional"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <FaBlog style={{ fontSize: '18px' }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn" style={{ marginLeft: '8px' }}>
              <Button
                href="https://github.com/tracyolivia"
                target="_blank"
                className="btn-professional btn-primary-professional"
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <CgGitFork style={{ fontSize: '18px' }} />
                <AiFillStar style={{ fontSize: '16px' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}