import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // LinkedIn & GitHub icons
import me from '../assets/profile-circle.png';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#FDFBD4]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#182D09]">
            Katherine Hutchinson
          </h2>

          <p className="text-[#182D09] text-lg leading-relaxed max-w-lg mx-auto py-4">
            Hi, I'm Katherine Hutchinson, a third-year <span className="font-semibold">Computer Science</span> student at the University of Virginia with a minor in <span className="font-semibold">Data Science</span>. 
            I’m interested in software engineering, data engineering, extended reality technologies, and technology consulting.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 py-4">
            <a href="https://www.linkedin.com/in/katie-hutchinson11/" target="_blank" rel="noreferrer" className="text-black hover:text-blue-600 transition duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/katiehutc/" target="_blank" rel="noreferrer" className="text-black hover:text-gray-800 transition duration-300">
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div>
          <img
            src={me}  
            alt="profile"
            className="float-animate rounded-full mx-auto w-2/3 md:w-full transition-shadow duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
