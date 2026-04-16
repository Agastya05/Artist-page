import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-mark">Z</span>
          <span className="logo-text">Zigguratts</span>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Discover Art
          </Link>
          <Link to="/" className="nav-link active">
            Featured Artists
          </Link>
          <a href="https://zigguratss.com/artworks" className="nav-link">
            Artworks
          </a>
          <a href="https://zigguratss.com/about" className="nav-link">
            About
          </a>
          <a href="https://zigguratss.com/blog" className="nav-link">
            Blog
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="btn-dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Sell Your Art</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
