// RecipesList.jsx
import React, { useState } from "react";
// Import JSON
import initialRecipes from "/src/recipes.json";
// Import Components
import List from "../List/List";
// Import Styling for List/ListItem/RecipesList
import "./RecipesList.css";

function RecipesList({ recipes, onDelete }) {
  return <List recipes={recipes} onDelete={onDelete} />;
}

export default RecipesList;
