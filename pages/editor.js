import React, { useState, useEffect } from "react";

import { getAPIEndpoint } from "../utils/api";

import RecipeDisplay from "../components/RecipeDisplay";
import AddMethodStep from "../components/AddMethodStep";
import AddIngredient from "../components/AddIngredient";
import { Input } from "../components/Input";

const Editor = props => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [methods, setMethods] = useState([]);

  const addIngredientFn = ingredient =>
    setIngredients([
      ...ingredients,
      {
        id: `ing__${ingredients.length}`,
        order: ingredients.length,
        ...ingredient
      }
    ]);

  const addMethodStepFn = step =>
    setMethods([
      ...methods,
      { id: `met__${methods.length}`, order: methods.length, step }
    ]);

  const sendRecipeToDB = async () => {
    const body = { recipe: { title, ingredients, methods } };

    console.log(body);
    try {
      const data = await fetch(`${getAPIEndpoint()}/addRecipe`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(body)
      });
      const { title, ingredients, methods } = await data.json();
      console.log("successfully added");
      console.log({ title, ingredients, methods });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h2>Name your recipe</h2>
      <Input setter={setTitle} placeholder={title} value={title} />
      <h2>Add an ingredient</h2>
      <AddIngredient setValueFn={addIngredientFn} />
      <h2>Add a method</h2>
      <AddMethodStep setValueFn={addMethodStepFn} />
      <RecipeDisplay
        title={title}
        ingredients={ingredients}
        methods={methods}
      />
      <button onClick={sendRecipeToDB}>Send it</button>
    </>
  );
};

Editor.propTypes = {};

export default Editor;
