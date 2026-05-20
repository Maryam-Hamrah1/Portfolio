import React from 'react'
import { useEffect, useState } from 'react'
import "./header.css"
function Header() {
    const [active, setActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
           setActive(true) 
        }, 3000);
        return() => clearTimeout(timer);
    }, []);

  return (
    <section className='header'>
        <img src=".\header-image.jpeg" alt="imag" className='backgroundImage' />
        <h1 className={`welcomeText ${active ? "hideText" : ""}`}>Welcome to my world.</h1>

        <div className={`panel ${active ? "showPanel" : ""}`}>
            <h3 className='welcomeMessage'>Welcome 🌿</h3>
            <p className='text'>A simple space where design meets creativity. 
                I focus on building clean, modern, and user-friendly digital 
                experiences that feel smooth, minimal, and meaningful.
                Explore my work and ideas-each project is crafted with care,
                 detial, and intention.
                 thanks for being here. 
            </p>
            
            <p className='text'>"Build today, shape tomorrow."</p>
        </div>
    </section>
  )
}

export default Header
