import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='flex  items-center justify-between px-3 fixed top-0 left-0 w-full z-[9999]'>        
      <h1 className='text-2xl font-bold tracking-wide text-[#3A2F1F]'>Maryam Hamrah</h1>

      <div className='bg-[#FAF3E0] p-3 rounded-b-2xl shadow-md text-[#3A2F1F]'>
        <ul className='flex gap-3 font-medium'>
            <li className='transition hover:-translate-y-1'><a href="Home">Home</a></li>
            <li className='transition hover:-translate-y-1'><a href="About"></a>About</li>
            <li className='transition hover:-translate-y-1'><a href="Projects">Projects</a></li>
            <li className='transition hover:-translate-y-1'><a href="Contact">Contact</a></li>
        </ul>
      </div>
      <div className='flex gap-2 text-2xl '>
        <button className=' text-[#FAF3E0] bg-[#3A2F1F]'>  <FaLinkedin />  </button>
        <button className=' text-[#FAF3E0] bg-[#3A2F1F]'>  <FaGithub />  </button>
        <button className=' text-[#FAF3E0] bg-[#3A2F1F]'>  <FaYoutube />  </button>
        
      </div>
    </nav>
  )
}

export default Navbar
