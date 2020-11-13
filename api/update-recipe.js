import { API_URL } from "../utils/constants";

const updateRecipe = ({ title, ingredients, methods, id }) => {
  const body = { recipe: { title, ingredients, methods, id } };

  return fetch(`${API_URL}/updateRecipe`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify(body),
  });
};

export default updateRecipe;
