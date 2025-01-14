import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply dark mode to the body
  useEffect(() => {
    
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 50, // Trigger offset in pixels
      once: true, // Whether animation should only happen once
    });

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`transition-all duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
