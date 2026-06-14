import ProjectCard from "../components/ProjectCard";
import Project from "../data/Project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 pt-28 sm:pt-32 pb-20 bg-[#F5F9FF] overflow-hidden"
    >

      {/* Decorative background accent */}
      <div className="absolute top-32 right-0 w-80 h-80 bg-white/60 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-500 mb-4">
            A few things I've built
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Featured Projects
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            From real-time apps to full-stack platforms, here's a look at
            what I've designed and shipped recently.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {Project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;