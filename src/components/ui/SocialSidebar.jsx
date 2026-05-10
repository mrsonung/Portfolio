import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-white/10"
    >
      <a href="https://github.com/mrsonung" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1">
        <FaGithub size={22} />
      </a>
      <a href="https://www.linkedin.com/in/kumar-sonu-nigam-8bb307250/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1">
        <FaLinkedin size={22} />
      </a>
      <a href="https://www.instagram.com/nigamsahab71/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1">
        <FaInstagram size={22} />
      </a>
      <div className="h-24 w-px bg-white/10 mt-2"></div>
    </motion.div>
  );
}
