import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };


  const navLinks = [
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];


  useEffect(() => {

  }, [])

  return (
    <nav className="bg-neutral-950 border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <img
              src="https://cpro-portfolio-html.netlify.app/assets/logo.png"
              alt="logo"
              className="h-11"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-neutral-400 hover:text-white font-medium transition"
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-lime-400 hover:bg-lime-300 text-black px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-lime-400/20">
              Resume
            </button>

          </div>

          <div className="md:hidden flex items-center gap-2">


            <button
              onClick={handleMenuToggle}
              className="p-2 rounded-md hover:bg-neutral-900"
            >
              {isMenuOpen ? <FiX className="text-white" /> : <FiMenu className="text-white" />}
            </button>

          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-t border-neutral-800 px-4 pb-4 pt-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-neutral-400 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-lime-400 text-black w-full py-2 rounded-lg mt-2">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume</a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;