// import React from "react";
import skillsData from "../../Data/skillsData.js";

export default function Skills() {
  return (
    <section id="skills" className="py-22 px-6 bg-black text-white">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-around  gap-10">
          {skillsData.map((skill, index) => (
            <div className="w-40 h-28 rounded-xl hover:scale-105 transition-transform duration-300 hover:border-white border-1 " key={index}>
              <img
                src={skill.image}
                alt={skill.name}
                className="rounded-md w-60  object-cover "
              />
              <div className="backdrop-blur-sm bg-white/40 py-3 px-3 relative -top-[3.4rem] rounded-b-xl z-10">
                <h1 className="font-light  text-center text-xl text-black">{skill.name}</h1>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

           