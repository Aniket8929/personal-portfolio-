import React, { useState } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you would implement dark mode logic here
  };

  return (
    <nav className="bg-white w-full">
      <div className="max-w-6xl mx-auto  py-2">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <Link to={"/"}>
              <img src="https://cpro-portfolio-html.netlify.app/assets/logo.png" alt="logo" className='h-11' />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline gap-3">
               <Link to={"/#projects"} className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium">
            PROJECTS
          </Link>
          <Link to={"/contact"} className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium">
            CONTACT
          </Link>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md flex items-center transition-colors">
              RESUME
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <Link to={"/#projects"} className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium">
            PROJECTS
          </Link>
          <Link to={"/contact"} className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium">
            CONTACT
          </Link>
          <div className="px-3 py-2">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md flex items-center transition-colors w-full justify-center">
              RESUME
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;