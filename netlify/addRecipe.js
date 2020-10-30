import { default as firestore } from "./firebase";
import get from "lodash/get";

const handler = async function handler(event) {
  const { recipe } = JSON.parse(event.body);
  try {
    let response;
    const RE_NON_WORD_DIGIT_CHARS = /[^\d\w]+/g;
    const slug = recipe.title.replace(RE_NON_WORD_DIGIT_CHARS, "-");
    await firestore()
      .collection("recipes")
      .add({ ...recipe, slug })
      .then((resp) => {
        response = resp;
        console.log(
          `Created recipe with slug ${slug}. \n recipe ID: ${
            get(resp, "_path.segments", []).join("/") || "Not found"
          }`
        );
      });

    return {
      statusCode: 200,
      body: JSON.stringify({
        response,
      }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (e) {
    console.error(`error updating recipe ${recipe.dockey}:`, e);
    return {
      statusCode: 500,
      body: e,
    };
  }
};

export { handler };
