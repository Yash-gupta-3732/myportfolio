import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGit,
  SiJirasoftware
} from 'react-icons/si';
import { BsLightbulb, BsBook } from 'react-icons/bs';

function Skill() {
  const skillSections = [
    {
      title: "Frontend Development",
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "Redux", icon: <SiRedux className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
      ],
    },
    {
      title: "Backend Development",
      color: "from-green-400 to-emerald-600",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      ],
    },
    {
      title: "Other Skills",
      color: "from-indigo-400 to-purple-600",
      skills: [
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Agile & Scrum", icon: <SiJirasoftware className="text-blue-500" /> },
        { name: "Problem Solving", icon: <BsLightbulb className="text-yellow-400" /> },
        { name: "Continuous Learning", icon: <BsBook className="text-pink-400" /> },
      ],
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 bg-gradient-to-br from-[#1e0e2b] via-[#261a39] to-[#36244d] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25)_0%,transparent_70%)] pointer-events-none" />

      {/* Title */}
      <h1 className="text-center mt-8 text-4xl sm:text-5xl font-bold mb-4 bg-[linear-gradient(45deg,_#ff00b4,_#6a00ff)] bg-clip-text text-transparent w-full p-2">
        My Skills
      </h1>
       <p className="text-center text-gray-300 mb-10">
        A showcase of my technical proficiencies and tools I excel in.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl pb-16">
        {skillSections.map((section, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-black/10 border border-white/20 rounded-2xl shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
          >
            <h2 className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
