import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "University Project",
      desc: "A platform to manage & display university-related data.",
      img: "/images/university.png",
      demo: "https://makefuture-com.vercel.app/",
      code: "https://github.com/nigamsahab71/Makefuture.com"
    },
    {
      title: "Recipe Finder",
      desc: "Web app to search and explore recipes using HTML, CSS, JS.",
      img: "/images/recipe.png",
      demo: "https://recipe-app-jade-alpha.vercel.app/",
      code: "https://github.com/nigamsahab71/Recipe-App"
    },
    {
      title: "Weather App",
      desc: "Real-time weather updates with API integration.",
      img: "/images/weather.png",
      demo: "https://weather-alpha-kohl.vercel.app/",
      code: "https://github.com/mrsonung/Weather"
    },
    
    {
      title: "Stone Paper Scissor Game",
      desc: "Interactive game with score tracking.",
      img: "/images/sps.png",
      demo: "https://stone-paper-scissors-eight-flame.vercel.app/",
      code: "https://github.com/mrsonung/Stone-paper-scissors"
    },
    {
      title: "Pass Generator",
      desc: "Generate secure passwords with customizable options.",
      img: "/images/pass.png",
      demo: "https://pass-generator-gray.vercel.app/",
      code: "https://github.com/mrsonung/PassGenerator"
    },
    {
      title: "Amazon-Clone",
      desc: "Full-stack Amazon clone with basic UI/UX.",
      img: "/images/amazon.png",
      demo: "https://amazon-clone-vz41.vercel.app/",
      code: "https://github.com/mrsonung/Amazon_Clone"
    },

  ];

  return (
    <section className="page">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                  Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
