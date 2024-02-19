// UpdateRecipeForm.jsx
import React, { useState, useEffect } from "react";
// Styling
import "./UpdateRecipeForm.css";

function UpdateRecipeForm({ recipe, onUpdateRecipe }) {
  const [formData, setFormData] = useState({
    id: recipe.id,
    name: recipe.name,
    calories: recipe.calories,
    image: recipe.image,
    servings: recipe.servings,
  });

  useEffect(() => {
    setFormData({
      id: recipe.id,
      name: recipe.name,
      calories: recipe.calories,
      image: recipe.image,
      servings: recipe.servings,
    });
  }, [recipe]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateRecipe(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="update-recipe-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          value={formData.calories}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          id="servings"
          value={formData.servings}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default UpdateRecipeForm;
