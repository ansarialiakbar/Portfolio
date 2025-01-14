import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGitAlt } from "react-icons/fa"; // Importing icons from React Icons
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman } from "react-icons/si"; // Importing additional icons

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNode className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-green-500 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  { name: "Postman", icon: <SiPostman className="text-red-500 text-4xl" /> },

];

const TechnicalSkills = () => {
  return (
    <section
      id="technical-skills"
      className="py-20 bg-white px-4 md:px-16 dark:bg-black dark:text-white"
      data-aos="fade-up" // Adds a fade-up animation for the section
    >
      <h2
        className="text-3xl font-bold text-center mb-8 dark:text-white"
        data-aos="zoom-in" // Adds a zoom-in animation for the heading
      >
        Technical Skills
      </h2>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        data-aos="fade-up" // Adds a fade-up animation for the grid container
        data-aos-delay="200"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
            data-aos="zoom-in" // Adds a zoom-in animation for each skill card
            data-aos-delay={`${100 * index}`} // Staggered animation delay for each skill card
          >
            <div className="mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
