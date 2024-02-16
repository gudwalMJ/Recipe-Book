// AboutPage.jsx
import React from "react";
// Import Styling
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Recipe Book</h1>
      <p>
        This project is a Recipe Book application designed to help users
        discover and keep track of their favorite recipes.
      </p>

      <section className="team-section">
        <h2>Our Team</h2>
        <ul>
          <li className="team-member">
            <h3>Josip Milan</h3>
            <p>Role or Brief Description</p>
            <a
              href="https://github.com/gudwalMJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/josip-milan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
