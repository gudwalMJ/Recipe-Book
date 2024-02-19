// List.jsx
import React from "react";
import ListItem from "../ListItem/ListItem";

function List({ recipes, onDelete, onUpdate }) {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => (
        <ListItem
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default List;
