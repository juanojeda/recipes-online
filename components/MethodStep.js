import React, { useState } from "react";
import PropTypes from "prop-types";

const MethodStep = ({ step }) => (
  <li>
    <p>{step}</p>
  </li>
);

MethodStep.propTypes = {
  step: PropTypes.string
};

export default MethodStep;
