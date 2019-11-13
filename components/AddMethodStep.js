import React, { useState } from "react";
import PropTypes from "prop-types";

import { Input } from "./Input";

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
        placeholder="method step"
      />
      <button onClick={addStep}>Add Step</button>
    </div>
  );
};

AddMethodStep.propTypes = {
  setValueFn: PropTypes.func
};

export default AddMethodStep;
