import fetchWithDefaults from "../utils/api-utils/fetchWithDefaults";

const createRecipe = ({ title, ingredients, methods }) => {
  const body = { recipe: { title, ingredients, methods } };

  return fetchWithDefaults("addRecipe", body);
};

export default createRecipe;
