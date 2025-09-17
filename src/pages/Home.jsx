
import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg";

export default function Home() {
  const fullText = "Hi, I'm Kumar Sonu Nigam";
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");

  const roles = ["Web Developer", "Graphic Designer", "Video Editor"];

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
        <a href="#projects" className="btn-primary">🚀 View Projects</a>
        <a href="#contact" className="btn-secondary">📩 Contact Me</a>
      </div>

      {/* About Section */}
      <div className="home-section fade-in" id="about">
        <h2>About Me</h2>
        <p>
          I am <b>Kumar Sonu Nigam</b>, a Computer Science undergraduate with web development experience. 
          Skilled in creating efficient, user-friendly applications and committed to continuous technical growth.
        </p>
      </div>

      {/* Skills Section */}
      <div className="home-section fade-in" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag"> HTML</span> 
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">API Integration</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">UI/UX Design</span>

              <span className="skill-tag">Graphic Design</span>
              <span className="skill-tag">Video Editing</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Teamwork</span>
              <span className="skill-tag">Problem-solving</span>
              <span className="skill-tag">Leadership</span>
              <span className="skill-tag">Time Management</span>
              <span className="skill-tag">Adaptability</span>
              <span className="skill-tag">Creativity</span>
              <span className="skill-tag">Critical Thinking</span>
              <span className="skill-tag">Work Ethic</span>
              <span className="skill-tag">Interpersonal Skills</span>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="home-section fade-in" id="experience">
        <h2>Experience</h2>
        <div className="card slide-in">
          <h3>Web Developer Intern</h3>
          <span className="muted">Celebrino • Jul 2025 – Aug 2025 (On-site)</span>
          <ul className="experience-list">
            <li>Designed responsive UIs, integrated APIs, and implemented scalable database solutions.</li>
            <li>Delivered secure and robust digital products using modern web technologies.</li>
          </ul>
        </div>
        <div className="card slide-in">
          <h3>Web Developer Intern</h3>
          <span className="muted">Octanet Pvt Ltd • Jul 2024 – Aug 2024 (Remote)</span>
          <ul className="experience-list">
            <li>Developed responsive websites using modern web technologies.</li>
            <li>Improved accuracy and time management in project delivery.</li>
          </ul>
        </div>
        <div className="card slide-in">
          <h3>Campus Ambassador</h3>
          <span className="muted">Kuansacollege.com • Nov 2022 – Feb 2023 (Remote)</span>
          <ul className="experience-list">
            <li>Improved communication and outreach skills through campus engagement.</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="home-section fade-in" id="education">
        <h2>Education</h2>
        <div className="card">
          <h3>B.Tech in Computer Science & Engineering</h3>
          <span className="muted">Uttarakhand Technical University, Dehradun (2022 – 2026)</span>
          <p>Currently pursuing Bachelor of Technology in Computer Science</p>
        </div>
        <div className="card slide-in">
          <h3>Intermediate of Science</h3>
          <span className="muted">S.S. College Jehanabad (2019 – 2021)</span>
          <p>Completed Higher Secondary Education with 71% marks</p>
        </div>
        <div className="card slide-in">
          <h3>High School</h3>
          <span className="muted">High School Makhdumpur (2018 – 2019)</span>
          <p>Completed Secondary Education with 79% Marks</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="home-section fade-in" id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-img">
              <img src="/images/nigamvilla.png" alt="Nigam Villa" />
            </div>
            <div className="project-content">
              <h3>Nigam Villa</h3>
              <p>A real estate website for property listings and management.</p>
                <div>
                <button className="btn-primary"><a href="https://nigam-villa.vercel.app/" target="_blank" rel="noreferrer" >
                  Live Demo
                </a></button>
                <button className="btn-secondary"><a href="https://github.com/mrsonung/nigam_villa" target="_blank" rel="noreferrer" >
                  GitHub
                </a></button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img">
              <img src="/images/university.png" alt="University Project" />
            </div>
            <div className="project-content">
              <h3>University Project</h3>
              <p>A platform to manage & display university-related data.</p>
              <div >
                <button className="btn-primary"><a href="https://makefuture-com.vercel.app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a></button>
                <button className="btn-secondary"><a href="https://github.com/nigamsahab71/Makefuture.com" target="_blank" rel="noreferrer" >
                  GitHub
                </a></button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img">
              <img src="/images/recipe.png" alt="Recipe Finder" />
            </div>
            <div className="project-content">
              <h3>Recipe Finder</h3>
              <p>Web app to search and explore recipes using HTML, CSS, JS API.</p>
              <div>
                <button className="btn-primary"><a href="https://recipe-app-jade-alpha.vercel.app/" target="_blank" rel="noreferrer" >
                  Live Demo
                </a></button>
                <button className="btn-secondary"><a href="https://github.com/nigamsahab71/Recipe-App" target="_blank" rel="noreferrer">
                  GitHub
                </a></button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img">
              <img src="/images/weather.png" alt="Weather" />
            </div>
            <div className="project-content">
              <h3>Weather</h3>
              <p>Web app to search and explore Weather using HTML, CSS, JS.</p>
              <div>
                <button className="btn-primary"><a href="https://weather-alpha-kohl.vercel.app/" target="_blank" rel="noreferrer">
                  Live Demo
                </a></button>
                <button className="btn-secondary"><a href="https://github.com/mrsonung/Weather" target="_blank" rel="noreferrer">
                  GitHub
                </a></button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Contact Section */}
      <div className="home-section fade-in" id="contact">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <div className="contact-grid">
            <div className="card">
              <h3>📞 Phone</h3>
              <p>+91 72770 86852</p>
            </div>
            <div className="card">
              <h3>📧 Email</h3>
              <p>ksonunigam2004@gmail.com</p>
            </div>
            <div className="card">
              <h3>🔗 LinkedIn</h3>
              <a href="https://www.linkedin.com/in/kumar-sonu-nigam-8bb307250/" target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </div>
            <div className="card">
              <h3>💻 GitHub</h3>
              <a href="https://github.com/mrsonung" target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
            <div className="card">
              <h3>🌐 Instagram</h3>
              <a href="https://www.instagram.com/nigamsahab71/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
