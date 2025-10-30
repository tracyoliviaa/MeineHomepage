import React from "react";
import { Link } from "react-router-dom";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";

export default function TechnicalSkill() {
  const skills = [
    { name: "C", level: 75, color: "#fe3e57" },
    { name: "C++", level: 75, color: "#54faae" },
    { name: "Python", level: 80, color: "#39c4ff" },
    { name: "JavaScript", level: 71, color: "#f1f965" },
    { name: "MySQL", level: 68, color: "#ff0173" },
    { name: "Node.js", level: 66, color: "#ff8c2f" },
    { name: "React.js", level: 78, color: "#41f2ff" },
    { name: "PHP", level: 75, color: "#fe3e57" },
    { name: "Java", level: 75, color: "#54faae" }
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
            <h2 className="section-title-professional">Technical Skills</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle-professional">
              Meine technische Expertise im Überblick
            </p>
          </Tada>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-professional">
          {skills.map((skill, index) => (
            <Fade bottom duration={800} delay={index * 100} key={index}>
              <div className="skill-card-professional">
                <div className="d-flex justify-space-between align-center mb-md">
                  <span className="skill-name-professional">{skill.name}</span>
                  <span 
                    style={{ 
                      fontSize: '32px', 
                      fontWeight: '700',
                      color: skill.color 
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                
                <div className="skill-bar-professional">
                  <div 
                    className="skill-progress-professional"
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                    }}
                  />
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}