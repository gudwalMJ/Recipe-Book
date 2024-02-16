// ListItem.jsx
import React from "react";
import { Link } from "react-router-dom";

function ListItem({ recipe, onDelete }) {
  return (
    <div className="recipe-item">
      <Link
        to={`/item/${recipe.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={recipe.image} alt={recipe.name} />
        <div className="recipe-info">
          <h2>{recipe.name}</h2>
          <p>Calories: {recipe.calories}</p>
          <p>Servings: {recipe.servings}</p>
          <p className={`low-calorie ${recipe.calories < 300 ? "shown" : ""}`}>
            Low Calorie
          </p>
        </div>
      </Link>
      <button onClick={() => onDelete(recipe.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default ListItem;
