import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import homepic from "../assets/3.jpg";
import Section from "../components/ui/Section";
import Magnetic from "../components/ui/Magnetic";

const roles = ["UI Developer Trainee @ Chetu Inc", "Frontend Developer", "MERN Stack Engineer"];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.slice(0, roleText.length + 1));
        if (roleText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setRoleText(currentRole.slice(0, roleText.length - 1));
        if (roleText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
        <div className="flex-1 space-y-6 order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-4 py-2 rounded-full glass text-primary text-sm font-medium">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-space font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Frontend <br />
            <span className="text-primary">Engineer</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-400 font-outfit h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {roleText}<span className="animate-pulse text-primary">|</span>
          </motion.div>

          <motion.p
            className="text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building real-world scalable applications with the MERN stack. 
            Focused on creating seamless user experiences and robust backend systems.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Magnetic>
              <Link to="/contact" className="btn-primary">
                Hire Me <HiArrowRight />
              </Link>
            </Magnetic>
            <Magnetic>
              <a href="/kumar_sonu_nigam_resume.pdf" download className="btn-secondary">
                Resume <FaDownload size={14} />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start gap-6 pt-8 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://github.com/mrsonung" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kumar-sonu-nigam-8bb307250/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/nigamsahab71/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
              <FaInstagram />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative rounded-full border-2 border-white/10 p-4 group-hover:border-primary/50 transition-colors">
              <img
                src={homepic}
                alt="Kumar Sonu Nigam"
                className="w-full h-full object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-100"
              />
            </div>
            
            {/* Floating Tech Icons */}
 <motion.div
          className="absolute top-[20px] left-[40px] w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-lg"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className="w-9 h-9"
            alt="HTML"
          />
        </motion.div>

        {/* React */}
        <motion.div
          className="absolute top-[10px] right-[70px] w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="w-9 h-9"
            alt="React"
          />
        </motion.div>

        {/* Figma */}
        <motion.div
          className="absolute top-[120px] right-[-10px] w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            className="w-9 h-9"
            alt="Figma"
          />
        </motion.div>

        {/* GitHub */}
        <motion.div
          className="absolute top-[170px] right-[-35px] w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-lg"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className="w-9 h-9 invert"
            alt="GitHub"
          />
        </motion.div>

        {/* CSS */}
        <motion.div
          className="absolute bottom-[40px] right-[40px] w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-lg"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            className="w-9 h-9"
            alt="CSS"
          />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          className="absolute bottom-[20px] left-[80px] w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            className="w-9 h-9"
            alt="MongoDB"
          />
        </motion.div>

        {/* Git */}
        <motion.div
          className="absolute bottom-[140px] left-[-20px] w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-lg"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            className="w-9 h-9"
            alt="Git"
          />
        </motion.div>

        {/* C */}
        <motion.div
          className="absolute top-[170px] left-[-25px] w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-lg"
          animate={{ x: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            className="w-9 h-9"
            alt="C"
          />
        </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Quick About Summary */}
      <Section className="bg-white/[0.02]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-6">
              Engineering <span className="text-primary">Digital Solutions</span> with Passion
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              As a Computer Science student at Uttarakhand Technical University and currently a <span className="text-white">UI Developer Trainee at Chetu Inc, Noida</span>, I've dedicated myself to mastering the modern web ecosystem. I specialize in building end-to-end applications that provide a premium user experience.
            </p>
            <Link to="/about" className="text-primary font-medium flex items-center gap-2 group">
              Learn more about my journey 
              <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-3xl font-space font-bold text-primary mb-2">3+</h3>
              <p className="text-sm text-gray-400">Years Learning</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-3xl font-space font-bold text-secondary mb-2">10+</h3>
              <p className="text-sm text-gray-400">Projects Built</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-3xl font-space font-bold text-primary mb-2">Freelance</h3>
              <p className="text-sm text-gray-400">Developer</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-3xl font-space font-bold text-secondary mb-2">MERN</h3>
              <p className="text-sm text-gray-400">Specialist</p>
            </div>
          </div>
        </div>
      </Section>
      {/* Testimonials Section Placeholder */}
      <Section className="bg-dark">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-4">Client <span className="text-primary">Feedback</span></h2>
          <p className="text-gray-400">What people say about working with me.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ashish Kumar",
              role: "E-commerce Manager",
              text: "Sonu's ability to take our vision and turn it into a high-performing React application was outstanding. The attention to detail in the UI is exactly what we were looking for."
            },
            {
              name: "Navlesh Kumar",
              role: "Bullgains Founder",
              text: "Incredibly fast turnaround and excellent communication. He didn't just build what we asked; he suggested improvements that made the user experience much better."
            },
            {
              name: "Ayush Sharma",
              role: "Technical Lead",
              text: "A truly talented MERN developer. The code is clean, well-structured, and the animations add that premium feel our clients love. Highly recommended for any serious web project."
            }
          ].map((testimonial, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl relative">
              <div className="absolute top-6 right-8 text-6xl text-white/5 font-serif">"</div>
              <p className="text-gray-400 mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

