import buildIngredientFromString from "../buildIngredientsFromString";
import buildIngredientsFromString from "../buildIngredientsFromString";

describe("buildIngredientsFromString", () => {
  describe("GIVEN a typed out ingredient string", () => {
    describe("WHEN the string starts with a numeric fragment", () => {
      const testEach = it.each`
        ingredientString   | expectedAmount
        ${"1 carrot"}      | ${"1"}
        ${"750 carrot"}    | ${"750"}
        ${"150ml carrot"}  | ${"150"}
        ${"1/2 carrot"}    | ${"1/2"}
        ${"1 - 2 carrots"} | ${"1 - 2"}
        ${"0.5 carrots"}   | ${"0.5"}
      `;

      testEach(
        'GIVEN an ingredient "$ingredientString" THEN it returns amount $expectedAmount',
        ({ ingredientString, expectedAmount }) => {
          expect(buildIngredientFromString(ingredientString).amount).toEqual(
            expectedAmount
          );
        }
      );
    });

    describe("WHEN the ingredient does NOT start with a numeric fragment", () => {
      const testEach = it.each`
        ingredientString       | expectedAmount
        ${"five carrots"}      | ${undefined}
        ${"a pound of olives"} | ${undefined}
        ${"salt and pepper"}   | ${undefined}
      `;
      testEach(
        "GIVEN an ingredient $ingredientString THEN it returns amount $expectedAmount",
        ({ ingredientString, expectedAmount }) => {
          expect(buildIngredientFromString(ingredientString).amount).toBe(
            expectedAmount
          );
        }
      );
    });
  });
});
