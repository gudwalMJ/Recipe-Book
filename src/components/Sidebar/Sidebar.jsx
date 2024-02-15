// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
// Styling
import "./Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
