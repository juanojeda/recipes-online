import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colours from "../utils/style-utils/colours";
import { fontSets } from "../utils/style-utils/fonts";
import Navigation from "./Navigation";

const HeaderBar = styled.header`
  align-items: center;
  background: ${colours.header.bg};
  color: ${colours.header.text};
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Logo = styled.a`
  font-family: ${fontSets.serif[900]};
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 900;
`;

const Header = props => (
  <>
    <HeaderBar>
      <Logo>Recipes</Logo>
    </HeaderBar>
    <Navigation />
  </>
);

Header.propTypes = {};

export default Header;
