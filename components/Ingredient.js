import React from "react";
import IngredientShape from "../shapes/IngredientShape";

const Ingredient = ({
  id,
  amount,
  item,
  unit,
  preparations,
  removeIngredient,
}) => {
  return (
    <li>
      <div>
        {amount && amount}
        {unit && ` ${unit}`} {item}
        {preparations && `, ${preparations}`}
      </div>
      <button onClick={removeIngredient(id)}>remove</button>
    </li>
  );
};

Ingredient.propTypes = IngredientShape;

export default Ingredient;
