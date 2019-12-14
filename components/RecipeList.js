import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import colours from "../utils/style-utils/colours";

const RecipeWrapper = styled.div`
  padding: 1rem;
`;

const RecipeCard = styled.a`
  background: ${colours.__raw.milk};
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
  display: block;
  margin: 0.5rem;
  padding: 1rem;
  transition: 200ms ease all;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: ${colours.__raw.oregano};
    cursor: pointer;
    transform: translateY(-1px);
  }
`;

const RecipeList = ({ recipes }) => (
  <RecipeWrapper>
    {recipes.map(({ id, title, slug }) => (
      <Link key={id} href="/recipe" as={`recipe/${slug}`}>
        <RecipeCard>{title}</RecipeCard>
      </Link>
    ))}
  </RecipeWrapper>
);

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({}))
};

export default RecipeList;
