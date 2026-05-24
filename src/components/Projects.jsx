import React from 'react';

import { useState } from 'react';

function Projects() {
    const projects =[
        {
            name:"Personal Webpage" ,
            image:"/images/project1.png",
            description:"My first project built with HTML and CSS to introduce myself, share my goals, interests, and create a simple personal presentation page.",
            link:"https://maryam-hamrah1.github.io/personal_package/",
            techStack: ["HTML"," " ,"CSS"],
            featured:false,
        },

        {
            name:"Cinema Star" ,
            image:"/images/project2.png"  ,
            description:"An interactive movie theater website focused on delivering an engaging experience with structured content and a visually balanced layout." ,
            link:"https://maryam-hamrah1.github.io/movie-theater-page/",
            techStack: ["HTML", " ","CSS"],
            featured:true,
        },

        {
            name:"Hamrah High School" ,
            image:"/images/project3.png"  ,
            description:"A school management interface created to organize educational information and improve access through a simple user experience." ,
            link:"https://maryam-hamrah1.github.io/School_Portal/",
            techStack: ["HTML"," " ,"CSS" , " ","JavaScript"],
            featured:"ture",
        },

        {
            name:"HamrahHub" ,
            image:"/images/project4.png"  ,
            description:"A client and invoice management application that helps organize freelance workflow, track records, and simplify project handling." ,
            link:"https://maryam-hamrah1.github.io/Freelance-Invoice---Client-Manager/",
            techStack: ["HTML"," " ,"CSS" , " ","JavaScript"],
            featured:"true",
        },

    ];

    const [current, setCurrent] = useState(0);
    
    const nextProject = () => {
        setCurrent((prev) => 
        prev === projects.length - 1 ? 0 : prev + 1);
    };

    const previousProject = () =>{
        setCurrent((prev) =>
        prev === 0 ? projects.length  -1 : prev-1
        );
    };

  return (
    <section className=' max-w-full  min-h-screen py-20 px-10 bg-[#E6D5B8] ' >
        <h1 className='  ml-22 text-left gap-8 text-[#3A2F1F] font-bold text-3xl mb-5' >My Projects</h1>

        <div className='flex flex-col md:flex-row  gap-10  items-center justify-center gap-8 '>
            
            <button onClick={previousProject} className= ' text-[#3A2F1F] font-bold'>Back ← </button>
            {projects 
            .filter((_, index) => index === current)
            .map((project, index) =>(
                <div
                    key={index}
                    className="flex gap-5 w-auto h-auto p-2  rounded-2xl  overflow-hidden shadow-xl bg-[#FAF3E0]"
                    >
                    <img src={project.image} alt={project.name} className='w-800 h-100 rounded-2xl object-cover'/>
                    <div>
                        
                        <h2 className='text-2xl font-bold mb-4 text-[#3A2F1F] text-left'>{project.name}</h2>
                        <p className='text-[#3A2F1F] font-bold mt-15 mb-10 h-[110px]'>{project.description}</p>
                        <div>
                            {project.techStack.map((tech, techIndex) =>(
                                <span key={techIndex} className='text-[#3A2F1F] font-bold'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                       <div className=' flex gap-2'>
                         {project.featured && (
                            <span className='bg-[#3A2F1F] rounded p-1 text-[#E6D5B8] '>⭐ Featured</span>
                        )}
                        <a href={project.link} target='_blank' rel='noopener noreferrer' className='bg-[#3A2F1F] rounded p-1 text-[#E6D5B8]'>View Project</a>
                       </div>
                    </div>
                    
                </div>
            ))}

            <button onClick={nextProject} className= ' text-[#3A2F1F] font-bold'>Next →</button>
            
            
        </div>
    </section>
  )
}

export default Projects
