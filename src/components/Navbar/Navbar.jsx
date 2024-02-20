// Navbar.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
        </div>
        <Link to="/">
          <img src={logo} alt="Recipe Book Logo" />
        </Link>
      </div>
      <h1>Recipe Book</h1>
    </nav>
  );
}

export default Navbar;
