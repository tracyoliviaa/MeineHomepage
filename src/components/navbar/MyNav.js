import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaCertificate } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import profileImg from "../../assets/profile.jpg";

export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: <AiOutlineHome /> },
    { path: "/projectspage", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
    { path: "/resume", label: "Resume", icon: <CgFileDocument /> },
    { path: "/certificatepage", label: "Certificates", icon: <FaCertificate /> }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={{
        background: navColour 
          ? 'rgba(10, 10, 10, 0.98)' 
          : 'transparent',
        backdropFilter: navColour ? 'blur(20px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: navColour ? '1px solid rgba(142, 70, 186, 0.2)' : 'none',
        padding: '12px 0',
        boxShadow: navColour ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        zIndex: 1000
      }}
    >
      <Container>
        {/* Logo/Brand */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '14px',
            textDecoration: 'none',
            padding: '8px 0'
          }}
        >
          <div style={{
            position: 'relative',
            width: '50px',
            height: '50px'
          }}>
            <img 
              src={profileImg}
              className="img-fluid" 
              alt="Martina Schulz" 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid #8e46ba',
                objectFit: 'cover',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(142, 70, 186, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1) rotate(5deg)';
                e.target.style.borderColor = '#b061df';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)';
                e.target.style.borderColor = '#8e46ba';
              }}
            />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}>
            <h5 style={{
              margin: 0,
              color: "#fbd9ad",
              fontWeight: 700,
              fontSize: '18px',
              letterSpacing: '0.5px'
            }}>
              Martina Schulz
            </h5>
            <span style={{
              fontSize: '11px',
              color: '#b8b8b8',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontWeight: 600
            }}>
              Software Developer
            </span>
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
          style={{
            border: '2px solid rgba(142, 70, 186, 0.5)',
            borderRadius: '10px',
            padding: '8px 12px',
            background: 'rgba(142, 70, 186, 0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{
            width: '24px',
            height: '2px',
            background: '#fbd9ad',
            display: 'block',
            margin: '5px 0',
            transition: 'all 0.3s ease',
            transform: expand ? 'rotate(45deg) translateY(7px)' : 'none'
          }}></span>
          <span style={{
            width: '24px',
            height: '2px',
            background: '#fbd9ad',
            display: 'block',
            margin: '5px 0',
            opacity: expand ? 0 : 1,
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            width: '24px',
            height: '2px',
            background: '#fbd9ad',
            display: 'block',
            margin: '5px 0',
            transition: 'all 0.3s ease',
            transform: expand ? 'rotate(-45deg) translateY(-7px)' : 'none'
          }}></span>
        </Navbar.Toggle>

        {/* Nav Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{ gap: '8px', alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={item.path}
                onClick={() => updateExpanded(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: isActive(item.path) ? '#fbd9ad' : '#d4d4d4',
                  background: isActive(item.path) 
                    ? 'rgba(142, 70, 186, 0.2)' 
                    : 'transparent',
                  border: isActive(item.path)
                    ? '1px solid rgba(142, 70, 186, 0.4)'
                    : '1px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = 'rgba(142, 70, 186, 0.1)';
                    e.currentTarget.style.color = '#fbd9ad';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#d4d4d4';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                {item.label}
              </Nav.Link>
            ))}

            {/* GitHub Star Button */}
            <Nav.Item style={{ marginLeft: '12px' }}>
              <a
                href="https://github.com/tracyoliviaa"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #8e46ba, #b061df)',
                  color: '#fff',
                  borderRadius: '10px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(142, 70, 186, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <CgGitFork style={{ fontSize: '18px' }} />
                <AiFillStar style={{ fontSize: '16px' }} />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}