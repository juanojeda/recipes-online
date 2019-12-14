import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import colours from "../utils/style-utils/colours";
import { getFonts, fontSets } from "../utils/style-utils/fonts";
import { gridBreakpoints } from "../utils/style-utils/breakpoints";

import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  ${getFonts()};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: ${fontSets.sans["300"]}, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  body {
    background: ${colours.body.bg};
    color: ${colours.body.text};
    font-size: 1rem;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  #__next {
    min-height: 100vh;
  }

`;

const Layout = ({ children }, ...props) => (
  <ThemeProvider
    theme={{
      breakpoints: gridBreakpoints
    }}
    {...props}
  >
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
