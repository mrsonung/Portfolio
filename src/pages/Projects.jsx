import React from "react";
import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Eventra",
    description: "AI-powered smart event management platform featuring QR verification, face recognition attendance, and a comprehensive admin dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "Face API"],
    live: "https://eventra-jet.vercel.app/",
    github: "https://github.com/mrsonung/eventra",
    image: "/images/eventra.png",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    title: "EduBridge",
    description: "Educational platform connecting students and teachers with modern UI, secure authentication, and resource sharing capabilities.",
    tech: ["React.js", "Firebase", "Node.js", "Tailwind CSS"],
    live: "https://edubridge-ruby.vercel.app/",
    github: "https://github.com/mrsonung/edubridge",
    image: "/images/edubridge.png",
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    title: "BullGains",
    description: "Professional business and investment platform with a highly responsive UI, optimized for performance and conversion.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
    live: "https://bullgains.in",
    github: "https://github.com/mrsonung/bullgains",
    image: "/images/bullgains.png",
    color: "from-green-600 to-emerald-500"
  }
];

export default function Projects() {
  return (
    <div className="pt-24 pb-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">Featured <span className="text-primary">Projects</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, ranging from complex AI-driven platforms to sleek business websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full"
            >
              {/* Project Image Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity z-10`}></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/030712/light?text=${project.title}`;
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-space font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-medium text-primary border border-white/5 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary to-secondary rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
