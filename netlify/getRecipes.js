import fetch from "isomorphic-unfetch";
import { getAuthToken, PROJECT_ID, FIREBASE_URL } from "./firebase";
import firebaseFieldsToDoc from "../utils/firebaseFieldsToDoc";

const handler = async function handler(_) {
  try {
    const authToken = await getAuthToken();

    const fieldsRequired = ["dockey", "title"];
    const fieldMaskQuery = fieldsRequired.reduce(
      (acc, curr, i) =>
        `${acc}mask.fieldPaths=${curr}${
          i < fieldsRequired.length - 1 ? "&" : ""
        }`,
      ""
    );

    const recipesDBRes = await fetch(
      `${FIREBASE_URL}/${PROJECT_ID}/databases/(default)/documents/recipes?${fieldMaskQuery}&pageSize=150`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    const recipesDB = await recipesDBRes.json();

    const recipeDocs = recipesDB.documents;

    const recipes = recipeDocs.map(firebaseFieldsToDoc);

    console.log(`returning ${recipes.length} entries`);

    return {
      statusCode: 200,
      body: JSON.stringify(recipes),
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    console.log("Error getting documents", err);
    return new Error(err);
  }
};

export { handler };
