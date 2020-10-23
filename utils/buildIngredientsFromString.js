const UNITS = [
  "cup",
  "cups",
  "tsp",
  "tbsp",
  "kg",
  "g",
  "ml",
  "l",
  "bunch",
  "bunches",
  "pinch",
  "pinches",
];
const RE_AMOUNT = /^[\d\.\–\- /]+/i;

const extractAmount = (lineItem) => {
  const matches = lineItem.match(RE_AMOUNT);
  return matches ? matches[0].trim() : undefined;
};

const extractUnit = (lineItem) =>
  lineItem
    .replace(RE_AMOUNT, "")
    .split(" ")
    .find((segment) => UNITS.includes(segment));

const extractPreparation = (lineItem) => {
  const segments = lineItem.split(", ");

  if (segments.length > 1) {
    return segments.slice(-1)[0];
  }
  return undefined;
};

const extractItem = (lineItem) =>
  [lineItem]
    .map((lineItem) => lineItem.replace(extractAmount(lineItem), ""))
    .map((lineItem) => lineItem.replace(extractUnit(lineItem), ""))
    .map((lineItem) => lineItem.replace(extractPreparation(lineItem), ""))
    .map((lineItem) => lineItem.replace(",", ""))[0]
    .trim();

const buildIngredientFromString = (string) => ({
  unit: extractUnit(string),
  amount: extractAmount(string),
  preparation: extractPreparation(string),
  item: extractItem(string),
});

export default buildIngredientFromString;
