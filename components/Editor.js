import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RecipeDisplay from "./RecipeDisplay";
import AddMethodStep from "./AddMethodStep";
import AddIngredient from "./AddIngredient";
import Input from "./Input";
import Button from "./Button";
import IngredientShape from "../shapes/IngredientShape";
import createRecipe from "../api/create-recipe";
import updateRecipe from "../api/update-recipe";
import BREAKPOINTS from "../utils/breakpoints";

export const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  ${BREAKPOINTS.MD} {
    display: flex;
    justify-content: space-between;
  }
`;

export const FlexWrapper = styled.div`
  ${BREAKPOINTS.MD} {
    flex: 0 0 calc(50% - 1rem);
  }
`;

const filterItem = (itemId, itemList) =>
  itemList.filter(({ id }) => id !== itemId);

export const removeFilteredItem = (itemId, setter, list) => (id) =>
  setter(filterItem(itemId, list));

export const Editor = ({
  exTitle,
  exIngredients,
  exMethods,
  recipeId,
  isEditMode,
}) => {
  const [title, setTitle] = useState(exTitle);
  const [ingredients, setIngredients] = useState(exIngredients);
  const [methods, setMethods] = useState(exMethods);

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

  const onSave = useCallback(async () => {
    console.log("saving");
    console.log(title, ingredients, methods, recipeId, isEditMode);
    const saveMethod = isEditMode ? updateRecipe : createRecipe;
    try {
      await saveMethod({ title, ingredients, methods, id: recipeId });
      clearRecipe();
    } catch {
      console.error(e);
    }
  }, [title, ingredients, methods, recipeId, isEditMode]);

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
        <Button variant="primary" fn={onSave}>
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

Editor.propTypes = {
  exTitle: PropTypes.string,
  exMethods: PropTypes.arrayOf(PropTypes.string),
  exIngredients: PropTypes.arrayOf(PropTypes.shape(IngredientShape)),
  recipeId: PropTypes.string,
  isEditMode: PropTypes.boolean,
};
export default Editor;
