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
const RE_LITERAL_A = /^a /i;

const extractAmount = (lineItem) => {
  const literalAMatch = lineItem.match(RE_LITERAL_A);

  if (literalAMatch) {
    return "1";
  }

  const digitMatches = lineItem.match(RE_AMOUNT);
  return digitMatches ? digitMatches[0].trim() : undefined;
};

const extractUnit = (lineItem) =>
  lineItem
    .replace(RE_AMOUNT, "")
    .split(" ")
    .find((segment) => UNITS.includes(segment));

const extractPreparations = (lineItem) => {
  const segments = lineItem.split(", ");

  if (segments.length > 1) {
    return segments.slice(-1)[0];
  }
  return undefined;
};

const extractItem = (lineItem) =>
  [lineItem]
    .map((lineItem) => lineItem.replace(RE_LITERAL_A, ""))
    .map((lineItem) => lineItem.replace(extractAmount(lineItem), ""))
    .map((lineItem) => lineItem.replace(extractUnit(lineItem), ""))
    .map((lineItem) => lineItem.replace(extractPreparations(lineItem), ""))
    .map((lineItem) => lineItem.replace(",", ""))[0]
    .replace(/^\s*of/, "")
    .trim();

const buildIngredientFromString = (string) => ({
  unit: extractUnit(string),
  amount: extractAmount(string),
  preparations: extractPreparations(string),
  item: extractItem(string),
});

export default buildIngredientFromString;
