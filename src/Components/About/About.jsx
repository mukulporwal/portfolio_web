// import React from "react";
// import myPic from "../../assets/mypic.png";

// export default function About() {
//   return (
//     <section id="about" className="py-22 px-6 bg-black text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
//           <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">About Me</span>
//         </h2>
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="space-y-6 flex items-center">
//             <div className="space-y-4 text-gray-300 text-justify leading-relaxed ">
//               <p>
//                 I'm Mukul Porwal, a passionate Python Full Stack Developer from Baran, Rajasthan. I specialize in building responsive and functional web applications using Python, Django, HTML, CSS, JavaScript, and MySQL. Through my training at Logiclock Labs Pvt. Ltd, I've gained hands-on experience working across frontend and backend development, creating seamless digital experiences.
//               </p>
              
//               <p>
//                 I enjoy turning ideas into visually appealing web solutions that focus on performance and usability. With a strong foundation in programming and a constant drive to learn new technologies, I aim to grow as a developer and contribute to projects that make a real impact.
//               </p>
//             </div>
//           </div>

//           {/* Illustration */}
//           <div className="relative">
//             <div className="relative rounded-2xl justify-center flex items-center overflow-hidden shadow-2xl">
//               <img 
//                 src={myPic}
//                 alt="Developer workspace"
//                 className="w-80 h-80 object-cover rounded-2xl  "
//               />
//               <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-orange-600/30 w-80 h-80  flex items-center justify-center mx-auto"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import myPic from "../../assets/mypic.png";
// import { FiCheck, FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6  text-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
//           {/* ── Left Column ── */}
//           <div className="space-y-8">
//             {/* Label */}
//             <p className="text-gray-400 text-sm tracking-widest uppercase">About Me</p>

//             {/* Heading */}
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//               Professional{" "}
//               <span className="text-[#b5f23d]">Problem Solutions</span>
//               <br />
//               For Digital Products
//             </h2>

//             {/* Body */}
//             <p className="text-gray-400 leading-relaxed">
//               I'm Mukul Porwal, a passionate Python Full Stack Developer from Baran, Rajasthan.
//               I specialize in building responsive and functional web applications using Python,
//               Django, HTML, CSS, JavaScript, and MySQL. Through my training at Logiclock Labs
//               Pvt. Ltd, I've gained hands-on experience working across frontend and backend
//               development, creating seamless digital experiences.
//             </p>

//             {/* Skills checklist — 2-column grid */}
//             <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//               {[
//                 "Branding & Design",
//                 "Digital Marketing",
//                 "Web Development",
//                 "Product Design",
//               ].map((skill) => (
//                 <div key={skill} className="flex items-center gap-3">
//                   {/* <FiCheck className="text-[#b5f23d] flex-shrink-0" size={18} /> */}
//                   <span className="font-semibold text-white">{skill}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Contact bar */}
//             <div className="flex flex-col sm:flex-row gap-4 bg-[#1a1a1a] rounded-2xl p-5">
//               {/* Email */}
//               <div className="flex items-center gap-4 flex-1">
//                 <span className="w-10 h-10 rounded-full bg-[#b5f23d] flex items-center justify-center flex-shrink-0">
//                   {/* <FiMail className="text-black" size={18} /> */}
//                 </span>
//                 <div>
//                   <p className="text-gray-400 text-xs">Email Us</p>
//                   <p className="font-semibold text-white text-sm">support@gmail.com</p>
//                 </div>
//               </div>

//               {/* Divider */}
//               <div className="hidden sm:block w-px bg-gray-700 self-stretch" />

//               {/* Phone */}
//               <div className="flex items-center gap-4 flex-1">
//                 <span className="w-10 h-10 rounded-full bg-[#b5f23d] flex items-center justify-center flex-shrink-0">
//                   {/* <FiPhone className="text-black" size={18} /> */}
//                 </span>
//                 <div>
//                   <p className="text-gray-400 text-xs">Make A Call</p>
//                   <p className="font-semibold text-white text-sm">+880 (123) 456 88</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Right Column — Photo + floating badges ── */}
//           <div className="relative flex justify-center">
//             {/* Photo */}
//             <div className="relative w-[400px] h-[480px] rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src={myPic}
//                 alt="Mukul Porwal"
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>

//             {/* Decorative diamond accent */}
//             <span
//               className="absolute top-6 right-6 text-[#b5f23d] text-2xl select-none pointer-events-none"
//               aria-hidden="true"
//             >
//               ◆
//             </span>

//             {/* Badge — Experience Designer */}
//             <div className="absolute top-10 -left-4 bg-white text-black rounded-full px-4 py-2 flex items-center gap-3 shadow-xl">
//               {/* Colourful icon placeholder */}
//               <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-yellow-400 flex-shrink-0" />
//               <span className="font-semibold text-sm whitespace-nowrap">Experience Designer</span>
//               {/* <FiArrowUpRight size={14} className="text-gray-500" /> */}
//             </div>

//             {/* Badge — Name card */}
//             <div className="absolute bottom-16 -left-4 bg-white text-black rounded-full px-4 py-2 flex items-center gap-3 shadow-xl">
//               <img
//                 src={myPic}
//                 alt="Mukul Porwal"
//                 className="w-8 h-8 rounded-full object-cover object-top flex-shrink-0"
//               />
//               <span className="font-semibold text-sm whitespace-nowrap">Mukul Porwal</span>
//               {/* <FiArrowUpRight size={14} className="text-gray-500" /> */}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// import myPic from "../../assets/mypic.png";

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6 bg-white text-black">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
//           {/* ── Left Column ── */}
//           <div className="space-y-8">
//             {/* Label */}
//             <p className="text-gray-500 text-sm tracking-widest uppercase">About Me</p>

//             {/* Heading */}
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
//               Professional{" "}
//               <span className="text-[#b5f23d]">Problem Solutions</span>
//               <br />
//               For Digital Products
//             </h2>

//             {/* Body */}
//             <p className="text-gray-600 leading-relaxed">
//               I'm Mukul Porwal, a passionate Python Full Stack Developer from Baran, Rajasthan.
//               I specialize in building responsive and functional web applications using Python,
//               Django, HTML, CSS, JavaScript, and MySQL. Through my training at Logiclock Labs
//               Pvt. Ltd, I've gained hands-on experience working across frontend and backend
//               development, creating seamless digital experiences.
//             </p>

//             {/* Skills checklist — 2-column grid */}
//             <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//               {[
//                 "Branding & Design",
//                 "Digital Marketing",
//                 "Web Development",
//                 "Product Design",
//               ].map((skill) => (
//                 <div key={skill} className="flex items-center gap-3">
//                   <svg className="text-[#b5f23d] flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                   <span className="font-semibold text-black">{skill}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Contact bar */}
//             <div className="flex flex-col sm:flex-row gap-4 bg-gray-100 rounded-2xl p-5">
//               {/* Email */}
//               <div className="flex items-center gap-4 flex-1">
//                 <span className="w-10 h-10 rounded-full bg-[#b5f23d] flex items-center justify-center flex-shrink-0">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="2" y="4" width="20" height="16" rx="2" />
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                   </svg>
//                 </span>
//                 <div>
//                   <p className="text-gray-500 text-xs">Email Us</p>
//                   <p className="font-semibold text-black text-sm">support@gmail.com</p>
//                 </div>
//               </div>

//               {/* Divider */}
//               <div className="hidden sm:block w-px bg-gray-300 self-stretch" />

//               {/* Phone */}
//               <div className="flex items-center gap-4 flex-1">
//                 <span className="w-10 h-10 rounded-full bg-[#b5f23d] flex items-center justify-center flex-shrink-0">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
//                   </svg>
//                 </span>
//                 <div>
//                   <p className="text-gray-500 text-xs">Make A Call</p>
//                   <p className="font-semibold text-black text-sm">+880 (123) 456 88</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Right Column — Photo + floating badges ── */}
//           <div className="relative flex justify-center">
//             {/* Photo */}
//             <div className="relative w-[400px] h-[480px] rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src={myPic}
//                 alt="Mukul Porwal"
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>

//             {/* Decorative diamond accent */}
//             <span
//               className="absolute top-6 right-6 text-[#b5f23d] text-2xl select-none pointer-events-none"
//               aria-hidden="true"
//             >
//               ◆
//             </span>

//             {/* Badge — Experience Designer */}
//             <div className="absolute top-10 -left-4 bg-white text-black rounded-full px-4 py-2 flex items-center gap-3 shadow-xl border border-gray-100">
//               <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-yellow-400 flex-shrink-0" />
//               <span className="font-semibold text-sm whitespace-nowrap">Experience Designer</span>
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
//                 <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
//               </svg>
//             </div>

//             {/* Badge — Name card */}
//             <div className="absolute bottom-16 -left-4 bg-white text-black rounded-full px-4 py-2 flex items-center gap-3 shadow-xl border border-gray-100">
//               <img
//                 src={myPic}
//                 alt="Mukul Porwal"
//                 className="w-8 h-8 rounded-full object-cover object-top flex-shrink-0"
//               />
//               <span className="font-semibold text-sm whitespace-nowrap">Mukul Porwal</span>
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
//                 <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
//               </svg>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import myPic from "../../assets/mypic.png";

export default function About() {
  return (
    <section id="about" className="flex items-center justify-center px-6 py-20 bg-white text-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Right Column — Photo + floating badges ── */}
          <div className="relative flex justify-center lg:justify-center">
            {/* Photo */}
            <div className="relative w-[320px] h-[320px] sm:w-[280px] sm:h-[280px]">

              {/* Photo container matching Hero's circular style */}
              <div className="relative w-[320px] h-[320px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden shadow-2xl">
                <img
                  src={myPic}
                  alt="Mukul Porwal"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 "
                />
              </div>


              {/* Badge — Experience Designer */}
              {/* <div className="absolute top-8 -left-6 bg-white text-black rounded-full px-4 py-2 flex items-center gap-3 shadow-xl border border-gray-100">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-yellow-400 flex-shrink-0" />
                <span className="font-semibold text-sm whitespace-nowrap">Experience Designer</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </div> */}

              {/* Badge — Name card */}
              <div className="absolute bottom-10 -left-8 bg-white  rounded-full px-4 py-2 flex items-center gap-3 shadow-xl border-gray-100">
                <span className="font-medium text-lg text-black whitespace-nowrap">Mukul Porwal</span>
                <span className="text-black-400 text-lg">↗</span>
              </div>

            </div>
          </div>

          {/* ── Left Column ── */}
          <div className="space-y-8">
            {/* Label */}
            <p className="text-gray-600 font-light text-xl">About Me</p>

            {/* Heading */}
            <h2 className="text-4xl md:text-4xl font-medium leading-tight text-black-600">
              Passionate{" "}
              <span className="bg-gradient-to-r from-yellow-600 via-purple-600 to-blue-600 bg-clip-text  text-transparent">About Creating</span>
              <br />
              Digital Solutions
            </h2>

            {/* Body */}
            <p className="text-gray-600 leading-relaxed max-w-lg text-lg">
              I am a passionate and motivated Computer Science graduate with 
              hands-on experience in Full Stack Development. As a fresher, I 
              enjoy building responsive and user-friendly web applications 
              using modern technologies, and I am eager to learn, grow, and 
              contribute to real-world projects.
            </p>

            {/* Contact bar */}
            <div className="flex flex-col sm:flex-row gap-4 bg-gray-100 rounded-2xl p-5">
              {/* Email */}
              <div className="flex items-center gap-4 flex-1">
                <span className="w-10 h-10 rounded-full bg-[#b5f23d] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-gray-500 text-md">Email Us</p>
                  <p className="font-light text-black text-md">mukulporwal05@gmail.com</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px bg-gray-300 self-stretch" />

              {/* Phone */}
              <div className="flex items-center gap-4 flex-1">
                <span className="w-10 h-10 rounded-full bg-[#b5f23d] flex items-center justify-center flex-shrink-0">
                  <svg width="18px" height="18px" viewBox="0 0 24 24"  fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-gray-500 text-md">GitHub</p>
                  <p className="font-light text-black text-md"><a href="https://github.com/mukulporwal">GitZone</a></p>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}