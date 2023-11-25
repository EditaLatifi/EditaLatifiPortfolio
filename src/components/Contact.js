import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Server Response:', response);

      if (response.ok) {
        console.log('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="container mx-auto p-8 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

      {/* Contact Form */}
      <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Ready to make things happen? Reach out to me!</h3>
        {/* Use one form for the entire contact form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
              required
            />
          </div>
          {/* Repeat the above pattern for other input fields */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
              required
            ></textarea>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

{/* Social Links */}
<div className="mt-8 text-center">
  <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
  <ul className="flex flex-wrap justify-center space-y sm:space-y sm:space-x-4">
    <li className="mb-2">
      <a
        href="https://www.facebook.com/edita.latifi.90"
        className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out flex items-center"
      >
        <FaFacebook size={24} className="mr-2" />
        Facebook
      </a>
    </li>
    <li className="mb-2">
      <a
        href="https://www.instagram.com/editalatifii/?hl=en"
        className="text-purple-500 hover:text-purple-700 transition duration-300 ease-in-out flex items-center"
      >
        <FaInstagram size={24} className="mr-2" />
        Instagram
      </a>
    </li>
    <li className="mb-2">
      <a
        href="https://www.linkedin.com/in/edita-latifi/"
        className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out flex items-center"
      >
        <FaLinkedin size={24} className="mr-2" />
        LinkedIn
      </a>
    </li>
    <li className="mb-2">
      <a
        href="https://github.com/EditaLatifi"
        className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out flex items-center"
      >
        <FaGithub size={24} className="mr-2" />
        GitHub
      </a>
    </li>
    <li className="mb-2">
      <a
        href="mailto:editalatifi1996@gmail.com"
        className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out flex items-center"
      >
        <FaEnvelope size={24} className="mr-2" />
        Email
      </a>
    </li>
  </ul>
</div>
 </section>
  );
};

export default Contact;