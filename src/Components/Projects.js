import React from 'react';
import notebook from "../Assets/NOTEBOOK.webp";
import cloud from "../Assets/cloudy-weather.webp";
import portfolioweb from "../Assets/Professional-portfolio.webp";
import spotify from "../Assets/spotify.webp";
import placementcell from "../Assets/University-Placement-Cell.webp";
import { SiGithub } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Projects() {
  const cards = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS, showcasing my work, projects, and experience with smooth animations and a glassmorphic design.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: portfolioweb,
      projectLink: null,
      githubLink: "https://github.com/Yash-gupta-3732/myportfolio-frontend",
    },
    {
      title: "Weather App",
      description: "A real-time weather app powered by the OpenWeatherMap API with a sleek, animated interface. featuring the Smart Weather Tracker that delivers live AQI, UV, and severe weather alerts through notification.",
      techStack: ["React Native", "API Integration"],
      imageUrl: cloud,
      projectLink: "https://github.com/Yash-gupta-3732/react-native-weather-app/releases/download/v1.0.0/app-release.apk",
      githubLink: "https://github.com/Yash-gupta-3732/react-native-weather-app",
    },
    {
      title: "i-notebook",
      description: "A secure note-taking app with user authentication, allowing users to create, edit, delete and share notes seamlessly with a clean UI.",
      techStack: ["MongoDB", "Express", "React", "Node.js","Context Api"],
      imageUrl: notebook,
      projectLink: "https://inotebook-frontend-one.vercel.app/#/login",
      githubLink: "https://github.com/Yash-gupta-3732/inotebook",
    },
    {
      title: "Spotify Clone",
      description: "A Spotify music player clone built with Html ,Css and Javascript. with music playback, and a responsive sleek UI for an immersive experience.", 
      techStack: ["HTML", "CSS", "JavaScript","fetch API"],
      imageUrl: spotify,
      projectLink: "https://www.linkedin.com/posts/yash-gupta-004499256_webdevelopment-spotifyclone-responsivewebsite-activity-7199293078350831618-qPOu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8TZcQB7oqdDfl0-_Wn-W0MxdupauJs6SU",
      githubLink:"https://github.com/Yash-gupta-3732/spotify-clone"
    },
    {
      title: "Placement Portal Website",
      description: "A comprehensive placement management system for universities, streamlining student registrations, company listings, and placement statistics.", 
      techStack: ["PHP", "JS", "HTML", "CSS","MySQL"],
      imageUrl: placementcell,
      projectLink: "https://yourplacementportal.rf.gd/?i=1",
      githubLink: "https://github.com/Yash-gupta-3732/placement_portal_website"
    },

  ];

  return (
    <section className="relative flex flex-col min-h-screen px-6 sm:px-10 bg-gradient-to-br from-[#1e0e2b] via-[#261a39] to-[#36244d] text-white overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)]" />

      {/* Section title */}
      <h1 className="text-center mt-8 text-4xl sm:text-5xl font-bold mb-2 bg-[linear-gradient(45deg,_#ff00b4,_#6a00ff)] bg-clip-text text-transparent p-2">
        Projects
      </h1>
      <p className="text-center text-gray-300 mb-10">
        A showcase of my creative and technical work — blending design, code, and innovation.
      </p>

      {/* Cards Grid */}
      
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pb-16">
        {cards.map((card, index) => (
           <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row items-center gap-6 md:gap-10`}
                      >
          <div
            className="w-full max-w-sm rounded-2xl bg-black/10 backdrop-blur-lg border border-white/20 p-5 hover:scale-[1.03] transition-all duration-300 shadow-xl hover:shadow-purple-500/30"
          >
            {/* Image */}
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4 border border-white/10">
              <img
                className="w-full h-full object-fill hover:scale-105 transition-transform duration-500"
                src={card.imageUrl}
                alt={card.title}
              />
            </div>

            {/* Text Content */}
            <h2 className="text-2xl font-bold mb-2 text-white">{card.title}</h2>
            <p className="text-gray-300 text-sm mb-4">{card.description}</p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {card.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-600/30 border border-purple-400/50 px-3 py-1 rounded-full text-sm text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className={`flex ${card.projectLink?'justify-between':'justify-end'}`}>
            { card.projectLink && <a
                href={card.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black hover:bg-[#6a00ff] transition-all px-3 py-2 rounded-md text-sm font-medium"
              >
                View Project <BsBoxArrowUpRight />
              </a>}
              <a
                href={card.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black/40 border border-white/20 hover:bg-black/60 transition-all px-3 py-2 rounded-md text-sm font-medium"
              >
                GitHub <SiGithub />
              </a>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
