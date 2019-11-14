import fetch from "isomorphic-unfetch";
import {
  default as firestore,
  getAuthToken,
  PROJECT_ID,
  FIREBASE_URL
} from "./firebase";
import firebaseFieldsToDoc from "../utils/firebaseFieldsToDoc";

const handler = async function handler(event) {
  const { recipe } = JSON.parse(event.body);

  try {
    let response;
    await firestore
      .collection("recipes")
      .add(recipe)
      .then(resp => {
        response = resp;
        console.log(`Created recipe ${recipe.title} \n${JSON.stringify(resp)}`);
      });

    return {
      statusCode: 200,
      body: JSON.stringify({
        response
      }),
      headers: { "Content-Type": "application/json" }
    };
  } catch (e) {
    console.error(`error updating guest ${recipe.dockey}:`, e);
    return {
      statusCode: 500,
      body: e
    };
  }
};

export { handler };