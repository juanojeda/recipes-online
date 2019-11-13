import React from "react";
import PropTypes from "prop-types";

const InputEl = props => <input {...props} />;
const TextArea = props => <textarea {...props} />;

export const Input = ({ type = "text", value, setter, placeholder }) => {
  const Component = type === "textarea" ? TextArea : InputEl;
  const inputType = type === "textarea" ? undefined : type;

  return (
    <Component
      type={inputType}
      onChange={e => setter(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  setter: PropTypes.func,
  placeholder: PropTypes.string
};
