import React, { useState, useEffect } from "react";

import { getAPIEndpoint } from "../utils/api";

import RecipeDisplay from "../components/RecipeDisplay";
import AddMethodStep from "../components/AddMethodStep";
import AddIngredient from "../components/AddIngredient";
import { Input } from "../components/Input";
import Button from "../components/Button";

const Editor = props => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [methods, setMethods] = useState([]);

  const clearRecipe = () => {
    setTitle("");
    setIngredients([]);
    setMethods([]);
  };

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

      clearRecipe();

      console.log("successfully added");
      console.log({ title, ingredients, methods });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h3>Name your recipe</h3>
      <Input setter={setTitle} placeholder="Eg. Rabbit stew" value={title} />
      <h3>Add an ingredient</h3>
      <AddIngredient setValueFn={addIngredientFn} />
      <h3>Add a step</h3>
      <AddMethodStep setValueFn={addMethodStepFn} />
      <RecipeDisplay
        title={title}
        ingredients={ingredients}
        methods={methods}
      />
      <Button variant="primary" fn={sendRecipeToDB}>
        Save
      </Button>
    </>
  );
};

Editor.propTypes = {};

export default Editor;
