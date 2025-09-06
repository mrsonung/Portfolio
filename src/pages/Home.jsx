import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg"; // 👉 Apna photo src/assets/profile.jpg me daalna

export default function Home() {
  const fullText = "Hi, I’m Kumar Sonu Nigam ";
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");

  const roles = ["Developer", "Editor", "Graphic Designer"];

  // Typing effect for name
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Looping role typing effect
  useEffect(() => {
    let i = 0;
    let currentRole = roles[roleIndex];
    const interval = setInterval(() => {
      setRoleText(currentRole.slice(0, i));
      i++;
      if (i > currentRole.length) {
        clearInterval(interval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <section className="hero">
      {/* Profile Image */}
      <div className="profile-container fade-in">
        <img src={profilePic} alt="Kumar Sonu Nigam" className="profile-pic" />
      </div>

      {/* Typing Name */}
      <h1 className="typing">{typedText}</h1>
      <p className="dynamic-role">{roleText}</p>

      <div className="cta-buttons">
        <a href="/projects" className="btn-primary">🚀 View Projects</a>
        <a href="/contact" className="btn-secondary">📩 Contact Me</a>
      </div>

      {/* About Section */}
      <div className="home-section fade-in">
        <h2>About Me</h2>
        <p>
          I am <b>Kumar Sonu Nigam</b>, a B.Tech CSE student (2022–2026).
          Passionate about building impactful web applications and solving
          real-world problems through technology.
        </p>
      </div>

      {/* Experience Section */}
      <div className="home-section fade-in">
        <h2>Experience</h2>
        <div className="card slide-in">
          <h3>Web Developer Intern</h3>
          <span className="muted">Celebrion • Jul 2025 – Aug 2025</span>
          <p>Worked on frontend & backend projects in Dehradun.</p>
        </div>
        <div className="card slide-in">
          <h3>Web Developer Intern</h3>
          <span className="muted">Octanet Pvt Ltd • Jul 2024 – Aug 2024</span>
          <p>Created responsive web apps and improved coding accuracy.</p>
        </div>
      </div>

      {/* Education */}
      <div className="home-section fade-in">
        <h2>Education</h2>
        <div className="card">
          <h3>B.Tech in Computer Science & Engineering</h3>
          <span className="muted">
            Veer Madho Singh Bhandari Uttarakhand Technical University
          </span>
          <p>CGPA: 7 (Till 6th Sem)</p>
        </div>
        <div className="card slide-in">
          <h3>Higher Secondary Education</h3>
          <span className="muted">S.S. College Jehanabad</span>
          <p>Percentage: 71%</p>
        </div>
      </div>
    </section>
  );
}
