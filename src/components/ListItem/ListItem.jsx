import React from "react";

function ListItem({ recipe, onDelete }) {
  return (
    <div className="recipe-item" key={recipe.id}>
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <h2>{recipe.name}</h2>
        <p>Calories: {recipe.calories}</p>
        <p>Servings: {recipe.servings}</p>
        {recipe.calories < 300 && <p className="low-calorie">Low Calorie</p>}
        <button onClick={() => onDelete(recipe.id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
