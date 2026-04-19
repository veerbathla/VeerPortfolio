import React from "react";

const projects = [
    {
        title: "Vybz",
        description:
            "A real-time chat application where users can connect, send friend requests, and communicate through messaging and calls.",
        techStack: {
            Frontend: ["React.js", "Tailwind CSS", "DaisyUI"],
            Backend: ["Node.js", "Express.js"],
            Database: ["MongoDB"],
            State: ["Zustand"],
            DataFetching: ["React Query"],
            Realtime: ["Socket.io / Stream"],
        },
        features: [
            "Authentication system",
            "Friend requests",
            "Real-time messaging",
            "Audio/Video calls",
            "Notifications",
        ],
        live: "https://vybz-chatapp.onrender.com/",
        github: "https://github.com/veerbathla/Vybz",
    },
    {
        title: "Yummy",
        description:
            "Frontend-only web application built with React and React-Bootstrap focusing on responsive layouts and modern UI.",
        techStack: {
            Frontend: ["React.js", "React-Bootstrap"],
        },
        features: ["Responsive design", "Modern UI", "Smooth navigation"],
        live: "https://yummyhere.netlify.app/",
        github: "https://github.com/veerbathla/Yummy",
    },
    {
        title: "LaLavash",
        description:
            "A modern, responsive website built with React and Tailwind CSS for a local cafe.",
        techStack: {
            Frontend: ["React.js", "Tailwind CSS"],
        },
        features: ["Responsive design", "Modern UI", "Smooth navigation"],
        live: "https://veerlalavash.netlify.app/",
        github: "https://github.com/veerbathla/LaLavash",
    },
    {
        title: "DishCraft",
        description:
            "An e-commerce styled frontend website for selling crockery items with responsive layouts.",
        techStack: {
            Frontend: ["React.js", "Bootstrap"],
        },
        features: ["Responsive design", "Modern UI", "Smooth navigation"],
        live: "https://dishcraftveer.netlify.app/",
        github: "https://github.com/veerbathla/DishCraft",
    },
];

const Projects = () => {
    return (
        <section className="w-full bg-[#0f0f0f] pt-6 pb-16 px-6 md:px-16 ">
            <div className="max-w-7xl mx-auto pt-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f5] text-center mb-16">
                    Projects
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
bg-[#111111] 
border border-[#27272a] 
rounded-2xl p-7 
transition-all duration-300 
hover:bg-[#18181b] hover:-translate-y-1
flex flex-col justify-between min-h-[360px]
"
                        >

                            {/* Top */}
                            <div>
                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#a1a1aa] mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="space-y-2 mb-6">
                                    {Object.entries(project.techStack).map(([key, values], i) => (
                                        <div key={i} className="flex flex-wrap items-start gap-2 text-sm">

                                            <span className="font-medium text-[#d4d4d8] min-w-[110px]">
                                                {key}:
                                            </span>

                                            <div className="flex flex-wrap gap-2">
                                                {values.map((tech, j) => (
                                                    <span
                                                        key={j}
                                                        className="
px-2 py-1 
bg-[#18181b] 
text-[#a1a1aa] 
border border-[#27272a] 
rounded-md text-xs
"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Features */}
                                <ul className="text-sm text-[#a1a1aa] space-y-1 mb-6">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>• {feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-4">
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <button className="
px-5 py-2 text-sm font-medium 
bg-white text-black 
rounded-lg 
hover:bg-[#e5e5e5] transition
">
                                        Live Demo
                                    </button>
                                </a>

                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <button className="
px-5 py-2 text-sm font-medium 
border border-[#27272a] 
text-white 
rounded-lg 
hover:bg-[#18181b] transition
">
                                        GitHub
                                    </button>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;