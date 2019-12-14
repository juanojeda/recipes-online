import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "../routes";

import colours from "../utils/style-utils/colours";

const NavWrapper = styled.nav`
  align-items: stretch;
  background-color: ${colours.nav.bg};
  color: ${colours.nav.text};
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled.a`
  border-left: 0.5px solid ${colours.__raw.shiraz};
  border-right: 0.5px solid ${colours.__raw.shiraz};
  cursor: pointer;
  flex: 1 1 50%;
  padding: 1rem;
  text-align: center;
  transition: 200ms ease all;
  &:hover,
  &:focus,
  &:visited {
    color: ${colours.nav.text};
  }

  &:hover,
  &:focus {
    background-color: ${colours.__raw.oregano_dark};
  }
`;

const Navigation = props => (
  <NavWrapper>
    <Link route="/recipes">
      <NavLink>Recipes</NavLink>
    </Link>
    <Link route="/add-recipe">
      <NavLink>Add a recipe</NavLink>
    </Link>
  </NavWrapper>
);

Navigation.propTypes = {};

export default Navigation;
