import React from 'react'
import { FaGithub, FaLinkedin, FaCode,FaInstagram  } from "react-icons/fa";

const About = () => {
    return (

        <section className="w-full min-h-screen grid md:grid-cols-2 pt-24 bg-[#F5F9FF]">

            {/* Left Image */}
            <div className="relative w-full h-[350px] md:h-full flex items-end justify-center md:justify-end"  data-aos="zoom-out"  data-aos-duration="1000">

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
text-black
uppercase tracking-wide
" data-aos="fade-down" data-aos-duration="1000">
                        About Me
                    </h2>

                    {/* Main Heading */}
                    <h1 className="
text-3xl md:text-5xl 
font-bold 
text-gray-600 
leading-tight
" data-aos="fade-left"  data-aos-duration="1000">
                        Hi, I'm <span className="text-black">Veer Singh</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base" data-aos="fade-left"  data-aos-duration="1000">
                        I’m a full-stack web developer who enjoys building clean and functional
                        web applications. I like working across both frontend and backend, making
                        sure everything not only looks good but works smoothly.
                    </p>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base" data-aos="fade-left"  data-aos-duration="1000">
                        I’m constantly learning and experimenting with new technologies, and I
                        enjoy solving problems that challenge me to think differently.
                    </p>

                    {/* 🔥 Social Links */}
                    <div className="flex items-center gap-4 pt-3" data-aos="fade-left"  data-aos-duration="1000">

                        <span className="text-sm text-black tracking-wide">
                            Socials:
                        </span>

                        <div className="flex items-center gap-5 text-2xl" data-aos="fade-left"  data-aos-duration="1000">

                            <a
                                href="https://github.com/veerbathla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black  hover:scale-110 transition-all duration-200"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/veer-singh-190b9631b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black  hover:scale-110 transition-all duration-200"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://leetcode.com/veerbathla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black  hover:scale-110 transition-all duration-200"
                            >
                                <FaCode />
                            </a>

                             <a
                                href="https://www.instagram.com/devwithveer_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black  hover:scale-110 transition-all duration-200"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                    </div>

                </div>
            </div>

        </section>

    )
}

export default About