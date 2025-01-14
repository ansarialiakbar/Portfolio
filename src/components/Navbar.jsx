import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Effect to persist the dark mode setting
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className="relative z-10 bg-white shadow-lg dark:bg-black dark:text-white"
      data-aos="fade-down"
    >
      <div
        className="container mx-auto flex justify-between items-center p-4"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        {/* Left side - Logo */}
        <div
          className="flex items-center space-x-1"
          data-aos="zoom-in" // Adds a zoom-in animation for the logo
        >
          <span
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-110 transition-transform duration-500"
            data-aos="fade-up" // Adds a fade-up animation for the logo
          >
            Ali Akbar
          </span>
        </div>

        {/* Center Links - Hidden on mobile */}
        <div
          className="hidden lg:flex space-x-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {["Home", "About Me", "Projects", "Technical Skills", "Contact Me"].map(
            (link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-md font-semibold text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 px-2 py-1 rounded-md transition-all"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Right Side - Theme Toggle and Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="text-2xl"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>

          {/* Hamburger Icon - Visible on mobile */}
          <div
            className="lg:hidden"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? (
                <FaTimes className="text-3xl text-gray-700" />
              ) : (
                <FaBars className="text-3xl text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-white shadow-md dark:bg-gray-800 z-50 lg:hidden"
          onClick={() => setMenuOpen(false)}
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About Me", "Projects", "Technical Skills", "Contact Me"].map(
              (link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-xl text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
