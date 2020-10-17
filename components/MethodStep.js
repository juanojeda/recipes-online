import React, { useState } from "react";
import PropTypes from "prop-types";

const MethodStep = ({ id, step, removeMethod }) => (
  <li>
    <p>{step}</p>
    <button onClick={removeMethod(id)}>remove</button>
  </li>
);

MethodStep.propTypes = {
  step: PropTypes.string,
};

export default MethodStep;
