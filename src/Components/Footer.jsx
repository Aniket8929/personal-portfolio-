import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-1">
          <a 
            href="aniketkumarrai271@gmail.com" 
            className="text-lg hover:text-yellow-400 transition-colors duration-200"
          >
            aniketkumarrai271@gmail.com
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-2">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>

        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>Copyright © Communitypro 2026, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;