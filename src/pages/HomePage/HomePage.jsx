// HomePage.jsx
import React from "react";
// Import Components
import RecipesList from "/src/components/RecipesList/RecipesList";
// Import Styling
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <h2>Welcome to the Recipe Book</h2>
      <p>This is the home page of my recipe book app.</p>
      <RecipesList />
    </div>
  );
}

export default HomePage;
