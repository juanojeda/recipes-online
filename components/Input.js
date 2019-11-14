import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../utils/style-utils/colours";

const StyledInput = styled.input`
  background: ${colours.inputs.bg};
  border: none;
  margin-right: 0.25rem;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  margin-left: 0.25rem;
  font-family: inherit;
`;

const StyledTextArea = styled(StyledInput).attrs({
  as: "textarea"
})`
  line-height: 1.5;
  vertical-align: bottom;
`;

const InputEl = props => <StyledInput {...props} />;
const TextArea = props => <StyledTextArea {...props} />;

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
