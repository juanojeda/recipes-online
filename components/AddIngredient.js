import React, { useState } from "react";
import PropTypes from "prop-types";

import { Input } from "./Input";

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
      <Input value={amount} setter={setAmount} placeholder="amount" />
      <Input value={unit} setter={setUnit} placeholder="unit" />
      <Input value={item} setter={setItem} placeholder="item" />
      <Input
        value={preparations}
        setter={setPreparations}
        placeholder="preparations"
      />

      <button onClick={addIngredient}>Add Item</button>
    </div>
  );
};

AddIngredient.propTypes = {
  setValueFn: PropTypes.func
};

export default AddIngredient;
