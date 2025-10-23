import React from "react";
import { motion } from "framer-motion";
import portfolioimage from "../Assets/portfolioimage.png";
import "../App.css";

function Home() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#1a0b2e] overflow-hidden text-white">
      {/*Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,_#001933,_#280046,_#002342,_#003366)] bg-[length:400%_400%] opacity-90"></div>

      {/*Glassmorphic Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col min-[960px]:flex-row items-center justify-center gap-10 md:gap-16 p-8 md:p-12"
      >
        {/* Profile Image Card */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="rounded-full border-2 border-purple-500 bg-white/10 backdrop-blur-lg p-4 sm:p-6 shadow-lg"
        >
          <img
            src={portfolioimage}
            alt="Yash Gupta"
            className="rounded-full object-cover w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80"
          />
        </motion.div>

        {/*Intro Text Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center min-[960px]:text-left min-[960px]:w-[50%] bg-white/10 backdrop-blur-md border-2 border-purple-500 rounded-2xl shadow-lg p-6"
        >
          <h1 className="text-4xl sm:text-4xl font-bold leading-tight mb-4">
            Hi There 👋 <br />
            I'm{" "}
            <span className="bg-[linear-gradient(45deg,_#ff00b4,_#6a00ff)] text-transparent bg-clip-text">
              Yash Gupta
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6 leading-relaxed">
            A curious mind and a <span className="text-purple-400">MERN Stack Developer</span> who loves building digital experiences that
            blend design, logic, and purpose.
            From crafting sleek React interfaces to designing robust Node.js & Express backends,
            I enjoy turning ideas into smooth, scalable web apps.
            <br />
            <br />
            Always learning, always creating — one line of code at a time. 🚀
          </p>

          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#6a00ff",
              boxShadow: "0 0 20px rgba(106, 0, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
            className="inline-block px-6 py-3 bg-[#212143] text-white rounded-lg shadow-md font-semibold tracking-wide"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
