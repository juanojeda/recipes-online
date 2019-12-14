import React, { useEffect, useState } from "react";

import { getAPIEndpoint } from "../utils/api";
import RecipeList from "../components/RecipeList";

const fetchRecipes = async setter => {
  const data = await fetch(`${getAPIEndpoint()}/getRecipes`);
  const json = await data.json();

  return {
    recipes: json
  };
};

export default () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchAndSetRecipes() {
      const { recipes } = await fetchRecipes();
      setRecipes(recipes);
    }

    fetchAndSetRecipes();
  }, []);

  return <RecipeList recipes={recipes} />;
};
