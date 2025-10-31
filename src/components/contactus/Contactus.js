<<<<<<< HEAD
import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
=======
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState(new FormData());
>>>>>>> origin/main

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
<<<<<<< HEAD
      alert("Bitte füllen Sie alle Felder aus!");
=======
      alert("Something went wrong!");
>>>>>>> origin/main
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );
<<<<<<< HEAD
      console.log(response.data.message);
      alert(`Danke ${formData.name}, ich werde mich bald bei Ihnen melden!`);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Backend Server läuft nicht. Nachricht konnte nicht gesendet werden.");
    }
  };

  return (
    <div className="section-professional section-dark" id="contact">
      <div className="container-professional">
        
        {/* Section Header */}
        <div className="section-header-professional">
          <Zoom left cascade>
            <h2 className="section-title-professional">Kontaktieren Sie mich</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle-professional">
              Auf der Suche nach einer Entwicklerin? Lass uns dein Projekt realisieren!
            </p>
          </Zoom>
        </div>

        {/* Contact Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)'
        }}>
          
          {/* Contact Info */}
          <Fade left duration={1000}>
            <div>
              {/* Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                
                {/* Email */}
                <a
                  href="mailto:m-o-schulz@web.de"
                  style={{
                    background: 'rgba(142, 70, 186, 0.1)',
                    border: '1px solid rgba(142, 70, 186, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#8e46ba';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(142, 70, 186, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #8e46ba, #b061df)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FiAtSign size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fbd9ad', marginBottom: '4px' }}>
                      Email
                    </div>
                    <div style={{ color: '#b8b8b8', fontSize: '14px' }}>
                      m-o-schulz@web.de
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+4917652952328"
                  style={{
                    background: 'rgba(142, 70, 186, 0.1)',
                    border: '1px solid rgba(142, 70, 186, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#8e46ba';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(142, 70, 186, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #8e46ba, #b061df)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FiPhone size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fbd9ad', marginBottom: '4px' }}>
                      Telefon
                    </div>
                    <div style={{ color: '#b8b8b8', fontSize: '14px' }}>
                      +49 176 52952328
                    </div>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://maps.app.goo.gl/iUHJvPAhJXwJayo68"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'rgba(142, 70, 186, 0.1)',
                    border: '1px solid rgba(142, 70, 186, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#8e46ba';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(142, 70, 186, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #8e46ba, #b061df)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <HiOutlineLocationMarker size={24} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fbd9ad', marginBottom: '4px' }}>
                      Standort
                    </div>
                    <div style={{ color: '#b8b8b8', fontSize: '14px' }}>
                      Am Forthaus 51<br />
                      63263 Neu-Isenburg
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div style={{
                marginTop: 'var(--spacing-lg)',
                display: 'flex',
                gap: 'var(--spacing-sm)'
              }}>
                <a
                  href="https://github.com/tracyolivia"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '2px solid rgba(142, 70, 186, 0.3)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#8e46ba';
                    e.currentTarget.style.background = 'rgba(142, 70, 186, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <AiFillGithub size={24} color="#fbd9ad" />
                </a>
                <a
                  href="https://www.linkedin.com/in/martina-schulz/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '2px solid rgba(142, 70, 186, 0.3)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#8e46ba';
                    e.currentTarget.style.background = 'rgba(142, 70, 186, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <FaLinkedinIn size={22} color="#fbd9ad" />
                </a>
              </div>
            </div>
          </Fade>

          {/* Contact Form */}
          <Fade right duration={1000} delay={200}>
            <div style={{
              background: 'rgba(142, 70, 186, 0.05)',
              border: '1px solid rgba(142, 70, 186, 0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--spacing-xs)',
                    color: '#fbd9ad',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(142, 70, 186, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#8e46ba'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(142, 70, 186, 0.3)'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--spacing-xs)',
                    color: '#fbd9ad',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ihre@email.de"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(142, 70, 186, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#8e46ba'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(142, 70, 186, 0.3)'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--spacing-xs)',
                    color: '#fbd9ad',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Ihre Nachricht..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(142, 70, 186, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#8e46ba'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(142, 70, 186, 0.3)'}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-professional btn-primary-professional"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-xs)'
                  }}
                >
                  Nachricht senden
                  <AiOutlineSend size={18} />
                </button>
              </div>
            </div>
          </Fade>
        </div>

        {/* Map Section */}
        <Fade bottom duration={1000} delay={400}>
          <div style={{
            marginTop: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid rgba(142, 70, 186, 0.2)',
            height: '400px'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d8.655813!3d50.070399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e64c454b844f21%3A0x7a5d341bbd0b5f44!2sNeu-Isenburg!5e0!3m2!1sde!2sde!4v1695023265917!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
=======
      console.log(response.data.message); // Log the response from the backend

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);

      alert("Backend Server was not Running while submitting the form.");
    }

    setFormData({});
  };

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
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          aria-describedby="emailHelp"
                          placeholder="Enter your name"
                          value={formData.name || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={formData.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message || ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button
                          type="submit"
                          className="submitBtn"
                          onClick={handleSubmit}
                        >
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:m-o-schulz@web.de`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        m-o-schulz@web.de
                      </p>
                    </a>
                    <a
                      href={`tel:+49 176-52952328`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+49 0176 52952328</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/iUHJvPAhJXwJayo68"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Am Forthaus 51 
                          63263 Neu-Isenburg 
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d8.655813!3d50.070399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e64c454b844f21%3A0x7a5d341bbd0b5f44!2sNeu-Isenburg!5e0!3m2!1sde!2sde!4v1695023265917!5m2!1sde!2sde"
    frameBorder="0"
    allowFullScreen=""
    aria-hidden="false"
    title="Contact Me"
    tabIndex="0"
    loading="lazy"
    className=""
  ></iframe>
</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
>>>>>>> origin/main
