import React, { useEffect, useState } from "react";

const ArrowIcon = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
);

const Home = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="w-full min-h-screen pt-28 overflow-x-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8 h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT — Text */}
                <div className="flex flex-col justify-center" data-aos="fade-right">
                    <div className="space-y-6">
                        <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
                            Web Developer
                        </span>

                        <h1 className="text-5xl md:text-7xl font-semibold text-black leading-[1.05]">
                            Hi, I'm Veer.
                            <br />
                            I design and build for the web.
                        </h1>

                        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                            I help turn ideas into clean, fast and thoughtfully
                            designed websites — from the first wireframe to the
                            final deploy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white hover:bg-gray-800 transition"
                            >
                                View My Work
                                <ArrowIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3.5 text-sm font-medium text-black hover:border-black transition"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Image */}
                <div
                    className="relative w-full h-[350px] sm:h-[450px] md:h-[calc(100vh-7rem)] flex justify-end items-end"
                    data-aos="fade-left"
                >
                    <img
                        src="/veer.png"
                        alt="Veer Singh"
                        className="h-full max-w-full object-contain object-bottom"
                    />
                </div>

            </div>
        </section>
    );
};

export default Home;