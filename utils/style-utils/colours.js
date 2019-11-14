import { transparentize } from "polished";

const icing = "#e8e6e5";
const milk = "#f4f3f2";

const cacao = "#42393c";

const shiraz = "#75334c";
const shiraz_dark = "#591b33";

const oregano = "#46968b";
const oregano_dark = "#31776e";

const jam = "#d8383b";
const pesto = "#688e26";
const lavender = "#5da9e9";
const turmeric = "#f99020";

const colours = {
  links: oregano,
  inputs: {
    bg: milk
  },
  buttons: {
    primary: {
      bg: shiraz,
      text: milk,
      border: `1px solid ${shiraz}`
    },
    secondary: {
      bg: milk,
      text: oregano_dark,
      border: `1px solid ${oregano}`
    }
  },
  body: {
    bg: icing,
    text: cacao,
    text_light: milk
  }
};

export default colours;