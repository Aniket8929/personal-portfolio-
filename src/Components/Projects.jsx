import { ExternalLinkIcon, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DUCKSPACE",
      description:
        "A modern web application for creative collaboration and project management.",
      color: "bg-neutral-900",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Betaapp",
      description:
        "An innovative mobile-first application designed for seamless user experiences.",
      color: "bg-neutral-900",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Meta",
      description:
        "A comprehensive social platform connecting people through shared interests.",
      color: "bg-neutral-900",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "DelivrBox",
      description:
        "Smart logistics solution streamlining delivery management and tracking.",
      color: "bg-neutral-900",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "R",
      description:
        "A powerful analytics dashboard providing real-time insights and reporting.",
      color: "bg-neutral-900",
      image:
        "https://z-cdn-media.chatglm.cn/files/3e45984f-7d43-4b3d-a82f-2e0ec42a9900.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Polora",
      description:
        "Creative portfolio platform showcasing design work and digital artistry.",
      color: "bg-neutral-900",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s",
      github: "#",
      demo: "#",
    },
  ];
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black tracking-tighter mb-4">
            Projects
          </h2>
          <p className="text-neutral-500 text-sm uppercase tracking-widest">
            Check out some of my personal  projects
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden  hover:scale-[0.9] transition-all  duration-300 shadow-lg"
            >
              <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center overflow-hidden bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="md:w-1/2 w-full p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-300 text-sm font-medium flex items-center gap-2"
                  >
                    <Github size={16} /> Source
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-300 text-sm font-medium flex items-center gap-2"
                  >
                    <ExternalLinkIcon size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-12 text-center">
          <button className="bg-lime-400 hover:bg-lime-300 text-black font-medium py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center">
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