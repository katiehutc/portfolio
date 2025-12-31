import React, { useState } from 'react';
import project1Img from '../assets/nyt.png';
import project2Img from '../assets/srnsproject.png';
import project3Img from '../assets/course-reviews.png';
import project4Img from '../assets/website.png';

const projects = [
  {
    id: 1,
    title: 'New York Times Analysis',
    shortDesc: 'An analysis + visualization of NYT article titles.',
    img: project1Img,
    color:'#C3CCE5',
    description: 'This project engineered an end-to-end automated news analysis pipeline to extract thematic trends from 400,000 New York Times articles published between 2015 and 2024. By leveraging BERTopic for unsupervised machine learning and Prefect for workflow orchestration, the system successfully transformed raw, unstructured text into 75+ distinct, human-readable topics. The findings revealed significant media narrative shifts, capturing the precise lifecycle of global events like COVID-19, the Ukraine War, and evolving Macroeconomic trends through high-resolution temporal data. Built with a modern stack including DuckDB for analytical storage and Streamlit for interactive visualization, the architecture demonstrates a scalable, production-ready approach to large-scale natural language processing.',
  },
  {
    id: 2,
    title: 'Virtual Reality Training Simulation',
    shortDesc: 'VR simulations built for the Meta Quest 3 using Unity.',
    img: project2Img,
    color:'#E8BCB4',
    description: 'For my software engineering internship, I used Unity C# to create simulations on the Meta Quest 3. One was a point-dose radiation simulator to test the safety of radialogical materials based on distance. The other was a motor-skill coordination sorting simulator for training people in virtual environments.',
  },
  {
    id: 3,
    title: 'Course Reviews',
    shortDesc: 'A full-stack project for UVA students to write reviews for their courses.',
    img: project3Img,
    color:'#B9D996',
    description: 'Created a JavaFX/FXML application with JDBC to manage a relational database of UVA course reviews, including user login, course management, and persistent review submissions. Integrated version control through GitHub to collaborate effectively with team members. Ensured code consistency and minimized integration errors throughout the development process.',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    shortDesc: 'A portfolio built using React and Tailwind CSS.',
    img: project4Img,
    color:'#804242ff',
    description: 'This is my personal portfolio website, developed using React and Tailwind CSS. It features a clean, responsive design to showcase my projects, skills, and resume, with interactive elements and smooth navigation for a professional presentation.',
  }
];

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <div name='projects' className='w-full text-[#B39EB5] bg-[#FDFBD4] min-h-screen p-4'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-[80vh]'>

        {/* Section header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-[#182D09] border-[#182D09]'>Projects</p>
          <p>      </p>
          <p className='text-xl font-bold inline text-[#182D09]'> click on the cards below to learn more!</p>
        </div>

        {/* Project grid */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map(project => (
            <div
              key={project.id}
              style={{ backgroundColor: project.color }}
              className='p-4 rounded-lg shadow-lg cursor-pointer hover:bg-[#957DAD] transition duration-300'
              onClick={() => setModalProject(project)}
            >
              <h3 className='text-xl font-bold text-black mb-2 transition'>{project.title}</h3>
              <p className='text-black'>{project.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalProject && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50'
          onClick={() => setModalProject(null)}
        >
          <div
            style={{ backgroundColor: modalProject.color }}
            className='p-6 rounded-lg max-w-lg w-full relative'
            onClick={e => e.stopPropagation()}
          >
            <button
              className='absolute top-2 right-2 text-black text-2xl'
              onClick={() => setModalProject(null)}
            >
              &times;
            </button>
            <img
              src={modalProject.img}
              alt={modalProject.title}
              className='rounded-md mb-4 w-full'
            />
            <h3 className='text-2xl font-bold text-black mb-2'>{modalProject.title}</h3>
            <p className='text-black mb-4'>{modalProject.description}</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
