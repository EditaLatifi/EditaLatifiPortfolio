// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import './styles/main.css';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import GitButton from './components/GitButton';
import CVButton from './components/CvButton';
import Videos from './components/Videos';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <CVButton/>
      <WhatIDo/>
      <Skills/>
      <GitButton/>
      <Experience/>
      <Videos/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

