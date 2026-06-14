import React from 'react'

const Crausel = () => {
  return (
    // Changed <crausel> to a valid HTML <section> to ensure proper browser rendering
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 pt-24 gap-8 overflow-x-hidden">
    
      {/* Left Content */}
      <div className="flex flex-col justify-center px-6 md:px-16" data-aos="fade-right">
        <div className='space-y-4 max-w-md mx-auto md:mx-0'>
          <h6 className='text-xs md:text-sm text-gray-600 uppercase tracking-wider border-2 border-gray-300 rounded-full py-1.5 px-3 inline-block'>
            Full Stack Web Developer
          </h6>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-600 leading-tight'>
            Hi, I'm <span className='text-black'><br className="hidden md:inline"/>Veer Singh</span>
          </h1>
          <p className='text-sm md:text-base text-gray-600 leading-relaxed text-justify md:text-left'>
            Motivated and detail-oriented Computer Science student with hands-on experience in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Skilled in building responsive, user-centric web applications and RESTful APIs, with a strong foundation in data structures, algorithms, and modern development practices. Demonstrated ability to learn quickly, solve complex problems, and deliver high-quality projects in collaborative environments. Passionate about leveraging technology to create impactful digital solutions and eager to contribute to innovative software development teams.
          </p>
        </div>
      </div>

      {/* Right Content */}
      {/* Handled mobile vs desktop image alignment flawlessly */}
      <div className="relative w-full h-[350px] sm:h-[450px] md:h-full flex justify-center md:justify-end items-end" data-aos="fade-up">
        <img
          src="veer.png"
          alt="Veer"
          className="
            relative md:absolute 
            bottom-0 md:right-0 
            h-full max-w-full
            object-contain md:object-cover
            opacity-95
          "
        />
      </div>
    </section>
  )
}

export default Crausel