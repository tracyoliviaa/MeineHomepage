<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
=======
import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
>>>>>>> origin/main
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
<<<<<<< HEAD
import { FaCertificate } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import profileImg from "../../assets/profile.jpg";

=======
import { FaBlog } from "react-icons/fa";
import "../../style.css";
import { CgFileDocument } from "react-icons/cg";
>>>>>>> origin/main
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

<<<<<<< HEAD
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
=======
  window.addEventListener("scroll", scrollHandler);
>>>>>>> origin/main

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
<<<<<<< HEAD
      className="navbar-professional"
      style={{
        background: navColour 
          ? 'rgba(10, 10, 10, 0.95)' 
          : 'transparent',
        backdropFilter: navColour ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: navColour ? '1px solid rgba(142, 70, 186, 0.2)' : 'none',
        padding: '16px 0',
        boxShadow: navColour ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <div className="logo-wrapper-professional">
            <img 
              src={profileImg}
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

=======
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex flex-row justify-content-between">
            <img src="./profile.jpg" className="img-fluid logo" alt="brand" />
            <h5
              id="navhead"
              style={{
                marginLeft: "21px",
                paddingTop: "6px",
                color: "#fbd9ad",
              }}
            >
              Martina Schulz
            </h5>
          </div>
        </Navbar.Brand>
>>>>>>> origin/main
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
<<<<<<< HEAD
          style={{
            border: '2px solid #8e46ba',
            borderRadius: '8px'
          }}
=======
>>>>>>> origin/main
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
<<<<<<< HEAD

        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ms-auto" style={{ gap: '8px' }}>
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
                fontSize: '15px',
                color: '#fff'
              }}
            >
              <AiOutlineHome style={{ fontSize: '18px' }} /> Home
            </Nav.Link>

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
                fontSize: '15px',
                color: '#fff'
              }}
            >
              <AiOutlineFundProjectionScreen style={{ fontSize: '18px' }} /> Projects
            </Nav.Link>

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
                fontSize: '15px',
                color: '#fff'
              }}
            >
              <CgFileDocument style={{ fontSize: '18px' }} /> Resume
            </Nav.Link>

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
                fontSize: '15px',
                color: '#fff'
              }}
            >
              <FaCertificate style={{ fontSize: '18px' }} /> Certificates
            </Nav.Link>

            <Nav.Item style={{ marginLeft: '8px' }}>
              <a
                href="https://github.com/tracyoliviaa"
                target="_blank"
                rel="noreferrer"
                className="btn-professional btn-primary-professional"
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none'
                }}
              >
                <CgGitFork style={{ fontSize: '18px' }} />
                <AiFillStar style={{ fontSize: '16px' }} />
              </a>
=======
        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projectspage"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificatepage"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Certifications
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={() => updateExpanded(false)}
              >
                <FaBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href=""
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
>>>>>>> origin/main
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
