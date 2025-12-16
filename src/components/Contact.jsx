import React from 'react'

const Contact = () => {
  return (
    // Main container
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        {/* Header section */}
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Send me a message
          </p>
        </div>

        
      </div>
    </div>
  )
}

export default Contact
