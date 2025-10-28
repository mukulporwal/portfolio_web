// import React from 'react'
import About from './Components/About/About.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Skill from './Components/Skill/Skills.jsx';
import Project from './Components/Project/Projects.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
