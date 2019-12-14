import { transparentize } from "polished";

const icing = "#e8e6e5";
const milk = "#f4f3f2";
const white = "#fff";

const cacao = "#42393c";

const shiraz = "#891b45";
const shiraz_dark = "#591b33";

const oregano = "#46968b";
const oregano_dark = "#31776e";

const jam = "#d8383b";
const pesto = "#688e26";
const lavender = "#5da9e9";
const turmeric = "#f99020";

const colours = {
  __raw: {
    icing,
    milk,
    white,
    cacao,
    shiraz,
    shiraz_dark,
    oregano,
    oregano_dark,
    jam,
    pesto,
    lavender,
    turmeric
  },
  links: oregano,
  inputs: {
    bg: transparentize(0.75, icing),
    bgFocus: transparentize(0.25, milk),
    borderBottom: `1px solid ${transparentize(0.75, cacao)}`
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
  header: {
    bg: shiraz,
    text: milk
  },
  nav: {
    bg: shiraz_dark,
    text: milk
  },
  body: {
    bg: icing,
    text: cacao,
    text_light: milk
  }
};

export default colours;
