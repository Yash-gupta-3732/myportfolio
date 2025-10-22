import React from "react";
import { motion } from "framer-motion";
import {
  FaUserAstronaut,
  FaGraduationCap,
  FaCode,
  FaTools,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

function AboutMe() {
  const sections = [
    {
      icon: <FaUserAstronaut className="text-pink-400 text-4xl" />,
      title: "Passionate About",
      content:
        "Hi, I’m Yash Gupta — a passionate web developer who loves building intuitive, interactive, and user-friendly web experiences. I blend clean design with efficient code to bring ideas to life on the web.",
    },
    {
      icon: <FaGraduationCap className="text-purple-400 text-4xl" />,
      title: "Education",
      content:
        "I’m currently pursuing my B.Tech in Information Technology from CGIT Jagdalpur, and I’m in my 7th semester.",
    },
    {
      icon: <FaCode className="text-blue-400 text-4xl" />,
      title: "Expertise",
      content:
        "I specialize in front-end development using React and Tailwind CSS, and I enjoy creating modern, responsive interfaces. I also have experience integrating APIs, managing back-end services, and optimizing user experiences.",
    },
    {
      icon: <FaTools className="text-green-400 text-4xl" />,
      title: "Tech Stack / Tools",
      content:
        "React, Node.js, Express, MongoDB, Tailwind CSS, Bootstrap, Git, and Github.",
    },
    {
      icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
      title: "Approach / Philosophy",
      content:
        "I believe great web experiences come from a perfect balance of functionality and creativity. My goal is to build products that not only look good but also perform flawlessly.",
    },
    {
      icon: <FaHandshake className="text-cyan-400 text-4xl" />,
      title: "Let's Connect!",
      content:
        "I’m always excited to collaborate on interesting projects or discuss new ideas. Feel free to reach out — let’s create something great together!",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col text-white">
      {/* 🔮 Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,_#001933,_#280046,_#002342,_#003366)] bg-[length:400%_400%]"></div>

      {/* 🌫️ Glassmorphic Sections */}
      <div className="relative z-10 py-16 px-6 flex justify-center">
        <div className="max-w-5xl w-full space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6 md:gap-10`}
            >
              {/* Glass Card */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center md:items-start 
                bg-[rgba(255,255,255,0.08)] backdrop-blur-lg border border-white/20 
                rounded-2xl p-6 md:p-8 shadow-lg w-full md:w-1/2"
              >
                <div className="flex items-center gap-3 mb-3">
                  {section.icon}
                  <h1 className="text-2xl sm:text-3xl font-semibold bg-[linear-gradient(45deg,_#ff00b4,_#6a00ff)] text-transparent bg-clip-text">
                    {section.title}
                  </h1>
                </div>
                <p className="leading-relaxed text-gray-200">
                  {section.content}
                </p>
              </motion.div>

              {/* Optional subtle gradient accent */}
              <div className="hidden md:block w-1/2">
                <div
                  className={`h-1 w-2/3 ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-purple-400/40 to-transparent"
                      : "bg-gradient-to-l from-purple-400/40 to-transparent"
                  } rounded-full mx-auto`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
