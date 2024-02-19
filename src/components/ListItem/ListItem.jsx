// ListItem.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Components
import UpdateRecipeForm from "../UpdateRecipeForm/UpdateRecipeForm";

function ListItem({ recipe, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const confirmAndDelete = (id) => {
    // Use window.confirm to ask the user if they're sure about the deletion
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      onDelete(id);
    }
  };

  const handleUpdateRecipe = (updatedRecipe) => {
    onUpdate(updatedRecipe);
    setIsEditing(false); // Exit edit mode after update
  };

  return (
    <div className="recipe-item">
      {isEditing ? (
        <UpdateRecipeForm recipe={recipe} onUpdateRecipe={handleUpdateRecipe} />
      ) : (
        <Link
          to={`/item/${recipe.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={recipe.image} alt={recipe.name} />
          <div className="recipe-info">
            <h2>{recipe.name}</h2>
            <p>Calories: {recipe.calories}</p>
            <p>Servings: {recipe.servings}</p>
            <p
              className={`low-calorie ${recipe.calories < 300 ? "shown" : ""}`}
            >
              Low Calorie
            </p>
          </div>
        </Link>
      )}
      <button onClick={() => setIsEditing(!isEditing)} className="edit-button">
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button
        onClick={() => confirmAndDelete(recipe.id)}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
}

export default ListItem;
