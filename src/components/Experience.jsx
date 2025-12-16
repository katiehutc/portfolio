import React from 'react'

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="w-full flex justify-center items-center flex-col mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
            Experience
          </p>
        </div>

        {/* Pink boxes container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          
          {/* Pink Box 1 */}
          <div className="py-16 rounded-md bg-pink-200 text-black flex flex-col justify-center items-center w-full md:w-1/2">

            <div className="max-w-[1000px] w-full flex flex-col gap-6 px-4">
              <div className="sm:text-center text-4xl font-bold">
                <p>Software Engineer Intern</p>
              </div>
              <div>
                <p>
                  I developed interactive virtual reality (VR) applications 
                  for the Meta Quest 3 using Unity to enhance operational 
                  efficiency, reduce errors, and improve performance in simulation 
                  environments. I automated Unity prefab scripting in C#, 
                  streamlining asset management and reducing development time 
                  by an estimated 60–70% for large-scale projects. I also designed 
                  a VR training project focused on improving motor skill coordination
                  through immersive interaction and applied Agile methodologies—including 
                  weekly sprints and daily stand-ups—to ensure iterative progress and cross-functional collaboration.

                </p>
              </div>
            </div>
          </div>

          {/* Pink Box 2 */}
          <div className="py-16 rounded-md bg-pink-200 text-black flex flex-col justify-center items-center w-full md:w-1/2">
            <div className="max-w-[1000px] w-full flex flex-col gap-6 px-4">
              <div className="sm:text-center text-4xl font-bold">
                <p>Hackathon Committee Lead</p>
              </div>
              <div>
                <p>
                  I led a team of five to design and manage workshops 
                  for the annual WiCS hackathon with 200+ participants. 
                  Additionally, I coordinated with judges and sponsors to 
                  ensure event quality and logistics.

                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experience
