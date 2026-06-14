import React from 'react'
import Navbar from './components/Navbar'
import Crausel from './components/Crausel'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import HireMe from './Pages/HireMe';

const App = () => {
    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: true,
      });
    }, []);
    return (
  <div>
    <Navbar />
    <div id="home"><Home /></div>
    <div id="about"><About /></div>
    <div id="skills"><Skills /></div>
    <div id="projects"><Projects /></div>
    <div id="hire-me"><HireMe /></div>
    <div id="contact"><Contact /></div>
  </div>
)
}

export default App