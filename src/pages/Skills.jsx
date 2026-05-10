import React from "react";
import Section from "../components/ui/Section";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
  SiFigma,
  SiCanva,
  SiPython
} from "react-icons/si";

import {
  FaCss3Alt,
  FaComments,
  FaUsers
} from "react-icons/fa";

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
      { name: "Python", icon: SiPython, color: "#3776AB" }
    ]
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "REST APIs", icon: SiJavascript, color: "#facc15" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#ff6b6b" }
    ]
  },

  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" }
    ]
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Google OAuth", icon: SiFirebase, color: "#4285F4" }
    ]
  },

  {
    title: "Designing Skills",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#A259FF" },
      { name: "Canva", icon: SiCanva, color: "#00C4CC" }
    ]
  },

  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: FaComments, color: "#38BDF8" },
      { name: "Leadership", icon: FaUsers, color: "#A855F7" },
      { name: "Teamwork", icon: FaUsers, color: "#14B8A6" }
    ]
  }
];

const allSkills = skillCategories.flatMap((cat) => cat.skills);

export default function Skills() {
  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <Section>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build
            scalable, responsive, and high-performance web applications.
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative mb-24 py-10 border-y border-white/5 overflow-hidden">
          <motion.div
            className="flex gap-12 items-center w-max"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 shrink-0 px-6 py-3 glass rounded-full border border-white/10 hover:border-primary/40 transition-all"
              >
                <skill.icon
                  style={{ color: skill.color }}
                  className="text-2xl"
                />

                <span className="font-medium text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark to-transparent z-10"></div>

          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark to-transparent z-10"></div>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-space font-bold text-white mb-8 border-b border-white/10 pb-3">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <skill.icon
                            style={{ color: skill.color }}
                            className="text-lg"
                          />
                        </div>

                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Advanced
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${80 + Math.random() * 15}%`
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + sIdx * 0.1
                        }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
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