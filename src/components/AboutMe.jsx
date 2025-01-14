import React from "react";
import { FaGraduationCap, FaCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="py-20 bg-white px-4 md:px-16 dark:bg-black dark:text-white"
      data-aos="fade-up"
    >
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-x-8"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        {/* Left Column: Image */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          data-aos="zoom-in"
        >
          <img
            src="/assets/new gate photo image2.jpg"
            alt="About Me"
            className="rounded-lg shadow-lg w-72 h-75 object-cover"
          />
        </div>

        {/* Right Column: About Me Content */}
        <div
          className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 flex flex-col justify-center text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">About Me</h2>
          <p className="text-gray-600 leading-relaxed dark:text-white">
            I'm a full-stack developer with expertise in the MERN stack. I
            specialize in building responsive web applications and have strong
            skills in both frontend and backend development. I'm proficient in
            HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.
            I also have knowledge in C and C++. I'm passionate about
            problem-solving and regularly practice coding problems to sharpen
            my skills.
          </p>

          {/* Two Cards: Coding Platforms and Education */}
          <div
            className="mt-8 flex flex-col md:flex-row items-stretch gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Coding Platforms Card */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col items-center space-y-2 w-full sm:w-[48%] md:w-1/2 lg:w-[48%]">
              <FaCode className="text-green-500 w-10 h-10" data-aos="zoom-in" />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Coding Platforms</h3>
                <div className="mt-2 flex justify-center space-x-2">
                  <a
                    href="https://leetcode.com/u/codingali/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-yellow-600"
                  >
                    LeetCode
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/user/ansarialiakbar2001/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600"
                  >
                    GFG
                  </a>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col items-center space-y-2 w-full sm:w-[48%] md:w-1/2 lg:w-[48%]">
              <FaGraduationCap
                className="text-blue-500 w-10 h-10"
                data-aos="zoom-in"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Education</h3>
                <p className="text-gray-600 text-sm">
                  B.Tech in Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
