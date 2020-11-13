import { success, error } from "../utils/api-utils/responses";
import { default as firestore } from "./firebase";

const handler = async function handler(event) {
  const { recipe } = JSON.parse(event.body);
  try {
    const response = await firestore()
      .collection("recipes")
      .doc(recipe.id)
      .update({ ...recipe });
    console.log(`Updated recipe with id ${recipe.id}.`);

    return success(response);
  } catch (e) {
    return error(`error updating recipe ${recipe.id}:`, e);
  }
};

export { handler };
