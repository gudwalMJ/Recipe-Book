// AddRecipeForm.jsx
import React, { useState } from "react";
// Styling
import "./AddRecipeForm.css";

function AddRecipeForm({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    image: "",
    servings: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    onAddRecipe(formData);
    setFormData({
      name: "",
      calories: "",
      image: "",
      servings: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Recipe name"
        required
      />
      <input
        type="number"
        name="calories"
        value={formData.calories}
        onChange={handleInputChange}
        placeholder="Calories"
        required
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleInputChange}
        placeholder="Image URL"
      />
      <input
        type="number"
        name="servings"
        value={formData.servings}
        onChange={handleInputChange}
        placeholder="Servings"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
