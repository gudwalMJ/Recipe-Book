// AboutPage.jsx
import React from "react";
// Import Styling
import "./AboutPage.css";
// Import Logos
import logoGit from "../../images/GitHub-Logo.png";
import logoLinked from "../../images/LinkedIn-Logo.jpg";
import profile from "../../images/Josip.jpg";

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
            <img src={profile} alt="Josip Milan" className="profile-image" />
            <h3>Josip Milan</h3>
            <p>Short Description about me</p>
            <a
              href="https://github.com/gudwalMJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={logoGit} alt="GitHub Logo" className="logo-git" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/josip-milan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logoLinked}
                alt="LinkedIn Logo"
                className="logo-linked"
              />
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
