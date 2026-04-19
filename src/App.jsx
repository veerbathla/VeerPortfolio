import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Skills from './components/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from './components/ScrollTop'

import './App.css'

const App = () => {
  return (
    <div>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App