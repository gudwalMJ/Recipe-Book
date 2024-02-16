// RecipesList.jsx
import React, { useState } from "react";
// Import JSON
import initialRecipes from "/src/recipes.json";
// Import Components
import List from "../List/List";
// Import Styling for List/ListItem/RecipesList
import "./RecipesList.css";

function RecipesList() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return <List recipes={recipes} onDelete={deleteRecipe} />;
}

export default RecipesList;
