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

const extractAmount = (lineItem) => {
  const matches = lineItem.match(/^[\d\.\–\- /]+/i);
  return matches ? matches[0].trim() : undefined;
};
const extractUnit = (lineItem) =>
  lineItem.split(" ").find((segment) => UNITS.includes(segment));
const extractPreparation = (lineItem) => {
  const segments = lineItem.split(", ");

  if (segments.length > 1) {
    return segments.slice(-1)[0];
  }
  return "";
};
const extractItem = (lineItem) =>
  [lineItem]
    .map((lineItem) => lineItem.replace(extractAmount(lineItem), ""))
    .map((lineItem) => lineItem.replace(extractUnit(lineItem), ""))
    .map((lineItem) => lineItem.replace(extractPreparation(lineItem), ""))
    .map((lineItem) => lineItem.replace(",", ""))[0];

const buildIngredientFromString = (string) => ({
  unit: extractUnit(string),
  amount: extractAmount(string),
  preparation: extractPreparation(string),
  item: extractItem(string),
});

export default buildIngredientFromString;
