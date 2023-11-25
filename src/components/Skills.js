// Skills.js
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJs, FaNode, FaAngular, FaBootstrap, FaDatabase, FaCheck, FaGit, FaJava, FaPhp, FaTypo3, FaWordpress, FaLaravel } from 'react-icons/fa';

const Skills = () => {
  const developmentSkills = [
    { name: 'TypeScript', icon: <FaJs /> },
    { name: 'NodeJS', icon: <FaNode /> },
    { name: 'ExpressJS', icon: <FaNode /> }, 
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'PosgreSQL', icon: <FaDatabase /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'jQuery', icon: <FaJs /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'HTML & CSS', icon: <FaHtml5 /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'JSON', icon: <FaJs /> }, 
    { name: 'Typo3', icon: <FaTypo3 /> },
    { name: 'WordPress', icon: <FaWordpress /> },
    { name: 'WooCommerce', icon: <FaWordpress /> },
    { name: 'SpringBoot', icon: <FaJava /> },
    { name: 'Laravel & VueJs', icon: <FaLaravel /> },
    { name: 'Redux', icon: <FaReact /> },
  ];

  const tools = [
    'Git + Github', 'Command Line', 'Chrome DevTools', 'Grunt + Gulp', 'Postman' ,'Jira'
  ];

  return (
    <section id="skills" className="py-16 bg-black text-white">
      <div className="container mx-auto py-12 px-8 md:py-16 md:px-12 rounded-md mb-8">
        <h3 className="text-4xl font-bold mb-6 text-white">Skills</h3>

        {/* Development Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-500">DEVELOPMENT</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {developmentSkills.map((skill, index) => (
              <li key={index} className="flex items-center p-4 bg-yellow-900 rounded-md transform transition-transform hover:scale-105">
                <div className="mr-2 text-yellow-500">{skill.icon}</div>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

       {/* Tools */}
<div className="mb-12">
  <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-500">TOOLS</h3>
  <div className="flex flex-wrap justify-center">
    {tools.map((tool, index) => (
      <div
        key={index}
        className={`flex items-center mb-4 mx-2 ${index === 0 ? '' : 'mr-4'} w-full sm:w-auto`}
      >
        <FaCheck className="mr-2 text-yellow-500" />
        {tool}
      </div>
    ))}
  </div>
</div>

</div>
    </section>
  );
};

export default Skills;
