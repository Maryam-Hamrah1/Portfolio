import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='flex  items-center justify-between px-3 '>        
      <h1 className='text-2xl font-bold tracking-wide'>Maryam Hamrah</h1>

      <div className='bg-gray-500 p-3 rounded-b-2xl shadow-md'>
        <ul className='flex gap-3 font-medium'>
            <li className='transition hover:-translate-y-1'><a href="Home">Home</a></li>
            <li className='transition hover:-translate-y-1'><a href="About"></a>About</li>
            <li className='transition hover:-translate-y-1'><a href="Projects">Projects</a></li>
            <li className='transition hover:-translate-y-1'><a href="Contact">Contact</a></li>
        </ul>
      </div>
      <div className='flex gap-2 text-2xl '>
        <button>  <FaLinkedin />  </button>
        <button>  <FaGithub />  </button>
        <button>  <FaYoutube />  </button>
        
      </div>
    </nav>
  )
}

export default Navbar
