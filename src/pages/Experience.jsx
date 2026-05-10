import React from "react";
import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";

const experience = [
  {
    title: "UI Developer Trainee",
    company: "Chetu Inc, Noida",
    period: "Jan 2026 - Present",
    description: "Working as a UI Developer Trainee, focusing on modern front-end technologies, responsive design, and pixel-perfect UI implementation for enterprise-level applications.",
    type: "work"
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2024 - Present",
    description: "Building scalable web applications for diverse clients. Specializing in MERN stack integrations, secure authentication systems, and responsive UI/UX development.",
    type: "work"
  },
  {
    title: "Web Developer Intern",
    company: "Celebrino",
    period: "Jul 2025 - Aug 2025",
    description: "Designed responsive UIs, integrated complex APIs, and implemented scalable database solutions for production-grade applications.",
    type: "work"
  },
  {
    title: "Web Developer Intern",
    company: "Octanet Pvt Ltd",
    period: "Jul 2024 - Aug 2024",
    description: "Developed and maintained responsive websites, improving project delivery times and code accuracy.",
    type: "work"
  }
];

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Uttarakhand Technical University",
    period: "2022 - 2026",
    description: "Currently pursuing a Bachelor's degree with a focus on software engineering, data structures, and web technologies.",
    type: "edu"
  },
  {
    title: "Intermediate of Science",
    institution: "S.S. College Jehanabad",
    period: "2019 - 2021",
    description: "Completed higher secondary education with a strong focus on Mathematics and Physics.",
    type: "edu"
  }
];

export default function Experience() {
  return (
    <div className="pt-24 pb-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">My <span className="text-primary">Journey</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional experience and academic background.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-20">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                <HiBriefcase size={24} />
              </div>
              <h2 className="text-3xl font-space font-bold text-white">Work Experience</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[23px] before:top-0 before:bottom-0 before:w-px before:bg-white/10">
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="pl-16 relative"
                >
                  <div className="absolute left-[18px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="text-primary text-sm font-semibold mb-2 block">{item.period}</span>
                    <h3 className="text-xl font-space font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-secondary font-medium mb-4">{item.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-secondary shadow-lg shadow-secondary/10">
                <HiAcademicCap size={24} />
              </div>
              <h2 className="text-3xl font-space font-bold text-white">Education</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[23px] before:top-0 before:bottom-0 before:w-px before:bg-white/10">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="pl-16 relative"
                >
                  <div className="absolute left-[18px] top-2 w-3 h-3 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="text-secondary text-sm font-semibold mb-2 block">{item.period}</span>
                    <h3 className="text-xl font-space font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-4">{item.institution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
