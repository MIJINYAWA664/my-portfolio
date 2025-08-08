import React, { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className="header-section">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <h3>Front-End Developer | IT Intern | Student</h3>
        <p>Crafting web experiences with JavaScript and React</p>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
    </div>
  );
};

export default Header;
