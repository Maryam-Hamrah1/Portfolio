import React, { useState } from 'react'

function About() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className='w-full min-h-screen snap-start bg-[#FAF3E0] pb-10 pt-16 md:pt-20 px-4 md:px-10'>

      {/* Top Card */}
      <div className='w-full bg-[#E6D5B8] rounded-3xl p-5 md:p-10'>

        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#3A2F1F]'>
          Hello, I'm Maryam Hamrah
        </h1>

        <p className='text-sm md:text-lg text-[#3A2F1F]'>
          Welcome to my personal portfolio website. I am passionate about technology,
          creativity, and continous learning.
        </p>

        {showMore && (
          <div className="text-justify mt-4">
            <p className='text-sm md:text-lg text-[#3A2F1F]'>
              I enjoy creating websites, learning graphic design, and improving my programming skills every day.
              My dream is to combine design and development to build meaningful digital experience.
            </p>
          </div>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className='mt-5 md:mt-6 px-5 md:px-6 py-2 md:py-3 bg-[#3A2F1F] text-[#FAF3E0] rounded-xl text-sm md:text-base'
        >
          {showMore ? "Show Less" : "Show More"}
        </button>

      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 mt-5 md:mt-10">

        {/* About Me */}
        <div className="bg-[#E6D5B8] p-5 md:p-8 rounded-2xl shadow">
          <h2 className='text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#3A2F1F]'>
            About Me
          </h2>
          <p className='text-sm md:text-base text-[#3A2F1F] text-justify mt-4 md:mt-8'>
            I'm IT student at university of people and interested in graphic design, front-end
            development, and animation. I enjoy learning new tools and creating projects.
          </p>
        </div>

        {/* Goals */}
        <div className="bg-[#E6D5B8] p-5 md:p-8 rounded-2xl shadow">
          <h2 className='text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#3A2F1F]'>
            My Goals
          </h2>
          <ul className='text-sm md:text-base text-[#3A2F1F] mt-4 md:mt-8 list-disc pl-5 space-y-1'>
            <li>Become a professional designer</li>
            <li>Master front-end and back-end development</li>
            <li>Learning cyber-security</li>
            <li>Robotics Engineer</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-[#E6D5B8] p-5 md:p-8 rounded-2xl shadow">
          <h2 className='text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#3A2F1F]'>
            My Skills
          </h2>
          <ul className='text-sm md:text-base text-[#3A2F1F] mt-4 md:mt-8 list-disc pl-5 grid grid-cols-2 gap-1'>
            <li>HTML</li>
            <li>Photoshop</li>
            <li>CSS</li>
            <li>Illustrator</li>
            <li>JavaScript</li>
            <li>Premiere Pro</li>
            <li>React</li>
            <li>Motion Graphic</li>
          </ul>
        </div>

      </div>

    </section>
  )
}

export default About
