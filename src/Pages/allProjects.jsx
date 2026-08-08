// import { Link } from "react-router-dom";
// import ProjectCard from "../components/ProjectCard";
// import Project from "../data/Project";

// const AllProjects = () => {
//   return (
//     <section className="relative min-h-screen px-6 pt-28 sm:pt-32 pb-20 bg-[#F5F9FF] overflow-hidden">
//       <div className="absolute top-32 right-0 w-80 h-80 bg-white/60 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl -z-10" />

//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-14">
//           <Link
//             to="/#projects"
//             className="inline-flex items-center gap-1.5 mb-6 text-sm font-medium text-gray-500 hover:text-gray-900"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
//             </svg>
//             Back
//           </Link>

//           <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-500 mb-4">
//             Everything I've built
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
//             All Projects
//           </h1>
//           <p className="text-gray-500 max-w-xl mx-auto">
//             A complete list of everything I've designed, built, and shipped.
//           </p>
//         </div>

//         <div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           data-aos="fade-up"
//           data-aos-duration="800"
//         >
//           {Project.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllProjects;


import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Project from "../data/Project";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = Project.filter((project) => project.featured);
  const visibleProjects = showAll ? Project : featuredProjects;

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 pt-28 sm:pt-32 pb-20 bg-[#F5F9FF] overflow-hidden"
    >
      {/* Decorative background accent */}
      <div className="absolute top-32 right-0 w-80 h-80 bg-white/60 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-500 mb-4">
            A few things I've built
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            {showAll ? "All Projects" : "Featured Projects"}
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            From real-time apps to full-stack platforms, here's a look at
            what I've designed and shipped recently.
          </p>

          {/* View All / Show Less button - top right corner */}
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="hidden sm:inline-flex absolute top-0 right-0 items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
          >
            {showAll ? "Show Less" : "View All"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Mobile ke liye button niche center me */}
        <div className="flex sm:hidden justify-center mb-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700"
          >
            {showAll ? "Show Less ←" : "View All Projects →"}
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      </section>
      );
    };