import React from 'react'

const HeroSection = () => {
    return (
        <section className="
w-full 
min-h-[calc(100vh-4rem)]
grid md:grid-cols-2 
bg-[#0f0f0f]
overflow-hidden
relative
">

            {/* Left Content */}
            <div className="flex items-center px-6 md:px-16 py-10 md:py-0">
                <div className="space-y-5 max-w-md">

                    <h6 className="text-xs md:text-sm text-[#a1a1aa] uppercase tracking-wider">
                        Full Stack Web Developer
                    </h6>

                    <h1 className="text-3xl md:text-5xl font-bold text-[#f5f5f5] leading-tight">
                        Hi, I'm <span className="text-white">Veer</span>
                    </h1>

                    <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed">
                        I am a passionate full-stack web developer with a strong foundation
                        in building modern, responsive web applications.
                    </p>

                    <button className="
px-5 py-2.5 md:px-6 md:py-3 
bg-white text-black 
rounded-md 
transition-all duration-300 
hover:bg-[#e5e5e5] hover:scale-[1.04]
">
                        Contact Me
                    </button>

                </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[300px] md:h-full">

                <img
                    src="veer.png"
                    alt="Veer"
                    className="
  absolute bottom-0 right-0
  h-full
  object-cover
  opacity-95
  "
                />
            </div>
        </section>
    )
}

export default HeroSection