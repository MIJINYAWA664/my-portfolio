import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  useEffect(() => {
    if (window.ScrollReveal) {
      window.ScrollReveal().reveal(".about-section, .projects-section, .contact-section", {
        origin: "bottom",
        distance: "50px",
        duration: 800,
        delay: 100,
        easing: "ease-in-out",
        reset: false,
      });
    }
  }, []);

  return (
    <div className='app'>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
