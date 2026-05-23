import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className='w-full bg-[#3A2F1F] border-[#FAF3E0] border-4 p-6 md:p-10 flex flex-col gap-8 md:gap-10'>

      {/* Title */}
      <h1 className='text-[#FAF3E0] text-2xl md:text-3xl font-bold text-center md:text-left'>
        Let's Connect
      </h1>

      {/* LinkedIn */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6'>
        <a href="https://www.linkedin.com/in/maryam-hamrah-5187442ab"
          className='text-3xl md:text-4xl text-[#FAF3E0]'>
          <FaLinkedin />
        </a>

        <h3 className='text-sm md:text-xl text-[#FAF3E0] break-all'>
          linkedin.com/in/maryam-hamrah-5187442ab
        </h3>
      </div>

      {/* GitHub */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6'>
        <a href="https://github.com/Maryam-Hamrah1"
          className='text-3xl md:text-4xl text-[#FAF3E0]'>
          <FaGithub />
        </a>

        <h3 className='text-sm md:text-xl text-[#FAF3E0] break-all'>
          github.com/Maryam-Hamrah1
        </h3>
      </div>

      {/* YouTube */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6'>
        <a href=""
          className='text-3xl md:text-4xl text-[#FAF3E0]'>
          <FaYoutube />
        </a>

        <h3 className='text-sm md:text-xl text-[#FAF3E0]'>
          Maryam-Hamrah
        </h3>
      </div>

      {/* Copyright */}
      <p className='font-bold text-[#FAF3E0] mt-6 text-center text-sm md:text-base'>
        © {new Date().getFullYear()} Maryam Hamrah
      </p>

    </footer>
  )
}

export default Footer
