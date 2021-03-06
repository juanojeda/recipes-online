import React from "react";
import PropTypes from "prop-types";

import IngredientShape from "../shapes/IngredientShape";
import MethodShape from "../shapes/MethodShape";

import IngredientsList from "./IngredientsList";
import MethodList from "./MethodList";

const RecipeDisplay = ({
  title,
  ingredients,
  methods,
  removeMethod,
  removeIngredient,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <IngredientsList
        ingredients={ingredients}
        removeIngredient={removeIngredient}
      />
      <MethodList method={methods} removeMethod={removeMethod} />
    </div>
  );
};

RecipeDisplay.propTypes = {
  title: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientShape)),
  methods: PropTypes.arrayOf(PropTypes.shape(MethodShape)),
};

export default RecipeDisplay;
