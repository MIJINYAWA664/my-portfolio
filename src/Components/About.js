import React from "react";
import profileImage from './ME.jpg';

const About = () => (
  <div className="about-section">
    <h2>About Me</h2>
    <img src={profileImage} alt="My Profile" className="profile-image" />
    <p>
      Hi! I'm Mijinyawa, a passionate front-end developer and IT student currently exploring the world of JavaScript and React. 
      I'm driven by curiosity, eager to learn new technologies, and always ready to build useful web applications.
    </p>
    <p>
      During my SIWES internship, I've built interactive projects, learned modern JavaScript techniques, and collaborated on React-based apps.
      I enjoy solving problems with clean, accessible, and user-friendly design.
    </p>
  </div>
);

export default About;
