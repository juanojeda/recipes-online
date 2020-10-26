import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getAPIEndpoint } from "../../utils/api";

const fetchRecipe = async (slug) => {
  const data = await fetch(`${getAPIEndpoint()}/getRecipes?slug=${slug}`);
  const { id, title, fields, error, errorMessage } = await data.json();

  return {
    id,
    title,
    fields,
    error,
    errorMessage,
  };
};

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();
  const { recipeId } = router.query;

  useEffect(() => {
    if (!recipeId) return;

    async function fetchAndSetRecipe() {
      const { id, title, fields, error, errorMessage } = await fetchRecipe(
        recipeId
      );
      if (!error) {
        setRecipe({ id, title, fields });
      } else {
        setErrorMsg(errorMessage);
      }
    }

    fetchAndSetRecipe();
  }, [recipeId]);

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
