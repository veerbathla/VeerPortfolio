import React from "react";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const HomePage = () => {
    return (
        <div>

            {/* 🔥 Ye IDs yaha lagengi */}

            <section id="home" className="scroll-mt-16">
                <HeroSection />
            </section>

            <section id="about" className="scroll-mt-16">
                <About />
            </section>

            <section id="projects" className="scroll-mt-16">
                <Projects />
            </section>

            <section id="contact" className="scroll-mt-10">
                <Contact />
            </section>

        </div>
    );
};

export default HomePage;