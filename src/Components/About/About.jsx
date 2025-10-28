// import React from "react";
import myPic from "../../assets/mypic.png";

export default function About() {
  return (
    <section id="about" className="py-22 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 flex items-center">
            <div className="space-y-4 text-gray-300 text-justify leading-relaxed ">
              <p>
                I'm Mukul Porwal, a passionate Python Full Stack Developer from Baran, Rajasthan. I specialize in building responsive and functional web applications using Python, Django, HTML, CSS, JavaScript, and MySQL. Through my training at Logiclock Labs Pvt. Ltd, I've gained hands-on experience working across frontend and backend development, creating seamless digital experiences.
              </p>
              
              <p>
                I enjoy turning ideas into visually appealing web solutions that focus on performance and usability. With a strong foundation in programming and a constant drive to learn new technologies, I aim to grow as a developer and contribute to projects that make a real impact.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl justify-center flex items-center overflow-hidden shadow-2xl">
              <img 
                src={myPic}
                alt="Developer workspace"
                className="w-80 h-80 object-cover rounded-2xl  "
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-orange-600/30 w-80 h-80  flex items-center justify-center mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}