// import React from 'react'
import Typewriter from "typewriter-effect";
import myPic from "../../assets/mypic.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        {/* Profile Image */}
        <div className="relative inline-block">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl mx-auto">
            <img 
              src={myPic} 
              alt="Mukul Porwal"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out hover:border-1 border-blue-500"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-orange-500/20 blur-xl"></div>
        </div>

        {/* Name & Title */}
        <div className="space-y-3">
            <h1 className="my-3 max-w-lg text-[35px]  text-white " style={{ fontWeight: 200 }}>
                Hi, I’m Mukul Porwal <br />
                <span className="text-[#FFD600] text-[30px]">
                    <Typewriter
                    options={{
                        strings: ["Web Designer", "Web Developer", "Full Stack Developer"],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 100,
                    }}
                    />
                </span>
            </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-orange-500 font-light rounded-full cursor-pointer 
           hover:shadow-lg hover: transition-all duration-300 hover:scale-105">
            <a href="#contact"
              onClick={(e) => handleScroll(e, "contact")}>Connect with me</a>
          </button>
          <button className="px-8 py-3 border-2 border-white rounded-full font-light cursor-pointer hover:border-blue-500 transition-all duration-300">
            <a href="https://drive.google.com/file/d/1jZBKmEnzpzP7DQct0SpnSuIL3x-cwt5y/view?usp=drive_link" target="_blank" rel="noopener noreferrer">My Resume</a>
          </button>
        </div>
      </div>
    </section>
  );
}

