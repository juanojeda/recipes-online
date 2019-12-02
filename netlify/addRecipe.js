import fetch from "isomorphic-unfetch";
import { default as firestore } from "./firebase";
import get from "lodash/get";

const handler = async function handler(event) {
  const { recipe } = JSON.parse(event.body);

  try {
    let response;
    await firestore()
      .collection("recipes")
      .add(recipe)
      .then(resp => {
        response = resp;
        console.log(
          `Created recipe ${recipe.title}. \n recipe ID: ${get(
            resp,
            "_path.segments",
            []
          ).join("/") || "Not found"}`
        );
      });

    return {
      statusCode: 200,
      body: JSON.stringify({
        response
      }),
      headers: { "Content-Type": "application/json" }
    };
  } catch (e) {
    console.error(`error updating recipe ${recipe.dockey}:`, e);
    return {
      statusCode: 500,
      body: e
    };
  }
};

export { handler };
