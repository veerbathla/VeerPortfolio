import { ExternalLink } from "lucide-react";

// lucide-react removed brand icons (Github, Twitter, etc.), so this is
// a small inline SVG of the GitHub mark instead.
const GithubIcon = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.92 3.19 9.09 7.62 10.56.56.1.76-.24.76-.54 0-.27-.01-1.13-.02-2.04-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.21 1.15-2.99-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 2.99 0 4.27-2.61 5.22-5.09 5.49.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.77.54a10.94 10.94 0 0 0 7.6-10.55C23.02 5.24 18.27.5 12 .5Z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const allTech = Object.values(project.techStack).flat();
  const visibleTech = allTech.slice(0, 6);
  const extraCount = allTech.length - visibleTech.length;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-duration="1000">

      {/* Image */}
      <div className="aspect-video overflow-hidden bg-gray-100" >
        <img
          src={`/${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {visibleTech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-400 text-xs font-medium">
              +{extraCount} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-3 pt-1">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:scale-105 transition-all duration-300"
          >
            Live Demo
            <ExternalLink size={15} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300"
          >
            Code
            <GithubIcon size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;