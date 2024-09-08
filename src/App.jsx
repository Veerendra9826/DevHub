import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      
      <div className="container" >
      <p style={{ fontSize: '26px', fontFamily: 'Georgia, serif', fontWeight: 'bold',  color:'yellow'}} ><br></br><br></br>
      "Transforming ideas into reality through innovative code and design.
      Crafting elegant, efficient solutions for a tech-driven world. Let's create the future together."</p>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
};

export default App;
