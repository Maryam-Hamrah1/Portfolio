import React, { use } from "react";
import { useEffect, useState } from "react";

function Header() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [quote, setQuote] = useState("");
  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        setQuote(data.quote);
      } catch (error) {
        console.log(error);
      }
    };
    getQuote();
  }, []);

  return (
    <section className="relative min-w-screen h-screen overflow-hidden   snap-start">
      <img
        src="/images/header-image.jpg"
        alt="imag"
        className="absolute inset-0 w-full h-full object-cover -z-1"
      />

      <h1
        className={`absolute justify-center bottom-1 left-1 md:right-20  text-[14px] md:text-[24px] lg:text-3xl text-[#FAF3E0] font-bold p-2 transition-all duration-1000 
            ${active ? "translate-x-[300px] opacity-0" : ""}`}
      >
        Welcome to my world.
      </h1>

      <div
        className={`absolute top-0 left-0 h-full  bg-[#FAF3E0] flex flex-col justify-start gap-10 lg:gap-8  md:gap-16 text-left pt-16 pl-2 pr-2 md:pt-20 md:p-4 w-[50%] 
            md:w-[300px] lg:w-[350px] transition-transform duration-1000 ${active ? "translate-x-0" : "-translate-x-full "} `}
      >
        <h3 className="text-[#3A2F1F] text-[20px] md:text-[30px] font-bold">
          Welcome 🌿
        </h3>

        <p className="text-[#3A2F1F] text-[14px] md:text-[16px]  text-justify">
          A simple space where design meets creativity. I focus on building
          clean, modern, and user-friendly digital experiences that feel smooth,
          minimal, and meaningful. Explore my work and ideas-each project is
          crafted with care, detial, and intention. thanks for being here.
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-[#3A2F1F] mt-2 italic text-[14px] md:text-[16px]">
            " {quote || "loading...."}"{" "}
          </p>
          <p className="text-[#3A2F1F] text-[14px] md:text-[16px]">
            Unknown...
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
