// HomePage.jsx
import React, { useState } from "react";
// Import Components
import RecipesList from "/src/components/RecipesList/RecipesList";
import initialRecipes from "/src/recipes.json";
import AddRecipeForm from "../../components/RecipeForm/AddRecipeForm";
// Import Styling
import "./HomePage.css";

function HomePage() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const addNewRecipe = (newRecipe) => {
    console.log("Adding new recipe:", newRecipe);
    newRecipe.id = Date.now().toString();
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="home-page-container">
      <h2>Welcome to the Recipe Book</h2>
      <p>This is the home page of my recipe book app.</p>
      <AddRecipeForm onAddRecipe={addNewRecipe} />
      <RecipesList recipes={recipes} onDelete={deleteRecipe} />
    </div>
  );
}

export default HomePage;
