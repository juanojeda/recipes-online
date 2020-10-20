import buildIngredientFromString from "../buildIngredientsFromString";

describe("buildIngredientFromString", () => {
  describe("GIVEN any string", () => {
    it("THEN it returns an object with the right shape", () => {
      const ingredientObject = buildIngredientFromString("any");
      expect(ingredientObject).toHaveProperty("amount");
      expect(ingredientObject).toHaveProperty("unit");
      expect(ingredientObject).toHaveProperty("item");
      expect(ingredientObject).toHaveProperty("preparation");
    });
  });

  describe("GIVEN an ingredient string", () => {
    describe("WHEN the string starts with a numeric fragment", () => {
      const testEach = it.concurrent.each`
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
        async ({ ingredientString, expectedAmount }) => {
          expect(buildIngredientFromString(ingredientString).amount).toEqual(
            expectedAmount
          );
        }
      );
    });

    describe("WHEN the ingredient does NOT start with a numeric fragment", () => {
      const testEach = it.concurrent.each`
        ingredientString           | expectedAmount
        ${"five carrots"}          | ${undefined}
        ${"a pound of olives"}     | ${undefined}
        ${"salt and pepper"}       | ${undefined}
        ${"salt and pepper 50/50"} | ${undefined}
      `;
      testEach(
        "GIVEN an ingredient $ingredientString THEN it returns amount $expectedAmount",
        async ({ ingredientString, expectedAmount }) => {
          expect(buildIngredientFromString(ingredientString).amount).toBe(
            expectedAmount
          );
        }
      );
    });

    describe("WHEN the ingredient includes a supported unit", () => {
      const testEach = it.concurrent.each`
        ingredientString        | expectedUnit
        ${"1 cup carrots"}      | ${"cup"}
        ${"cups carrots"}       | ${"cups"}
        ${"1 tsp carrot"}       | ${"tsp"}
        ${"1 tbsp carrots"}     | ${"tbsp"}
        ${"1kg carrot"}         | ${"kg"}
        ${"2g carrot"}          | ${"g"}
        ${"500ml carrots"}      | ${"ml"}
        ${"5 l carrots"}        | ${"l"}
        ${"1 bunch of carrots"} | ${"bunch"}
        ${"2 bunches carrot"}   | ${"bunches"}
        ${"1/2 pinch carrot"}   | ${"pinch"}
        ${"2 pinches carrot"}   | ${"pinches"}
      `;

      testEach(
        "GIVEN an ingredient $ingredientString, returns a unit of $expectedUnit",
        async ({ ingredientString, expectedUnit }) => {
          expect(buildIngredientFromString(ingredientString).unit).toEqual(
            expectedUnit
          );
        }
      );
    });

    describe("WHEN the ingredient does NOT include a supported unit", () => {
      const testEach = it.concurrent.each`
        ingredientString           | expectedUnit
        ${"a plethora of carrots"} | ${undefined}
        ${"300lb carrot"}          | ${undefined}
        ${"5 handfuls of carrot"}  | ${undefined}
      `;

      testEach(
        "GIVEN an ingredient $ingredientString, it returns a unit of $expectedUnit",
        async ({ ingredientString, expectedUnit }) => {
          expect(buildIngredientFromString(ingredientString).unit).toEqual(
            expectedUnit
          );
        }
      );
    });

    // item

    // preparation
  });
});
