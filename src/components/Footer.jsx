import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-space font-bold tracking-tighter text-white mb-4 block">
            KSN<span className="text-primary">.</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-6">
            Building real-world scalable applications with modern technologies. 
            Focused on performance, UI/UX, and clean code.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/mrsonung" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kumar-sonu-nigam-8bb307250/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/nigamsahab71/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/experience" className="hover:text-primary transition-colors">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li>ksonunigam2004@gmail.com</li>
            <li>+91 72770 86852</li>
            <li>Noida, India</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Kumar Sonu Nigam. All rights reserved.</p>
      </div>
    </footer>
  );
}
