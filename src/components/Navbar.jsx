import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='flex items-center justify-between px-4  fixed top-0 left-0 min-w-screen z-[9999] '>        
      <h1 className='text-[8px] md:text-[20px] lg:text-2xl font-bold tracking-wide text-[#3A2F1F]'>Maryam Hamrah</h1>

      <div className='w-[150px] md:w-[250px] lg:w-[350px] bg-[#FAF3E0] p-3 rounded-b-2xl shadow-md text-[#3A2F1F] text-center'>
        <ul className='flex justify-between font-medium'>
            <li className='transition hover:-translate-y-1 text-[8px] md:text-[16px] lg:text-[20px]'><a href="#Home">Home</a></li>
            <li className='transition hover:-translate-y-1  text-[8px] md:text-[16px] lg:text-[20px]' ><a href="#About">About</a></li>
            <li className='transition hover:-translate-y-1  text-[8px] md:text-[16px] lg:text-[20px]'><a href="#Projects">Projects</a></li>
            <li className='transition hover:-translate-y-1  text-[8px] md:text-[16px] lg:text-[20px]'><a href="#Contact">Contact</a></li>
        </ul>
      </div>
      <div className='flex gap-2 text-2xl '>
        <button className='text-[#3A2F1F] text-[8px] md:text-[16px] lg:text-[24px]'>  <FaLinkedin />  </button>
        <button className='text-[#3A2F1F] text-[8px] md:text-[16px] lg:text-[24px]'>  <FaGithub />  </button>
        <button className='text-[#3A2F1F] text-[8px] md:text-[16px] lg:text-[24px]'>  <FaYoutube />  </button>
        
      </div>
    </nav>
  )
}

export default Navbar
