import React, { useState } from "react";

import { getAPIEndpoint } from "../utils/api";

import RecipeDisplay from "../components/RecipeDisplay";
import AddMethodStep from "../components/AddMethodStep";
import AddIngredient from "../components/AddIngredient";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import BREAKPOINTS from "../utils/breakpoints";

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  ${BREAKPOINTS.MD} {
    display: flex;
    justify-content: space-between;
  }
`;

const FlexWrapper = styled.div`
  ${BREAKPOINTS.MD} {
    flex: 0 0 calc(50% - 1rem);
  }
`;

const filterItem = (itemId, itemList) =>
  itemList.filter(({ id }) => id !== itemId);

const removeFilteredItem = (itemId, setter, list) => (id) =>
  setter(filterItem(itemId, list));

const Editor = (props) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [methods, setMethods] = useState([]);

  const clearRecipe = () => {
    setTitle("");
    setIngredients([]);
    setMethods([]);
  };

  const addIngredientFn = (ingredient) =>
    setIngredients([
      ...ingredients,
      {
        id: `ing__${ingredients.length}`,
        order: ingredients.length,
        ...ingredient,
      },
    ]);

  const addMethodStepFn = (step) =>
    setMethods([
      ...methods,
      { id: `met__${methods.length}`, order: methods.length, step },
    ]);

  const sendRecipeToDB = async () => {
    const body = { recipe: { title, ingredients, methods } };

    console.log(body);
    try {
      const data = await fetch(`${getAPIEndpoint()}/addRecipe`, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(body),
      });
      const { title, ingredients, methods } = await data.json();

      clearRecipe();

      console.log("successfully added");
      console.log({ title, ingredients, methods });
    } catch (e) {
      console.error(e);
    }
  };

  const removeMethod = (id) => removeFilteredItem(id, setMethods, methods);
  const removeIngredient = (id) =>
    removeFilteredItem(id, setIngredients, ingredients);

  return (
    <Wrapper>
      <FlexWrapper>
        <h3>Name your recipe</h3>
        <Input setter={setTitle} placeholder="Eg. Rabbit stew" value={title} />
        <h3>Add an ingredient</h3>
        <AddIngredient setValueFn={addIngredientFn} />
        <h3>Add a step</h3>
        <AddMethodStep setValueFn={addMethodStepFn} />
        <Button variant="primary" fn={sendRecipeToDB}>
          Save
        </Button>
      </FlexWrapper>
      <FlexWrapper>
        <RecipeDisplay
          title={title}
          ingredients={ingredients}
          methods={methods}
          removeMethod={removeMethod}
          removeIngredient={removeIngredient}
        />
      </FlexWrapper>
    </Wrapper>
  );
};

Editor.propTypes = {};

export default Editor;
