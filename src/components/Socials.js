import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="fixed top-1/2 right-4 transform translate-y-1/2 flex flex-col items-center space-y-4 z-50">
      <a
        href="https://www.linkedin.com/in/mohammad-bachcha/"
        className="text-gray-600 hover:text-white transition-colors duration-200"
      >
        <FaLinkedin className="w-8 h-8" />
      </a>
      <a
        href="https://github.com/mibachcha1"
        className="text-gray-600 hover:text-white transition-colors duration-200"
      >
        <FaGithubSquare className="w-8 h-8" />
      </a>
      {/* Add more social icons from react-icons as needed */}
    </div>
  );
}
