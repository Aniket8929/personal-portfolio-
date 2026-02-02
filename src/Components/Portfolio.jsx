import { ExternalLinkIcon, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DUCKSPACE",
      description:
        "A modern web application for creative collaboration and project management.",
      color: "bg-yellow-400",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Betaapp",
      description:
        "An innovative mobile-first application designed for seamless user experiences.",
      color: "bg-purple-500",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Meta",
      description:
        "A comprehensive social platform connecting people through shared interests.",
      color: "bg-blue-900",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "DelivrBox",
      description:
        "Smart logistics solution streamlining delivery management and tracking.",
      color: "bg-blue-800",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "R",
      description:
        "A powerful analytics dashboard providing real-time insights and reporting.",
      color: "bg-green-400",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Polora",
      description:
        "Creative portfolio platform showcasing design work and digital artistry.",
      color: "bg-gradient-to-br from-purple-600 to-blue-500",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600">
            Check out some of my personal and paid projects
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-64"
            >
              {/* Background */}
              <div className={`absolute inset-0 ${project.color}`} />

              <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                <div className="w-20 h-20 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/90 text-center text-sm mb-6 px-4">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    aria-label="View Live Demo"
                  >
                    <ExternalLinkIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        <div className="pt-10 text-center">
          <button className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 inline-flex items-center">
            See More
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
