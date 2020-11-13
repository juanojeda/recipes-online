import { default as firestore } from "./firebase";
import { success, error } from "../utils/api-utils/responses";
import get from "lodash/get";

const handler = async function handler(event) {
  const { recipe } = JSON.parse(event.body);
  try {
    const RE_NON_WORD_DIGIT_CHARS = /[^\d\w]+/g;
    const slug = recipe.title.replace(RE_NON_WORD_DIGIT_CHARS, "-");
    const response = await firestore()
      .collection("recipes")
      .add({ ...recipe, slug });

    console.log(
      `Created recipe with slug ${slug}. \n recipe ID: ${
        get(response, "_path.segments", []).join("/") || "Not found"
      }`
    );

    return success(response);
  } catch (e) {
    return error(`error creating recipe ${slug}:`, e);
  }
};

export { handler };
