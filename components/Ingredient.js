import React from "react";
import IngredientShape from "../shapes/IngredientShape";

const Ingredient = ({ amount, item, unit, preparations }) => {
  return (
    <li>
      {amount}
      {item && ` ${unit}`} {item}
      {preparations && `, ${preparations}`}
    </li>
  );
};

Ingredient.propTypes = IngredientShape;

export default Ingredient;
