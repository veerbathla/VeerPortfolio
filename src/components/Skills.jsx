import React from 'react'

const Skills = () => {
    return (
        <section className="w-full bg-[#0f0f0f] py-16 px-6 md:px-16 ">

            <div className="max-w-5xl mx-auto space-y-10 pb-16">

                {/* Heading */}
                <h2 className="
text-2xl md:text-3xl 
font-semibold 
text-[#a1a1aa] 
uppercase tracking-wide 
text-center
">
                    Tech Stack
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card */}
                    {[
                        {
                            title: "Frontend",
                            content: "HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap",
                        },
                        {
                            title: "Backend",
                            content: "Node.js, Express.js, Java",
                        },
                        {
                            title: "Database",
                            content: "MongoDB",
                        },
                        {
                            title: "Programming Languages",
                            content: "C, C++, Java, JavaScript",
                        },
                        {
                            title: "Version Control",
                            content: "Git, GitHub",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="
p-5 
rounded-lg 
border border-[#27272a] 
bg-[#111111] 
hover:bg-[#18181b] 
transition-colors duration-300
"
                        >
                            <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[#a1a1aa] text-sm md:text-base">
                                {item.content}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Skills