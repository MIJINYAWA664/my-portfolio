import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => (
  <div className='app'>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
)

export default App;