// ItemDetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
// import JSON
import initialRecipes from "/src/recipes.json";
// import Styling
import "./ItemDetailsPage.css";

function ItemDetailsPage() {
  let { id } = useParams();
  const recipe = initialRecipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="details-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
    </div>
  );
}

export default ItemDetailsPage;
