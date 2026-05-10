import React from "react";
import Section from "../components/ui/Section";
import { HiLightningBolt } from "react-icons/hi";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-primary mb-4">
            <HiLightningBolt />
            <span className="uppercase tracking-widest text-sm font-semibold">About Me</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-8">
            Turning <span className="text-primary">Vision</span> into Reality with Code.
          </h1>
          
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
            <p>
              I am <span className="text-white font-semibold">Kumar Sonu Nigam</span>, a B.Tech Computer Science & Engineering student at Uttarakhand Technical University (Batch 2022-2026). My journey in technology is driven by a deep-seated passion for solving complex problems through elegant code.
            </p>
            
            <p>
              With expertise in the <span className="text-primary font-semibold">MERN Stack</span>, I focus on building real-world scalable applications. From architecting robust backend systems with Node.js and MongoDB to crafting pixel-perfect, responsive user interfaces with React and Tailwind CSS, I enjoy every aspect of the development lifecycle.
            </p>

            <div className="glass-card p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-space font-bold text-white">What I Bring to the Table</h3>
              <ul className="grid md:grid-cols-2 gap-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Problem Solving</h4>
                    <p className="text-sm">Breaking down complex challenges into manageable, efficient solutions.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Full Stack Development</h4>
                    <p className="text-sm">End-to-end application development using modern technologies.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Scalable Architecture</h4>
                    <p className="text-sm">Designing systems that grow seamlessly with user demand.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Modern UI/UX</h4>
                    <p className="text-sm">Creating engaging and intuitive user experiences.</p>
                  </div>
                </li>
              </ul>
            </div>

            <p>
              Currently, I am working as a <span className="text-white font-semibold">UI Developer Trainee</span> at <span className="text-primary font-semibold">Chetu Inc, Noida</span> (since Jan 2026), while also continuing my journey as a Freelance Full Stack Developer. I am always looking for opportunities to collaborate on innovative projects and contribute to the developer community.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
