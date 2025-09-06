import React from "react";

export default function Skills() {
  const techSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "Video Editing", level: 85 },
    { name: "Graphic Design", level: 80 },
  ];

  const softSkills = [
    { name: "Communication & Teamwork", level: 85 },
    { name: "Problem-solving", level: 80 },
    { name: "Leadership", level: 75 },
    { name: "Adaptability", level: 70 },
  ];

  return (
    <section className="page">
      <h2>Skills</h2>

      {/* Technical Skills */}
      <div className="skills-grid">
        {techSkills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <h3 style={{ marginTop: "2rem" }}>Soft Skills</h3>
      <div className="circle-skills">
        {softSkills.map((skill, index) => (
          <div key={index} className="circle-skill">
            <svg className="circle" viewBox="0 0 100 100">
              <circle className="bg" cx="50" cy="50" r="45" />
              <circle
                className="progress-circle"
                cx="50"
                cy="50"
                r="45"
                style={{
                  strokeDashoffset: 283 - (283 * skill.level) / 100,
                  animationDelay: `${index * 0.3}s`,
                }}
              />
            </svg>
            <div className="circle-label">
              <span>{skill.level}%</span>
              <small>{skill.name}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
