import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "./Input";
import Button from "./Button";
import buildIngredientFromString from "../utils/buildIngredientsFromString";

const FlexContainer = styled.div`
  display: flex;
`;
const FlexItem = styled.div`
  flex: 1 1 100%;
`;

const AddIngredient = ({ setValueFn }) => {
  const [ingredient, setIngredient] = useState("");

  const addIngredient = () => {
    if (ingredient) {
      const parsedIngredient = buildIngredientFromString(ingredient);
      setValueFn(parsedIngredient);
      setIngredient("");
    }
  };

  return (
    <div>
      <FlexContainer>
        <FlexItem>
          <Input
            value={ingredient}
            setter={setIngredient}
            placeholder="eg. 1 cup carrots, chopped"
          />
        </FlexItem>
      </FlexContainer>

      <Button variant="secondary" fn={addIngredient} block>
        Add item
      </Button>
    </div>
  );
};

AddIngredient.propTypes = {
  setValueFn: PropTypes.func,
};

export default AddIngredient;
