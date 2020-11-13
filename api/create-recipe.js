import { getAPIEndpoint } from "../utils/api";
import { API_URL } from "../utils/constants";

const createRecipe = ({ title, ingredients, methods }) => {
  const body = { recipe: { title, ingredients, methods } };

  return fetch(`${API_URL}/addRecipe`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify(body),
  });
};

export default createRecipe;
