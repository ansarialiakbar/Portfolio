import React from "react";
import { Link } from "react-scroll";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"; // Heroicon for the download icon

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-white-100 text-center dark:bg-black dark:text-white"
    >
      {/* Profile Image */}
      <div
        className="relative z-0 flex items-center justify-center mt-20 sm:mt-24 lg:mt-28"
        data-aos="fade-down" // Animation for the profile image
      >
        <div className="rounded-full overflow-hidden w-40 h-40 sm:w-48 sm:h-48 lg:w-55 lg:h-55 shadow-lg">
          <img
            src="src\assets\new gate photo image2.jpg" // Replace with your actual image path
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Introduction */}
      <h3
        className="text-lg font-semibold mt-6 max-w-md dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-purple-400 to-pink-600"
        data-aos="fade-up" // Animation for the introduction text
        data-aos-delay="200" // Adds a slight delay
      >
        Hi! I'm Ali Akbar Ansari
      </h3>
      <h1
        className="text-4xl font-bold mt-4 dark:text-white"
        data-aos="zoom-in" // Animation for the main heading
        data-aos-delay="400"
      >
        I'm Full Stack Web Developer
      </h1>
      <p
        className="text-lg mt-4 max-w-md"
        data-aos="fade-up" // Animation for the paragraph
        data-aos-delay="600"
      >
        I am a passionate Full-Stack Developer specializing in the <b>MERN stack</b>
        (MongoDB, Express.js, React.js, Node.js). I enjoy building responsive
        and user-friendly web applications, combining functionality with
        aesthetics to create seamless user experiences.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-6" data-aos="fade-up" data-aos-delay="800">
        {/* Contact Me Button */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer dark:bg-pink-700 dark:hover:bg-pink-900"
        >
          Contact Me
        </Link>

        {/* Download Resume Button */}
        <a
          href="/your-resume.pdf"
          download="Your_Resume.pdf"
          className="flex items-center bg-black text-white py-2 px-4 rounded-full cursor-pointer dark:border"
        >
          <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </div>

      {/* Add spacing between Home and About Me sections */}
      <div className="mt-16" />
    </section>
  );
};

export default Home;
