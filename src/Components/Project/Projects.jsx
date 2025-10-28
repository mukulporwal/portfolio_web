import React from 'react';
import projectsData from "../../Data/projectsData.js";

export default function Projects() {
  return (
    <section id="projects" className="py-22 px-6 bg-black text-white">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="container mx-auto max-w-4xl flex flex-wrap items-center justify-around gap-8">
          {projectsData.map((project, index) => (
            <div
              className="w-80 h-51 rounded-xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-blue-500 border-white border-1 overflow-hidden"
              key={index}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-80">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-md w-80  object-cover "
                  />
                </div>
                <div className="backdrop-blur-sm bg-white/30 py-3 px-3 relative -top-[10.8rem] rounded-b-xl z-10">
                  <h1 className="font-light text-center text-2xl text-blue-800">{project.name}</h1>
                </div>
              </a>
            </div>
          ))}
        </div>
    </section>
  );
}