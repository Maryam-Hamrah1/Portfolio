import React from 'react'


function Profile(props){
  return (
    <section className='max-w-full h-screen snap-start scroll-mt-20   bg-[#E6D5B8] shadow-lg p-4 md:p-10 flex flex-col 
    md:flex-row  gap-6 md:gap-10 
    hover:shadow-2xl transition'>
        <div className='bg-gradient-to-r from-[#EED9A3] to-[#E6D5B8] flex items-center  mt-15  justify-center w-[95%] h-[300px] md:h-auto overflow-hidden'>
            <img src={props.photo} alt="profile"
            className='w-full h-full object-cover border-4 border-white' />
        </div>
        <div className=' text-left mt-15 flex flex-col gap-4 md:gap-15 w-[95%]'>

            <h2 className='text-[#3A2F1F] font-bold text-2xl md:text-4xl'>{props.name}</h2>
            
            <div className='space-y-1 md:space-y-2'>
                <p className='text-[#3A2F1F] font-medium text-sm md:text-base '>{props.role}</p>
                <p className='font-medium text-[#3A2F1F] text-sm md:text-base'>Location: {props.location}</p>
                <p className='font-medium text-[#3A2F1F] text-sm md:text-base'>Email: {props.email}</p>
                <p className='font-medium text-[#3A2F1F] text-sm md:text-base'>Status: {props.status}</p>
                <p className='font-medium text-[#3A2F1F] text-sm md:text-base'>Projects: {props.projects}</p>
            </div>

            <p className='font-medium text-[#3A2F1F] text-sm md:text-base text-justify leading-relaxed'>{props.bio}</p>
        </div>

    </section>
  )
}

export default Profile
