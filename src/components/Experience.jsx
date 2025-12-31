import React from 'react'

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
      className="w-full min-h-screen bg-[#FDFBD4] text-[#182D09]"
    >

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        {/* Header */}
        <div className="w-full flex justify-center items-center flex-col mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-[#182D09] text-center">
            Experience
          </p>
        </div>

        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch" >

          {/* Software Engineer Intern */}
          <div className="experience-card">
            <img src={SoftwareIcon} alt="Software Icon" className="w-16 h-16 mb-4" />
            <div className="text-3xl font-bold mb-4 text-center text-[#FDFBD4]">Software Engineer Intern</div>
            <ul className="list-disc list-inside text-[#FDFBD4] text-lg space-y-2 max-w-md">
              <li>Developed interactive VR simulations for Meta Quest 3 using Unity.</li>
              <li>Automated Unity prefab scripting in C#.</li>
              <li>Designed VR training for motor skill coordination and immersive interaction.</li>
              <li>Created a VR point-source radiation detector using the inverse square formula.</li>
            </ul>
          </div>

          {/* Hackathon Committee Lead */}
          <div className="experience-card">
            <img src={HackathonIcon} alt="Hackathon Icon" className="w-16 h-16 mb-4" />
            <div className="text-3xl font-bold mb-4 text-center text-[#FDFBD4]">Hackathon Committee Lead</div>
            <ul className="list-disc list-inside text-[#FDFBD4] text-lg space-y-2 max-w-md">
              <li>Led a team of five to design and manage workshops for the annual WiCS hackathon with 200+ participants.</li>
              <li>Coordinated with judges and sponsors to ensure smooth event logistics.</li>
              <li>Focused on team collaboration, time management, and high-quality participant experience.</li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;