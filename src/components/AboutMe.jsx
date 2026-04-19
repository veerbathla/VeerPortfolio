import React from 'react'
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const AboutMe = () => {
    return (

        <section className="
w-full 
bg-[#0f0f0f] 
min-h-[calc(100vh-4rem)] 
grid md:grid-cols-2 
pt-10 
relative z-10
">

            {/* Left Image */}
            <div className="relative w-full h-[300px] md:h-full flex items-end justify-center md:justify-end">

                <img
                    src="veer2.png"
                    alt="Veer"
                    className="
max-h-[98%] max-w-[98%]
object-contain
md:mr-10 pb-0
opacity-95
"
                />

            </div>

            {/* Right Content */}
            <div className="flex items-center px-6 md:px-16">
                <div className="space-y-6 max-w-lg">

                    {/* Section Title */}
                    <h2 className="
text-2xl md:text-3xl 
font-semibold 
text-[#a1a1aa] 
uppercase tracking-wide
">
                        About Me
                    </h2>

                    {/* Main Heading */}
                    <h1 className="
text-3xl md:text-5xl 
font-bold 
text-[#f5f5f5] 
leading-tight
">
                        Hi, I'm <span className="text-white">Veer</span>
                    </h1>

                    {/* Description */}
                    <p className="text-[#a1a1aa] leading-relaxed text-sm md:text-base">
                        I’m a full-stack web developer who enjoys building clean and functional
                        web applications. I like working across both frontend and backend, making
                        sure everything not only looks good but works smoothly.
                    </p>

                    <p className="text-[#a1a1aa] leading-relaxed text-sm md:text-base">
                        I’m constantly learning and experimenting with new technologies, and I
                        enjoy solving problems that challenge me to think differently.
                    </p>

                    {/* 🔥 Social Links */}
                    <div className="flex items-center gap-4 pt-3">

                        <span className="text-sm text-[#a1a1aa] tracking-wide">
                            Socials:
                        </span>

                        <div className="flex items-center gap-5 text-2xl">

                            <a
                                href="https://github.com/veerbathla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#a1a1aa] hover:text-white hover:scale-110 transition-all duration-200"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/veer-singh-190b9631b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#a1a1aa] hover:text-white hover:scale-110 transition-all duration-200"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://leetcode.com/veerbathla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#a1a1aa] hover:text-white hover:scale-110 transition-all duration-200"
                            >
                                <FaCode />
                            </a>

                        </div>

                    </div>

                </div>
            </div>

        </section>

    )
}

export default AboutMe