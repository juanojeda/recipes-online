import React from "react";
import PropTypes from "prop-types";
import Ingredient from "./Ingredient";
import IngredientShape from "../shapes/IngredientShape";

const IngredientsList = ({ ingredients, removeIngredient }) => {
  return ingredients.length ? (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(({ id, ...ingredient }, i) => (
          <Ingredient
            key={id}
            id={id}
            removeIngredient={removeIngredient}
            {...ingredient}
          />
        ))}
      </ul>
    </div>
  ) : null;
};

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientShape)),
};

export default IngredientsList;
