// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-name">Kumar Sonu Nigam</h3>
          <p className="footer-title">I’m Kumar Sonu Nigam — a Computer Science student and web developer dedicated to building impactful digital solutions.</p>
        </div>
        
        <div className="footer-center">
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Connect With Me</h4>
            <div className="social-container">
              <a href="https://github.com/mrsonung" target="_blank" rel="noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kumar-sonu-nigam-8bb307250/" target="_blank" rel="noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/nigamsahab71/" target="_blank" rel="noreferrer" className="social-link">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© {new Date().getFullYear()} Kumar Sonu Nigam. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;