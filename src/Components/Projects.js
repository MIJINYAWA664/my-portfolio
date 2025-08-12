import React from "react";

const Projects = () => (
  <div className="projects-section">
    <h2>Projects</h2>

    <div className="project-card">
      <h3>🗣️ CommUnity</h3>
      <p>A communication aid app built to help deaf and non-verbal individuals interact with others easily.</p>
      <a href="https://umute.netlify.app/" target="_blank" rel="noreferrer">
        🌐 View Project
      </a>
    </div>

    <div className="project-card">
      <h3>🤖 RoboFriends</h3>
      <p>A fun React app that fetches users and renders robot-themed friend cards with a live search box.</p>
      <a href="https://jarvis-friends.netlify.app/" target="_blank" rel="noreferrer">
        🌐 View Project
      </a>
    </div>

    <div className="project-card">
      <h3>📘 Facebook Login Clone</h3>
      <p>A simple UI clone of the Facebook login page, styled with HTML and CSS (live link not available).</p>
      <span style={{ color: "gray" }}>🚧 Live demo coming soon</span>
    </div>

    <div className="project-card">
      <h3>🌦 Weather App</h3>
      <p>
        A responsive React weather application featuring location-based weather, search by city,
        dark mode, and a 5-day forecast — built with OpenWeatherMap API.
      </p>
      <a href="https://my-weather-app-work.netlify.app/" target="_blank" rel="noopener noreferrer">
        🌐 View Project
      </a>
    </div>
  </div>
);

export default Projects;
