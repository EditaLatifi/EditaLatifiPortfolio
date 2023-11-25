// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          {/* Social Media Icons */}
          <a href="https://github.com/EditaLatifi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/edita-latifi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/editalatifii/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="https://www.facebook.com/edita.latifi.90" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="mailto:editalatifi1996@gmail.com">
            <FaEnvelope className="text-2xl hover:text-yellow-400 transition duration-300" />
          </a>
        </div>

        {/* Contact Information */}
        <p className="text-sm text-yellow-500 mb-2">Contact me: editalatifi199@gmail.com</p>

        {/* Copyright */}
        <p className="text-xs text-yellow-500">&copy; 2023 Edita Latifi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
