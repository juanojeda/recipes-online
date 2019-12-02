import React, { useEffect, useState } from "react";

import { getAPIEndpoint } from "../utils/api";
import Link from "next/link";

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

  return (
    <div>
      {recipes.map(({ id, title, slug }) => (
        <div key={id}>
          <Link href="/recipe" as={`recipe/${slug}`}>
            <a>{title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};
