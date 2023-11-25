// CVButton.js
import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const CVButton = () => {
  const redirectToCV = () => {
    // Replace 'your-cv-link' with the actual link to your CV
    const cvUrl = 'https://drive.google.com/file/d/1AbblSo20JOlLK-2QlkO1heoDBsBAb-EV/view?usp=sharing';
    window.location.href = cvUrl;
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
        onClick={redirectToCV}
      >
        <span className="group-hover:opacity-0 transition-opacity">View My Resume</span>
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
          <FaFileAlt size={32} />
        </div>
      </button>
    </div>
  );
};

export default CVButton;
