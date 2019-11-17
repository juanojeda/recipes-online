import React, { useEffect, useState } from "react";

import { getAPIEndpoint } from "../utils/api";

const fetchAndSetRecipes = async setter => {
  const data = await fetch(
    `${getAPIEndpoint()}/getRecipes?fields=title,another`
  );
  const json = await data.json();

  console.log(json);
};

export default () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchAndSetRecipes();
  }, []);

  return <div>The List</div>;
};
