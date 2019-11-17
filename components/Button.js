import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { fontSets } from "../utils/style-utils/fonts";
import colours from "../utils/style-utils/colours";

const Component = styled.button`
  appearance: none;
  background: ${({ variant }) => colours.buttons[variant].bg};
  border: ${({ variant }) => colours.buttons[variant].border};
  border-radius: 0.25rem;
  color: ${({ variant }) => colours.buttons[variant].text};
  font-family: ${fontSets.sans["700"]};
  font-size: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  width: ${({ block }) => (block ? "100%" : undefined)};
`;

const Button = ({ variant, children, fn }) => {
  return (
    <Component variant={variant} onClick={fn} block>
      {children}
    </Component>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
  fn: PropTypes.func
};

export default Button;
