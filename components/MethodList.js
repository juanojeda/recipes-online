import React from "react";
import PropTypes from "prop-types";

import MethodStep from "./MethodStep";

const MethodList = ({ method, removeMethod }) => {
  return method.length ? (
    <div>
      <h2>Method</h2>
      <ol>
        {method.map(({ id, step }, i) => (
          <MethodStep
            key={id}
            id={id}
            step={step}
            removeMethod={removeMethod}
          />
        ))}
      </ol>
    </div>
  ) : null;
};

MethodList.propTypes = {
  method: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      step: PropTypes.string,
    })
  ),
};

export default MethodList;
