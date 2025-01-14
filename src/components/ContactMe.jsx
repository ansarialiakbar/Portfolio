import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:aaxa54321@gmail.com?body=${encodeURIComponent(
      `From: ${name}\nEmail: ${email}\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white px-4 md:px-16 dark:bg-black dark:text-white"
    >
      <h2
        className="text-3xl font-bold mb-8 text-center dark:text-white"
        data-aos="fade-up"
      >
        Contact Me
      </h2>

      <div className="flex justify-center  flex-col space-y-8">
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-4 dark:text-white">Get in Touch</h3>
          <p className="text-gray-600 mb-6 dark:text-white">
            Feel free to reach out to me for any inquiries or collaboration!
          </p>

          {/* Contact Form */}
          <div
            className="bg-white p-8 rounded-lg m-auto shadow-lg w-full max-w-5xl"
            data-aos="zoom-in"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Two-column layout */}
              <div className="flex flex-col md:flex-row gap-8 ">
                {/* Left Column */}
                <div className="w-full md:w-[60%] space-y-4 ">
                  <div>
                    <label htmlFor="name" className="block text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg mt-2 shadow-md dark:text-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg mt-2 shadow-md dark:text-gray-700"
                      required
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-[90%] flex flex-col">
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg mt-2 shadow-md dark:text-gray-700"
                    rows="8"
                    style={{ minHeight: "250px" }}
                    required
                  ></textarea>

                  {/* Submit Button */}
                  <div className="text-right mt-4 ">
                    <button
                      type="submit"
                      className="bg-blue-500  text-white py-2 px-6 rounded-2xl hover:bg-blue-700 transition-colors dark:bg-pink-700 dark:hover:bg-pink-900"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Social Media Icons */}
          <div
            className="flex justify-center space-x-8 mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="https://github.com/ansarialiakbar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ali-akbar-ansari-b9a42b21b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-700  hover:text-blue-900 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:aaxa54321@gmail.com"
              className="text-3xl text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
