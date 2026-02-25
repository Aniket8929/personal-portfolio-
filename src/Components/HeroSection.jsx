import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[95vh] flex items-center justify-center bg-neutral-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Profile Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-28 h-28 md:w-32 md:h-32 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center shadow-lg hover:border-lime-400 transition-all duration-300">
            <svg
              className="w-14 h-14 md:w-16 md:h-16 text-lime-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Intro */}
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
          Hi, I’m <span className="text-lime-400 font-semibold">Aniket</span> 👋
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
          Frontend Developer
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-400 mt-4">
          Crafting <span className="text-white">Scalable</span> & Modern UI
        </h2>

        <p className="text-neutral-500 max-w-2xl mx-auto mt-4 leading-relaxed text-sm md:text-base">
          I build responsive and user-focused web applications using 
          <span className="text-white font-medium"> React, JavaScript, Tailwind CSS </span>
          and the <span className="text-white font-medium">MERN Stack</span>. 
          Passionate about creating clean interfaces and scalable frontend systems.
        </p>

        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          Open to Internship / Frontend Developer Opportunities
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link to="/contact">
            <button className="bg-lime-400 text-black font-medium px-8 py-3 rounded-lg hover:bg-lime-300 transition-all duration-200 shadow-lg hover:shadow-lime-400/20">
              Connect With Me →
            </button>
          </Link>

          <Link to="/projects">
            <button className="border border-neutral-800 text-neutral-300 px-8 py-3 rounded-lg hover:border-lime-400 hover:text-white transition-all duration-200">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;