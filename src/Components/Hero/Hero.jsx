// // // import React from 'react'
// // import Typewriter from "typewriter-effect";
// // import myPic from "../../assets/mypic.png";

// // export default function Hero() {
// //   return (
// //     <section id="home" className="min-h-screen flex items-center justify-center px-6 py-8 bg-black text-white relative overflow-hidden">
// //       {/* Background Effects */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
// //         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
// //       </div>

// //       <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
// //         {/* Profile Image */}
// //         <div className="relative inline-block">
// //           <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl mx-auto">
// //             <img 
// //               src={myPic} 
// //               alt="Mukul Porwal"
// //               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out hover:border-1 border-blue-500"
// //             />
// //           </div>
// //           <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-orange-500/20 blur-xl"></div>
// //         </div>

// //         {/* Name & Title */}
// //         <div className="space-y-3">
// //             <h1 className="my-3 max-w-lg text-[35px]  text-white " style={{ fontWeight: 200 }}>
// //                 Hi, I’m Mukul Porwal <br />
// //                 <span className="text-[#FFD600] text-[30px]">
// //                     <Typewriter
// //                     options={{
// //                         strings: ["Web Designer", "Web Developer", "Full Stack Developer"],
// //                         autoStart: true,
// //                         loop: true,
// //                         delay: 75,
// //                         deleteSpeed: 100,
// //                     }}
// //                     />
// //                 </span>
// //             </h1>
// //         </div>

// //         {/* CTA Buttons */}
// //         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
// //           <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-orange-500 font-light rounded-full cursor-pointer 
// //            hover:shadow-lg hover: transition-all duration-300 hover:scale-105">
// //             <a href="#contact"
// //               onClick={(e) => handleScroll(e, "contact")}>Connect with me</a>
// //           </button>
// //           <button className="px-8 py-3 border-2 border-white rounded-full font-light cursor-pointer hover:border-blue-500 transition-all duration-300">
// //             <a href="https://drive.google.com/file/d/1g-9xZBX4G6ig4gAk9Z3wYd2e-iC2fABE/view?usp=drive_link" target="_blank" rel="noopener noreferrer">My Resume</a>
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React from 'react';
// import Typewriter from "typewriter-effect";
// import myPic from "../../assets/mypic.png";

// export default function Hero() {
//   const handleScroll = (e, id) => {
//     e.preventDefault();
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white relative overflow-hidden">
//       {/* Background geometric shapes */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Dark circle */}
//         <div className="absolute top-1/2 left-1/3 bg-gray-800/20 rounded-full -translate-y-1/2"
//           style={{ width: '300px', height: '300px' }}></div>
//         {/* Yellow glow */}
//         <div className="absolute top-1/4 right-1/6 bg-[#D4FF00] opacity-20 rounded-full blur-3xl"
//           style={{ width: '400px', height: '400px' }}></div>
//       </div>

//       <div className="w-full relative z-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '60px' }}>
          
//           {/* Left side - Text content */}
//           <div className="text-left order-2 lg:order-1" style={{ paddingRight: '20px' }}>
//             <div style={{ marginBottom: '24px' }}>
//               <p className="text-gray-400 font-light" style={{ fontSize: '25px', marginBottom: '12px' }}>
//                 Hello, I'm
//               </p>
              
//               {/* Name */}
//               <h1 className="font-bold leading-tight" style={{ fontSize: '50px', marginBottom: '12px' }}>
//                 <span className="text-[#D4FF00]">Mukul Porwal</span>
//               </h1>
              
//               {/* Typewriter */}
//               <div className="font-light text-white" style={{ fontSize: '30px', height: '40px' }}>
//                 <Typewriter
//                   options={{
//                     strings: ["Full Stack Developer", "MERN Stack Developer", "Web designer", "Web developer"],
//                     autoStart: true,
//                     loop: true,
//                     delay: 75,
//                     deleteSpeed: 100,
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Subtitle text */}
//             <p className="text-gray-400 font-light leading-relaxed" 
//               style={{ fontSize: '16px', maxWidth: '450px', marginBottom: '32px' }}>
//               We denounce with righteous indignation dislike demoralized by the charms of pleasure
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row" style={{ gap: '24px' }}>
//               <button 
//                 onClick={(e) => handleScroll(e, "contact")}
//                 className="bg-[#D4FF00] text-black font-semibold rounded-md
//                   hover:bg-[#c4ef00] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4FF00]/50
//                   flex items-center justify-center"
//                 style={{ padding: '16px 32px', fontSize: '16px', gap: '8px' }}>
//                 Hire Me <span>→</span>
//               </button>
//               <button className="text-white font-light hover:text-[#D4FF00] transition-all duration-300
//                 flex items-center justify-center group"
//                 style={{ padding: '16px 32px', fontSize: '16px', gap: '8px' }}>
//                 <span className="border-b-2 border-transparent group-hover:border-[#D4FF00] transition-all duration-300">
//                   Download Resume
//                 </span>
//                 <span>→</span>
//               </button>
//             </div>
//           </div>

//           {/* Right side - Image */}
//           <div className="relative flex justify-center lg:justify-center order-1 lg:order-2">
//             <div className="relative" style={{ width: '240px', height: '240px' }}>
              
//               {/* Yellow ring outline */}
//               <div className="absolute inset-0 rounded-full border-[#D4FF00]" 
//                 style={{ borderWidth: '8px' }}></div>
              
//               {/* Black circle background */}
//               <div className="absolute bg-black rounded-full" 
//                 style={{ 
//                   width: '220px', 
//                   height: '220px',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)'
//                 }}></div>
              
//               {/* Profile Image - smaller and positioned to overlap */}
//               <div className="absolute rounded-full overflow-hidden bg-white shadow-2xl"
//                 style={{
//                   width: '210px',
//                   height: '210px',
//                   top: '20px',
//                   right: '15px'
//                 }}>
//                 <img 
//                   src={myPic} 
//                   alt="Mukul Porwal"
//                   className="w-full h-full object-cover object-center"
//                   style={{ transform: 'scale(1.1)' }}
//                 />
//               </div>

//               {/* Subtle glow effect behind image */}
//               <div className="absolute rounded-full bg-[#D4FF00] opacity-20 blur-2xl"
//                 style={{
//                   width: '200px',
//                   height: '200px',
//                   top: '50px',
//                   right: '20px'
//                 }}></div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import Typewriter from "typewriter-effect";
import hero_skill from "../../assets/hero_skill.png";

export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="mt-14 flex items-center justify-center px-6 py-22 bg-white text-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left side - Text content */}
          <div className="text-left order-2 lg:order-1 space-y-4">
            <div className="space-y-6">
              {/* Greeting badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-5 py-3">
                <span className="text-lg font-light text-purple-800">👋 Welcome</span>
              </div>
              
              <p className="text-gray-600 font-light text-xl">
                Hello, I'm
              </p>
              
              {/* Name with gradient */}
              <h1 className="text-5xl sm:text-6xl font-normal leading-tight bg-gradient-to-r from-yellow-600 via-purple-600 to-blue-600 bg-clip-text  text-transparent">
                Mukul Porwal
              </h1>
              
              {/* Typewriter with highlight */}
              <div className="text-2xl sm:text-3xl font-light h-8">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text ">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer", 
                        "MERN Stack Developer", 
                        "Web Desginer",
                        "Web Developer"
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 100,
                    }}
                  />
                </span>
              </div>
            </div>

            {/* Subtitle text */}
            <p className="text-black-600 font-medium text-base sm:text-xl leading-relaxed max-w-lg">
              Crafting beautiful, functional, and user-centric digital experiences with modern web technologies.
            </p>

            {/* Stats */}
            {/* <div className="flex gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-600">Dedication</div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={(e) => handleScroll(e, "contact")}
                className="px-8 py-2 bg-[linear-gradient(260deg,_#FFD54F_0.36%,_#BA68C8_100%)] text-white font-light rounded-lg
                  hover:shadow-2xl  transition-all duration-300 hover:scale-105
                  flex items-center justify-center gap-2 group text-xl cursor-pointer">
                <span>Hire Me</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <a href="https://drive.google.com/file/d/1Yp7bPdLGuxbiVTdZLn32X6QGKm7N00-T/view?usp=sharing">
              <button 
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-light rounded-lg
                  hover:bg-purple-600 hover:text-white transition-all duration-300
                  flex items-center justify-center gap-2 group text-xl cursor-pointer">
                <span>Download CV</span>
                <span className="group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
              </button>
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative flex justify-center lg:justify-center order-1 lg:order-2">
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
              
              {/* Animated gradient ring */}
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 animate-spin-slow "> */}
                {/* <div className="w-full h-full rounded-full bg-white"></div> */}
              {/* </div> */}
              
              {/* Inner decorative circles */}
              { /* <div className="absolute w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-60 top-5 left-5 animate-float"></div> */}
              
              { /* <div className="absolute w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60 bottom-10 left-8 animate-float-delayed"></div> */}
              
              {/* Profile Image */}
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl ring-8 ring-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img 
                  src={hero_skill} 
                  alt="Mukul Porwal"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating tech icons/badges */}
              <div className="absolute top-20 right-8 bg-white rounded-lg shadow-lg px-3 py-2 animate-float">
                <span className="text-lg font-light text-purple-600">MongoDB</span>
              </div>

              <div className="absolute top-15 left-9 bg-white rounded-lg shadow-lg px-3 py-2 animate-float">
                <span className="text-lg font-light text-yellow-800">NodeJs</span>
              </div>
              
              <div className="absolute bottom-16 right-7 bg-white rounded-lg shadow-lg px-3 py-2 animate-float-delayed">
                <span className="text-lg font-light text-blue-600">Node.js</span>
              </div>
              
              <div className="absolute bottom-24 left-8 bg-white rounded-lg shadow-lg px-3 py-2 animate-float">
                <span className="text-lg font-light text-green-600">Vite</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}