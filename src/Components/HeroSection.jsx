import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section id="home" className="bg-white mt-10 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-6">
          <div className="w-28 h-28 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg
              className="w-16 h-16 md:w-20 md:h-20 text-yellow-700"
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

        <p className="text-lg md:text-xl text-gray-600 font-medium ">
          Hi, I’m <span className="text-gray-900 font-semibold">Aniket</span> 👋
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Building digital products,
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          brands & experiences.
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Front-end Developer & Visual Designer focused on creating clean,
          user-friendly web experiences with modern technologies.
        </p>

        {/* CTA */}
  <Link to={"/contact"}> 
    <button className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-all duration-200 inline-flex items-center gap-2">
          Connect with me
          <svg
            className="w-5 h-5"
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
</Link> 
      </div>
    </section>
  );
};

export default HeroSection;
