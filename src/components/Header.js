// Header.js
import React from 'react';
import profileImage from '../photos/pexels-tara-winstead-8386440.jpg';

const Header = () => {
  return (
    <header className="bg-cover bg-center relative h-screen flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(50%)', // You can adjust the brightness if needed
        }}
      ></div>

      <div className="container mx-auto relative z-10 text-center">
        {/* Profile Photo and Name */}
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-blue-400 mb-2 font-serif hover:text-blue-600 transition duration-300">
            EDITA LATIFI
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-semibold">
            Full Stack Engineer | Coding Mentor
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          <a
            href="#about"
            className="text-base md:text-xl lg:text-2xl hover:text-blue-400 mx-3 md:mx-6 cursor-pointer transition duration-300"
          >
            About Me
          </a>
          <a
            href="#WhatIDo"
            className="text-base md:text-xl lg:text-2xl hover:text-blue-400 mx-3 md:mx-6 cursor-pointer transition duration-300"
          >
            What I Do
          </a>
          <a
            href="#skills"
            className="text-base md:text-xl lg:text-2xl hover:text-blue-400 mx-3 md:mx-6 cursor-pointer transition duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-base md:text-xl lg:text-2xl hover:text-blue-400 mx-3 md:mx-6 cursor-pointer transition duration-300"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-base md:text-xl lg:text-2xl hover:text-blue-400 mx-3 md:mx-6 cursor-pointer transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
