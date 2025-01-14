import React, { useEffect } from "react";

const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center dark:text-white z-50"
      role="dialog"
      aria-labelledby="project-title"
      aria-describedby="project-description"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-11/12 max-w-4xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-black dark:text-white absolute top-4 right-4"
          aria-label="Close modal"
        >
          ✕
        </button>

        {project ? (
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: Project Image */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Project Title, Description, and Links */}
            <div className="md:w-1/2">
              <h2
                id="project-title"
                className="text-3xl font-bold mb-4 dark:text-yellow-500"
              >
                {project.title}
              </h2>
              <p
                id="project-description"
                className="text-lg whitespace-pre-line mb-6"
              >
                {project.description}
              </p>

              {/* Updated techStack Section */}
              <div
                className="text-lg whitespace-pre-line mb-6 tracking-wide"
              >
                <span className="font-bold dark:text-yellow-300 ">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-1 px-2 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons for GitHub and Deployed Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 text-white py-2 px-4 rounded-2xl hover:bg-gray-600"
                  >
                    GitHub Link
                  </a>
                )}
                {project.deployed && (
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600"
                  >
                    Deployed Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading project details...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
