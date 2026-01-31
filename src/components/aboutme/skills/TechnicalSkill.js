import React from "react";
import { Link } from "react-router-dom";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
import { 
  DiJava, 
  DiPython, 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiMysql,
  DiPhp,
  DiHtml5,
  DiCss3 
} from "react-icons/di";
import { SiCplusplus, SiC } from "react-icons/si";

export default function TechnicalSkill() {
  const skillCategories = [
    {
      category: "Backend & System-Programmierung",
      color: "#fe3e57",
      skills: [
        {
          name: "C / C++",
          icon: SiC,
          applications: [
            "Systemnahe Programmierung",
            "Algorithmen & Datenstrukturen",
            "Performance-kritische Anwendungen"
          ]
        },
        {
          name: "Java",
          icon: DiJava,
          applications: [
            "Objektorientierte Softwareentwicklung",
            "Enterprise-Anwendungen",
            "Design Patterns"
          ]
        },
        {
          name: "Python",
          icon: DiPython,
          applications: [
            "Datenanalyse & Automation",
            "Machine Learning Grundlagen",
            "Scripting & Backend-Entwicklung"
          ]
        }
      ]
    },
    {
      category: "Frontend-Entwicklung",
      color: "#39c4ff",
      skills: [
        {
          name: "HTML & CSS",
          icon: DiHtml5,
          applications: [
            "Responsive Webdesign",
            "Moderne UI-Komponenten",
            "Cross-Browser Kompatibilität"
          ]
        },
        {
          name: "JavaScript",
          icon: DiJavascript1,
          applications: [
            "Interaktive Benutzeroberflächen",
            "DOM-Manipulation",
            "Asynchrone Programmierung"
          ]
        },
        {
          name: "React.js",
          icon: DiReact,
          applications: [
            "Single Page Applications",
            "Component-basierte Architektur",
            "State Management & Hooks"
          ]
        }
      ]
    },
    {
      category: "Backend & Datenbanken",
      color: "#54faae",
      skills: [
        {
          name: "Node.js",
          icon: DiNodejs,
          applications: [
            "RESTful APIs",
            "Server-side JavaScript",
            "Echtzeit-Anwendungen"
          ]
        },
        {
          name: "PHP",
          icon: DiPhp,
          applications: [
            "Web-Backend Entwicklung",
            "Server-side Scripting",
            "Content Management Systeme"
          ]
        },
        {
          name: "MySQL",
          icon: DiMysql,
          applications: [
            "Datenbankdesign & Modellierung",
            "SQL-Queries & Optimierung",
            "Datenbank-Integration"
          ]
        }
      ]
    }
  ];

  return (
    <div className="section-professional">
      <div className="container-professional">
        
        {/* Navigation Tabs */}
        <div className="text-center mb-lg">
          <div className="d-flex justify-center gap-md flex-wrap">
            <Link className="btn-professional btn-primary-professional" to="/technicalSkill">
              Technical Skill
            </Link>
            <Link className="btn-professional btn-secondary-professional" to="/personalskill">
              Personal Skill
            </Link>
            <Link className="btn-professional btn-secondary-professional" to="/toolkit">
              Toolkit
            </Link>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header-professional">
          <Tada>
            <h2 className="section-title-professional">Technische Kompetenzen</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle-professional">
              Meine Expertise in der Softwareentwicklung
            </p>
          </Tada>
        </div>

        {/* Skills by Category */}
        {skillCategories.map((category, catIndex) => (
          <Fade bottom duration={800} delay={catIndex * 200} key={catIndex}>
            <div style={{ marginBottom: '48px' }}>
              {/* Category Header */}
              <div style={{
                marginBottom: '24px',
                paddingBottom: '12px',
                borderBottom: `2px solid ${category.color}`
              }}>
                <h3 style={{
                  color: category.color,
                  fontSize: '24px',
                  fontWeight: '700',
                  margin: 0
                }}>
                  {category.category}
                </h3>
              </div>

              {/* Skills in Category */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '20px'
              }}>
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <Fade bottom duration={600} delay={catIndex * 200 + skillIndex * 100} key={skillIndex}>
                      <div style={{
                        background: 'rgba(142, 70, 186, 0.1)',
                        border: '1px solid rgba(142, 70, 186, 0.3)',
                        borderRadius: '12px',
                        padding: '24px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 8px 24px ${category.color}40`;
                        e.currentTarget.style.borderColor = category.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'rgba(142, 70, 186, 0.3)';
                      }}
                      >
                        {/* Skill Header */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '16px'
                        }}>
                          <div style={{
                            fontSize: '36px',
                            color: category.color,
                            marginRight: '12px',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <IconComponent />
                          </div>
                          <h4 style={{
                            color: '#fbd9ad',
                            fontSize: '20px',
                            fontWeight: '700',
                            margin: 0
                          }}>
                            {skill.name}
                          </h4>
                        </div>

                        {/* Applications List */}
                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0
                        }}>
                          {skill.applications.map((app, appIndex) => (
                            <li key={appIndex} style={{
                              color: '#d4d4d4',
                              fontSize: '14px',
                              lineHeight: '1.6',
                              marginBottom: '8px',
                              paddingLeft: '20px',
                              position: 'relative'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: 0,
                                top: '4px',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: category.color
                              }} />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Fade>
                  );
                })}
              </div>
            </div>
          </Fade>
        ))}

        {/* Additional Technologies */}
        <Fade bottom duration={1000} delay={600}>
          <div style={{
            marginTop: '48px',
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
              Weitere Kenntnisse
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '20px'
            }}>
              {[
                'Git & GitHub',
                'OpenCV',
                'NumPy',
                'Agile Methoden',
                'REST APIs',
                'Responsive Design',
                'Debugging',
                'Testing'
              ].map((tech, index) => (
                <span
                  key={index}
                  style={{
                    background: 'rgba(142, 70, 186, 0.2)',
                    border: '1px solid rgba(142, 70, 186, 0.5)',
                    color: '#fbd9ad',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}