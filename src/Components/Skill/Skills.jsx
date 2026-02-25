// import React from "react";
// import skillsData from "../../Data/skillsData.js";

// export default function Skills() {
//   return (
//     <section id="skills" className="py-22 px-6 bg-black text-white">
//         <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
//             <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Skills</span>
//         </h2>
//         <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-around  gap-10">
//           {skillsData.map((skill, index) => (
//             <div className="w-40 h-28 rounded-xl hover:scale-105 transition-transform duration-300 hover:border-white border-1 " key={index}>
//               <img
//                 src={skill.image}
//                 alt={skill.name}
//                 className="rounded-md w-60  object-cover "
//               />
//               <div className="backdrop-blur-sm bg-white/40 py-3 px-3 relative -top-[3.4rem] rounded-b-xl z-10">
//                 <h1 className="font-light  text-center text-xl text-black">{skill.name}</h1>
//               </div>
//             </div>
//           ))}
//         </div>
//     </section>
//   );
// }

// export default function Skills() {
//   const skills = [
//     { name: "Python", icon: "🐍", level: "90%" },
//     { name: "Django", icon: "🌿", level: "85%" },
//     { name: "JavaScript", icon: "🟨", level: "80%" },
//     { name: "React", icon: "⚛️", level: "78%" },
//     { name: "HTML/CSS", icon: "🎨", level: "95%" },
//     { name: "MySQL", icon: "🗄️", level: "75%" },
//     { name: "Node.js", icon: "🟩", level: "70%" },
//     { name: "Git", icon: "🔧", level: "85%" },
//   ];

//   return (
//     <section id="skills" className="flex items-center justify-center px-6 py-22 bg-white text-black">
//       <div className="w-full max-w-7xl mx-auto">
//         {/* Heading */}
//         <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">What I Know</p>
//         <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
//           My <span className="text-[#b5f23d]">Skills</span>
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="bg-[#1e1e1e] rounded-2xl p-5 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
//             >
//               {/* Icon */}
//               <div className="text-5xl">{skill.icon}</div>

//               {/* Name */}
//               <span className="text-white font-semibold text-base">{skill.name}</span>

//               {/* Level badge */}
//               <div className="w-full bg-[#2a2a2a] rounded-xl py-2 text-center">
//                 <span className="text-gray-400 font-medium text-sm">{skill.level}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Skills() {
//   const skills = [
//     { name: "Python", icon: "🐍", level: "90%" },
//     { name: "Django", icon: "🌿", level: "85%" },
//     { name: "JavaScript", icon: "🟨", level: "80%" },
//     { name: "React", icon: "⚛️", level: "78%" },
//     { name: "HTML/CSS", icon: "🎨", level: "95%" },
//     { name: "MySQL", icon: "🗄️", level: "75%" },
//     { name: "Node.js", icon: "🟩", level: "70%" },
//     { name: "Git", icon: "🔧", level: "85%" },
//   ];

//   return (
//     <section id="skills" className="flex items-center justify-center px-6 py-22 bg-white text-black">
//       <div className="w-full max-w-7xl mx-auto">
//         {/* Heading */}
//         <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">What I Know</p>
//         <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
//           My <span className="text-[#b5f23d]">Skills</span>
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-3">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="border border-gray-300  rounded-2xl p-4 flex flex-col gap-4 hover:scale-105 transition-transform duration-300 hover:border-gray-800"
//             >
//               {/* Top row: icon left, name right */}
//               <div className="flex items-center gap-4">
//                 <div className="text-4xl flex-shrink-0">{skill.icon}</div>
//                 <span className="text-black font-semibold text-base">{skill.name}</span>
//               </div>

//               {/* Level badge */}
//               {/* <div className="w-full bg-[#2a2a2a] rounded-xl py-2 text-center">
//                 <span className="text-gray-400 font-medium text-sm">{skill.level}</span>
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
import skillsData from "../../Data/skillsData.js";

export default function Skills() {
  return (
    <section id="skills" className="flex items-center justify-center px-6 py-22 bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto relative z-10 ">
        {/* Heading */}
        <p className="text-gray-600 font-light text-xl  mb-12">What I Know</p>
        {/* <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          My <span className="text-[#b5f23d]">Skills</span>
        </h2> */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-3 leading-tight">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="border border-gray-300 rounded-2xl p-4 flex flex-col gap-4 hover:scale-105  transition-transform duration-300 hover:border-gray-800"
            >
              {/* Image left, name right */}
              <div className="flex items-center gap-4 ">
                <img 
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 object-contain flex-shrink-0 "
                />
                <span className="text-black font-light text-lg">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
           