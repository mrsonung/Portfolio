import React from "react";
import Section from "../components/ui/Section";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Eventra",
    description: "AI-powered smart event management platform featuring QR verification, face recognition attendance, ticket booking, authentication, admin dashboard, and real-time event management.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Tailwind CSS"
    ],
    live: "https://eventra-jet.vercel.app/",
    github: "https://github.com/mrsonung/eventra",
    image: "/images/eventra.png",
    color: "from-purple-600 to-pink-500"
  },

  {
    id: 2,
    title: "EduBridge",
    description: "Modern educational platform connecting students and teachers with authentication, responsive UI, dashboard features, and seamless user experience.",
    tech: [
      "React.js",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript"
    ],
    live: "https://edubridge-ruby.vercel.app/",
    github: "https://github.com/mrsonung/edubridge",
    image: "/images/edubridge.png",
    color: "from-blue-600 to-cyan-500"
  },

  {
    id: 3,
    title: "BullGains",
    description: "Professional business and investment platform with a highly responsive UI, optimized for performance and conversion.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion"
    ],
    live: "https://bullgains.in",
    github: "https://github.com/mrsonung/bullgains",
    image: "/images/bullgains.png",
    color: "from-green-600 to-emerald-500"
  },

  {
   id: 4,
    title: "Portfolio Website",
    description: "Personal developer portfolio featuring animated UI, responsive layouts, project showcases, smooth transitions, and modern web design.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript"
    ],
    live: "",
    github: "https://github.com/mrsonung/portfolio",
    image: "/images/portfolio.png",
    color: "from-cyan-500 to-teal-500"
  },

  {
     id: 5,
    title: "NigamVilla",
    description: "Modern real estate and property showcase platform with responsive UI, premium design aesthetics, smooth navigation, and optimized user experience.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
      "Responsive Design"
    ],
    live: "",
    github: "https://github.com/mrsonung/nigamvilla",
    image: "/images/nigamvilla.png",
    color: "from-amber-500 to-orange-600"
  },

  {
    id: 6,
    title: "Recipe Finder",
    description: "Interactive recipe search platform allowing users to explore recipes dynamically using external APIs and modern UI design.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "API Integration"
    ],
    live: "",
    github: "https://github.com/mrsonung/recipe-finder",
    image: "/images/recipe.png",
    color: "from-yellow-500 to-orange-500"
  },

  {
    id: 7,
    title: "University Project",
    description: "Comprehensive university management platform designed to manage students, faculty, courses, attendance, results, and administrative operations through a centralized dashboard.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    live: "",
    github: "https://github.com/mrsonung/University-Project",
    image: "/images/university.png",
    color: "from-indigo-500 to-purple-500"
  },

  {
    id: 8,
    title: "Password Generator",
    description: "Secure and responsive password generator application that creates strong random passwords with customizable length, symbols, numbers, and copy-to-clipboard functionality.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Storage"
    ],
    live: "",
    github: "https://github.com/mrsonung/PassGenerator",
    image: "/images/pass.png",
    color: "from-rose-500 to-pink-500"
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
