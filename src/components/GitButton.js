// GitButton.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitButton = () => {
  const redirectToGithub = () => {
    // Replace 'your-github-username' with your actual GitHub username
    const githubUrl = 'https://github.com/EditaLatifi';
    window.location.href = githubUrl;
  };

  const buttonStyle = {
    minHeight: '60px', // Adjust the height as needed
    backgroundColor: '#fcbf49', // Use the desired background color
  };

  return (
    <div className="w-full relative overflow-hidden">
      <button
        className="w-full h-full text-white uppercase font-semibold text-lg flex items-center justify-center focus:outline-none transition duration-500 ease-in-out bg-yellow-500 group"
        style={buttonStyle}
        onClick={redirectToGithub}
      >
        <span className="group-hover:opacity-0 transition-opacity">See more Projects</span>
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
          <FaGithub size={32} />
        </div>
      </button>
    </div>
  );
};

export default GitButton;
