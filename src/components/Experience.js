import React from 'react';
import backgroundImage1 from '../photos/pexels-minh-phuc-18293808.jpg';

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto p-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage1})` }}
    >
      <h2 className="text-4xl font-bold mb-5 text-white">
        Experience
      </h2>

      {/* Experience items container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Line in the middle */}
        <div className="w-full mb-8 md:col-span-2 flex justify-center items-center">
          <div className="bg-white h-1 w-full"></div>
        </div>

        {/* Experience items */}
        {[
          {
            title: 'Wordpress Developer at Alkos, Prishtina',
            date: 'November 2019 – June 2021',
            role: 'Wordpress Developer | Project Leader',
            points: [
              'Developed and implemented a backup system for data integrity and quick recoveries',
              'Implemented a secure login system to protect user data'
            ],
            skills: 'Communication · E-commerce SEO · IP Addressing · Design · E-Commerce · Woo Commerce · Elementor'
          },
          {
            title: 'Front End Developer at SignSoft',
            date: 'February 2021 – February 2022',
            role: 'Front-End Developer | Typo3 Developer',
            points: [
              'Developed a responsive website optimized for both desktop and mobile devices',
              'Employed AJAX and JSON technologies for seamless data exchange',
              'Developed a custom theme for a content management system (CMS)'
            ]
          },
          {
            title: 'Full Stack Engineer at SignSoft',
            date: 'February 2022',
            points: [
              'Developed a full stack web application from scratch',
              'Worked with Laravel, Symphony, Python (Django), HTML5, CSS3, VueJs, Typo3, Databases, ReactJs, NodeJs, HTML, JavaScript, PHP, and API'
            ]
          },
          {
            title: 'Full Stack Engineer at MakerMinds GmbH',
            date: 'September 2022',
            role: 'Full Stack Developer Training Supervisor | Web Application Builder | Project Leader',
            points: [
              'Developed 7 full stack web applications from scratch',
              'Led end-to-end project lifecycle from ideation to deployment',
              'Collaborated with stakeholders and coordinated a multidisciplinary development team',
              'Architected, designed, and implemented scalable and robust full-stack solutions'
            ],
            skills: 'Django · Kivy · Training · Trello · Executive Support · Customer Relationship Management (CRM) · Curriculum Development · Python (Programming Language) · Web Development'
          },
          {
            title: 'Web Devs Trainer at MakerMinds LLC',
            date: 'July 2023',
            points: [
              'Designed and delivered training programs covering a spectrum of technologies',
              'Mentored students during internship programs',
              'Integrated real-world projects into the training curriculum'
            ],
            skills: 'HTML, CSS, JavaScript, Node.js, jQuery, AJAX, Express.js, JSON, databases, API development, routes, Tailwind CSS, React.js'
          },
        ].map((experience, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-500">{experience.title}</h3>
            <p className="text-gray-500 italic">{experience.date}</p>
            {experience.role && <p className="mb-4">{experience.role}</p>}
            <ul className="list-disc list-inside">
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
            {experience.skills && <p className="mt-4 text-gray-500">{experience.skills}</p>}
          </div>
        ))}

      </div>

{/* Call to action */}
<div className="w-full text-center mt-12">
  <p className="text-white text-xl font-bold mb-4">
    Ready to discuss how my skills can benefit your team?
  </p>
  <a href="mailto:editalatifi1996@gmail.com">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      Contact Me
    </button>
  </a>
</div>
    </section>
  );
};

export default Experience;
