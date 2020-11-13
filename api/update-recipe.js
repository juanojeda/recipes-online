import fetchWithDefaults from "../utils/api-utils/fetchWithDefaults";
import { API_URL } from "../utils/constants";

const updateRecipe = ({ title, ingredients, methods, id }) => {
  const body = { recipe: { title, ingredients, methods, id } };

  return fetchWithDefaults("updateRecipe", body);
};

export default updateRecipe;
