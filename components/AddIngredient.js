import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Input } from "./Input";
import Button from "./Button";

const FlexContainer = styled.div`
  display: flex;
`;
const FlexItem = styled.div``;

const AddIngredient = ({ setValueFn }) => {
  const [amount, setAmount] = useState("");
  const [item, setItem] = useState("");
  const [unit, setUnit] = useState("");
  const [preparations, setPreparations] = useState("");

  const addIngredient = () => {
    setValueFn({
      amount,
      item,
      unit,
      preparations
    });
    setAmount("");
    setItem("");
    setUnit("");
    setPreparations("");
  };

  return (
    <div>
      <FlexContainer>
        <FlexItem>
          <Input value={amount} setter={setAmount} placeholder="qty" />
        </FlexItem>
        <FlexItem>
          <Input value={unit} setter={setUnit} placeholder="unit" />
        </FlexItem>
        <FlexItem>
          <Input value={item} setter={setItem} placeholder="item" />
        </FlexItem>
        <FlexItem>
          <Input
            value={preparations}
            setter={setPreparations}
            placeholder="prep"
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
  setValueFn: PropTypes.func
};

export default AddIngredient;
