import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Project Data
const projects = [
  {
    id: 1,
    title: "Learning Management System (LMS)",
    image: "/assets/homePageMainImage.png",
    techStack: ["React.js", "Tailwind CSS", "Axios", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
    description:
      "Developed a full-stack application streamlining course management, user authentication, and payment processing with secure role-based access for admin and user roles.",
    github: "https://github.com/ansarialiakbar/LMS-full-stack",
    deployed: "https://lms-frontend-fr6z.onrender.com",
  },
  {
    id: 2,
    title: "Pokedex App",
    image: "/assets/pokemon-image.webp",
    techStack: ["React.js", "CSS"],
    description:
      "Built a dynamic web application using React.js to fetch and display Pokémon data from the PokéAPI, including images and types.",
    github: "https://github.com/ansarialiakbar/Pokedex",
    deployed: "https://pokedex-url.netlify.app",
  },
  {
    id: 3,
    title: "Amazon Clone",
    image: "/assets/amazon-image.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "Developed the frontend of an Amazon clone using HTML, CSS, and JavaScript.",
    github: "https://github.com/ansarialiakbar/Amazon-Clone",
    deployed: "https://amazon-clone-beta-ebon.vercel.app/",
  },
  {
    id: 4,
    title: "Weather App",
    image: "/assets/wheater-image.jpg",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "Developed a dynamic weather application that retrieves real-time data such as temperature, wind speed, and humidity using a public weather API.",
    github: "https://github.com/ansarialiakbar/Weather-App",
    deployed: "https://ansarialiakbar.github.io/Weather-App/",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-16 bg-white text-black dark:bg-black dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div data-aos="fade-up" key={project.id}>
            <ProjectCard project={project} onClick={handleProjectClick} />
          </div>
        ))}
      </div>

      {/* Modal for Active Project */}
      {activeProject && (
        <ProjectDetail
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
