import { API_URL } from "../constants";

const fetchWithDefaults = (endpoint, body) =>
  fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify(body),
  });

export default fetchWithDefaults;
