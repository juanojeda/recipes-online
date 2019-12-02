import React, { useEffect, useState } from "react";

import { getAPIEndpoint } from "../utils/api";

const fetchRecipe = async slug => {
  const data = await fetch(`${getAPIEndpoint()}/getRecipes?slug=${slug}`);
  const { id, title, fields, error, errorMessage } = await data.json();

  return {
    id,
    title,
    fields,
    error,
    errorMessage
  };
};

const getSlugFromWindow = window => {
  let slug;
  if (window.location.search) {
    const searchParams = new URLSearchParams(window.location.search);
    slug = searchParams.get("slug");
  } else {
    slug = window.location.pathname.split("/recipe/")[1];
  }

  return slug;
};

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    if (!window) {
      return;
    }

    let windowSlug = getSlugFromWindow(window);
    setSlug(windowSlug);
  }, []);

  useEffect(() => {
    if (!slug) return;

    async function fetchAndSetRecipe() {
      const { id, title, fields, error, errorMessage } = await fetchRecipe(
        slug
      );
      if (!error) {
        setRecipe({ id, title, fields });
      } else {
        setErrorMsg(errorMessage);
      }
    }

    fetchAndSetRecipe();
  }, [slug]);

  if (recipe) {
    const { fields, title } = recipe;
    const { ingredients, methods } = fields;

    return (
      <div>
        <h1>{title}</h1>

        <h3>Ingredients</h3>
        <ul>
          {ingredients.map(({ amount, unit, item, preparations }) => (
            <li>
              {amount} {unit} {item}, {preparations}
            </li>
          ))}
        </ul>

        <h3>Method</h3>
        <ol>
          {methods.map(({ step }) => (
            <li>{step}</li>
          ))}
        </ol>
      </div>
    );
  } else {
    return "loading";
  }
};

export default Recipe;
