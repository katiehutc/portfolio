import React from 'react'

import TelusIcon from '../assets/telus.jpeg';
import SoftwareIcon from '../assets/srns.png';
import HackathonIcon from '../assets/wics.jpg';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-[#F0E5D8] text-[#2E3047]"
    >

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

        {/* Header */}
        <div className="w-full flex justify-center items-center flex-col mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-[#182D09] text-center">
            Experience
          </p>
        </div>

        {/* Boxes */}
        <div className="flex flex-col gap-8 items-center" >

          {/* TELUS Software Engineer Intern */}
          <div className="experience-card flex items-start gap-8 w-full max-w-5xl p-8">
            {/* Logo */}
            <img
              src={TelusIcon}
              alt="Telus Icon"
              className="w-28 h-28 flex-shrink-0"
            />

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-[#F0E5D8]">
                Software Engineer Intern
              </h3>

              <ul className="list-disc list-inside text-[#F0E5D8] text-lg space-y-2">
                <li>Implemented backend features and bug fixes for an ASP.NET web application serving a state public education system with 90,000+ users. </li>
                <li>Developed PostgreSQL database migrations with Entity Framework Core to support schema and data updates. </li>
                <li>Created unit and integration tests for backend features and database changes.</li>
              </ul>
            </div>
          </div>

          {/* SRNS Software Engineer Intern */}
          <div className="experience-card flex items-start gap-8 w-full max-w-5xl p-8">
            {/* Logo */}
            <img
              src={SoftwareIcon}
              alt="Software Icon"
              className="w-28 h-28 flex-shrink-0"
            />

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-[#F0E5D8]">
                Software Engineer Intern
              </h3>

              <ul className="list-disc list-inside text-[#F0E5D8] text-lg space-y-2">
                <li>Designed VR training modules for the Meta Quest 3 for motor-skill coordination proficiency, as well as a radiation dosimetry simulation using the inverse square law to model dose exposure. </li>
                <li>Automated Unity prefab generation through reusable C# editor scripts, eliminating repetitive manual setup and reducing scene creation time.</li>
              </ul>
            </div>
          </div>

          {/* Hackathon Committee Lead */}
          <div className="experience-card flex items-start gap-8 w-full max-w-5xl p-8">
            {/* Icon */}
            <img
              src={HackathonIcon}
              alt="Hackathon Icon"
              className="w-28 h-28 flex-shrink-0"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-[#F0E5D8]">
                Hackathon Committee Lead
              </h3>

              <ul className="list-disc list-inside text-[#F0E5D8] text-lg space-y-2">
                <li>Led a team of five to design and manage workshops for the annual WiCS hackathon with 200+ participants.</li>
                <li>Coordinated with judges and sponsors to ensure smooth event logistics.</li>
                <li>Focused on team collaboration, time management, and high-quality participant experience.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;