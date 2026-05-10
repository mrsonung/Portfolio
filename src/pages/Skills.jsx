import React from "react";
import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, 
  SiMongodb, SiFirebase, SiCloudinary, SiGit, SiGithub, 
  SiPostman, SiVercel, SiJsonwebtokens 
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "REST APIs", icon: SiJavascript, color: "#444" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000" },
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: SiFirebase.name, icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
      { name: SiCloudinary.name, icon: SiCloudinary, color: "#3448C5", label: "Cloudinary" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ]
  }
];

const allSkills = skillCategories.flatMap(cat => cat.skills);

export default function Skills() {
  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">Technical <span className="text-primary">Skills</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build high-performance web applications.
          </p>
        </div>

        {/* Infinite Marquee Animation */}
        <div className="relative mb-24 py-10 border-y border-white/5">
          <motion.div 
            className="flex gap-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div key={index} className="flex items-center gap-3 shrink-0 px-6 py-3 glass rounded-full">
                <skill.icon style={{ color: skill.color }} className="text-2xl" />
                <span className="font-medium text-white">{skill.label || skill.name}</span>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark to-transparent z-10"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl"
            >
              <h3 className="text-xl font-space font-bold text-white mb-6 border-b border-white/10 pb-2">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:scale-110 transition-transform">
                          <skill.icon style={{ color: skill.color }} />
                        </div>
                        <span className="text-gray-400 group-hover:text-white transition-colors">
                          {skill.label || skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">Mastered</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${80 + Math.random() * 15}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
