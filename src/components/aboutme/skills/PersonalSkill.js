import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import { 
  FaComments, 
  FaTasks, 
  FaLightbulb, 
  FaChartLine, 
  FaClipboardList, 
  FaPalette 
} from 'react-icons/fa';

export default function PersonalSkill() {
  const skills = [
    { 
      name: "Kommunikationsfähigkeit",
      description: "Klare und effektive Kommunikation im Team und mit Stakeholdern",
      highlights: ["Teamarbeit", "Präsentationen", "Dokumentation"],
      color: "#fe3e57",
      icon: FaComments
    },
    { 
      name: "Projektmanagement",
      description: "Strukturierte Planung und erfolgreiche Umsetzung von Projekten",
      highlights: ["Agile Methoden", "Zeitmanagement", "Koordination"],
      color: "#54faae",
      icon: FaTasks
    },
    { 
      name: "Problemlösung",
      description: "Analytisches Denken und kreative Lösungsfindung bei Herausforderungen",
      highlights: ["Debugging", "Optimierung", "Innovationsdenken"],
      color: "#ff8c2f",
      icon: FaLightbulb
    },
    { 
      name: "Analytische Fähigkeiten",
      description: "Systematische Analyse komplexer Zusammenhänge und Datenstrukturen",
      highlights: ["Datenanalyse", "Systemdesign", "Mustererkennung"],
      color: "#f1f965",
      icon: FaChartLine
    },
    { 
      name: "Organisation",
      description: "Effiziente Strukturierung von Aufgaben und Arbeitsabläufen",
      highlights: ["Priorisierung", "Planung", "Prozessoptimierung"],
      color: "#ff0173",
      icon: FaClipboardList
    },
    { 
      name: "Kreativität",
      description: "Innovative Ansätze und kreative Lösungen in der Entwicklung",
      highlights: ["UI/UX Design", "Neue Technologien", "Kreative Problemlösung"],
      color: "#39c4ff",
      icon: FaPalette
    }
  ];

  return (
    <div className="section-professional">
      <div className="container-professional">
        
        {/* Navigation Tabs */}
        <div className="text-center mb-lg">
          <div className="d-flex justify-center gap-md flex-wrap">
            <Link className="btn-professional btn-secondary-professional" to="/technicalSkill">
              Technical Skill
            </Link>
            <Link className="btn-professional btn-primary-professional" to="/personalskill">
              Personal Skill
            </Link>
            <Link className="btn-professional btn-secondary-professional" to="/toolkit">
              Toolkit
            </Link>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header-professional">
          <LightSpeed left cascade>
            <h2 className="section-title-professional">Persönliche Kompetenzen</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle-professional">
              Meine Stärken in der professionellen Zusammenarbeit
            </p>
          </LightSpeed>
        </div>

        {/* Skills Grid */}
        <Container>
          <Row className='g-4'>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Col md={6} lg={4} key={index}>
                  <Fade bottom duration={800} delay={index * 100}>
                    <div style={{
                      background: 'rgba(142, 70, 186, 0.1)',
                      border: '1px solid rgba(142, 70, 186, 0.3)',
                      borderRadius: '16px',
                      padding: '28px 24px',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(142, 70, 186, 0.3)';
                      e.currentTarget.style.borderColor = skill.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                    }}
                    >
                      {/* Icon */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '16px'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: `${skill.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '12px'
                        }}>
                          <IconComponent style={{ 
                            fontSize: '24px', 
                            color: skill.color 
                          }} />
                        </div>
                        
                        {/* Skill Name */}
                        <h3 style={{
                          color: '#fbd9ad',
                          fontSize: '20px',
                          fontWeight: '700',
                          margin: 0
                        }}>
                          {skill.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p style={{
                        color: '#d4d4d4',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        marginBottom: '16px',
                        minHeight: '60px'
                      }}>
                        {skill.description}
                      </p>

                      {/* Highlights/Tags */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                      }}>
                        {skill.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: `${skill.color}15`,
                              border: `1px solid ${skill.color}40`,
                              color: skill.color,
                              padding: '4px 12px',
                              borderRadius: '20px',
                              fontSize: '12px',
                              fontWeight: '600'
                            }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </Container>

        {/* Additional Context Section */}
        <Fade bottom duration={1000} delay={600}>
          <div style={{
            marginTop: '60px',
            padding: '32px',
            background: 'rgba(142, 70, 186, 0.1)',
            borderRadius: '16px',
            border: '1px solid rgba(142, 70, 186, 0.3)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              color: '#fbd9ad', 
              fontSize: '20px', 
              fontWeight: '700',
              marginBottom: '16px'
            }}>
              Mein Ansatz
            </h3>
            <p style={{
              color: '#d4d4d4',
              fontSize: '16px',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Ich verbinde technisches Know-how mit starken zwischenmenschlichen Fähigkeiten. 
              Durch strukturiertes Arbeiten, kreative Problemlösungen und effektive Kommunikation 
              trage ich aktiv zum Teamerfolg bei und entwickle mich kontinuierlich weiter.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}