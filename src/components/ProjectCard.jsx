import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="border rounded-lg shadow-md cursor-pointer bg-white hover:shadow-lg dark:bg-black dark:text-white"
      data-aos="fade-up" // Adds a fade-up animation to the card
      data-aos-delay="200" // Adds a delay for the animation
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Project Title */}
      <div className="p-4">
        <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
