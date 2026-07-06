import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // LinkedIn & GitHub icons
import me from '../assets/newprofile.png';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#F0E5D8]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#2E3047]">
            Katherine Hutchinson
          </h2>

          <p className="text-[#2E3047] text-lg leading-relaxed max-w-lg mx-auto py-4">
            Hi, I'm Katherine Hutchinson, a third-year <span className="font-semibold">Computer Science</span> student at the University of Virginia with a minor in <span className="font-semibold">Data Science</span>. 
            I’m interested in software engineering, data engineering, extended reality technologies, and technology consulting.
          </p>

          <p className="text-[#2E3047]">
            Find my resume here:{' '}
            <a
              href="https://docs.google.com/document/d/1dNUVZv0Envm5hK3ZrJygQKiCm5BfUXiA13Euh2vQcAw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2E3047] font-semibold hover:text-[#957DAD] underline transition"
            >
              Link
            </a>
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
            className="float-animate rounded-full mx-auto w-24 h-24 object-cover transition-shadow duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
