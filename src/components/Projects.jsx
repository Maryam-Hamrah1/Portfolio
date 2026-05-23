import React, { useState } from "react";

function Projects() {
  const projects = [
    {
      name: "Personal Webpage",
      image: "/images/project1.png",
      description: "My first project built with HTML and CSS...",
      link: "https://maryam-hamrah1.github.io/personal_package/",
      techStack: ["HTML", "CSS"],
      featured: false,
    },
    {
      name: "Cinema Star",
      image: "/images/project2.png",
      description: "An interactive movie theater website...",
      link: "https://maryam-hamrah1.github.io/movie-theater-page/",
      techStack: ["HTML", "CSS"],
      featured: true,
    },
    {
      name: "Hamrah High School",
      image: "/images/project3.png",
      description: "A school management interface...",
      link: "https://maryam-hamrah1.github.io/School_Portal/",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
    {
      name: "HamrahHub",
      image: "/images/project4.png",
      description: "A client and invoice management app...",
      link: "https://maryam-hamrah1.github.io/Freelance-Invoice---Client-Manager/",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const previousProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="w-full min-h-screen snap-start py-16 md:py-20 px-4 md:px-10 bg-[#E6D5B8]">
      {/* Title */}
      <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold text-[#3A2F1F] mb-8">
        My Projects
      </h1>

      {/* Slider Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Prev Button */}
        <button
          onClick={previousProject}
          className="text-[#3A2F1F] font-bold text-lg md:text-xl px-4 py-2"
        >
          ← Back
        </button>

        {/* Project Card */}
        {projects
          .filter((_, index) => index === current)
          .map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row w-full max-w-5xl bg-[#FAF3E0] rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full md:w-1/2 h-56 md:h-auto object-cover"
              />

              {/* Content */}
              <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6 text-[#3A2F1F]">
                <h2 className="text-xl md:text-2xl font-bold">
                  {project.name}
                </h2>

                <p className="text-sm md:text-base text-justify">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs md:text-sm font-bold bg-[#E6D5B8] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 items-center">
                  {project.featured && (
                    <span className="bg-[#3A2F1F] text-[#E6D5B8] px-2 py-1 rounded text-xs md:text-sm">
                      ⭐️ Featured
                    </span>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3A2F1F] text-[#E6D5B8] px-3 py-1 rounded text-xs md:text-sm"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}

        {/* Next Button */}
        <button
          onClick={nextProject}
          className="text-[#3A2F1F] font-bold text-lg md:text-xl px-4 py-2"
        >
          Next →
        </button>
      </div>
    </section>
  );
}

export default Projects;