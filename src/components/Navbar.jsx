import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      {/* Brand name redirects to Home */}
      <Link to="/" className="brand">
        Kumar Sonu Nigam
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button 
        className="hamburger-menu" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navigation Links */}
      <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
        <Link to="/experience" onClick={() => setIsMenuOpen(false)}>Experience</Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <a href="/kumar_sonu_nigam_resume.pdf" download className="btn-secondary" onClick={() => setIsMenuOpen(false)}>
          Resume
        </a>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}