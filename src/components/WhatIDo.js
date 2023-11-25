// WhatIDo.js
import React from 'react';
import backgroundImg from '../photos/pexels-rostislav-uzunov-5011647.jpg';

const WhatIDo = () => {
  return (
    <section id="WhatIDo" className="py-16 bg-cover bg-center text-white" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="container mx-auto my-8">
        <div className="py-12 px-8 md:py-16 md:px-12 rounded-md mb-8 bg-black bg-opacity-60">
          <h3 className="text-4xl font-bold mb-6 text-white">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="grid grid-cols-1">
              {[
                { title: 'Full Stack Development', content: 'As a Full Stack Developer, I specialize in both frontend and backend technologies, creating seamless and efficient web applications. I work with HTML, CSS, JavaScript, and more to deliver robust and scalable solutions.' },
                { title: 'API Integration', content: 'I excel in integrating APIs to enhance the functionality of web applications. Whether it\'s connecting with third-party services or developing custom APIs, I ensure seamless communication between different systems.' },
                { title: 'Database Management', content: 'My expertise includes designing and managing databases to store and retrieve data efficiently. I work with various database systems to ensure optimal performance and data integrity.' },
                { title: 'System Architecture', content: 'I contribute to system architecture, ensuring that applications are structured for scalability and maintainability. My focus is on creating robust and well-organized systems.' },
              ].map((item, index) => (
                <div key={index} className="mt-4">
                  <div className="flex items-center">
                    <div className="w-8 h-1 bg-yellow-500 mr-2"></div>
                    <h4 className="text-2xl font-semibold mb-2 text-yellow-500">{item.title}</h4>
                  </div>
                  <div className="mx-auto max-w-md relative">
                    <p className="text-gray-300 mt-2 mb-2">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:border-l-2 md:border-gray-600 md:pl-8">
              {[
                { title: 'Mentorship in Internship Programs', content: 'I actively participate in mentoring programs for interns, guiding them through practical aspects of software development and providing valuable insights into industry practices.' },
                { title: 'Trainer and Educator', content: 'As a trainer, I share my knowledge and expertise with aspiring developers through workshops, courses, and educational programs, fostering a community of continuous learning.' },
                { title: 'Digital Service Consultant', content: 'I offer digital services as a consultant, specializing in problem-solving and providing strategic insights. My goal is to deliver outstanding solutions that address clients\' specific needs and challenges.' },
                { title: 'Exceptional Programming Proficiency', content: 'With a fervor for coding excellence, I bring a creative and analytical approach to programming. My ability to solve complex problems and deliver efficient solutions sets me apart as an outstanding programmer.' },
              ].map((item, index) => (
                <div key={index} className="mt-4">
                  <div className="flex items-center">
                    <div className="w-8 h-1 bg-yellow-500 mr-2"></div>
                    <h4 className="text-2xl font-semibold mb-2 text-yellow-500">{item.title}</h4>
                  </div>
                  <div className="mx-auto max-w-md relative">
                    <p className="text-gray-300 mt-2 mb-2">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
