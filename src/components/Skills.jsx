import React from 'react';
import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiC, SiUnity, SiJavascript, SiSqlite, SiApachekafka, SiPrefect, SiDuckdb, SiApacheairflow } from 'react-icons/si'; // example icons
import { CiChat1 } from "react-icons/ci";

const skills = [
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'C', icon: <SiC size={40} /> },
  { name: 'Unity C#', icon: <SiUnity size={40} /> },
  { name: 'SQL', icon: <SiSqlite size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'Kafka', icon: <SiApachekafka size={40} /> },
  { name: 'Prefect', icon: <SiPrefect size={40} /> },
  { name: 'DuckDB', icon: <SiDuckdb size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Airflow', icon: <SiApacheairflow size={40} /> },
  { name: 'BERTopic', icon: <CiChat1 size={40} /> }
];

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#bfd8ff] text-[#bfd8ff]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Header */}
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-[#B39EB5] text-[#B39EB5] text-center'>Skills</p>
        </div>

        {/* Skills grid */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#242E16] hover:scale-110 duration-500 bg-[#B39EB5] flex flex-col items-center p-4 rounded-md'
            >
              {/* Icon */}
              <div className='mb-2 text-[#bfd8ff]'>{skill.icon}</div>
              {/* Skill name */}
              <p className='my-2 text-[#bfd8ff] font-semibold'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
