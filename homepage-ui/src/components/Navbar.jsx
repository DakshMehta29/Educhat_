import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src="https://i.ibb.co/sdG4v4P8/logo-Ew-USVqs-D.webp" alt="EDUCHAT Logo" />
      </a>

      <div className="nav-links">
        <Link to="/ai-chat">AI Chat Support</Link>
        <Link to="/flashcards">Flashcards</Link>
        <Link to="/doubt-solving">Doubt Solving</Link>
        <Link to="/study-guides">Study Guides</Link>
        <Link to="/one-on-one-sessions">One-on-One Sessions</Link>
      </div>

      <div className="nav-buttons">
        <button className="custom-btn">Chat Now</button>
        <button className="custom-btn">Learn More</button>
      </div>
    </nav>
  );
};

export default Navbar;
