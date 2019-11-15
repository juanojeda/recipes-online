import React, { useState } from "react";
import PropTypes from "prop-types";

import { Input } from "./Input";
import Button from "./Button";

const AddMethodStep = ({ setValueFn }) => {
  const [step, setStep] = useState("");

  const addStep = () => {
    setValueFn(step);

    setStep("");
  };

  return (
    <div>
      <Input
        type="textarea"
        value={step}
        setter={setStep}
        placeholder="Eg. Whisk the eggs together, and season to taste."
      />
      <Button variant="secondary" fn={addStep}>
        Add step
      </Button>
    </div>
  );
};

AddMethodStep.propTypes = {
  setValueFn: PropTypes.func
};

export default AddMethodStep;
