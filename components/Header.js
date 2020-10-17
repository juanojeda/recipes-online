import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colours from "../utils/style-utils/colours";
import { fontSets } from "../utils/style-utils/fonts";
import Navigation from "./Navigation";
import { Link } from "../routes";

const HeaderBar = styled.header`
  align-items: center;
  background: ${colours.header.bg};
  color: ${colours.header.text};
  display: flex;
  justify-content: center;
`;

const Logo = styled.a`
  cursor: pointer;
  font-family: ${fontSets.serif[900]};
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 900;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  position: relative;
  transition: 200ms ease all;

  &::after {
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  &:hover {
    transform: translateY(-0.25rem) translateZ(0);
    &::after {
      content: "";
      display: block;
      margin-bottom: -0.25rem;
      padding-bottom: 0.25rem;
      transition: 0 ease all;
    }
  }
`;

const Header = props => (
  <>
    <HeaderBar>
      <Link route="/">
        <Logo>Recipes</Logo>
      </Link>
    </HeaderBar>
    <Navigation />
  </>
);

Header.propTypes = {};

export default Header;
