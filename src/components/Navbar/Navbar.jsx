// Navbar.jsx
import React from "react";
import { useState } from "react";
// Logo Image
import logo from "/src/images/Recipe-Book-Icon.webp";
// Styling
import "./Navbar.css";

function Navbar({ onToggleSidebar }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onToggleSidebar(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div onClick={toggleSidebar} className="hamburger-icon">
          &#9776;{" "}
          {/* This is a simple text representation of a hamburger icon */}
        </div>
        <img src={logo} alt="Logo" />
      </div>
      <h1>Recipe Book</h1>
    </nav>
  );
}

export default Navbar;
