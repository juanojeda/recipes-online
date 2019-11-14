import { transparentize } from "polished";

const icing = "#edeff4";
const milk = "#d9d7d8";

const cacao = "#2e282a";
const black = cacao;

const shiraz = "#75334c";
const shiraz_dark = "#591b33";

const oregano = "#31776e";
const oregano_dark = "#22544d";

const jam = "#d8383b";
const pesto = "#688e26";
const lavender = "#5da9e9";
const turmeric = "#f99020";

const colours = {
  links: oregano,
  images: {
    vignette: `radial-gradient(ellipse at 50% 50%, ${transparentize(
      0.7,
      black
    )}, ${transparentize(0.0, black)})`
  },
  buttons: {
    primary: {
      bg: shiraz,
      text: milk
    },
    secondary: {
      bg: milk,
      text: oregano_dark,
      borderColor: oregano
    }
  },
  body: {
    bg: icing,
    text: cacao,
    text_light: milk
  }
};

export default colours;
