import React from 'react';
import projectsData from "../../Data/projectsData.js";

export default function Projects() {
  return (
    <section id="projects" className="flex items-center justify-center px-6 py-20 bg-white text-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto relative z-10 ">
        <p className="text-gray-600 font-light text-xl  mb-12">See My Work</p>
        <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-12">
            {projectsData.map((project, index) => (
              <div className="relative w-[320px] h-[320px] sm:w-[280px] sm:h-[280px]" key={index}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[320px] h-[320px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden shadow-2xl">
                    <img src={project.image} alt={project.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 "
                    />
                  </div>
                  <div className="absolute bottom-10 -left-8 bg-white  rounded-full px-4 py-2 flex items-center gap-3 shadow-xl border-gray-100">
                    <span className="font-medium text-lg text-black whitespace-nowrap">{project.name}</span>
                    <span className="text-black text-lg">↗</span>
                  </div>
                </a>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* <div className="relative flex justify-center lg:justify-center"> */}
            {/* Photo */}
            {/* <div className="relative w-[320px] h-[320px] sm:w-[280px] sm:h-[280px]"> */}

              {/* Photo container matching Hero's circular style */}
              {/* <div className="relative w-[320px] h-[320px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden shadow-2xl">
                <img
                  src={myPic}
                  alt="Mukul Porwal"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 "
                />
              </div> */}


              {/* Badge — Experience Designer */}
              {/* <div className="absolute top-8 -left-6 bg-white text-black rounded-full px-4 py-2 flex items-center gap-3 shadow-xl border border-gray-100">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-yellow-400 flex-shrink-0" />
                <span className="font-semibold text-sm whitespace-nowrap">Experience Designer</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div> */}

              {/* Badge — Name card */}
              {/* <div className="absolute bottom-10 -left-8 bg-white  rounded-full px-4 py-2 flex items-center gap-3 shadow-xl border-gray-100">
                <span className="font-medium text-lg text-black whitespace-nowrap">Mukul Porwal</span>
                <span className="text-black-400 text-lg">↗</span>
              </div>

            </div>
          </div> */}