import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-[60vh] bg-[#FDFBD4] flex justify-center p-4"
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-[80vh]'>

        {/* Header */}
        <div className="pb-8 flex flex-col justify-center w-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#182D09] text-[#182D09]">
            Contact
          </p>

        </div>

        {/* Social / Contact Links */}
        <div className="flex flex-col gap-6 w-full items-center text-[#182D09]">
          {/* Email */}
          <a
            href="mailto:katiehutc@gmail.com"
            className="flex items-center gap-4 text-[#182D09] hover:text-[#182D09] transition duration-300"
          >
            <HiOutlineMail size={30} />
            <span className="text-lg">katiehutc@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/katie-hutchinson11/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-[#182D09] hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin size={30} />
            <span className="text-lg">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/katiehutc/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-[#182D09] hover:text-gray-800 transition duration-300"
          >
            <FaGithub size={30} />
            <span className="text-lg">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
