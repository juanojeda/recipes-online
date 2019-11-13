import PropTypes from "prop-types";

const IngredientShape = {
  id: PropTypes.string,
  amount: PropTypes.string,
  item: PropTypes.string,
  unit: PropTypes.string,
  preparations: PropTypes.string
};

export default IngredientShape;
