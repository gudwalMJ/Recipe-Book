// RecipesList.jsx
import React, { useState } from "react";
// Import JSON
import initialRecipes from "/src/recipes.json";
// Import Components
import List from "../List/List";
// Import Styling for List/ListItem/RecipesList
import "./RecipesList.css";

function RecipesList({ recipes, onDelete, onUpdate }) {
  const handleUpdateRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    onUpdate(updatedRecipes); // This function should update the state in the parent component
  };

  return (
    <List recipes={recipes} onDelete={onDelete} onUpdate={handleUpdateRecipe} />
  );
}

export default RecipesList;
