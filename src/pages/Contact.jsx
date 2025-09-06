import React from "react";

export default function Contact() {
  return (
    <section className="page">
      <h2>Contact</h2>
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
            linkedin.com/in/kumar-sonu-nigam
          </a>
        </div>
        <div className="card">
          <h3>💻 GitHub</h3>
          <a href="https://github.com/nigamsahab71" target="_blank" rel="noreferrer">
            github.com/nigamsahab71
          </a>
        </div>
        <div className="card">
          <h3>🌐 Instagram</h3>
          <a href="https://www.instagram.com/nigamsahab71/" target="_blank" rel="noreferrer">
            instagram.com/nigamsahab71/
          </a>
        </div>
      </div>
    </section>
  );
}
