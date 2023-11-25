import React from 'react';
import '../styles/main.css'; // Import Tailwind CSS styles
import profileImage from '../photos/d.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Photo on the left */}
        <div className="md:w-1/2 md:pr-8 text-center mb-6 md:mb-0">
          <img
            src={profileImage} // Replace with the path to your improved photo
            alt="Edita Latifi"
            className="w-70 h-80 md:w-76 md:h-96 rounded-full border-3 border-white mb-10 shadow-lg mx-auto"
          />
        </div>

         {/* Text on the right */}
<div className="md:w-1/2 text-center md:text-left">
  <h2 className="text-4xl font-bold mb-4">Greetings, I'm Edita.</h2>
  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
    As a dedicated Full Stack Engineer, I excel in seamlessly integrating sophisticated code with captivating design aesthetics. My expertise ranges from solving intricate coding challenges to crafting robust web applications.
  </p>
  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
    Welcome to my realm of coding and design. I bring creativity and precision to every project. My portfolio showcases a diverse range of work, from elegant landing pages to cutting-edge progressive web applications.
  </p>
  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
    I thrive on continuous learning, always exploring new and improved ways to create seamless user experiences with clean, efficient, and scalable code. My primary goal is to deliver outstanding solutions.
  </p>
  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
    My professional journey has seen me in roles where I serve as a problem-solving innovator, contributing to the development of robust applications that shape the future of software solutions. Projects that highlight my creativity, technical expertise, and commitment to excellence.
  </p>
  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
    Beyond coding, you'll find me exploring the world, attending inspiring Tech Conferences, and consistently expanding my horizons. Join me on this exciting journey of innovation and creativity!
  </p>
</div>
      </div>
    </section>
  );
};

export default About;
