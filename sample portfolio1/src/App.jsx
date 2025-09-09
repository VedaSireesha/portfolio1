import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './index.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply class to body when theme changes
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <div className=" pt-25 px-0">
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            cursor: 'pointer',
            position: 'absolute',
            top: '7.5rem',
            right: '5.5rem',
            zIndex: 1000,
            borderRadius: '15%',
            border: 'none',
            background: darkMode ? '#fff' : '#333',
            color: darkMode ? '#000' : '#fff',
          }}
        >
          {darkMode ? '💡' : '🌙'}
        </button>
        <HeroSection />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default App;
